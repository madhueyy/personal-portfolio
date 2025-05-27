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
      "A responsive dashboard for an e-commerce platform with data visualization, user management, and inventory tracking features.",
    images: [
      "/Sentifi.png",
      "/Sentifi2.png",
      "/Sentifi3.png",
      "/Sentifi4.png",
      "/Sentifi5.png",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Planterior",
    description:
      "A responsive dashboard for an e-commerce platform with data visualization, user management, and inventory tracking features.",
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
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "LeetCraft",
    description:
      "A responsive dashboard for an e-commerce platform with data visualization, user management, and inventory tracking features.",
    images: [
      "/LeetCraft.png",
      "/LeetCraft2.png",
      "/LeetCraft3.png",
      "/LeetCraft4.png",
      "/LeetCraft5.png",
      "/LeetCraft6.png",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "MacOS Inspired Portfolio",
    description:
      "A responsive dashboard for an e-commerce platform with data visualization, user management, and inventory tracking features.",
    images: [
      "/MacOS.png",
      "/MacOS2.png",
      "/MacOS3.png",
      "/MacOS4.png",
      "/MacOS5.png",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },

  {
    title: "Airtable Clone",
    description:
      "A responsive dashboard for an e-commerce platform with data visualization, user management, and inventory tracking features.",
    images: [
      "/Airtable.png",
      "/Airtable2.png",
      "/Airtable3.png",
      "/Airtable4.png",
      "/Airtable5.png",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },

  {
    title: "SmartScribe",
    description:
      "A responsive dashboard for an e-commerce platform with data visualization, user management, and inventory tracking features.",
    images: [
      "/SmartScribe.png",
      "/SmartScribe2.png",
      "/SmartScribe3.png",
      "/SmartScribe4.png",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },

  {
    title: "Fruit Focus",
    description:
      "A responsive dashboard for an e-commerce platform with data visualization, user management, and inventory tracking features.",
    images: [
      "/FruitFocus.png",
      "/FruitFocus2.png",
      "/FruitFocus3.png",
      "/FruitFocus4.png",
      "/FruitFocus5.png",
      "/FruitFocus6.png",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
