import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { MoreExplorations } from "@/components/sections/MoreExplorations";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ToolsGrid } from "@/components/sections/ToolsGrid";
import { ToolsMarquee } from "@/components/sections/ToolsMarquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolsMarquee />
      <ToolsGrid />
      <SelectedWork />
      <MoreExplorations />
      <Experience />
      <Capabilities />
      <Contact />
    </>
  );
}
