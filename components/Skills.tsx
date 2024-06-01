/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SkillCard from "./Helper/SkillCard";

const Skills = () => {
  return (
    <div className="bg-black pb-12 pt-20">
      <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-8 lg:grid-cols-7">
        <div className="col-span-3">
          <p className="heading__mini">My Skills</p>
          <h1 className="heading__primary">
            Lets's Explore Popular{" "}
            <span className="text-yellow-300">Skills </span> & Experience
          </h1>
          <p className="my-6 text-[15px] text-white opacity-70">
            I have a wide range of skills and experience in web development,
            including front-end and back-end development, database management,
            and UI/UX design . I am always learning new technologies and
            improving my skills to provide the best service to my clients and
            employers in a fast-paced and challenging environment.
          </p>
          {/* <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-red-500 font-semibold text-white shadow-2xl transition-all before:absolute before:size-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:size-56">
            <span className="relative z-10">Learn More</span>
          </button> */}
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
              <SkillCard
                title="React"
                image="/images/react.svg"
                percent="90%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="100"
            >
              <SkillCard title="CSS" image="/images/css.svg" percent="95%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="200"
            >
              <SkillCard
                title="JavaScript"
                image="/images/js.svg"
                percent="77%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="300"
            >
              <SkillCard
                title="TypeScript"
                image="/images/ts.svg"
                percent="70%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="400"
            >
              <SkillCard title="HTML" image="/images/html.svg" percent="75%" />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="500"
            >
              <SkillCard
                title="Node JS"
                image="/images/node.svg"
                percent="75%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="600"
            >
              <SkillCard
                title="MongoDB"
                image="/images/mongo.svg"
                percent="65%"
              />
            </div>
            <div
              data-aos="flip-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay="700"
            >
              <SkillCard
                title="Python"
                image="/images/python.svg"
                percent="60%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
