// import { EXPERIENCE } from "@/utils/data";
// import ExperienceCard from "../experience-card";
// import { SubTitle } from "../titles";
// import { Section, WrapSection } from "../sections";

// import DotsSVG from "../assets/DotsSVG";
// import RectangleSVG from "../assets/RectangleSVG";

// const Experience = () => {
//   return (
//     <Section className="relative overflow-hidden">
//       <WrapSection>
//         <SubTitle line>Experience</SubTitle>

//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {EXPERIENCE.map((exp, index) => (
//             <ExperienceCard key={index} experience={exp} />
//           ))}
//         </div>
//       </WrapSection>

//       <DotsSVG className="w-20 h-20 absolute bottom-[5%] -right-4 hidden md:block" />
//       <RectangleSVG className="w-30 h-30 absolute top-[30%] -left-8 hidden md:block" />
//     </Section>
//   );
// };

// export default Experience;

import { EXPERIENCE } from "@/utils/data";
import { SubTitle } from "../titles";
import { Section, WrapSection } from "../sections";
import ExperienceCard from "../experience-card";

const Experience = () => {
  return (
    <Section>
      <WrapSection>
        <SubTitle line>Experience</SubTitle>

        <div className="mt-12 relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 dark:bg-gray-700" />

          {EXPERIENCE.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isCurrent = exp.duration.toLowerCase().includes("present");

            return (
              <div
                key={index}
                className={`mb-12 flex w-full ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-full md:w-1/2 px-4">
                  <div className="relative">

                    {/* Timeline Dot
                    <div
                      className={`absolute top-5 w-4 h-4 rounded-full left-1/2 transform -translate-x-1/2 ${
                        isCurrent
                          ? "bg-green-500 animate-pulse shadow-lg shadow-green-500/50"
                          : "bg-purple-600"
                      }`}
                    /> */}

                    {/* Card */}
                    <div
                      className={`transition rounded-xl ${
                        isCurrent
                          ? "ring-2 ring-green-500 shadow-lg shadow-green-500/20"
                          : ""
                      }`}
                    >
                      <ExperienceCard experience={exp} />
                    </div>

                    {/* Current Badge */}
                    {isCurrent && (
                      <div className="absolute -top-3 right-4 text-xs px-2 py-1 bg-green-500 text-white rounded-full">
                        Current
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </WrapSection>
    </Section>
  );
};

export default Experience;