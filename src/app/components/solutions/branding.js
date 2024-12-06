import Image from "next/image";
// import visualCommunication from "@/asset/svgs/branding/visualCommunications.svg";
// import colorPalette from "@/asset/svgs/branding/colorPalette.svg";
// import brandIdentity from "@/asset/svgs/branding/brandIdentity.svg";

// import visualCommunication from "@/asset/images/branding/visualCommunications.png";
// import brandIdentity from "@/asset/images/branding/brandIdentity.png";

// import colorPalette from "@/asset/images/branding/colorPalette.svg";

// import visualCommunication from "@/asset/svgs/visualCommunication.svg";
// import brandIdentity from "@/asset/svgs/brandIdentity.svg";

import Button from "../button/button";

const Branding = () => {
  const offerings = [
    {
      image: "/images/branding/brandIdentity.png",
      image2: "/images/branding/colorPalette.svg",
      title: "Brand identity design",
      description: [
        "A strong brand identity is essential for businesses looking to differentiate themselves and build lasting connections with their audience.",
        "Some key reasons why brand identity is important include:",
      ],
      points: [
        "Differentiation",
        "Recognition",
        "Emotional Connection",
        "Brand Consistency",
      ],
    },
    {
      image: "/images/branding/visualCommunications.png",
      title: "Visual communications",
      description: [
        "Crafting captivating visual designs that communicate your brand's message effectively. Our team of talented graphic designers combines creativity, strategic thinking, and technical expertise to deliver designs that leave a lasting impression on your audience.",
        "We follow a collaborative approach to graphic design, working closely with our clients to understand their vision and objectives. Our process includes:",
      ],
      points: [
        "Creative Brief and Requirement Gathering",
        "Research and Inspiration Collection",
        "Concept Development and Sketching",
        "Digital Design and Iteration",
        "Finalization and Delivery",
      ],
    },
  ];

  return (
    <section className="tw-my-14 tw-mb-5 tw-text-[#4F4F4F]" id="Branding">
      <h2 className="tw-text-[#131313] tw-max-w-[700px] tw-mx-auto tw-text-xl sm:tw-text-3xl tw-text-center tw-font-bold tw-mb-2">
        Stunning Visual Branding & Communication Solutions
      </h2>
      <p className="tw-text-center tw-max-w-[722px] tw-mx-auto tw-text-base sm:tw-text-xl">
        Creating captivating visual identity and designs that communicate your
        desired brand message effectively.
      </p>

      <p className="tw-text-center tw-text-base sm:tw-text-xl tw-my-6 sm:tw-my-10">
        --- Our Offering ---
      </p>

      <section>
        {offerings?.map(
          ({ title, description, points, image, image2 }, index) => (
            <div
              className={`tw-flex tw-flex-col tw-items-center tw-justify-between lg:tw-items-stretch lg:tw-flex-row tw-gap-7  ${
                index % 2 !== 0 ? "lg:tw-flex-row-reverse" : null
              } ${index == offerings.length - 1 ? "tw-mb-10" : "tw-mb-20"}`}
              key={index}
            >
              <img
                src={image}
                alt={`${title} image`}
                className="tw-w-full tw-h-auto lg:tw-w-auto lg:tw-h-full lg:tw-max-w-[560px]"
              />
              <div className="lg:tw-max-w-[650px] tw-flex tw-flex-col">
                <h3 className="tw-text-lg sm:tw-text-2xl tw-font-semibold max-lg:tw-text-center tw-mb-3">
                  {title}
                </h3>
                {description?.map((desc, index) => (
                  <p
                    key={index}
                    className="tw-mb-7 tw-font-medium tw-text-base sm:tw-text-xl"
                  >
                    {desc}
                  </p>
                ))}
                <ul className="tw-ml-6 tw-mb-5">
                  {points?.map((point, index) => (
                    <li
                      key={index}
                      className="tw-leading-[28px] tw-font-medium tw-text-base sm:tw-text-xl"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                {image2 && (
                  <Image
                    src={image2}
                    className="tw-mt-auto tw-w-full"
                    width={100}
                    height={100}
                    // placeholder="blur"
                  />
                )}
              </div>
            </div>
          )
        )}

        <div className="tw-flex tw-gap-4 tw-justify-center">
          <a href="/contact">
            <Button buttonText="Request Service" />
          </a>
          <a href="/portfolio">
            <Button buttonText="See Portfolio" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Branding;
