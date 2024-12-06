import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from "next/image";
// import conference1 from "@/asset/images/conference/conference1.png";
// import conference2 from "@/asset/images/conference/conference2.png";

// import conference1 from "@/asset/svgs/conference1.svg";
// import conference2 from "@/asset/svgs/conference2.svg";

import conference1 from "../../../public/images/conference/conference1.png";
import conference2 from "../../../public/images/conference/conference2.png";

import Button from "../components/button/button";

const ConferencesPage = () => {
  return (
    <main className="tw-min-h-screen tw-mx-auto">
      <Navbar />

      <div className="tw-w-[90%] xl:tw-w-[85%] tw-max-w-[1000px] tw-mx-auto tw-text-[#4F4F4F] tw-mb-20">
        <img
          src="/images/conference/conference1.png"
          alt="conference image"
          className="tw-w-full tw-h-full tw-block"
        />

        <h2 className="tw-text-[#131313] tw-text-xl sm:tw-text-3xl sm:tw-leading-[40px] tw-font-bold tw-my-5">
          THE ANNUAL GLOBAL YOUTH BUSINESS FORUM & EXPO 2024, THE 4TH EDITION
        </h2>

        <p className="tw-mb-5 sm:tw-text-xl tw-leading-[26px] sm:tw-leading-[30px]">
          Experience the 4th Annual Global Youth Business Forum & Expo 2024 in
          Toronto, Canada — an unparalleled networking event tailored for Youth
          Entrepreneurs, Business Owners, and Start-ups, particularly those
          affected by the COVID-19 pandemic. With over 400 delegates,
          interactive workshops, and expert sessions, this event promises to
          deliver top-of-the-line speakers, cutting-edge solutions, and
          invaluable networking opportunities. Explore new trends, gain
          insights, and seize incredible business prospects—all while connecting
          with like-minded individuals who share your passion for
          entrepreneurship.
        </p>

        <p className="tw-mb-5 sm:tw-text-xl tw-leading-[26px] sm:tw-leading-[30px]">
          Under the theme "<b>Connect to the Business World and Grow</b>," the
          forum aims to empower youth by providing them with enterprise
          development services and business opportunities. Engage in panel
          discussions, workshops, and mentorship sessions designed to address
          the challenges faced by young entrepreneurs and equip them with the
          skills and knowledge needed to thrive in the business world. Join us
          at the Global Youth Business Forum & Expo 2024 and embark on a journey
          of learning, collaboration, and empowerment.
        </p>

        <p className="tw-mb-5 sm:tw-text-xl tw-leading-[26px] sm:tw-leading-[30px]">
          Visitors to Canada require a valid passport and many visitors require
          a visitor’s visa. Obtaining a travel Visa is the responsibility of the
          participants. We will assist you by providing an invitation letter for
          registered participants but we are not an authority on Visa issues,
          nor can we help with expediting the Visa process.  Normally you/your
          spouse must be registered participant/s to be considered for Visa.
          Therefore please register early and prepare for visa. 
        </p>

        <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-8 sm:tw-items-center">
          <a className="tw-shrink-0" href="/conferences/youth-forum">
            <Button buttonText="Fees & registration" />
          </a>
          <p className="tw-text-[#4F4F4FB2] sm:tw-text-base tw-text-xs">
            Note: International Participants, Invitation Letters are ready to be
            issued embedded with IRCC Code.
          </p>
        </div>
      </div>

      <div className="tw-w-[90%] xl:tw-w-[85%] tw-max-w-[1000px] tw-mx-auto tw-text-[#4F4F4F] tw-mb-28">
        <img
          src="/images/conference/conference2.png"
          alt="conference image"
          className="tw-w-full tw-h-full tw-block"
        />

        <h2 className="tw-text-[#131313] tw-text-xl sm:tw-text-3xl sm:tw-leading-[40px] tw-font-bold tw-my-5">
          FORUM LABO LYON 2024 - Laboratory Industry exhibition dedicated to
          Research, Production and Control
        </h2>

        <p className="tw-mb-5 sm:tw-text-xl tw-leading-[26px] sm:tw-leading-[30px]">
          FORUM LABO is the showcase for the laboratory supplier sector, where
          solutions, innovations, experience-sharing, training and best practice
          enable laboratories - both academic and private - to find their
          suppliers and partners to successfully complete their research,
          analysis, control and process projects.
        </p>

        <p className="tw-mb-5 sm:tw-text-xl tw-leading-[26px] sm:tw-leading-[30px]">
          You'll find a comprehensive market offering in 5 areas: Laboratory
          Consumables, Chemicals/Reagents, Equipment, Scientific Instrumentation
          and Services.
        </p>

        <button className="tw-border tw-border-[#0FE86D] tw-text-[#4F4F4F] tw-p-3 tw-px-5 tw-rounded-md tw-bg-white tw-text-sm sm:tw-text-base tw-font-medium">
          Coming soon
        </button>
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
};

export default ConferencesPage;
