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
        <a
          href="https://imagener-phi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            title="AI SAAS application"
            tech1="React"
            tech2="Next.js"
            tech3="Tailwind CSS"
            tech4="TypeScript"
            image="/images/p1-1.png"
            description="This is an AI-powered image editor that allows users to enhance, modify, and create stunning images with ease. Utilizing advanced AI algorithms, it offers features like background removal, color correction, and image upscaling, making professional-grade editing accessible to everyone."
          />
        </a>
        <a
          href="https://pip-meet.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            title="Video Calling Application"
            tech1="React"
            tech2="Next.js"
            tech3="Tailwind CSS"
            tech4="TypeScript"
            image="/images/p2-1.png"
            description="A robust video calling application designed for seamless, real-time communication. It offers high-definition video, screen sharing, and a user-friendly interface, making it ideal for both personal and professional use."
          />
        </a>
        <a
          href="https://apple-website-green-psi.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            title="Apple Website Clone"
            tech1="React"
            tech2="Three js"
            tech3="Tailwind CSS"
            tech4="G SAP"
            image="/images/p3-1.png"
            description="A pixel-perfect clone of the Apple website, showcasing responsive design, smooth animations, and a seamless user experience. This project replicates the elegant design and functionality that Apple is known for."
          />
        </a>
        <a
          href="https://smilemakers-dentalcare.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            title="DentalCare Website"
            tech1="React"
            tech2="Next.js"
            tech3="Tailwind CSS"
            tech4="MongoDB"
            image="/images/p4-1.png"
            description="A comprehensive website for a dental care service, offering easy appointment scheduling, service descriptions, and patient testimonials. The design emphasizes clarity and accessibility, making it user-friendly for all patients."
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
