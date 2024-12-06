import React from "react";

const Button = ({ buttonText, ...props }) => {
  // pass other props through
  return (
    <button
      {...props}
      className="tw-bg-[#0FE86D] hover:tw-scale-[1.04] tw-transition-all tw-text-sm sm:tw-text-base tw-px-6 tw-p-3 tw-rounded-xl tw-text-white tw-font-medium"
    >
      {buttonText}
    </button>
  );
};

export default Button;
