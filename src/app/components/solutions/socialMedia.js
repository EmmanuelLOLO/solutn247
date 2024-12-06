import Button from "../button/button";
import Image from "next/image";
// import powerOfSocialMedia from "@/asset/images/social-media/powerOfSocialMedia.png";
// import powerOfSocialMedia from "@/asset/svgs/powerOfSocialMedia.svg";

import powerOfSocialMedia from "../../../../public/images/social-media/powerOfSocialMedia.png";

const SocialMedia = () => {
  const uniqueness = [
    "Expertise: Our team of social media experts stays updated with the latest trends and best practices to deliver exceptional results for our clients.",
    "Dedication: We are committed to your success and go above and beyond to ensure that your social media presence stands out from the competition.",
    "Results-Driven: We don't just focus on vanity metrics; we track meaningful metrics that directly impact your business objectives, such as leads, conversions, and ROI.",
  ];

  const services = [
    "Strategic Planning: We start by understanding your business objectives and target audience to develop a customized social media strategy.",
    "Content Creation: Our creative team produces engaging content that resonates with your audience across all social media platforms.",
    "Community Management: We actively engage with your audience, building relationships and fostering a sense of community around your brand.",
    "Performance Analysis: Through comprehensive analytics and reporting, we continuously optimize your social media campaigns to ensure maximum effectiveness.",
    "Schedule and Automation: This is a solution designed to streamline your social media management process. With this service, you can plan and schedule your posts in advance, ensuring a consistent flow of content across all your platforms.",
  ];

  return (
    <section className="tw-my-14 tw-text-[#4F4F4F]" id="Social-Media">
      <h2 className="tw-text-[#131313] tw-max-w-[700px] tw-mx-auto tw-text-xl sm:tw-text-3xl tw-text-center tw-font-bold tw-mb-2">
        Harness the Power of Social Media for Your Business
      </h2>
      <p className="tw-text-center tw-max-w-[722px] tw-mx-auto tw-text-base sm:tw-text-xl">
        Our expert social media management services are here to elevate your
        online presence and drive real results.
      </p>

      <p className="tw-text-center tw-text-base sm:tw-text-xl tw-my-6 sm:tw-my-10">
        --- Our Offering ---
      </p>

      <section>
        <section className="tw-gap-4 sm:tw-gap-8 tw-mb-6 tw-flex tw-flex-col tw-items-center lg:tw-items-stretch lg:tw-flex-row">
          <div className="tw-w-full">
            {/* <Image
              src={powerOfSocialMedia}
              alt="power of social media"
              className="tw-w-full max-sm:tw-h-[450px]"
              placeholder="blur"
            /> */}

            <img
              src="/images/social-media/powerOfSocialMedia.png"
              alt="power of social media"
              className="tw-w-full max-sm:tw-h-[450px]"
            />

            <h3 className="tw-text-lg sm:tw-text-2xl tw-text-left tw-font-semibold tw-my-3 tw-mt-5">
              Why Uniqueness:
            </h3>
            
            <ul className="tw-ml-6">
              {uniqueness?.map((unique, index) => (
                <li
                  key={index}
                  className="tw-leading-[28px] tw-text-base sm:tw-text-xl tw-font-medium tw-mb-3"
                >
                  {unique}
                </li>
              ))}
            </ul>
          </div>
          <div className="tw-w-full">
            <h3 className="tw-text-lg sm:tw-text-2xl tw-text-left tw-font-semibold tw-mb-3">
              Social Media Management
            </h3>

            <p className="tw-leading-[28px] tw-text-base sm:tw-text-xl tw-font-medium">
              With a team of experienced social media strategists, content
              creators, and data analysts, we craft tailored solutions to meet
              your unique goals and objectives.
            </p>

            <h3 className="tw-text-lg sm:tw-text-2xl tw-text-left tw-font-semibold tw-my-4">
              Our Services:
            </h3>

            <ul className="tw-ml-6">
              {services?.map((service, index) => (
                <li
                  key={index}
                  className="tw-leading-[28px] tw-text-base sm:tw-text-xl tw-font-medium tw-mb-3"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>

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

export default SocialMedia;
