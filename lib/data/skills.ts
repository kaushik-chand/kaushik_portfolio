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
    id: "ai-workflow",
    title: "AI-Augmented Workflow",
    description:
      "I use AI to explore more directions early, pressure-test research, and move faster on craft — while human judgment, empathy, and product decisions stay at the center.",
    items: ["Ideation", "Research Support", "Productivity", "Human Judgment"],
  },
  {
    id: "product-design",
    title: "Product Design",
    description:
      "Crafting end-to-end digital interfaces that balance clarity, visual hierarchy, and brand identity — transforming complex user flows into intuitive, scalable UI systems.",
    items: ["UI Design", "Design Systems", "Prototyping", "Wireframing", "Design Tokens"],
  },
  {
    id: "ux-research",
    title: "UX Research",
    description: "Evidence-backed product decisions through discovery, validation, and iterative user testing.",
    items: ["User Research", "Market Research", "Journey Mapping", "Usability"],
  },
  {
    id: "front-end",
    title: "Front-End Development",
    description: "Production-ready web interfaces in React and Next.js with faithful execution of design intent.",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "api-integration",
    title: "API Integration & Architecture",
    description:
      "Data orchestration, web infrastructure, and real-time protocols that drive seamless product experiences — connecting client UI with robust backend services.",
    items: [
      "RESTful Architectures",
      "WebSocket Real-Time Protocols",
      "Third-Party & External APIs",
      "Webhook Event Triggers",
    ],
  },
];
