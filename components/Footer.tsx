/* eslint-disable react/no-unescaped-entities */
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black pb-12 pt-20">
      <div className="mx-auto grid w-4/5 grid-cols-1 gap-8 border-b-[1.4px] border-gray-600 border-opacity-45 pb-5 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="font-logo text-[18px] text-white">
            <span className="text-[30px] text-yellow-400 md:text-[40px]">
              PG
            </span>
            Ryan
          </div>
          <h1 className="mt-2 text-[14px] text-white opacity-70">
            I help turn ideas into beautiful and functional websites.Let's
            collaborate to bring your vision to life!
          </h1>
          <p className="mt-[1.3rem] font-semibold text-yellow-300 underline">
            <a
              className="text-yellow-400 underline"
              href="mailto:p.g.ryan333gmail.com"
            >
              p.g.ryan333@gmail.com
            </a>{" "}
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="mb-[1.4rem] text-[17px] font-semibold text-white">
            Quick Links
          </h1>
          <div className="flex flex-col">
            <a
              href="#about"
              className="mb-4 cursor-pointer text-[15px] text-white opacity-80 hover:text-yellow-300"
            >
              About
            </a>
            <a
              href="#services"
              className="mb-4 cursor-pointer text-[15px] text-white opacity-80 hover:text-yellow-300"
            >
              Services
            </a>
            <a
              href="#projects"
              className="mb-4 cursor-pointer text-[15px] text-white opacity-80 hover:text-yellow-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="mb-4 cursor-pointer text-[15px] text-white opacity-80 hover:text-yellow-300"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="lg:mx-auto">
          <h1 className="mb-[1.4rem] text-[17px] font-semibold text-white">
            Address
          </h1>
          <div className="mt-4 flex items-center space-x-2">
            <MapPinIcon className="size-4 text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              Hyderabad , Telangana, India
            </p>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <EnvelopeIcon className="size-4 text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              <a href="mailto:p.g.ryan333gmail.com">p.g.ryan333@gmail.com</a>{" "}
            </p>
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <PhoneIcon className="size-4 text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +91 9705201373
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-[1.4rem] w-4/5 text-white opacity-70">
        &#169; Copyright PG Ryan 2024
      </div>
    </div>
  );
};

export default Footer;
