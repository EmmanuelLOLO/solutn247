import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from "next/image";
import Button from "../components/button/button";

const PortfolioPage = () => {
  return (
    <main className="tw-min-h-screen tw-mx-auto">
      <Navbar />

      <section className="tw-w-[90%] xl:tw-w-[85%] tw-max-w-[1000px] tw-text-left tw-mx-auto tw-mb-32">
        <h2 className="tw-text-[#131313] tw-max-w-[700px] tw-text-xl sm:tw-text-3xl tw-font-bold tw-mb-2">
          Our works?
        </h2>
        <p className="tw-max-w-[722px] tw-text-base sm:tw-text-xl tw-mb-2 tw-text-[#4F4F4F]">
          We haven’t done much, we still love to have yours featured herein!
        </p>

        <img
          src="/images/portfolio-projects/fullstack.png"
          alt="fullstack project"
        />

        <img src="/images/portfolio-projects/travel.png" alt="travel project" />
        <img
          src="/images/portfolio-projects/design-process.png"
          alt="design process project"
        />
        <img
          src="/images/portfolio-projects/ndc-media.png"
          alt="ndc media project"
        />
        <img
          src="/images/portfolio-projects/concept-planner.png"
          alt="concept planning project"
        />
        <img
          src="/images/portfolio-projects/crypto-zone.png"
          alt="crypto zone project"
        />
        <img
          src="/images/portfolio-projects/business-site.png"
          alt="business site project"
        />
        <img
          src="/images/portfolio-projects/black-design.png"
          alt="black design project"
        />
      </section>

      <Footer />
    </main>
  );
};

export default PortfolioPage;
