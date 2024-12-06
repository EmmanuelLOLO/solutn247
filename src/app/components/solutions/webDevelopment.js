import Image from "next/image";
// import hotelProjectBackground from "@/asset/svgs/web-solutions/hotelProjectBackground.svg";
// import travelProjectBackground from "@/asset/svgs/web-solutions/travelProjectBackground.svg";

// import travelProject from "@/asset/images/web-solutions/travelProjectBackground.png";
// import hotelAndSpa from "@/asset/images/web-solutions/hotelProjectBackground.png";

// import hotelAndSpa from "@/asset/svgs/hotelAndSpa.svg";
// import travelProject from "@/asset/svgs/travelProject.svg";
// import hotelAndSpa from "@/asset/svgs/hotelAndSpa.png";

import hotelAndSpa from "../../../../public/images/web-solutions/hotelProjectBackground.png";
import travelProject from "../../../../public/images/web-solutions/travelProjectBackground.png";

import Button from "../button/button";

const WebDevelopment = () => {
  const webProcesses = [
    "Discovery and Requirement Gathering",
    "Design and User Experience (UI/UX)",
    "Development and Coding",
    "Testing and Quality Assurance",
    "Deployment and Launch",
    "Ongoing Maintenance and Support",
  ];

  const webExpertise = [
    "Custom Website Development",
    "E-commerce Development",
    "Content Management System Dev",
    "Responsive Web Design",
    "Front-end and Back-end Development",
    "Third-Party Integrations",
    "Website Performance Optimization",
    "Website Security and Maintenance",
  ];

  return (
    <section className="tw-my-16 tw-mb-20 tw-text-[#4F4F4F]" id="Web">
      <h2 className="tw-text-[#131313] tw-text-xl sm:tw-text-3xl tw-text-center tw-font-bold tw-mb-2">
        Engaging and functional website
      </h2>
      <p className="tw-text-center tw-max-w-[722px] tw-mx-auto tw-text-base sm:tw-text-xl">
        Building engaging and functional website that drives result beyond your
        expectations starts with us.
      </p>

      <p className="tw-text-center tw-text-base sm:tw-text-xl tw-my-6 sm:tw-my-10">
        --- Our offering ---
      </p>

      <section className="tw-gap-3 sm:tw-gap-7 tw-mb-12 tw-flex tw-flex-col tw-items-center lg:tw-items-stretch lg:tw-flex-row">
        <div className="tw-grow tw-min-w-[50%]">
          <img
            src="/images/web-solutions/hotelProjectBackground.png"
            alt="Hotel and Spa background"
            className="tw-max-w-[550px] tw-w-full tw-h-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="tw-w-full tw-max-w-[650px]">
          <h3 className="tw-font-semibold tw-text-lg sm:tw-text-2xl tw-mb-3">
            Web and App development at a glance
          </h3>
          <p className="tw-mb-5 tw-font-medium tw-text-base sm:tw-text-lg">
            We specialize in creating custom websites tailored to your unique
            business needs. Our team of experienced developers combines
            technical expertise with creative flair to deliver stunning and
            user-friendly websites that leave a lasting impression on your
            visitors.
          </p>
          <p className="tw-mb-5 tw-font-medium tw-text-base sm:tw-text-lg">
            At Solutn247, we follow a comprehensive approach to web development
            that ensures your website is not just visually appealing but also
            functional and optimized for success. Our process includes:
          </p>

          <ul className="tw-ml-6">
            {webProcesses?.map((process, index) => (
              <li
                key={index}
                className="tw-text-base sm:tw-text-lg tw-font-medium"
              >
                {process}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tw-mb-10">
        <img
          src="/images/web-solutions/travelProjectBackground.png"
          alt="Hotel and Spa background"
          className="tw-w-full tw-max-w-[1000px]"
        />

        <div className="tw-w-[92%] tw-mt-[-8%] tw-mx-auto tw-bg-[#F8F8F8E5] tw-relative tw-z-10 tw-rounded-[50px] tw-py-10 sm:tw-pb-14 tw-px-5 sm:tw-px-16 tw-drop-shadow-cardShadow">
          <h4 className="tw-font-semibold tw-text-base sm:tw-text-xl tw-mb-5 tw-text-center tw-max-w-[716px]">
            We offer a wide range of web development services to cater to
            diverse business needs. Our expertise includes:
          </h4>
          <ul className="tw-ml-6 tw-grid sm:tw-grid-cols-2 tw-gap-x-10 sm:justify-items-between">
            {webExpertise?.map((expertise, index) => (
              <li
                key={index}
                className="tw-text-base sm:tw-text-lg tw-font-medium"
              >
                {expertise}
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
  );
};

export default WebDevelopment;
