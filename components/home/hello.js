import { TESTIMONIALS } from "@/utils/data";
import { Section, WrapSection } from "../sections";
import { PurpleText, PrimaryText } from "../texts";

import Link from "next/link";
import AppLink from "../app-link";
import QuoteCarousel from "../quote-carousel";
import VerticalCarousel from "../vertical-carousel";

export default function Hello() {

  return (
    <Section>
      <WrapSection className='flex flex-col gap-2'>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="m-auto flex flex-col gap-4">
            <h1 className="text-[32px] font-bold">Praises is a <PurpleText>software engineer</PurpleText> and <PurpleText>front-end developer</PurpleText></h1>
            <PrimaryText>Detail-oriented software engineer with great passion for UI creation, effects, animation and dynamic user experiences. Major tech stack includes NextJS, ReactJS, Ruby-on-Rails, NodeJS, Postgresql, JavaScript, TypeScript, and Redux. Devoted to developing customized software to meet organisational needs, highlight their core competencies, and further their success.</PrimaryText>
            <AppLink href="contact">Contact me!!</AppLink>
          </div>
          <div>
            <VerticalCarousel testimonials={TESTIMONIALS} />
          </div>
        </div>

        <QuoteCarousel />

      </WrapSection>
    </Section>
  );
}
