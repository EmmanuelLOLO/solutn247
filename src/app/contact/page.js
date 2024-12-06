"use client";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Image from "next/image";
import phoneIcon from "@/asset/svgs/phoneIcon.svg";
import emailIcon from "@/asset/svgs/emailIcon.svg";
import locationIcon from "@/asset/svgs/locationIcon.svg";
import contactFormEclipse from "@/asset/svgs/contactFormEclipse.svg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    toast.loading("Sending email");

    emailjs
      .sendForm("service_bo2f6lg", "template_95hvpj3", form.current, {
        publicKey: "WRc-82HY9It3kqG45"
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.dismiss(); // Remove loading toast on success
          toast.success("Message sent successfully!");
          form.current.reset(); // Reset the form after successful submission

          setTimeout(() => {
            toast.success(
              "Submission has been received and we would reply soon. In the mean time you can reach out to us on WhatsApp"
            );
          }, 5000);
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
    <main className="tw-min-h-screen tw-mx-auto">
      <Navbar />
      <ToastContainer />

      {/* contact form */}
      <section className="tw-text-center tw-mb-10 tw-w-[90%] xl:tw-w-[87%] tw-max-w-[1228px] tw-mx-auto">
        <h2 className="tw-text-[#131313] tw-max-w-[700px] tw-mx-auto tw-text-xl sm:tw-text-3xl tw-text-center tw-font-bold tw-mb-2">
          Contact Us
        </h2>
        <p className="tw-text-center tw-max-w-[722px] tw-mx-auto tw-text-base sm:tw-text-xl">
          Any question or remarks? Just write us a message!
        </p>

        <form
          className="tw-flex tw-flex-col lg:tw-flex-row tw-bg-white tw-p-3 tw-rounded-xl tw-max-w-[1100px] tw-mx-auto tw-drop-shadow-cardShadow tw-justify-between tw-mt-8 tw-mb-32"
          ref={form}
          onSubmit={sendEmail}
        >
          <section className="tw-bg-[#29166F] tw-rounded-xl lg:tw-max-w-[490px] lg:tw-w-[40%] tw-relative tw-text-left tw-p-5 sm:tw-p-8 tw-pb-20 tw-text-white">
            <h3 className="tw-text-lg sm:tw-text-2xl tw-font-semibold tw-mb-1">
              Contact Information
            </h3>
            <p className="tw-text-[#C9C9C9] sm:tw-mb-14 tw-mb-5">
              Drop us a message and we will update asap.
            </p>

            <div className="tw-flex tw-flex-col tw-gap-7">
              <div className="tw-flex tw-gap-3 tw-items-start">
                <Image src={phoneIcon} alt="phone icon" />
                <span> +44.247.692.0247</span>
              </div>

              <div className="tw-flex tw-gap-3 tw-items-start">
                <Image src={emailIcon} alt="phone icon" />
                <span> support@solutn247.com</span>
              </div>

              <div className="tw-flex tw-gap-3 tw-items-start">
                <Image src={locationIcon} alt="phone icon" />
                <span> 124 City Road, London EC1V 2NX, United Kingdom.</span>
              </div>
            </div>

            <Image
              src={contactFormEclipse}
              alt="eclipse"
              className="tw-absolute tw-bottom-0 tw-right-0"
            />
          </section>

          <section className="tw-grow lg:tw-p-8 tw-text-left tw-flex tw-flex-col max-lg:tw-mt-7">
            <div className="tw-flex max-sm:tw-flex-col sm:tw-gap-8 tw-gap-5 tw-mb-5 sm:tw-mb-10">
              <div className="tw-w-full">
                <p className="tw-text-sm tw-font-medium tw-text-[#8D8D8D] tw-mb-1">
                  First Name
                </p>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="tw-outline-none tw-border-b-[1px] tw-border-[#8D8D8D] tw-w-full tw-p-2"
                />
              </div>
              <div className="tw-w-full">
                <p className="tw-text-sm tw-font-medium tw-text-[#8D8D8D] tw-mb-1">
                  Last Name
                </p>
                <input
                  type="text"
                  name="last_name"
                  required
                  className="tw-outline-none tw-border-b-[1px] tw-border-[#8D8D8D] tw-w-full tw-p-2"
                />
              </div>
            </div>

            <div className="tw-flex max-sm:tw-flex-col sm:tw-gap-8 tw-gap-5 tw-mb-5 sm:tw-mb-10">
              <div className="tw-w-full">
                <p className="tw-text-sm tw-font-medium tw-text-[#8D8D8D] tw-mb-1">
                  Email
                </p>
                <input
                  type="email"
                  name="email"
                  required
                  className="tw-outline-none tw-border-b-[1px] tw-border-[#8D8D8D] tw-w-full tw-p-2"
                />
              </div>
              <div className="tw-w-full">
                <p className="tw-text-sm tw-font-medium tw-text-[#8D8D8D] tw-mb-1">
                  Phone Number
                </p>
                <input
                  type="number"
                  name="phone_number"
                  minLength={11}
                  required
                  className="tw-outline-none tw-border-b-[1px] tw-border-[#8D8D8D] tw-w-full tw-p-2"
                />
              </div>
            </div>

            <p className="tw-text-sm tw-font-semibold tw-text-[#011C2A] tw-mb-2">
              Select Subject?
            </p>
            <div className="tw-flex tw-items-center tw-flex-wrap tw-gap-2 tw-gap-x-4 tw-mb-10">
              <div>
                <input
                  type="radio"
                  name="subject"
                  value="General Inquiry"
                  required
                />
                <label className="tw-ml-2 tw-text-xs tw-mb-1">
                  General Inquiry
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="subject"
                  value="Service Inquiry"
                  required
                  defaultChecked
                />
                <label className="tw-ml-2 tw-text-xs tw-mb-1">
                  Service Inquiry
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="subject"
                  value="Partnership Inquiry"
                  required
                />
                <label className="tw-ml-2 tw-text-xs tw-mb-1">
                  Partnership Inquiry
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="subject"
                  value="Consulting Inquiry"
                  required
                />
                <label className="tw-ml-2 tw-text-xs tw-mb-1">
                  Consulting Inquiry
                </label>
              </div>
            </div>

            <div className="tw-mb-10">
              <p className="tw-text-sm tw-font-medium tw-text-[#8D8D8D] tw-mb-1">
                Message
              </p>
              <input
                type="text"
                name="message"
                required
                placeholder="Write your message.."
                className="tw-outline-none tw-border-b-[1px] tw-border-[#8D8D8D] tw-w-full tw-p-2"
              />
            </div>

            <button
              type="submit"
              className="tw-px-7 tw-rounded-md tw-p-4 tw-text-white tw-bg-[#F91616] tw-mb-10 tw-ml-auto"
            >
              Send Message
            </button>
          </section>
        </form>
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
};

export default ContactPage;
