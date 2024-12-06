"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/asset/svgs/logo.svg";
import menuIcon from "@/asset/svgs/menuIcon.svg";
import Button from "../button/button";
// import { Offcanvas } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
// import "tailwindcss/tailwind.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="tw-flex tw-justify-between tw-items-center tw-py-5 tw-mb-14 tw-w-[90%] xl:tw-w-[85%] tw-max-w-[1000px] tw-mx-auto tw-relative">
      <a href="/">
        <Image src={logo} alt="company logo" className="max-sm:tw-w-[170px]" />
      </a>
      {/* <div className="hidden items-center lg:flex gap-14">
        <a href="/portfolio" className="nav-link font-medium">
          Portfolio
        </a>
        <a href="/#solutions" className="nav-link font-medium">
          Solutions
        </a>
      </div> */}

      {/* <div className="flex">
        <a
          href="https://api.whatsapp.com/send/?phone=447511014914&text&type=phone_number&app_absent=0"
          target="_blank"
          className="hidden lg:block"
        >
          <button className="px-6 p-3 hover:scale-[1.04] transition-all font-medium text-sm sm:text-base rounded-xl mr-5 border">
            WhatsApp Chat
          </button>
        </a>
        <a href="/contact" className="hidden lg:block">
          <Button buttonText="Get in Touch" />
        </a>
      </div> */}

      <div className="tw-hidden tw-items-center lg:tw-flex tw-gap-7">
        <a href="/portfolio" className="nav-link tw-font-medium">
          Portfolio
        </a>
        <a href="/#solutions" className="nav-link tw-font-medium">
          Solutions
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=447511014914&text&type=phone_number&app_absent=0"
          target="_blank"
          className="tw-hidden lg:tw-block"
        >
          <button className="tw-px-6 tw-p-3 hover:tw-scale-[1.04] tw-transition-all tw-font-medium tw-text-sm sm:tw-text-base tw-rounded-xl tw-border">
            WhatsApp Chat
          </button>
        </a>
        <a href="/contact" className="tw-hidden lg:tw-block">
          <Button buttonText="Get in Touch" />
        </a>
      </div>

      <Image
        src={menuIcon}
        alt="menu icon"
        className="lg:tw-hidden"
        onClick={() => setShowMenu(!showMenu)}
      />

      <div
        className={`tw-fixed tw-top-0 tw-h-full tw-bg-white tw-transition-all tw-ease-in-out tw-duration-1000 tw-z-50 ${
          showMenu ? "tw-w-64 tw-right-0" : "tw-w-0 tw-right-[-100%]"
        } `}
      >
        <div className={`tw-flex tw-flex-col tw-items-end tw-p-5`}>
          <button className="tw-text-4xl tw-mb-10" onClick={toggleMenu}>
            &times;
          </button>

          <a
            href="/portfolio"
            className="tw-mb-3"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </a>
          <a
            href="/#solutions"
            className="tw-mb-3"
            onClick={() => setShowMenu(false)}
          >
            Solutions
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=447511014914&text&type=phone_number&app_absent=0"
            target="_blank"
            className="tw-mb-3"
            onClick={() => setShowMenu(false)}
          >
            WhatsApp
          </a>
          <a href="/contact" onClick={() => setShowMenu(false)}>
            Contact
          </a>
        </div>
      </div>
      {/* backdrop effect */}
      {showMenu && (
        <div
          className="tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-25"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
