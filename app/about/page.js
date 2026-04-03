import { Seperator } from "@/components/sections";

import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FunFacts from "@/components/sections/fun-facts";
import Testimonials from "@/components/sections/testimonials";
import Certifications from "@/components/sections/certifications";

export const metadata = {
  title: "Siddharth Mishra | System Engineer | AI/ML & Big Data",
  description:
    "Siddharth Mishra is a System Engineer at Infosys with experience in Machine Learning, Big Data, and ETL pipelines, skilled in Python and Java, focused on building scalable, data-driven systems and intelligent applications.",
  keywords: [
    "Siddharth Mishra",
    "System Engineer",
    "Infosys System Engineer",
    "AI ML Engineer",
    "Machine Learning Engineer",
    "Big Data Engineer",
    "ETL Developer",
    "Python Developer",
    "Java Developer",
    "Data Engineering",
    "Data Pipelines",
    "Big Data Processing",
    "AI Engineer India",
    "Software Engineer India",
    "Data Driven Systems",
    "Backend Developer",
    "ML Projects",
    "ETL Pipelines"
  ],
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Seperator />

      <Skills />
      <Seperator />

      <Certifications />
      <Seperator />

      <Testimonials />
      <Seperator />

      <FunFacts />
    </>
  );
}
