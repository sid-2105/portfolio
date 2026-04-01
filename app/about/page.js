import { Seperator } from "@/components/sections";

import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import FunFacts from "@/components/sections/fun-facts";
import Testimonials from "@/components/sections/testimonials";
import Certifications from "@/components/sections/certifications";

export const metadata = {
  title: "About Siddharth Mishra | Software Engineer & Web Developer",
  description:
    "Learn about Siddharth Mishra's journey, skills, and experience as a Software Engineer specializing in UI development and animations.",
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
