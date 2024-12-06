"use client";
import { useRef } from "react";
import Image from "next/image";
import twitterIcon from "@/asset/svgs/twitterIcon.svg";
import linkedInIcon from "@/asset/svgs/linkedInIcon.svg";
import facebookIcon from "@/asset/svgs/facebookIcon.svg";
import instagramIcon from "@/asset/svgs/instagramIcon.svg";
import flags from "@/asset/svgs/flags.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.loading("Subscribing...");

    emailjs
      .sendForm("service_bo2f6lg", "template_38eb2hb", form.current, {
        publicKey: "WRc-82HY9It3kqG45"
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.dismiss(); // Remove loading toast on success
          toast.success("Subscribed successfully!");
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error);
          toast.dismiss(); // Remove loading toast on success
          if (error?.text) {
            toast.error(error?.text);
          } else {
            toast.error("Something went wrong. Please try again");
          }
        }
      );
  };

  return (
    <div className="tw-w-[90%] xl:tw-w-[87%] tw-max-w-[1228px] tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-5 tw-pb-12">
      <ToastContainer />
      <div className="tw-w-full tw-max-w-[470px]">
        <h2 className="tw-text-3xl tw-leading-[35px] sm:tw-text-4xl tw-mb-4 sm:tw-leading-[49px]">
          Ready to upscale your <br /> Business? Let us work <br /> together.{" "}
        </h2>
        <a href="/contact">
          <button className="tw-bg-[#131313] tw-px-6 sm:tw-px-10 tw-p-3 tw-mb-14 tw-text-sm sm:tw-text-base tw-rounded-md tw-text-white">
            Get in touch
          </button>
        </a>

        <form ref={form} onSubmit={sendEmail}>
          <div className="tw-max-w-[400px] tw-flex tw-items-center tw-justify-between tw-border tw-rounded-md sm:tw-p-3 tw-p-2 tw-gap-3">
            <input
              type="email"
              name="subscriber"
              required
              placeholder="Enter email"
              className="focus:tw-outline-none tw-grow"
            />
            <button
              type="submit"
              value="Subscribe"
              className="tw-bg-[#20382B] tw-px-6 tw-p-2 tw-rounded-md tw-text-sm sm:tw-text-base tw-text-white"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div className="tw-w-full tw-grow">
        <div className="tw-text-[#667085] tw-flex lg:tw-justify-between tw-gap-5 tw-mb-6">
          <article className="tw-flex tw-flex-col">
            <p className="tw-mb-3 tw-text-[#98A2B3] tw-text-sm sm:tw-text-base">
              Navigation
            </p>
            <a className="tw-mb-2 tw-text-sm sm:tw-text-base" href="#mvc">
              Our MVCs
            </a>
            <a className="tw-mb-2 tw-text-sm sm:tw-text-base" href="#solutions">
              Solutions
            </a>
            <a className="tw-mb-2 tw-text-sm sm:tw-text-base" href="/portfolio">
              Portfolios
            </a>
            <a className="tw-mb-2 tw-text-sm sm:tw-text-base" href="/contact">
              Get in touch
            </a>
          </article>
          <article className="tw-flex tw-flex-col">
            <p className="tw-mb-3 tw-text-[#98A2B3] tw-text-sm sm:tw-text-base">
              Industry Solutions
            </p>
            <a
              className="tw-mb-2 tw-text-sm sm:tw-text-base"
              href="/#WhatsApp Ai Bot"
            >
              WhatsApp Chat Ai
            </a>
            <a
              className="tw-mb-2 tw-text-sm sm:tw-text-base"
              href="/#Branding & Design"
            >
              Design Agency
            </a>
            <a
              className="tw-mb-2 tw-text-sm sm:tw-text-base"
              href="/#UI/UX Design"
            >
              UI/UX Designs
            </a>
            <a
              className="tw-mb-2 tw-text-sm sm:tw-text-base"
              href="/#Web Development"
            >
              Web Development
            </a>
            <a
              className="tw-mb-2 tw-text-sm sm:tw-text-base"
              href="/#Social Media Mgt."
            >
              Social Media Mgt
            </a>
            <a
              className="tw-mb-2 tw-text-sm sm:tw-text-base"
              href="/conferences"
            >
              Int’l Conferences
            </a>
          </article>
          <article>
            <p className="tw-mb-3 tw-text-[#98A2B3] tw-text-sm sm:tw-text-base">
              Legal
            </p>
            <p className="tw-mb-2 tw-text-sm sm:tw-text-base">
              General information
            </p>
            <p className="tw-mb-2 tw-text-sm sm:tw-text-base">Privacy Policy</p>
            <p className="tw-mb-4 tw-text-sm sm:tw-text-base">Terms of Use</p>

            <Image src={flags} alt="flags icon" />
          </article>
        </div>

        <div className="tw-flex tw-gap-4 tw-mb-5 tw-text-sm sm:tw-text-base">
          <a
            className="tw-flex tw-items-center tw-gap-2"
            href="https://www.linkedin.com/company/solutn247/"
            target="_blank"
          >
            <Image src={linkedInIcon} alt="go to LinkedIn" />
            <span className="tw-text-[#667085]">LinkedIn</span>
          </a>
          <a
            className="tw-flex tw-items-center tw-gap-2"
            href="https://twitter.com/solutn247"
            target="_blank"
          >
            <Image src={twitterIcon} alt="go to Twitter" />
            <span className="tw-text-[#667085]">Twitter</span>
          </a>
          <a
            className="tw-flex tw-items-center tw-gap-2"
            href="https://www.instagram.com/solutn247/"
            target="_blank"
          >
            <Image src={instagramIcon} alt="go to Instagram" />
            <span className="tw-text-[#667085]">Instagram</span>
          </a>
          <a
            className="tw-flex tw-items-center tw-gap-2"
            href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61557927696143"
            target="_blank"
          >
            <Image src={facebookIcon} alt="go to Facebook" />
            <span className="tw-text-[#667085]">Facebook</span>
          </a>
        </div>

        <p className="tw-text-[#4F4F4F] tw-text-sm sm:tw-text-base">
          SOLUTN247 | {new Date()?.getFullYear()} All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
