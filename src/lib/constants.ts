import { Palette, Code, Braces, GitBranch } from "lucide-react";

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const slideLeft = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideRight = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const colorMap = {
  green: "text-green-600",
  orange: "text-orange-600",
  purple: "text-purple-600",
  blue: "text-blue-600",
};

export const bgColorMap = {
  green: "bg-green-100",
  orange: "bg-orange-100",
  purple: "bg-purple-100",
  blue: "bg-blue-100",
};

export const bgColorMap2 = {
  green: "bg-green-50",
  orange: "bg-orange-50",
  purple: "bg-purple-50",
  blue: "bg-blue-50",
};

export const borderColorMap = {
  green: "border-green-200",
  orange: "border-orange-200",
  purple: "border-purple-200",
  blue: "border-blue-200",
};

export const skillsAndTechnologies = [
  {
    icon: Code,
    title: "Frontend",
    color: "green",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "tRPC",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    icon: Braces,
    title: "Backend",
    color: "orange",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "Bash",
      "PostgreSQL",
    ],
  },

  {
    icon: Palette,
    title: "Design Tools & UX Research",
    color: "purple",
    skills: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Systems",
    ],
  },
  {
    icon: GitBranch,
    title: "Other Tools & Technologies",
    color: "blue",
    skills: [
      "Git",
      "AWS S3",
      "MongoDB",
      "Prisma",
      "Docker",
      "REST APIs",
      "GraphQL",
      "Jest",
    ],
  },
];

export const projects = [
  {
    title: "Sentifi",
    description:
      "An event intelligence platform that analyzes company sentiment and tracks real-time stock price movements. Built with a serverless backend on AWS and a Next.js frontend, it collects data from Reddit, Yahoo Finance, and Finnhub, performs sentiment analysis using Llama 3.3, and alerts users when price thresholds are crossed.",
    images: [
      "/Sentifi.png",
      "/Sentifi2.png",
      "/Sentifi3.png",
      "/Sentifi4.png",
      "/Sentifi5.png",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "AWS S3",
      "MongoDB",
    ],
    githubUrl:
      "https://www.figma.com/design/vfJnLBfyRXKcrAr41lZN3J/Frontend?node-id=0-1&p=f&t=Xg8BVgIfGzOcwz0S-0",
    liveUrl: "https://sentifi.vercel.app/",
  },
  {
    title: "Planterior",
    description:
      "A responsive indoor plant shopping website with a built-in recommendation system. Users can browse, search, and filter plants by categories like price, popularity, and name. Includes detailed product pages and a seamless checkout experience, with efficient state management to track selected items.",
    images: [
      "/Planterior.png",
      "/Planterior2.png",
      "/Planterior3.png",
      "/Planterior4.png",
      "/Planterior5.png",
      "/Planterior6.png",
      "/Planterior7.png",
      "/Planterior8.png",
      "/Planterior9.png",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl:
      "https://www.figma.com/design/SUuqqbwXmjCK7WGqbdSnFe/Planterior?t=Xg8BVgIfGzOcwz0S-0",
    liveUrl: "https://planterior.vercel.app/",
  },
  {
    title: "LeetCraft",
    description:
      "A gamified LeetCode companion app that motivates users through XP, levels, character unlocks, and leaderboards based on problem-solving activity. Integrates with LeetCode via GraphQL to sync user progress in real time.",
    images: [
      "/LeetCraft.png",
      "/LeetCraft2.png",
      "/LeetCraft3.png",
      "/LeetCraft4.png",
      "/LeetCraft5.png",
      "/LeetCraft6.png",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL"],
    githubUrl:
      "https://www.figma.com/design/yEUnmCXh9Nv5b2Z1D9Dh2c/Training-Program-25T1---Group-Grass?node-id=0-1&p=f&t=OmtAgwClqG2UVQYL-0",
    liveUrl: "https://www.leetcraft.dev/signin",
  },
  {
    title: "MacOS Inspired Portfolio",
    description:
      "A personal portfolio website inspired by the MacOS interface, complete with a desktop-style layout, dock navigation, and folder-based project organization. Showcases skills, languages, and projects in an interactive environment that mimics the Mac user experience. Designed for a unique, playful, yet functional presentation of my development work.",
    images: [
      "/MacOS.png",
      "/MacOS2.png",
      "/MacOS3.png",
      "/MacOS4.png",
      "/MacOS5.png",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/madhueyy/portfolio-2",
    liveUrl: "https://madhus-portfolio-2.vercel.app/",
  },

  {
    title: "Airtable Clone",
    description:
      "A full-featured Airtable-inspired application with Google authentication, allowing users to create bases, manage tables, and build customizable views. Includes advanced table functionality like filtering, sorting, searching, and hiding fields using TanStack Table. Supports infinite scroll and handles over 100k rows with efficient pagination.",
    images: [
      "/Airtable.png",
      "/Airtable2.png",
      "/Airtable3.png",
      "/Airtable4.png",
      "/Airtable5.png",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "tRPC",
      "TanStack Table",

      "Prisma",
    ],
    githubUrl: "#",
    liveUrl: "https://airtable-zeta.vercel.app/home",
  },

  {
    title: "SmartScribe",
    description:
      "An AI-powered study companion that transforms lecture videos and transcripts into interactive, multi-modal learning materials. SmartScribe automatically generates structured topic summaries, flashcards for active recall, and visual knowledge graphs to map concept relationships. Includes text-to-speech for auditory learning, PDF export for offline access, and supports diverse learning styles through visual, textual, and audio content.",
    images: [
      "/SmartScribe.png",
      "/SmartScribe2.png",
      "/SmartScribe3.png",
      "/SmartScribe4.png",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "Cosmograph",
      "Express",
      "PostgreSQL",
      "ChromaDB",
    ],
    githubUrl: "https://github.com/dzl-i/hackabyte",
    liveUrl: "https://devpost.com/software/studyscribe-eo73sa",
  },

  {
    title: "Fruit Focus",
    description:
      "An interactive web app that helps users discover seasonal fruits available across different regions of Australia. Features a powerful search system that filters fruits by name, nutritional content, or seasonality. Includes comprehensive fruit profiles with detailed macro and micronutrient data to support healthy and informed choices.",
    images: [
      "/FruitFocus.png",
      "/FruitFocus2.png",
      "/FruitFocus3.png",
      "/FruitFocus4.png",
      "/FruitFocus5.png",
      "/FruitFocus6.png",
    ],
    tags: ["React", "TypeScript", "Mantine UI"],
    githubUrl:
      "https://www.figma.com/design/jFadqUyKAE4zOSHPjEMbO5/DEVT2-Bard?node-id=109-105&p=f&t=dDGV7Vd0BXiu6xmo-0",
    liveUrl: "https://fruit-focus-frontend.vercel.app/",
  },
];
