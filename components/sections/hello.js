import { ORIENTATION } from "@/utils/contants";
import { Section, WrapSection } from "../sections";
import { PurpleText, PrimaryText } from "../texts";
import { TESTIMONIALS, SUMMARY } from "@/utils/data";

import Link from "next/link";
import Image from "next/image";
import DotsSVG from "../assets/DotsSVG";
import AppLink from "../app-link";
import Carousel from "../carousel";
import QuoteCarousel from "../quote-carousel";
import RectangleSVG from "../assets/RectangleSVG";
import DesignSVG from "../assets/DesignSVG";

export default function Hello() {
  return (
    <Section className="relative overflow-hidden">
      <WrapSection className="flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[3fr_2fr]">
          <div className="m-auto flex flex-col gap-4">
            <h1 className="text-[32px] font-bold">
              Siddharth  is a <PurpleText>software engineer</PurpleText> and{" "}
              <PurpleText>front-end developer</PurpleText>
            </h1>
            <PrimaryText>{SUMMARY}</PrimaryText>
            <AppLink href="contact">Contact me!!</AppLink>
          </div>

          {/* <div>
            <Carousel
              testimonials={TESTIMONIALS}
              orientation={ORIENTATION.VERTICAL}
            />
          </div> */}
             <div className="relative grow flex flex-col h-auto min-h-[200px] w-fit min-w-[250px] mx-auto">
                      <Image
                        src="/images/profile.svg"
                        alt="About Me"
                        layout="fill"
                        objectFit="contain"
                        className="z-10 "
                      />
          
                      <DotsSVG className="w-14 h-14 md:w-16 md:h-16 absolute bottom-[20%] right-0 z-10" />
                      <DesignSVG className="w-26 h-26 absolute top-0 left-0" />
                    </div>
        </div>

        <QuoteCarousel />
      </WrapSection>

      <RectangleSVG className="w-20 h-20 absolute bottom-[5%] -right-8 hidden md:block" />
    </Section>
  );
}
