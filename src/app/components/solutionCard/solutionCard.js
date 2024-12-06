import Image from "next/image";
import React from "react";

const SolutionCard = ({
  icon,
  title,
  color,
  url,
  activeTopSolution,
  ...props
}) => {
  return (
    <a
      href={`#${url}`}
      className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-cursor-pointer tw-items-center tw-p-6 tw-font-medium tw-mb-7 hover:tw-scale-[1.1] tw-transition tw-ease-in-out hover:tw-font-medium"
      // if activeTopSolution contains this element then make the color sharp
      style={{
        opacity: `${activeTopSolution.includes(url) ? 1 : 0.3}`,
        backgroundColor: color
      }}
      // pass other props through
      {...props}
    >
      <Image src={icon} alt={`${url}-icon`} />
      <p className="tw-text-[#4F4F4F] tw-text-lg sm:tw-text-xl tw-mt-3">
        {title}
      </p>
      <p className="tw-text-[#4F4F4F] tw-text-sm">
        Click to {activeTopSolution === url ? "collapse" : "explore"}
      </p>
    </a>
  );
};

export default SolutionCard;
