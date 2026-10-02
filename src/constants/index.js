import {
  mobile,
  backend,
  creator,
  web,
  chatgpt,
  // ravi,
  reactjs,
  nodejs,
  honeyuncle,
  tech4addiction,
  seo,
  Zerociti,
  HoneyUncle,
  threejs,
  express,
  vue,
  github,
  colab,
  create,
  wordcount,
  kanban,
  shoestore,
  pazy_logo,
  whoami,
  sargam,
  // personal,
  // live
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full Stack Developer", icon: web },
  { title: "React Developer", icon: mobile },
  { title: "Nuxt Developer", icon: backend },
  { title: "Next.js Developer", icon: creator },
];

/* Journey: how I work — narrative steps, not tech list */
const journeySteps = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the problem and who it's for.",
    icon: web,
  },
  {
    step: "02",
    title: "Design",
    description: "Shape architecture, flows, and interfaces.",
    icon: mobile,
  },
  {
    step: "03",
    title: "Develop",
    description: "Build frontend and backend with the right tools.",
    icon: backend,
  },
  {
    step: "04",
    title: "Deploy",
    description: "Ship, learn, and iterate.",
    icon: creator,
  },
];

const technologies = [
  {
    title: "React",
    icon: reactjs,
    link: "https://reactjs.org/",
  },
  {
    title: "Next.js",
    icon: express,
    link: "https://nextjs.org/",
  },
  {
    title: "Node",
    icon: nodejs,
    link: "https://nodejs.org/en",
  },
  {
    title: "Nuxt",
    icon: vue,
    link: "https://nuxt.com/",
  },
  {
    title: "Three.js",
    icon: threejs,
    link: "https://threejs.org/",
  },
  {
    title: "PostgreSQL",
    link: "https://www.postgresql.org/",
  },
  {
    title: "Redis",
    link: "https://redis.io/",
  },
  {
    title: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Pazy",
    icon: pazy_logo,
    iconBg: "#DDEEFF",
    date: "May 2024 — Present",
    type: "Full-time",
    stack: ["Nuxt", "Node", "Postgres", "Redis"],
    points: [
      "Built the product end to end with Nuxt.js, Node.js, PostgreSQL, and Redis — frontend and backend.",
      "Worked with design and product on architecture, performance, and reliability as usage grew.",
      "Took part in technical and product decisions across the lifecycle.",
      "Helped the platform scale with the company — over 20x valuation growth since joining.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Pazy",
    icon: pazy_logo,
    iconBg: "#E6DEDD",
    date: "Dec 2023 — May 2024",
    type: "Internship",
    stack: ["Nuxt", "Node", "Postgres", "Redis"],
    points: [
      "Developed and maintained a fintech product with a small team.",
      "Built the frontend in Nuxt.js, with Node.js, PostgreSQL, and Redis on the backend.",
      "Kept the product working across browsers and on mobile.",
      "Took part in code reviews and gave feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "NGTS",
    icon: tech4addiction,
    iconBg: "#FFFF",
    date: "Sep 2023 — Dec 2023",
    type: "Internship",
    stack: ["React", "Node"],
    points: [
      "Built and maintained React apps, including the APIs they used.",
      "Worked on cross-browser compatibility and mobile responsiveness.",
      "Participated in code reviews and gave feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Colab",
    icon: colab,
    iconBg: "#E6DEDD",
    date: "May 2023 — July 2023",
    stack: ["Next.js", "JavaScript"],
    points: [
      "Built Cre8Team with an international team — companies post work, people apply.",
      "Owned the UI and the application flows in Next.js.",
      "Shipped the product to production. The app is still live.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Kalash is champ, straight forward to his goals and whatever he choose, never let it leave without completing. ",
    name: "Ravi Pathak",
    designation: "ASE Intern",
    company: "Techion",
    // image: ravi,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];
const projects = [
  {
    name: "Sargam",
    description:
      "A 30-day guitar theory course: tuner, movable scale boxes, Hindi film songs as ear tests, and a mic coach. Built with React, TypeScript, and acoustic guitar samples.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: sargam,
    imageFit: "object-top",
    project_link: "https://sargam-theta.vercel.app",
    source_code_link: "https://github.com/kalashjain1010/sargam",
    minImg: github,
  },
  {
    name: "Cre8Team",
    description:
      "A hiring platform where companies post work and people apply. Built with an international team using Next.js and Firebase.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: create,
    project_link: "https://cre8-iota.vercel.app/",
    source_code_link: "https://github.com/kalashjain1010/Colab",
    minImg: github,
  },
  {
    name: "Shoe-Store",
    description:
      "An e-commerce shoe store with catalog, orders, and an admin dashboard. Next.js and Strapi.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Strapi",
        color: "pink-text-gradient",
      },
    ],
    image: shoestore,
    project_link: "https://shoe-store-tan.vercel.app/",
    source_code_link: "https://github.com/kalashjain1010/Shoe-store",
    minImg: github,
  },

  {
    name: "Speed Types",
    description:
      "A typing speed game with a timer and accuracy tracking. Built with React and Vite.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Zerociti,
    project_link: "https://speed-type-liart.vercel.app/",
    source_code_link: "https://github.com/kalashjain1010/Speed-type",
    minImg: github,
  },
  {
    name: "Reddit Clone",
    description:
      "A Reddit clone with posts, votes, comments, and communities. Next.js, Chakra UI, and Firebase.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    project_link: "https://github.com/kalashjain1010/Redit",
    source_code_link: "https://github.com/kalashjain1010/Redit",
    minImg: github,
  },

  {
    name: "Word Counter",
    description:
      "A React utility that counts words and characters, with case conversion.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: wordcount,
    project_link: "https://regal-profiterole-d32bda.netlify.app/",
    source_code_link: "https://github.com/kalashjain1010/WordCounterUsingReact",
    minImg: github,
  },
  {
    name: "Kanban board",
    description:
      "A Kanban board to add, move, and delete tasks. Next.js and Tailwind.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: kanban,
    project_link: "https://kanban-board-neon-ten.vercel.app/",
    source_code_link: "https://github.com/kalashjain1010/Kanban-board",
    minImg: github,
  },
  {
    name: "Who Am I?",
    description:
      "A live comedy quiz game — 50 rounds of cryptic clues about famous personalities. Built for game nights with friends. Features clue-by-clue reveals, Wikipedia photo fetch, confetti, and explanation of every hint.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Canvas API",
        color: "pink-text-gradient",
      },
    ],
    image: whoami,
    project_link: "https://who-am-i-one-eta.vercel.app/",
    source_code_link: "https://github.com/kalashjain1010/who_am_i",
    minImg: github,
  },
];

export { services, journeySteps, technologies, experiences, testimonials, projects };
