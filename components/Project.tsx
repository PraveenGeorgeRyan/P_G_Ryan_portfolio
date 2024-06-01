import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
  return (
    <div id="projects" className="bg-gray-900 pt-5">
      <div className="bg-gray-900 pb-12 pt-20">
        <div className="text-center">
          <p className="heading__mini">Recent Works</p>
          <h1 className="heading__primary">
            My Best <span className="text-yellow-300">Projects</span>
          </h1>
        </div>
        <ProjectCard
          title="AI SAAS application"
          tech1="React"
          tech2="Next.js"
          tech3="Tailwind CSS"
          tech4="TypeScript"
          image="/images/p1.png"
          description="This AI-powered SAAS application streamlines data analysis and decision-making processes, providing valuable insights for businesses."
        />
        <ProjectCard
          title="Video Calling Application"
          tech1="React"
          tech2="Next.js"
          tech3="Tailwind CSS"
          tech4="TypeScript"
          image="/images/p2.png"
          description="Built for seamless communication, this video calling application offers high-quality video chat with advanced features."
        />
        <ProjectCard
          title="FullStack Food Delivery App"
          tech1="React"
          tech2="Next.js"
          tech3="Tailwind CSS"
          tech4="MongoDB"
          image="/images/p4.png"
          description="This full-stack food delivery application allows users to browse menus, place orders, and track deliveries, all within a user-friendly interface."
        />
        <ProjectCard
          title="Travel Website"
          tech1="React"
          tech2="Next.js"
          tech3="Tailwind CSS"
          tech4="MongoDB"
          image="/images/p3.png"
          description="Plan your dream vacation with this interactive travel website. Explore destinations, book accommodations, and discover hidden gems with ease."
        />
      </div>
    </div>
  );
};

export default Project;
