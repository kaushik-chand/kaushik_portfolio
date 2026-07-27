export type ExperienceItem = {
  id: number;
  company: string;
  role: string;
  duration: string;
  current: boolean;
  description: string;
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: 1,
    company: "iCorp Overseas Pvt Ltd",
    role: "UX UI Designer & Front End Developer",
    duration: "Aug 2025 – Current",
    current: true,
    description:
      "Shipped a utilities marketplace from zero — owning UX research, UI systems, and Next.js front-end, plus market research and brand/legal foundations.",
    tags: [
      "UX Research",
      "UI Design",
      "Front-End Dev",
      "Market Research",
      "Social Media",
      "Branding",
    ],
  },
  {
    id: 2,
    company: "Softcreon",
    role: "Junior UI UX Designer",
    duration: "Dec 2024 – May 2025",
    current: false,
    description:
      "Delivered 20+ client projects spanning international briefs — consistent quality across industries under tight timelines.",
    tags: ["UI Design", "UX Design", "International Projects", "Figma"],
  },
  {
    id: 3,
    company: "Vibi Software Solutions",
    role: "UX UI & Graphic Designer Intern",
    duration: "Sep 2024 – Dec 2024",
    current: false,
    description:
      "Built foundational craft in product UI, branding, and graphic systems through hands-on internship delivery.",
    tags: ["UX UI Design", "Graphic Design", "Internship", "Branding"],
  },
];
