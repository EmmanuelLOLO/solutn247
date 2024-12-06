import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import Image from "next/image";

const WhatsappSlider = ({ sectors, activeSector, setActiveSector }) => {
  const handlePrevSector = () => {
    const prevIndex =
      sectors.findIndex((sector) => sector.name === activeSector.name) - 1;
    const newIndex = prevIndex < 0 ? sectors.length - 1 : prevIndex;
    setActiveSector(sectors[newIndex]);
  };

  const handleNextSector = () => {
    const nextIndex =
      (sectors.findIndex((sector) => sector.name === activeSector.name) + 1) %
      sectors.length;
    setActiveSector(sectors[nextIndex]);
  };

  console.log(sectors);

  return (
    <div className="tw-flex sm:tw-gap-5 tw-gap-2 tw-mb-14 tw-items-center">
      <button
        className="carousel-button prev-button sm:tw-w-[50px] tw-text-xl sm:tw-h-[50px] tw-min-w-[35px] tw-min-h-[35px] tw-bg-white sm:tw-text-3xl tw-rounded-full tw-drop-shadow-md"
        onClick={handlePrevSector}
      >
        {"<"}
      </button>

      <Carousel
        slide={true}
        activeIndex={sectors.findIndex(
          (sector) => sector.name === activeSector.name
        )}
        onSelect={(index) => setActiveSector(sectors[index])} //change the active sector accurately when the active index changes
        interval={null} //disable auto slide
        className="w-full"
        touch={false}
        controls={false}
        indicators={false}
      >
        {sectors?.map((sector, index) => (
          <Carousel.Item key={index}>
            <img
              src={sector?.image}
              alt={`${sector?.name} image`}
              className="tw-w-full tw-h-full"
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <button
        className="carousel-button next-button sm:tw-w-[50px] tw-text-xl sm:tw-h-[50px] tw-min-w-[35px] tw-min-h-[35px] tw-bg-white sm:tw-text-3xl tw-rounded-full tw-drop-shadow-md"
        onClick={handleNextSector}
      >
        {">"}
      </button>
    </div>
  );
};

export default WhatsappSlider;
