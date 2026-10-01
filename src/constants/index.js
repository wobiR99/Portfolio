import { eventTrak, share_prompts } from "../assets";

export const profile = {
  name: "Ifeanyi Obi",
  role: "Frontend Engineer",
  email: "obiifeanyi.fi@gmail.com",
  headline: "I build clean, fast interfaces for the web.",
  summary:
    "React and TypeScript developer based in Lagos, Nigeria, working remotely. I turn product ideas into responsive web apps that are simple to use and easy to maintain.",
  bio: [
    "I'm a frontend engineer working mostly in React, TypeScript and Tailwind CSS. I build responsive interfaces that load quickly, behave the same across browsers and stay easy to change as a product grows.",
    "I work closely with designers, product managers and other developers, take an active part in code reviews, and pick up new tools quickly. I enjoy turning loose ideas into software people find simple to use.",
  ],
};

export const socials = [
  { name: "GitHub", href: "https://github.com/wobiR99", icon: "github" },
  { name: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const navLinks = [
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];

export const projects = [
  {
    name: "EventTrak",
    description:
      "Event management app for finding events, buying tickets and managing reservations.",
    tags: ["React", "Redux", "Tailwind CSS"],
    image: eventTrak,
    liveUrl: "https://event-trak-frontendd.vercel.app/",
    repoUrl: "https://github.com/wobiR99/EventTrak",
  },
  {
    name: "Share Prompts",
    description:
      "A place to discover, create and share AI prompts, with search by tag or username.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    image: share_prompts,
    liveUrl: "https://share-prompts-blond.vercel.app/",
    repoUrl: "https://github.com/wobiR99/Share-Prompts",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Buildhubb",
    date: "May 2023 – Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Utilizing Git version control and agile development methodologies to collaborate with cross-functional teams and deliver projects on time and within budget.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Three.js"],
  },
  { group: "Tooling", items: ["Node.js", "Git"] },
];
