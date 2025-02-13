import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
  return (
    <div id="projects" className="bg-gray-900 pt-5">
      <div className="bg-gray-900 pb-12 pt-20">
        <div className="text-center">
          <p className="heading__mini">Recent Works</p>
          <h1 className="heading__primary">
            Some of My Best <span className="text-yellow-300">Projects</span>
          </h1>
        </div>
        <a
          href="https://www.zionel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            title="Zionel - Digital Marketing Agency"
            tech1="React"
            tech2="Next.js"
            tech3="CSS"
            tech4="TypeScript"
            image="/images/p6-1.png"
            description="A comprehensive digital marketing agency website that showcases services, portfolio, and client success stories. It features a modern, responsive design with interactive elements and smooth animations. The website is built using React and Next.js, incorporating best practices in UI/UX design to ensure an engaging and professional presentation for potential clients."
          />
        </a>
        <a
          href="https://dr-suvarchala-womencare-j29o.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectCard
            title="WomenCare Hospital Website"
            tech1="React"
            tech2="Next.js"
            tech3="Tailwind CSS"
            tech4="TypeScript"
            image="/images/p5-1.png"
            description="This is a dynamic website for a women's health care center, designed to provide a user-friendly and visually appealing interface for patients and visitors. It offers a range of features such as online appointment booking, patient registration, user subscriptions, and more. The website is built using React, Next.js, and Tailwind CSS, ensuring a seamless and responsive user experience."
          />
        </a>
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
            description="This is an AI-powered image editor that allows users to enhance, modify, and create stunning images with ease. Utilizing advanced AI algorithms, it offers features like background removal, color correction, and image upscaling, making professional-grade editing accessible to everyone. The application is built using React, Next.js, and Tailwind CSS, ensuring a seamless and intuitive user experience."
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
            description="A robust video calling application designed for seamless, real-time communication. It offers high-definition video, screen sharing, and a user-friendly interface, making it ideal for both personal and professional use. The application is built using React, Next.js, and Tailwind CSS, ensuring a smooth and responsive user experience."
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
            description="A pixel-perfect clone of the Apple website, showcasing responsive design, smooth animations, and a seamless user experience. This project replicates the elegant design and functionality that Apple is known for. The website is built using React, Three.js, and Tailwind CSS, ensuring a smooth and intuitive user experience."
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
            description="A comprehensive website for a dental care service, offering easy appointment scheduling, service descriptions, and patient testimonials. The design emphasizes clarity and accessibility, making it user-friendly for all patients. The website is built using React, Next.js, and Tailwind CSS, ensuring a smooth and responsive user experience."
          />
        </a>
      </div>
    </div>
  );
};

export default Project;
