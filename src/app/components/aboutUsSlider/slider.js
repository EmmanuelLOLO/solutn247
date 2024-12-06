import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import ourVision from "@/asset/svgs/ourVision.svg";
import ourMission from "@/asset/svgs/ourMission.svg";
import ourValue from "@/asset/svgs/ourValue.svg";
import Image from "next/image";

const Slider = () => {
  const [activePageInSlider, setActivePageInSlider] = useState(0);

  const pagesInSlider = [
    { title: "Our Mission", underLine: "#FFD412" },
    { title: "Our Vision", underLine: "#EBE6FC" },
    { title: "Our Value", underLine: "#A1EDC1" }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment active page or reset to the first page if at the end
      setActivePageInSlider((prevPage) =>
        prevPage === pagesInSlider.length - 1 ? 0 : prevPage + 1
      );
    }, 4500); // Set interval to match carousel auto-sliding interval

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [activePageInSlider, pagesInSlider.length]);

  return (
    <div className="tw-flex tw-flex-col tw-gap-2 lg:tw-gap-4 tw-items-center tw-justify-around" id="mvc">
      <div className="tw-w-full tw-flex tw-gap-2 tw-items-center tw-justify-around">
        {pagesInSlider.map(({ title, underLine }, index) => (
          <div
            key={index}
            className={`tw-relative tw-items-center tw-cursor-pointer tw-text-base sm:tw-text-xl tw-mb-3 tw-font-medium tw-text-[#4F4F4F] ${
              index === activePageInSlider ? "active-page" : null
            }`}
            onClick={() => setActivePageInSlider(index)} // Update active page on click
          >
            {title}
            {index === activePageInSlider && (
              <div
                className="tw-absolute tw-transition-width tw-delay-500 tw-ease-in-out tw-duration-700 tw-w-[75%] tw-h-[4px] tw-bg-blue-500 tw-bottom-[-8px] tw-left-0"
                style={{ backgroundColor: underLine }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <Carousel
        showArrows={false}
        infiniteLoop={true}
        interval={4500}
        autoPlay={true}
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        centerMode={true}
        transitionTime={2000}
        showIndicators={false}
        selectedItem={activePageInSlider} // Sync carousel with active page
        onChange={(index) => setActivePageInSlider(index)} // Update active page on carousel change
      >
        <div style={{ width: "100%" }}>
          <Image src={ourMission} className="tw-w-full" />
        </div>
        <div style={{ width: "100%" }}>
          <Image src={ourVision} className="tw-w-full" />
        </div>
        <div style={{ width: "100%" }}>
          <Image src={ourValue} className="tw-w-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
