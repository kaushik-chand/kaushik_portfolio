export const tools = [
  "Figma",
  "Adobe XD",
  "Illustrator",
  "Photoshop",
  "After Effects",
  "Framer",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Prototyping",
  "User Research",
  "Wireframing",
  "Motion Design",
  "Brand Identity",
] as const;

export type Capability = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    id: "product-design",
    title: "Product Design",
    description: "Interfaces that balance clarity, hierarchy, and brand — from flows to polished UI systems.",
    items: ["UI Design", "Design Systems", "Prototyping", "Wireframing"],
  },
  {
    id: "ux-research",
    title: "UX Research",
    description: "Evidence-backed decisions through discovery, validation, and iterative testing.",
    items: ["User Research", "Market Research", "Journey Mapping", "Usability"],
  },
  {
    id: "front-end",
    title: "Front-End Development",
    description: "Production interfaces in React and Next.js with faithful implementation of design intent.",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "brand-visual",
    title: "Brand & Visual Design",
    description: "Visual systems and motion that give products a distinct, coherent identity.",
    items: ["Brand Identity", "Illustration", "Motion Design", "After Effects"],
  },
  {
    id: "ai-workflow",
    title: "AI-Augmented Workflow",
    description:
      "I use AI to explore more directions early, pressure-test research, and move faster on craft — while human judgment, empathy, and product decisions stay at the center.",
    items: ["Ideation", "Research Support", "Productivity", "Human Judgment"],
  },
];
