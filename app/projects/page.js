import { Seperator } from "@/components/sections";
import AIProjects from "@/components/sections/ai-projects";
import Projects from "@/components/sections/completed-projects";
import Experience from "@/components/sections/experience";
import UtilProjects from "@/components/sections/util-projects";

export const metadata = {
  title: "Siddharth Mishra Projects | System Engineer | AI/ML & Big Data",
  description:
    "Explore Siddharth Mishra's projects as a System Engineer at Infosys, showcasing hands-on experience in Machine Learning, Big Data, ETL pipelines, and backend development using Python and Java.",
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
      <Experience/>
    </>
  );
}
