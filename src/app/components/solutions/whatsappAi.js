import Image from "next/image";
// import education from "@/asset/svgs/education.svg";
// import healthcare from "@/asset/svgs/healthcare.svg";
// import consulting from "@/asset/svgs/consulting.svg";
// import marketing from "@/asset/svgs/marketing.svg";
// import eCommerce from "@/asset/svgs/eCommerce.svg";
// import sales from "@/asset/svgs/sales.svg";

import education from "../../../../public/images/whatsapp-solutions/education.png";
import healthcare from "../../../../public/images/whatsapp-solutions/healthcare.png";
import consulting from "../../../../public/images/whatsapp-solutions/consulting.png";
import marketing from "../../../../public/images/whatsapp-solutions/marketing.png";
import eCommerce from "../../../../public/images/whatsapp-solutions/e-commerce.png";
import sales from "../../../../public/images/whatsapp-solutions/sales.png";

import greenCheck from "@/asset/svgs/greenCheck.svg";
import { useState } from "react";

import Button from "../button/button";
import WhatsappSlider from "../aboutUsSlider/whatsappSlider";

const WhatsappAi = () => {
  const features = [
    "24/7 Availability",
    "Increased Efficiency",
    "Improved Response Time",
    "Scalability",
    "Personalized Interactions",
    "Cost Savings",
    "Analytics and Insights",
  ];

  const sectors = [
    {
      name: "Education",
      heading:
        "Solutn247 for Education - Engage and grow student sign ups on WhatsApp",
      subHeading:
        "Market classes, manage admission, onboard students and keep up to date",
      image: "/images/whatsapp-solutions/education.png",
    },
    {
      name: "Healthcare",
      heading:
        "Solutn247 for Healthcare - Connect and engage your patients using WhatsApp",
      subHeading:
        "More secure healthcare communications that guarantee better privacy",
      image: "/images/whatsapp-solutions/healthcare.png",
    },
    {
      name: "Sales Team",
      heading: "Solutn247 for Sales Team - Engage and sell more on WhatsApp",
      subHeading:
        "Grow sales using WhatsApp’s big presence in developing markets",
      image: "/images/whatsapp-solutions/sales.png",
    },
    {
      name: "E - commerce",
      heading:
        "Solutn247 for E-commerce - Engage and build relationships on WhatsApp",
      subHeading:
        "Project your brand, products and engage customers and prospects",
      image: "/images/whatsapp-solutions/e-commerce.png",
    },
    {
      name: "Marketing Agency",
      heading:
        "Solutn247 for Marketing Agencies - Make effective use of WhatsApp",
      subHeading:
        "Power up lead generation and relationship building on mobile for your clients",
      image: "/images/whatsapp-solutions/marketing.png",
    },
    {
      name: "Consulting",
      heading: "Solutn247 for Consulting Agencies - Answer enquiries faster",
      subHeading:
        "Be more responsive and enhance your reputation for great customer support",
      image: "/images/whatsapp-solutions/consulting.png",
    },
  ];

  const [activeSector, setActiveSector] = useState(sectors[0]);

  // console.log(activeSector);

  return (
    <section
      className="tw-my-14 tw-mb-20 tw-text-[#4F4F4F] tw-overflow-hidden"
      id="WhatsApp"
    >
      <h2 className="tw-text-[#131313] tw-text-xl sm:tw-text-3xl tw-text-center tw-font-bold tw-mb-2">
        Grow your business on WhatsApp
      </h2>
      <p className="tw-text-center tw-max-w-[722px] tw-mx-auto tw-text-base sm:tw-text-xl">
        Personalize communication and sell more with the WhatsApp Business API
        platform that automates marketing, sales, service and support.
      </p>
      <p className="tw-text-center tw-text-base sm:tw-text-xl tw-my-6 sm:tw-my-10">
        --- Features ---
      </p>

      <div className="tw-border tw-rounded-xl tw-p-3 tw-flex tw-flex-wrap tw-justify-center sm:tw-gap-x-5 tw-gap-3">
        {features?.map((feature, index) => (
          <div
            key={index}
            className="tw-flex sm:tw-gap-3 tw-gap-1 tw-items-center"
          >
            <Image
              src={greenCheck}
              alt="green tick icon"
              className="max-sm:tw-max-w-[17px]"
            />
            <span className="sm:tw-text-lg tw-text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <p className="sm:tw-text-xl tw-text-[#737373] tw-font-medium tw-text-center tw-my-10">
        Let’s explore the benefits of WhatsApp Automation to your business
        sector
      </p>

      <section className="tw-transition-all">
        <div className="tw-flex tw-gap-8 tw-mb-14 tw-overflow-x-auto no-scrollbar">
          {sectors?.map((sector, index) => (
            <button
              key={index}
              className={`tw-p-3 tw-px-10 tw-border tw-shrink-0 tw-transition-all ${
                sector?.name === activeSector?.name
                  ? "tw-border-[#2c2c2c]"
                  : "tw-border-[#d9d9d9]"
              }`}
              onClick={() => setActiveSector(sector)}
              // onClick={() => handleSectorClick(sector)}
            >
              {sector?.name}
            </button>
          ))}
        </div>

        <div>
          <p className="sm:tw-text-2xl tw-text-[#4f4f4f] tw-font-medium tw-text-center tw-my-2">
            {activeSector?.heading}
          </p>
          <p className="sm:tw-text-lg tw-text-[#4f4f4f] tw-text-center tw-mb-16">
            {activeSector?.subHeading}
          </p>
        </div>
      </section>

      <WhatsappSlider
        sectors={sectors}
        activeSector={activeSector}
        setActiveSector={setActiveSector}
      />

      <p className="sm:tw-text-2xl tw-text-[#4f4f4f] tw-text-center tw-mb-3">
        Set to take your business to new heights? Let's work together.
      </p>

      <div className="tw-flex tw-justify-center">
        <a href="/contact">
          <Button buttonText="Book a demo" />
        </a>
      </div>
    </section>
  );
};

export default WhatsappAi;
