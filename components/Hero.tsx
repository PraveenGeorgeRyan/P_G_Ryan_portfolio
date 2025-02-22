import React from "react";
import Image from "next/image";
import Link from "next/link";
import TypeWriteEffect from "./Helper/TypeWriteEffect";

const Hero = () => {
  const handleDownloadCV = () => {
    const cvUrl = "/PraveenGeorgeRyan.pdf";

    // Create a new anchor element (a tag) dynamically
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "/PraveenGeorgeRyan.pdf"; // Set the downloaded file name

    // Simulate a click event on the anchor element to trigger download
    link.click();
  };
  return (
    <div className="custom-bg h-[85vh] w-screen pt-[4vh] md:h-screen md:pt-[12vh]">
      <div className="mx-auto flex h-full w-4/5 flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-40 md:grid-cols-2">
          <div>
            <h1 data-aos="fade-right" className="mb-[1.3rem] text-[#c4cfde]">
              WELCOME TO MY WORLD
            </h1>
            <div data-aos="fade-left" data-aos-delay="400">
              <h1 className="text-[25px] font-semibold leading-[2.6rem] text-white sm:text-[35px] lg:text-[40px] xl:text-[50px]">
                Hi, 
              </h1>
              <h1 className="pt-4 text-[15px] font-semibold leading-[2.6rem] text-white sm:text-[25px] lg:text-[30px] xl:text-[40px]">
                I&apos;m <span className="text-yellow-300">Praveen George Ryan</span>
              </h1>
              <TypeWriteEffect />
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="800"
              className="mt-[1.2rem] text-[15px] text-[#c4cfde] md:text-[17px]"
            >
              I am a Frontend Developer with a passion for web/app development.
              I specialize in building websites and mobile applications using
              modern technologies like Next.js, JavaScript, React/React Native and MongoDB.
            </p>
            <div className="mt-8 flex items-center space-x-6">
              <Link href="#contact">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden rounded-md bg-green-600   font-semibold text-white shadow-2xl transition-all before:absolute before:size-0 before:rounded-full before:bg-gray-800 before:duration-500 before:ease-out hover:before:size-56"
                >
                  <span className="relative z-10">Contact me</span>
                </button>
              </Link>
              <button
                onClick={handleDownloadCV} // Call the handleDownloadCV function on click
                data-aos="zoom-out"
                data-aos-delay="1600"
                className="before:ease relative h-12 w-40 overflow-hidden rounded-md bg-sky-500  font-semibold text-white shadow-2xl before:absolute before:left-0 before:-ml-2 before:size-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-800 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180"
              >
                <span className="relative z-10">Download CV</span>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="1200"
            className="hidden md:block"
          >
            <Image
              src="/images/hero-1.png"
              alt="hero"
              width={570}
              height={570}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
