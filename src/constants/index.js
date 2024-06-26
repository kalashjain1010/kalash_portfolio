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
  // personal,
  // live
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "NuxtJs developer",
    icon: backend,
  },
  {
    title: "NextJs Developer",
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
    title: "NextJs",
    icon: express,
    link: "https://nextjs.org/",
  },
  {
    title: "Node",
    icon: nodejs,
    link: "https://nodejs.org/en",
  },
  
  {
    title: "Three.JS",
    icon: threejs,
    link: "https://threejs.org/",
  },
  {
    title: "NuxtJs",
    icon: vue,
    link: "https://nuxtjs.org/",
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Continuo",
    icon: honeyuncle,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining Fintech Product ",
      "Collaborated with a team to develop a comprehensive fintech product aimed at consolidating various financial services into a unified platform. Utilized Nuxt.js for front-end development, while employing PostgreSQL, Redis, and Node.js for the backend infrastructure",
      "Maintained platform standards, ensuring cross-browser compatibility and mobile responsiveness.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "NGTS",
    icon: tech4addiction,
    iconBg: "#FFFF",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Colab",
    icon: colab,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    // date: "Jan 2022 - Jan 2023",
    points: [
      "Developed a web application in an international team, focusing on front-end and UI/UX design.",
      "Created the application using HTML, CSS, JavaScript, and frameworks like NextJs with expertise in UI/UX design principles, responsive web design,and version control systems while showcasing effective teamwork and meeting project deadlines.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Delivered an app enabling users to post projects and hire professionals.",
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
    name: "Cre8Team",
    description:
      "platform connects companies with job seekers, offering job postings and opportunities for relevant job matches with interactive user interface.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
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
      "Designed and launched a dynamic shoe store app with efficient admin tools, top-notch performance, and a wide product selection, with outstanding user experience",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Stapi",
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
      "Developed a web-based typing speed application using React. Created an interactive user interface with features such as time tracking, accuracy calculation..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JSON",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
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
      "The main features of a Reddit clone include user-generated content, voting on content, commenting, and subreddits (topic-specific communities).",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Chakra-ui",
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
      "This app takes user input in the form of a string and returns the total word count and total charcters.It also has additional features like covert to upperCase and LowerCase",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
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
      "Created a basic Kanban board using Next.js with task management. Allows adding and removing tasks in To Do column. Expand for more features and functionality.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: kanban,
    project_link: "https://kanban-board-neon-ten.vercel.app/",
    source_code_link: "https://github.com/kalashjain1010/Kanban-board",
    minImg: github,
  },
];

export { services, technologies, experiences, testimonials, projects };
