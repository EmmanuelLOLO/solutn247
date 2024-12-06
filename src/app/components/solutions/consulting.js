import Button from "../button/button";
import Image from "next/image";
// import consultingImage from "@/asset/images/consulting/consultingImage.png";
// import consultingApproach from "@/asset/images/consulting/consultingApproach.png";

// import consultingImage from "@/asset/svgs/consultingImage.svg";
// import consultingApproach from "@/asset/svgs/consultingApproach.svg";

import consultingImage from "../../../../public/images/consulting/consultingImage.png";
import consultingApproach from "../../../../public/images/consulting/consultingApproach.png";

const Consulting = () => {
  const whyConsult = [
    "Strategic Guidance: Our team of experienced IT consultants provides strategic guidance tailored to your unique business objectives. Whether you're looking to enhance efficiency, improve security, or leverage emerging technologies, we'll develop a customized roadmap to help you achieve your goals.",
    "Technology Expertise: With deep expertise across a wide range of technologies and industries, we have the knowledge and experience to recommend the right solutions for your business. From cloud computing and cybersecurity to data analytics and digital transformation, we'll help you stay ahead of the curve.",
    "Cost Savings: Investing in the right technology solutions can lead to significant cost savings in the long run. Our IT consulting services help you identify inefficiencies, optimize processes, and leverage cost-effective technologies to maximize ROI and drive bottom-line results.",
  ];

  return (
    <section className="tw-my-14 tw-text-[#4F4F4F]" id="Consulting">
      <h2 className="tw-text-[#131313] tw-max-w-[700px] tw-mx-auto tw-text-xl sm:tw-text-3xl tw-text-center tw-font-bold tw-mb-2">
        Empower Your Business with our Expert IT Consulting Services
      </h2>
      <p className="tw-text-center tw-max-w-[722px] tw-mx-auto tw-text-base sm:tw-text-xl">
        Get IT consulting services designed to empower your business, streamline
        operations, and drive growth.
      </p>

      <p className="tw-text-center tw-text-base sm:tw-text-xl tw-my-6 sm:tw-my-10">
        --- Our Offering ---
      </p>

      <section>
        <section className="tw-gap-4 sm:tw-gap-8 tw-mb-6 tw-flex tw-flex-col tw-items-center lg:tw-items-stretch lg:tw-flex-row">
          <div className="tw-w-full tw-h-full">
            {/* <Image
              src={consultingImage}
              alt="consulting image"
              className="tw-w-full tw-h-full tw-block max-sm:tw-h-[450px] max-lg:tw-h-[700px]"
              objectFit="cover"
              placeholder="blur"
            /> */}
            <img
              src="/images/consulting/consultingImage.png"
              alt="consulting image"
              className="tw-w-full tw-h-full tw-block max-sm:tw-h-[450px] max-lg:tw-h-[700px]"
            />
          </div>
          <div className="tw-w-full">
            <h3 className="tw-text-lg sm:tw-text-2xl tw-text-left tw-font-semibold tw-mb-3">
              Brand identity design
            </h3>

            <p className="tw-leading-[28px] tw-text-base sm:tw-text-xl tw-font-medium">
              At Solutn247, we offer comprehensive IT consulting services
              designed to empower your business, streamline operations, and
              drive growth.
            </p>

            <h3 className="tw-text-lg sm:tw-text-2xl tw-text-left tw-font-semibold tw-my-4">
              Why Consult with Us?
            </h3>

            <ul className="tw-ml-6">
              {whyConsult?.map((reason, index) => (
                <li
                  key={index}
                  className="tw-leading-[28px] tw-text-base sm:tw-text-xl tw-font-medium tw-mb-3"
                >
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="tw-my-10">
          <h3 className="tw-text-lg sm:tw-text-2xl tw-text-center tw-font-semibold tw-my-4">
            Our IT Consulting Approach
          </h3>
          {/* <Image
            src={consultingApproach}
            alt="our consulting approach"
            className="tw-max-w-[800px] tw-mx-auto"
          /> */}
          <img
            src="/images/consulting/consultingApproach.png"
            alt="our consulting approach"
            className="tw-max-w-[800px] tw-mx-auto"
          />
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
    </section>
  );
};

export default Consulting;
