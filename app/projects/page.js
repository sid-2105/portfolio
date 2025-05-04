import { Seperator } from "@/components/sections";
import AIProjects from "@/components/sections/ai-projects";
import Projects from "@/components/sections/completed-projects";
import OtherProjects from "@/components/sections/other-projects";
import UtilProjects from "@/components/sections/util-projects";

export const metadata = {
  title: "Praises Tula Projects | Software Engineer & Web Developer",
  description: "Discover Praises Tula's projects, showcasing his expertise in software engineering and web development.",
};

export default function ProjectsPage() {
  return (
    <>
      <Projects />
      <Seperator />
      <AIProjects />
      <Seperator />
      <UtilProjects />
      <Seperator />
      <OtherProjects/>
    </>
  );
}
