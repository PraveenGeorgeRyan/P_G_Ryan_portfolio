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
            <ServiceCard title="Next JS Website" num="01" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ServiceCard title="React Website" num="02" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <ServiceCard title="FullStack Website" num="03" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ServiceCard title="CMS" num="04" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <ServiceCard title="MERN WebApp" num="05" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            <ServiceCard title="Bug Fixing" num="06" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
