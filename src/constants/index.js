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
  zerociti,
  Zerociti,
  HoneyUncle,
  threejs,
  express,
  vue,
  github,
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
    title: "Java developer",
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
  },
  {
    title: "NextJs",
    icon: express,
  },
    {
      title: "Node",
      icon: nodejs,
    },

  {
    title: "Three.JS",
    icon: threejs,
  },
  {
    title: "Firebase",
    icon: vue,
  },
];


const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "NGTS",
    icon: tech4addiction,
    iconBg: "#FFFF",
    date: "April 2023 - NOW",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Reddit Clone",
    company_name: "Reddit",
    icon: seo,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Feb 2023",
  points: [
    "Developing and maintaining web applications using Next.js , Chakra-ui & redux.",
    "creating and managing the data at backend using FireBase.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    
  ],
  },
  {
    title: "Referal India",
  company_name: "Refferal India",
    icon: zerociti,
    iconBg: "#E6DEDD",
    date: "April 2022 - Oct 2022",
    date: "Jan 2022 - Jan 2023",
  points: [
    "Developing and maintaining web applications using React.js and other related technologies.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Implementing responsive design and ensuring cross-browser compatibility.",
    "Participating in code reviews and providing constructive feedback to other developers.",
  ],
  },
  {
    title: "Full stack App",
    company_name: "Crypto Sensex",
    icon: honeyuncle,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    source_code_link: "https://github.com/kalashjain1010/Redit",
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
      name: "ThreeJs",
      color: "green-text-gradient",
    },
    {
      name: "Tailwind css",
      color: "pink-text-gradient",
    },
    ],
    image: Zerociti,
    source_code_link: "https://github.com/kalashjain1010/Speed-type",
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
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: HoneyUncle,
    source_code_link: "https://github.com/kalashjain1010/WordCounterUsingReact",
    minImg: github,
  },
  // {
  //   name: "Word Counter",
  // description:
  //   "This app takes user input in the form of a string and returns the total word count and total charcters.It also has additional features like covert to upperCase and LowerCase",
  // tags: [
  //   {
  //     name: "Reactjs",
  //     color: "blue-text-gradient",
  //   },
  //   {
  //     name: "TailwindCss",
  //     color: "green-text-gradient",
  //   },
  //   {
  //     name: "js",
  //     color: "pink-text-gradient",
  //   },
  // ],
  //   image: HoneyUncle,
  //   ssource_code_link: "https://github.com/kalashjain1010/WordCounterUsingReact",
  //   minImg: github,
  // },

];

export { services, technologies, experiences, testimonials, projects };
