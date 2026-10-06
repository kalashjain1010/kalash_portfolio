/**
 * Portfolio contact endpoint.
 * Delivers messages as GitHub issues (no third-party email OAuth / activation).
 * Env: CONTACT_GITHUB_TOKEN (repo scope), optional CONTACT_REPO (owner/repo)
 */

const REPO = process.env.CONTACT_REPO || 'kalashjain1010/kalash_portfolio'
const TOKEN = process.env.CONTACT_GITHUB_TOKEN || process.env.GITHUB_TOKEN

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(body))
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => {
      const raw = Buffer.concat(chunks).toString('utf8')
      if (!raw) return resolve({})
      try {
        resolve(JSON.parse(raw))
      } catch {
        reject(new Error('Invalid JSON'))
      }
    })
    req.on('error', reject)
  })
}

function sanitize(s, max = 2000) {
  return String(s || '')
    .replace(/\0/g, '')
    .trim()
    .slice(0, max)
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.end()
    return
  }

  if (req.method !== 'POST') {
    return json(res, 405, { ok: false, error: 'Method not allowed' })
  }

  if (!TOKEN) {
    return json(res, 500, { ok: false, error: 'Contact delivery is not configured' })
  }

  let body
  try {
    body = typeof req.body === 'object' && req.body && Object.keys(req.body).length
      ? req.body
      : await readBody(req)
  } catch {
    return json(res, 400, { ok: false, error: 'Invalid request body' })
  }

  // honeypot
  if (sanitize(body.website, 200)) {
    return json(res, 200, { ok: true })
  }

  const name = sanitize(body.name, 120)
  const email = sanitize(body.email, 200)
  const message = sanitize(body.message, 5000)

  if (!name || !email || !message) {
    return json(res, 400, { ok: false, error: 'Name, email, and message are required' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(res, 400, { ok: false, error: 'Invalid email' })
  }

  const title = `[contact] ${name}`.slice(0, 80)
  const issueBody = [
    `### Portfolio contact`,
    ``,
    `| | |`,
    `| --- | --- |`,
    `| **Name** | ${name.replace(/\|/g, '/')} |`,
    `| **Email** | [${email}](mailto:${email}) |`,
    `| **When** | ${new Date().toISOString()} |`,
    ``,
    `### Message`,
    ``,
    message,
    ``,
    `---`,
    `_Submitted via kalash.vercel.app contact form_`,
  ].join('\n')

  try {
    const ghRes = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'kalash-portfolio-contact',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({
        title,
        body: issueBody,
        labels: ['contact'],
      }),
    })

    const data = await ghRes.json().catch(() => ({}))
    if (!ghRes.ok) {
      console.error('GitHub issue create failed', ghRes.status, data)
      return json(res, 502, {
        ok: false,
        error: 'Could not deliver message. Please email kalashjain54@gmail.com',
      })
    }

    return json(res, 200, {
      ok: true,
      id: data.number,
    })
  } catch (err) {
    console.error(err)
    return json(res, 502, {
      ok: false,
      error: 'Could not deliver message. Please email kalashjain54@gmail.com',
    })
  }
}
