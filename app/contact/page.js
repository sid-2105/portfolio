import { Seperator } from "@/components/sections";

import Contact from "@/components/sections/contact";
import AllMedia from "@/components/sections/all-media";

export const metadata = {
  title: "Contact Siddharth Mishra | System Engineer | AI/ML & Big Data",
  description:
    "Get in touch with Siddharth Mishra, a System Engineer at Infosys specializing in Machine Learning, Big Data, and ETL pipelines using Python and Java. Open to opportunities, collaborations, and technical discussions.",
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
