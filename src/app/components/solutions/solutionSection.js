"use client";
import { useState, useEffect } from "react";
import whatsappIcon from "@/asset/svgs/whatsappIcon.svg";
import webDevelopmentIcon from "@/asset/svgs/webDevelopmentIcon.svg";
import brandingIcon from "@/asset/svgs/brandingIcon.svg";
import consultingIcon from "@/asset/svgs/consultingIcon.svg";
import socialMediaIcon from "@/asset/svgs/socialMediaIcon.svg";
import uiuxIcon from "@/asset/svgs/uiuxIcon.svg";
import WhatsappAi from "@/app/components/solutions/whatsappAi";
import WebDevelopment from "@/app/components/solutions/webDevelopment";
import UIUX from "@/app/components/solutions/UiUx";
import Branding from "@/app/components/solutions/branding";
import SolutionCard from "@/app/components/solutionCard/solutionCard";
import Button from "../button/button";
import SocialMedia from "./socialMedia";
import Consulting from "./consulting";

const SolutionSection = () => {
  // const [activeTopSolution, setActiveTopSolution] = useState([
  //   "WhatsApp Ai Bot",
  //   "Web Development",
  //   "UI/UX Design",
  //   "Branding & Design",
  //   "Social Media Mgt.",
  //   "IT Consulting"
  // ]);

  // all solutions are active initially so they have that bright color
  const [activeTopSolution, setActiveTopSolution] = useState([
    "WhatsApp",
    "Web",
    "UI/UX",
    "Branding",
    "Social-Media",
    "Consulting"
  ]);

  const topSolutions = [
    {
      icon: whatsappIcon,
      title: "WhatsApp Ai Bot",
      url: "WhatsApp",
      color: "#A1EEC1",
      component: <WhatsappAi />
    },
    {
      icon: webDevelopmentIcon,
      title: "Web Development",
      url: "Web",
      color: "#E6EBF3",
      component: <WebDevelopment />
    },
    {
      icon: uiuxIcon,
      title: "UI/UX Design",
      url: "UI/UX",
      color: "#A1EDDB",
      component: <UIUX />
    },
    {
      icon: brandingIcon,
      title: "Branding & Design",
      url: "Branding",
      color: "#EDEAA1",
      component: <Branding />
    },
    {
      icon: socialMediaIcon,
      title: "Social Media Mgt.",
      url: "Social-Media",
      color: "#A1EDC1",
      component: <SocialMedia />
    },
    {
      icon: consultingIcon,
      title: "IT Consulting",
      url: "Consulting",
      color: "#E6EBF3",
      component: <Consulting />
    }
  ];

  // each time the user lands on the homepage, check if a solution hashtag is attached in the url
  // if there is then navigate to that particular solution

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      console.log(hash);
      // remove the %20 representing spaces
      let newHash = hash.replace("#", "");
      console.log(newHash);

      // sometimes the hash might be something other than the solutions hashtags so first chek if the hash is included in the array of solutions
      if (activeTopSolution.includes(newHash)) {
        setActiveTopSolution(newHash);
      } else {
        setActiveTopSolution([
          "WhatsApp",
          "Web",
          "UI/UX",
          "Branding",
          "Social-Media",
          "Consulting"
        ]);
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Call handleHashChange when component mounts to get the initial hash
    handleHashChange();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section
      className="tw-w-[90%] xl:tw-w-[85%] tw-max-w-[1000px] tw-mx-auto tw-mb-12"
      id="solutions"
    >
      <p className="tw-text-[#4F4F4F] tw-text-xl sm:tw-text-2xl tw-mb-10">
        Top Solutions for you
      </p>

      {/* make content of active box render under the clicked item's row on large screens */}
      {topSolutions?.map((solution, index) => (
        <div className="max-lg:tw-hidden max-lg:tw-w-0 max-lg:tw-h-0">
          <div className="lg:tw-grid max-lg:tw-hidden max-lg:tw-w-0 max-lg:tw-h-0 tw-grid-cols-3 tw-gap-7">
            {topSolutions
              ?.slice(index * 3, index * 3 + 3)
              ?.map(({ title, icon, color, url }, index) => (
                <div key={index}>
                  <SolutionCard
                    icon={icon}
                    title={title}
                    url={url}
                    color={color}
                    activeTopSolution={activeTopSolution}
                    // if the open section is clicked again close it otherwise open it
                    // onClick={() => setActiveTopSolution(title)}
                    onClick={() => {
                      if (activeTopSolution === url) {
                        setActiveTopSolution([
                          "WhatsApp",
                          "Web",
                          "UI/UX",
                          "Branding",
                          "Social-Media",
                          "Consulting"
                        ]);
                      } else {
                        setActiveTopSolution(url);
                      }
                    }}
                  />
                </div>
              ))}
          </div>

          <div className="lg:tw-grid max-lg:tw-hidden max-lg:tw-w-0 max-lg:tw-h-0">
            {
              topSolutions
                ?.slice(index * 3, index * 3 + 3)
                ?.find((solution) => solution.url === activeTopSolution)
                ?.component
            }
          </div>
        </div>
      ))}

      {/* make content of active box render under the clicked item's row on medium screens */}
      {topSolutions?.map((solution, index) => (
        <div className="lg:tw-hidden max-md:tw-w-0 max-md:tw-h-0 lg:tw-w-0 lg:tw-h-0">
          <div className="lg:tw-hidden max-md:tw-hidden md:tw-grid tw-grid-cols-2 tw-gap-7">
            {topSolutions
              ?.slice(index * 2, index * 2 + 2)
              ?.map(({ title, icon, color, url }, index) => (
                <div key={index}>
                  <SolutionCard
                    icon={icon}
                    title={title}
                    url={url}
                    color={color}
                    activeTopSolution={activeTopSolution}
                    // onClick={() => setActiveTopSolution(url)}
                    onClick={() => {
                      if (activeTopSolution === url) {
                        setActiveTopSolution([
                          "WhatsApp",
                          "Web",
                          "UI/UX",
                          "Branding",
                          "Social-Media",
                          "Consulting"
                        ]);
                      } else {
                        setActiveTopSolution(url);
                      }
                    }}
                  />
                </div>
              ))}
          </div>

          <div className="lg:tw-hidden max-md:tw-hidden md:tw-grid">
            {
              topSolutions
                ?.slice(index * 2, index * 2 + 2)
                ?.find((solution) => solution.url === activeTopSolution)
                ?.component
            }
          </div>
        </div>
      ))}

      {/* make content of active box render under the clicked item's row on small screens */}
      {topSolutions?.map((solution, index) => (
        <div key={index}>
          <div className="md:tw-hidden md:tw-w-0 md:tw-h-0 sm:tw-grid tw-grid-cols-1 tw-gap-7">
            {topSolutions
              ?.slice(index, index + 1)
              ?.map(({ title, icon, color, url }, index) => (
                <div key={index}>
                  <SolutionCard
                    icon={icon}
                    title={title}
                    url={url}
                    color={color}
                    activeTopSolution={activeTopSolution}
                    // onClick={() => setActiveTopSolution(url)}
                    onClick={() => {
                      if (activeTopSolution === url) {
                        setActiveTopSolution([
                          "WhatsApp",
                          "Web",
                          "UI/UX",
                          "Branding",
                          "Social-Media",
                          "Consulting"
                        ]);
                      } else {
                        setActiveTopSolution(url);
                      }
                    }}
                  />
                </div>
              ))}
          </div>
          <div className="md:tw-hidden md:tw-w-0 md:tw-h-0 sm:tw-grid">
            {
              topSolutions
                ?.slice(index, index + 1)
                ?.find((solution) => solution.url === activeTopSolution)
                ?.component
            }
          </div>
        </div>
      ))}
    </section>
  );
};

export default SolutionSection;
