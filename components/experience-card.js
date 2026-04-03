

import Image from "next/image";
import Link from "next/link";

const ExperienceCard = ({ experience }) => {
  const {
    company,
    position,
    duration,
    description,
    skills,
    logo,
    website,
  } = experience;

  return (
    <div className=" p-5 rounded-xl shadow-md hover:shadow-lg border transition">

      {/* Header */}
      <div className="flex items-center gap-3">
        {logo && (
          <Image
            src={logo}
            alt={company}
            width={40}
            height={40}
            className="rounded-md object-contain"
          />
        )}

        <div>
          <h3 className="text-lg font-semibold">{position}</h3>
          <p className="text-sm ">{company}</p>
        </div>
      </div>

      {/* Duration */}
      <p className="text-xs text-primary mt-1">{duration}</p>

      {/* Description */}
      <p className="mt-3 text-sm">{description}</p>

      {/* Skills */}
      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 border rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Website */}
      {website && (
        <div className="mt-4">
          <Link
            href={website}
            target="_blank"
            className="text-sm text-purple-600 hover:underline"
          >
            Visit Website →
          </Link>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;