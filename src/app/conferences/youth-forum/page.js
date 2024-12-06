"use client";
import { useEffect } from "react";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import Image from "next/image";
// import conference1 from "@/asset/images/conference/conference1.png";
// import conference1 from "@/asset/svgs/conference1.svg";

import conference1 from "../../../../public/images/conference/conference1.png";

import Button from "@/app/components/button/button";

const YouthForumConference = () => {
  const tickets = [
    {
      title: "General/Listener International",
      price: "$700 CAD",
      detail: "All delegates that don't fall under other categories ",
      paymentLink: "https://www.paypal.com/ncp/payment/M88SY2NWWAPNJ",
    },
    {
      title: "General/Listener Canadian",
      price: "$320 CAD",
      detail: "All delegates that don't fall under other categories ",
      paymentLink: "https://www.paypal.com/ncp/payment/VPHHPQPJQJVFN",
    },
    {
      title: "Youth Start-ups",
      price: "$630 CAD",
      detail:
        "Youth Start-ups must provide evidence while registering for the event. Free Exhibition ",
      paymentLink: "https://www.paypal.com/ncp/payment/ZGAFSNVTCAN54",
    },
    {
      title: "Canadian Students",
      price: "$280 CAD",
      detail: "Student Identification is required and Institution name ",
      paymentLink: "https://www.paypal.com/ncp/payment/VBRHUQ2WXHCAS",
    },
    {
      title: "International Students",
      price: "$620 CAD",
      detail:
        "Student Identification, Letter from the Institution is required ",
      paymentLink: "https://www.paypal.com/ncp/payment/4HBUUUDVYZKNG",
    },
    {
      title: "Non-Profits/Companies",
      price: "$670 CAD",
      detail:
        "All Non-Profits must provide evidence of operation by providing a letter before registering. ",
      paymentLink: "https://www.paypal.com/ncp/payment/C2G3M66C8882E",
    },
  ];

  const handlePayment = (link) => {
    // width and height of the window
    const width = 600;
    const height = 600;

    //to center the window
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    // Combining parameters
    const features = `width=${width},height=${height},left=${left},top=${top}`;

    //open a new window and specify URL and properties for the new window
    const newWindow = window.open(link, "_blank", features);

    // focus on the new window
    newWindow.focus();
  };

  return (
    <main className="tw-min-h-screen tw-mx-auto">
      <Navbar />

      <div className="tw-w-[90%] xl:tw-w-[85%] tw-max-w-[1000px] tw-mx-auto tw-text-[#4F4F4F] tw-mb-20">
        <img
          src="/images/conference/conference1.png"
          alt="conference image"
          className="tw-w-full tw-h-full tw-block"
          // objectFit="cover"
          // placeholder="blur"
        />

        <h2 className="tw-text-[#131313] tw-text-xl sm:tw-text-3xl sm:tw-leading-[40px] tw-font-bold tw-my-5">
          THE ANNUAL GLOBAL YOUTH BUSINESS FORUM & EXPO 2024, THE 4TH EDITION
        </h2>

        <p className="tw-mb-5 sm:tw-text-xl tw-leading-[26px] sm:tw-leading-[30px]">
          Early bird registration closes April 31, 2024 - REGISTER NOW.
        </p>

        <section className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-7 tw-mb-10">
          {tickets?.map((ticket, index) => (
            <div
              key={index}
              className="tw-bg-[#EDEAA1] tw-p-5 tw-text-center tw-flex tw-flex-col hover:tw-scale-[1.1] tw-transition tw-ease-in-out"
            >
              <p className="sm:tw-text-xl tw-font-medium tw-mb-2">
                {ticket?.title}
              </p>
              <p className="tw-text-xl sm:tw-text-3xl tw-font-bold tw-mb-3">
                {ticket?.price}
              </p>
              <div className="tw-mt-auto">
                <Button
                  buttonText="Register now"
                  onClick={() => handlePayment(ticket?.paymentLink)}
                />
              </div>
              <p className="tw-text-sm tw-font-medium tw-mt-3">
                {ticket?.detail}
              </p>
            </div>
          ))}
        </section>

        <p className="tw-text-[#4F4F4FB2] sm:tw-text-base tw-text-xs">
          Note: There is NO Refund for International Attendees after being
          issued an Invitation Letter. Refunds: You must review your Ticket
          selection before you submit and confirm your order. Subject to the
          provisions below for cancelled and/or postponed events, there are no
          exchanges or refunds once the Ticket(s) have been purchased. For more
          information visit our website Purchase Policy.
        </p>
      </div>

      <Footer />
    </main>
  );
};

export default YouthForumConference;
