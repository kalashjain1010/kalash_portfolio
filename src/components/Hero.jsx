import { useEffect, useRef, useState } from "react";

const DOT_DENSITY = 0.00042;
const MIN_NODES = 280;
const MAX_NODES = 620;
const LINE_RADIUS = 130;
const MAX_LEGS = 7;
const LERP = 0.075;

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

function legPath(from, to, node, t, vel) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy) || 1;
  const ux = dx / dist;
  const uy = dy / dist;
  const px = -uy * node.side;
  const py = ux * node.side;

  const walk = Math.sin(t * node.freq + node.phase);
  const walk2 = Math.sin(t * node.freq * 1.15 + node.phase + 1.2);
  const speed = Math.hypot(vel.x, vel.y);
  const trail = Math.min(1, speed * 10);

  const knee = node.amp * dist * (0.5 + 0.5 * walk);
  const ankle = node.amp * dist * (0.28 + 0.45 * walk2);

  const k1x = from.x + ux * dist * 0.32 + px * knee - vel.x * 8 * trail;
  const k1y = from.y + uy * dist * 0.32 + py * knee - vel.y * 8 * trail;
  const k2x = from.x + ux * dist * 0.68 + px * ankle - vel.x * 4 * trail;
  const k2y = from.y + uy * dist * 0.68 + py * ankle - vel.y * 4 * trail;

  return `M ${from.x} ${from.y} C ${k1x} ${k1y} ${k2x} ${k2y} ${to.x} ${to.y}`;
}

const Astro = ({ position, nodes, bounds, t, vel }) => {
  const safePos = !bounds
    ? position
    : {
        x: clamp(position.x, 0, bounds.w),
        y: clamp(position.y, 0, bounds.h),
      };

  const nearby = [];
  for (const node of nodes) {
    const dx = node.x - safePos.x;
    const dy = node.y - safePos.y;
    const dist = Math.hypot(dx, dy);
    if (dist <= LINE_RADIUS && dist > 2) nearby.push({ node, dist });
  }
  nearby.sort((a, b) => a.dist - b.dist);
  if (nearby.length > MAX_LEGS) nearby.length = MAX_LEGS;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      preserveAspectRatio="xMidYMid slice"
    >
      {nodes.map((node) => (
        <circle
          key={`n-${node.id}`}
          cx={bounds ? clamp(node.x, 0, bounds.w) : node.x}
          cy={bounds ? clamp(node.y, 0, bounds.h) : node.y}
          r={node.r}
          fill={`rgba(200, 255, 74, ${node.o})`}
        />
      ))}
      {nearby.map(({ node, dist }) => {
        const walk = 0.55 + 0.45 * Math.sin(t * node.freq + node.phase);
        return (
          <path
            key={`c-${node.id}`}
            d={legPath(
              safePos,
              {
                x: clamp(node.x, 0, bounds?.w ?? node.x),
                y: clamp(node.y, 0, bounds?.h ?? node.y),
              },
              node,
              t,
              vel,
            )}
            fill="none"
            stroke={`rgba(200, 255, 74, ${0.06 + 0.28 * (1 - dist / LINE_RADIUS) * walk})`}
            strokeWidth={1 + 0.4 * walk}
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={safePos.x} cy={safePos.y} r="4.5" fill="#c8ff4a" />
      <circle
        cx={safePos.x}
        cy={safePos.y}
        r="14"
        fill="none"
        stroke="rgba(200,255,74,0.25)"
        strokeWidth="1"
      />
    </svg>
  );
};

/** Full-bleed interactive field — the site’s signature visual. */
const Hero = () => {
  const [nodes, setNodes] = useState([]);
  const [astro, setAstro] = useState({ x: 0, y: 0, vx: 0, vy: 0, t: 0 });
  const [bounds, setBounds] = useState(null);
  const [enabled, setEnabled] = useState(true);
  const cursorRef = useRef({ x: 0, y: 0 });
  const astroRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) {
      setEnabled(false);
      return;
    }

    const scatter = (w, h) => {
      const count = clamp(Math.round(w * h * DOT_DENSITY), MIN_NODES, MAX_NODES);
      setBounds({ w, h });
      setNodes(
        Array.from({ length: count }, (_, id) => ({
          id,
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() < 0.18 ? 1.6 : 1.05,
          o: 0.18 + Math.random() * 0.32,
          phase: Math.random() * Math.PI * 2,
          freq: 1.4 + Math.random() * 2.4,
          side: Math.random() < 0.5 ? -1 : 1,
          amp: 0.18 + Math.random() * 0.3,
        })),
      );
      cursorRef.current = { x: w * 0.72, y: h * 0.38 };
      astroRef.current = { x: w * 0.72, y: h * 0.38 };
    };

    scatter(window.innerWidth, window.innerHeight);
    const onResize = () => scatter(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    let raf;
    const update = () => {
      const cursor = cursorRef.current;
      const prev = astroRef.current;
      const x = prev.x + (cursor.x - prev.x) * LERP;
      const y = prev.y + (cursor.y - prev.y) * LERP;
      const vx = x - prev.x;
      const vy = y - prev.y;
      astroRef.current = { x, y };
      setAstro({ x, y, vx, vy, t: performance.now() / 1000 });
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden w-full h-full" aria-hidden>
      <div className="absolute inset-0 bg-bg" />
      {enabled ? (
        <Astro
          position={astro}
          nodes={nodes}
          bounds={bounds}
          t={astro.t}
          vel={{ x: astro.vx, y: astro.vy }}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(200,255,74,0.08),transparent_55%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg pointer-events-none" />
    </div>
  );
};

export default Hero;
