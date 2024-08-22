/* eslint-disable react/no-unescaped-entities */
import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="bg-black pt-5">
      <div className="-mt-16 bg-black pb-12">
        <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-8 pt-20 sm:pt-28 md:pt-40 lg:grid-cols-2">
          <div>
            <p className="heading__mini">About Me</p>
            <h1 className="heading__primary">
              Professional <span className="text-yellow-400">Website</span> for
              your business
            </h1>
            <p className="mt-[1.3rem] text-[15px] text-white opacity-75">
              I'm a passionate web developer with almost 1.5 years of
              experience, bringing expertise in frontend (UI/React), backend,
              and app development. I leverage the MERN Stack to create
              beautiful, user-friendly websites and applications that deliver
              real results. With a perfect completion rate on all projects I've
              undertaken and 15+ satisfied clients, I'm dedicated to turning
              your ideas into reality. I bring a positive, enthusiastic attitude
              and a love for web development, ensuring a smooth and successful
              collaboration.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-4">
                <CheckIcon className="size-8 text-yellow-400" />
                <p className="text-[18px] text-white">Frontend Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="size-8 text-yellow-400" />
                <p className="text-[18px] text-white">Backend Development</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="size-8 text-yellow-400" />
                <p className="text-[18px] text-white">Web Designing</p>
              </div>
              <div className="flex items-center space-x-4">
                <CheckIcon className="size-8 text-yellow-400" />
                <p className="text-[18px] text-white">Mern Stack Development</p>
              </div>
            </div>
          </div>
          <div className="lg:ml-auto">
            <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                className="bg-yellow-500 p-6 text-center"
              >
                <p className="text-[50px] font-bold text-black">1.5</p>
                <p className="text-[20px] font-semibold text-black">
                  Years Experience
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="100"
                className="bg-yellow-500 p-6 text-center"
              >
                <p className="text-[50px] font-bold text-black">15+</p>
                <p className="text-[20px] font-semibold text-black">
                  Happy Clients
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="200"
                className="bg-yellow-500 p-6 text-center"
              >
                <p className="text-[50px] font-bold text-black">12+</p>
                <p className="text-[20px] font-semibold text-black">
                  Projects Involved
                </p>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-center"
                data-aos-delay="300"
                className="bg-yellow-500 p-6 text-center"
              >
                <p className="text-[50px] font-bold text-black">11</p>
                <p className="text-[20px] font-semibold text-black">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
