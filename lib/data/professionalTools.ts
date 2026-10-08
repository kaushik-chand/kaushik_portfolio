export type ProfessionalTool = {
  id: string;
  name: string;
  icon?: string;
  logo?: string;
};

export const professionalTools: ProfessionalTool[] = [
  { id: "figma", name: "Figma", icon: "logos:figma", logo: "/tools/figma.svg" },
  { id: "cursor", name: "Cursor", icon: "simple-icons:cursor", logo: "/tools/cursor.svg" },
  { id: "claude", name: "Claude Cowork", logo: "/tools/claude.svg" },
  { id: "gpt-codex", name: "GPT Codex", icon: "simple-icons:openai", logo: "/tools/codex.svg" },
  { id: "antigravity", name: "Antigravity", logo: "/tools/antigravity.png" },
  { id: "vscode", name: "VS Code", icon: "vscode-icons:file-type-vscode", logo: "/tools/vscode.svg" },
  { id: "copilot", name: "GitHub Copilot", icon: "simple-icons:githubcopilot", logo: "/tools/copilot.svg" },
  { id: "firefly", name: "Adobe Firefly", logo: "/tools/firefly.png" },
  { id: "midjourney", name: "Midjourney", logo: "/tools/midjourney.svg" },
  { id: "replit", name: "Replit", icon: "simple-icons:replit", logo: "/tools/replit.svg" },
  { id: "nextjs", name: "Next.js", icon: "logos:nextjs-icon", logo: "/tools/nextjs.svg" },
  { id: "react", name: "React JS", icon: "logos:react" },
  { id: "angular", name: "Angular", icon: "logos:angular-icon" },
  { id: "html5", name: "HTML5", icon: "logos:html-5" },
  { id: "css3", name: "CSS3", icon: "logos:css-3" },
  { id: "tailwind", name: "Tailwind CSS", icon: "logos:tailwindcss-icon", logo: "/tools/tailwind.svg" },
  { id: "xd", name: "Adobe XD", icon: "logos:adobe-xd", logo: "/tools/xd.svg" },
  { id: "illustrator", name: "Adobe Illustrator", icon: "logos:adobe-illustrator", logo: "/tools/illustrator.svg" },
  { id: "photoshop", name: "Adobe Photoshop", icon: "logos:adobe-photoshop", logo: "/tools/photoshop.svg" },
  { id: "indesign", name: "Adobe InDesign", icon: "logos:adobe-indesign", logo: "/tools/indesign.svg" },
  { id: "animate", name: "Adobe Animate CC", icon: "logos:adobe-animate", logo: "/tools/animate.svg" },
];
