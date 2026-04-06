// import { EXPERIENCE } from "@/utils/data";
// import { SubTitle } from "../titles";
// import { Section, WrapSection } from "../sections";
// import ExperienceCard from "../experience-card";

// const Experience = () => {
//   return (
//     <Section>
//       <WrapSection>
//         <SubTitle line>experience</SubTitle>

//         <div className="mt-12 relative">
//           {/* Center Line */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 dark:bg-gray-700" />

//           {EXPERIENCE.map((exp, index) => {
//             const isLeft = index % 2 === 0;
//             const isCurrent = exp.duration.toLowerCase().includes("present");

//             return (
//               <div
//                 key={index}
//                 className={`mb-12 flex w-full ${
//                   isLeft ? "justify-start" : "justify-end"
//                 }`}
//               >
//                 <div className="w-full md:w-1/2 px-4">
//                   <div className="relative">

//                     {/* Timeline Dot
//                     <div
//                       className={`absolute top-5 w-4 h-4 rounded-full left-1/2 transform -translate-x-1/2 ${
//                         isCurrent
//                           ? "bg-green-500 animate-pulse shadow-lg shadow-green-500/50"
//                           : "bg-purple-600"
//                       }`}
//                     /> */}

//                     {/* Card */}
//                     <div
//                       className={`transition rounded-xl ${
//                         isCurrent
//                           ? "ring-2 ring-green-500 shadow-lg shadow-green-500/20"
//                           : ""
//                       }`}
//                     >
//                       <ExperienceCard experience={exp} />
//                     </div>

//                     {/* Current Badge */}
//                     {isCurrent && (
//                       <div className="absolute -top-3 right-4 text-xs px-2 py-1 bg-green-500 text-white rounded-full">
//                         Current
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </WrapSection>
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
        <SubTitle line>experience</SubTitle>

        <div className="mt-12 relative">
          {/* Center line — hidden on mobile, visible md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gray-300 dark:bg-gray-700" />

          {/* Left line — visible on mobile only */}
          <div className="block md:hidden absolute left-4 top-0 h-full w-[2px] bg-gray-300 dark:bg-gray-700" />

          {EXPERIENCE.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isCurrent = exp.duration.toLowerCase().includes("present");

            return (
              <div
                key={index}
                className={`mb-12 flex w-full
                  /* Mobile: always align to the left with padding for the line */
                  pl-10 md:pl-0
                  /* Desktop: alternate left/right */
                  ${isLeft ? "md:justify-start" : "md:justify-end"}
                  
                `}
              >
                {/* Timeline dot — mobile (left-aligned) */}
                <div
                  className={`
                    md:hidden absolute left-[11px] mt-5 w-3.5 h-3.5 rounded-full z-10
                    ${
                      isCurrent
                        ? "bg-green-500 animate-pulse shadow-md shadow-green-500/50"
                        : "bg-purple-600"
                    }
                  `}
                />

                {/* Timeline dot — desktop (center) */}
                <div
                  className={`
                    hidden md:block absolute left-1/2 -translate-x-1/2 mt-5 w-3.5 h-3.5 rounded-full z-10
                    ${
                      isCurrent
                        ? "bg-green-500 animate-pulse shadow-md shadow-green-500/50"
                        : "bg-purple-600"
                    }
                  `}
                />

                {/* Card wrapper */}
                <div className="w-full md:w-[calc(50%-2rem)]">
  <div className={`relative ${isCurrent ? "group" : ""}`}>
    
    {/* Card */}
    <div
      className={`
        transition duration-300 ease-in-out rounded-xl
        ${
          isCurrent
            ? "md:group-hover:ring-2 md:group-hover:ring-green-500 md:group-hover:shadow-lg md:group-hover:shadow-green-500/20"
            : ""
        }
      `}
    >
      <ExperienceCard experience={exp} />
    </div>

    {/* Badge */}
    {isCurrent && (
      <div
        className="
          absolute -top-3 right-4 text-xs px-2 py-1 
          bg-green-500 text-white rounded-full
          opacity-100 md:opacity-0 md:group-hover:opacity-100
          transition
        "
      >
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
