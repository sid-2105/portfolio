import { Section, WrapSection, Seperator } from "@/components/sections";

import Header from "@/components/header";
import Hello from "@/components/sections/hello";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Hello />
      <Seperator />
      <Skills home />
      <Seperator />
      <About home/>
    </>
  );
}
