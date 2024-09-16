import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  eventTrak,
  jobit,
  tripguide,
  threejs,
  buildHubb_logo,
  share_prompts,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Engineer",
    icon: creator,
  },
  {
    title: "Web developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

//Frontend DeveloperFrontend Developer
//BuildLabb · ContractBuildLabb · Contract
//May 2023 - Present · 7 mosMay 2023 - Present · 7 mos
//Lagos State, Nigeria · RemoteLagos State, Nigeria · Remote
//- Developed responsive and user-friendly websites using HTML, CSS, and JavaScript, resulting in a 15% increase in website traffic and a 20% decrease in bounce rate.
//- Collaborated with UX designers to implement intuitive and visually appealing interfaces, resulting in a 25% increase in user satisfaction and engagement.
//- Utilized Git version control and agile development methodologies to collaborate with cross-functional teams and deliver projects on time and within budget.

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Buildhubb",
    icon: buildHubb_logo,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Utilizing Git version control and agile development methodologies to collaborate with cross-functional teams and deliver projects on time and within budget.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
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
    name: "EventTrak",
    description:
      " Web application that allows users to manage their event-related needs. Involves finding events, purchasing tickets, and managing reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: eventTrak,
    source_code_link: "https://event-trak-frontendd.vercel.app/",
  },
  {
    name: "Share Prompts",
    description:
      " Web application that allows users to share, discover and make use of creative prompts .",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: share_prompts,
    source_code_link: "https://share-prompts-blond.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
