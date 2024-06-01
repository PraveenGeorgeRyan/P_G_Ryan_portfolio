import React from "react";
import ServiceCard from "./Helper/ServiceCard";

const Services = () => {
  return (
    <div id="services" className="bg-[#0b0c13] pt-5">
      <div className="bg-[#0b0c13] pb-12 pt-20">
        <div className="text-center">
          <p className="heading__mini">Popular Services</p>
          <h1 className="heading__primary">
            My Special <span className="text-yellow-300">Services</span> For You
          </h1>
        </div>
        <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-12 pt-20 md:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <ServiceCard
              title="Next JS Website"
              num="01"
              description="Build SEO-friendly websites with Next.js, a React framework known for its server-side rendering and static site generation."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServiceCard
              title="React Website"
              num="02"
              description="Develop interactive user interfaces with React, a popular JavaScript library for building dynamic web applications."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServiceCard
              title="FullStack Website"
              num="03"
              description="Create full-fledged websites with both frontend and backend functionalities using a combination of technologies."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServiceCard
              title="CMS"
              num="04"
              description="Implement a Content Management System (CMS) to allow clients to easily edit and manage their website content."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <ServiceCard
              title="MERN WebApp"
              num="05"
              description="Build modern web applications using the MERN stack (MongoDB, Express, React, and Node.js) for a robust and scalable solution."
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            <ServiceCard
              title="Bug Fixing"
              num="06"
              description="Identify and resolve bugs and glitches in your existing website or application to ensure smooth operation."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
