"use client";
import Navbar from "./components/navbar/navbar";
import Image from "next/image";
import heroImage from "@/asset/svgs/heroImage.svg";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";
import SolutionSection from "./components/solutions/solutionSection";
import Slider from "./components/aboutUsSlider/slider";
import "tailwindcss/tailwind.css";

export default function Home() {
  const heroKeyPoints = [
    " Effective communication with AI-driven solutions",
    "Concept to development for creative web solutions",
    "Tailored creativity for optimal and functional brand",
  ];

  return (
    <main className="min-h-screen mx-auto">
      <Navbar />

      {/* hero */}
      <section className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-w-[90%] xl:tw-w-[85%] tw-max-w-[1000px] tw-mx-auto tw-justify-between tw-gap-7 tw-mb-16">
        <div className="xl:tw-w-[60%] tw-flex tw-flex-col max-lg:tw-items-center">
          <h1 className="tw-text-[#29166F] tw-font-medium tw-leading-[50px] tw-text-[42px] xl:tw-text-5xl xl:tw-leading-[58px] tw-mb-4 xl:tw-mb-0 max-lg:tw-hidden">
            Innovative Solutions & <br /> Seamless Experiences <br />
            <span className="tw-font-bold">for Better Businesses.</span>
          </h1>

          {/* header for smaller screens */}
          <h1 className="tw-text-[#29166F] tw-font-medium tw-leading-[40px] md:tw-leading-[50px] tw-text-[32px] md:tw-text-[42px] tw-text-center tw-mb-4 xl:tw-mb-0 lg:tw-hidden tw-max-w-[650px]">
            Innovative Solutions & Seamless Experiences
            <span className="tw-font-bold"> for Better Businesses.</span>
          </h1>

          <ul className="tw-mb-5 tw-mt-2 max-lg:tw-ml-3">
            {heroKeyPoints?.map((heroKeyPoint, index) => (
              <li
                key={index}
                className="tw-text-[#4F4F4F] tw-leading-[28px] tw-font-medium lg:tw-text-left"
              >
                {/* <span className="h-[3px] w-[3px] rounded-full bg-[#4F4F4F]"></span> */}
                <span className="tw-tracking-wide tw-text-base sm:tw-text-lg">
                  {heroKeyPoint}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#solutions"
            style={{ scrollBehavior: "smooth" }}
            className="lg:tw-self-start"
          >
            <Button buttonText="Explore Services" />
          </a>
        </div>
        <div className="tw-hidden lg:tw-block xl:tw-w-[40%]">
          <Image
            src={heroImage}
            alt="hero image"
            className="tw-w-full"
            width={100}
            height={100}
          />
        </div>
      </section>

      {/* passion */}
      <section className="tw-bg-[#EBE6FC] tw-text-center tw-p-5 tw-py-8 tw-pb-10 tw-mb-10">
        <h3 className="tw-font-medium tw-text-lg sm:tw-text-2xl tw-mb-2 tw-text-[#4F4F4F]">
          Our Belief & Passion
        </h3>
        <p className="tw-font-bold tw-leading-[28px] sm:tw-leading-[38px] tw-text-xl sm:tw-text-3xl tw-max-w-[812px] tw-text-[#131313] tw-mx-auto">
          Turning data into insights, ideas into innovation, and challenges into
          opportunities.
        </p>
      </section>

      {/* top solutions */}
      <SolutionSection />

      {/* mission, vision, value */}
      <section className="tw-w-[90%] xl:tw-w-[85%] tw-max-w-[1000px] tw-mb-20 tw-mx-auto">
        <Slider />
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
}
