export type ProfessionalTool = {
  id: string;
  name: string;
  logo: string;
};

export const professionalTools: ProfessionalTool[] = [
  { id: "figma", name: "Figma", logo: "/tools/figma.svg" },
  { id: "stitch", name: "Stitch", logo: "/tools/stitch.svg" },
  { id: "illustrator", name: "Adobe Illustrator", logo: "/tools/illustrator.svg" },
  { id: "photoshop", name: "Adobe Photoshop", logo: "/tools/photoshop.svg" },
  { id: "indesign", name: "Adobe InDesign", logo: "/tools/indesign.svg" },
  { id: "xd", name: "Adobe XD", logo: "/tools/xd.svg" },
  { id: "animate", name: "Adobe Animate CC", logo: "/tools/animate.svg" },
];
