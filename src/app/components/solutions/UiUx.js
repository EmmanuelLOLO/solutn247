import Image from "next/image";
// import UiUxApproach from "@/asset/svgs/UiUx-solutions/UiUxApproach.svg";
// import UiUxBackground from "@/asset/svgs/UiUx-solutions/UiUxBackground.svg";

// import UiUxApproach from "@/asset/images/UiUx-solutions/UiUxApproach.png";
// import UiUxBackground from "@/asset/images/UiUx-solutions/UiUxBackground.png";
// import UiUxApproach from "@/asset/svgs/uiUxApproach.svg";
// import UiUxBackground from "@/asset/svgs/uiUxBackground.svg";

import UiUxApproach from "../../../../public/images/UiUx-solutions/UiUxApproach.png";
import UiUxBackground from "../../../../public/images/UiUx-solutions/UiUxBackground.png";

import Button from "../button/button";

const UIUX = () => {
  const features = [
    {
      image: "/images/UiUx-solutions/UiUxBackground.png",
      // image: UiUxBackground,
      title: "UI/UX Design",
      description: [
        "We specialize in crafting visually appealing and user-centric interfaces that enhance the overall user experience.",
        "Our team of talented designers combines creativity and strategic thinking to deliver designs that captivate users and drive business growth.",
      ],
    },
    {
      image: "/images/UiUx-solutions/UiUxApproach.png",
      // image: UiUxApproach,
      title: "Our approach to UI/UX Design",
      description: [
        "We follow a user-centered design approach that ensures our designs are not only aesthetically pleasing but also intuitive and functional. Our process includes:",
      ],
      processes: [
        "User Research and Analysis",
        "Information Architecture and Wireframing",
        "Visual Design and Branding",
        "Prototyping and Interaction Design",
        "Usability Testing and Iteration",
      ],
    },
  ];

  const designPrinciples = [
    "User-centric approach",
    "Accessibility",
    "Consistency",
    "Visual hierarchy",
    "Simplicity",
    "Emotional design",
  ];

  return (
    <section className="tw-my-14 tw-mb-20 tw-text-[#4F4F4F]" id="UI/UX">
      <h3 className="tw-text-[#131313] tw-text-xl sm:tw-text-3xl tw-text-center tw-font-bold tw-mb-2">
        Engaging and intuitive design
      </h3>
      <p className="tw-text-center tw-max-w-[500px] tw-mx-auto tw-text-base sm:tw-text-xl">
        Creating engaging and intuitive user interface that enhances overall
        experience.
      </p>

      <p className="tw-text-center tw-text-base sm:tw-text-xl tw-my-6 sm:tw-my-10">
        --- Our offering ---
      </p>

      <section>
        {features?.map(({ title, image, description, processes }, index) => (
          <div
            className={`tw-gap-4 sm:tw-gap-7 tw-mb-6 tw-flex tw-flex-col tw-items-center lg:tw-items-stretch lg:tw-flex-row ${
              index % 2 !== 0 ? "lg:tw-flex-row-reverse" : null
            }`}
            key={index}
          >
            {/* <Image
              src={image}
              className={`tw-relative tw-w-full tw-max-w-[640px] tw-grow ${
                index > 0
                  ? "lg:tw-mt-[-240px] lg:tw-min-w-[640px] tw-z-10"
                  : null
              }`}
              placeholder="blur"
            /> */}

            <img
              src={image}
              alt="UIUX background"
              className={` tw-relative tw-w-full tw-max-w-[640px] ${
                index > 0 ? "lg:tw-mt-[-240px] tw-z-10" : null
              }`}
            />

            <div className="tw-w-full lg:tw-w-[45%] tw-max-w-[650px]">
              <h3 className="tw-text-lg sm:tw-text-2xl tw-text-center tw-font-semibold tw-mb-3">
                {title}
              </h3>
              <div>
                {description?.map((desc, index) => (
                  <p
                    key={index}
                    className="tw-mb-5 tw-text-base sm:tw-text-lg tw-font-medium tw-leading-[28px]"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <ul className="tw-ml-6">
                {processes?.map((process, index) => (
                  <li
                    key={index}
                    className="tw-leading-[28px] tw-text-base sm:tw-text-lg tw-font-medium"
                  >
                    {process}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <div className="tw-w-[85%] tw-mx-auto tw-bg-[#F8F8F8E5] tw-rounded-[50px] tw-py-10 sm:tw-pb-14 tw-px-5 sm:tw-px-16 tw-drop-shadow-cardShadow tw-my-14 tw-flex tw-flex-col tw-items-center">
        <h4 className="tw-font-semibold tw-text-base sm:tw-text-xl tw-mb-5 tw-max-w-[716px]">
          Our design principles
        </h4>
        <ul className="tw-grid sm:tw-grid-cols-2 tw-gap-x-10 lg:tw-gap-x-16 sm:tw-justify-center tw-mx-auto">
          {designPrinciples?.map((principle, index) => (
            <li
              key={index}
              className="tw-ml-8 tw-text-base sm:tw-text-lg tw-font-medium"
            >
              {principle}
            </li>
          ))}
        </ul>
      </div>

      <div className="tw-flex tw-gap-4 tw-justify-center">
        <a href="/contact">
          <Button buttonText="Request Service" />
        </a>
        <a href="/portfolio">
          <Button buttonText="See Portfolio" />
        </a>
      </div>
    </section>
  );
};

export default UIUX;
