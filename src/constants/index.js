import { eventTrak, kainos, share_prompts } from "../assets";

export const profile = {
  name: "Ifeanyi Obi",
  role: "Frontend Engineer",
  email: "obiifeanyi.fi@gmail.com",
  headline: "I build clean, fast interfaces for the web.",
  summary:
    "Frontend engineer with 3+ years building production web apps in React, Next.js and TypeScript. Based in Lagos, Nigeria, and open to relocation.",
  bio: [
    "I'm a frontend engineer who cares about both the product and the pixels. I turn Figma designs into polished, accessible interfaces, build the component libraries and design systems that keep teams fast, and tune pages until they load quickly.",
    "At BuildLabb I grew from frontend developer to team lead, guiding four engineers through planning, delegation and code review. Today I build and review software-engineering benchmark tasks for AI training at AfterQuery, and help Nigerian brands fix and speed up their Shopify storefronts.",
    "I hold a first-class B.Eng in Electrical and Electronics Engineering from Covenant University.",
  ],
};

export const socials = [
  { name: "GitHub", href: "https://github.com/wobiR99", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ifeanyi-obi-a216a823b",
    icon: "linkedin",
  },
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
    name: "KAINOS",
    description:
      "Online store for a Lagos clothing label, with a 3D garment rail and an AI shopping assistant that answers questions about sizing, stock and delivery.",
    highlights: [
      "Custom Shopify theme with no framework, and a hand-written WebGL rail that hangs the collection in 3D, built from the store's own product photos.",
      "Node.js and TypeScript AI gateway behind the assistant: a router agent hands each question to a support or sales agent, grounded in the brand's policies and live Shopify stock.",
      "Guardrails that catch promises the brand can't keep and hand the chat to a person, plus an evaluation set covering the whole catalogue.",
      "Cut the cost per message by over 80%, from $0.032 to $0.006, by removing duplicated context and turning on prompt caching.",
    ],
    tags: ["Shopify", "WebGL", "TypeScript", "Node.js", "Claude API"],
    image: kainos,
    liveUrl: "https://www.kainostrends.xyz",
    liveLabel: "www.kainostrends.xyz",
    featured: true,
  },
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
    title: "Software Engineer, AI Benchmark Tasks",
    company_name: "AfterQuery",
    date: "2025 – Present",
    meta: "Contract · Remote",
    points: [
      "Build complete React and TypeScript reference apps, inject realistic defects, and write the Playwright end-to-end suites that grade AI coding agents against them.",
      "Promoted to reviewer: audit other engineers' submissions against a 22-point quality checklist covering test validity, determinism and spec clarity.",
      "Write technical specs and documentation precise enough for an autonomous agent to implement.",
    ],
  },
  {
    title: "E-commerce Engineer",
    company_name: "Freelance",
    date: "2025 – Present",
    meta: "Lagos",
    points: [
      "Audit and fix Shopify storefronts for Nigerian D2C brands, covering theme code, page speed, product data and conversion issues.",
      "Own each engagement end to end: scoping, fixed-price quoting, delivery and client reporting.",
    ],
  },
  {
    title: "Frontend Developer → Frontend Team Lead",
    company_name: "BuildLabb",
    date: "2023 – 2025",
    points: [
      "Led a team of 4 frontend engineers building component-driven web apps in React, Next.js and Tailwind CSS; ran sprint planning, task delegation and code reviews.",
      "Built a shared UI component library and design system that cut feature delivery time by about 30% and made UI consistent across products.",
      "Translated Figma designs into pixel-accurate, responsive interfaces in close iteration with designers.",
      "Drove performance work (code splitting, image optimisation, Core Web Vitals) that contributed to a 15% increase in site traffic.",
    ],
  },
  {
    title: "Technical Support Intern",
    company_name: "Castlenet Consulting",
    date: "Apr – Sep 2023",
    points: [
      "Diagnosed and resolved software bugs and UI issues through cross-browser testing and troubleshooting.",
    ],
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Python", "C++"],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Vite",
      "React Native / Expo",
    ],
  },
  {
    group: "Backend and data",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Supabase"],
  },
  {
    group: "Testing and tooling",
    items: ["Playwright", "Lighthouse", "GitHub Actions", "Docker", "Git"],
  },
  {
    group: "Design and platforms",
    items: ["Figma", "Design systems", "Shopify", "Webflow"],
  },
];
