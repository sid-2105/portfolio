import { Seperator } from "@/components/sections";

import Contact from "@/components/sections/contact";
import AllMedia from "@/components/sections/all-media";

export const metadata = {
  title: "Contact Praises Tula | Software Engineer & Web Developer",
  description:
    "Reach out to Praises Tula for inquiries, collaborations, or just to say hello!",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <Seperator />
      <AllMedia />
    </>
  );
}
