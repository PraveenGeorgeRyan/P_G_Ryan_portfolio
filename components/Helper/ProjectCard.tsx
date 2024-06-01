import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  image: string;
}

const ProjectCard = ({
  title,
  tech1,
  tech2,
  tech3,
  tech4,
  image,
}: ProjectCardProps) => {
  return (
    <div className="mx-auto grid w-4/5 grid-cols-1 items-center gap-10 pt-20 lg:grid-cols-2">
      <div className="relative cursor-pointer rounded-xl bg-gray-800 p-4 shadow-md transition-all duration-200 hover:-rotate-6">
        <Image
          src={`${image}`}
          alt={title}
          width={500}
          height={500}
          className="mx-auto rounded-xl object-contain shadow-md"
        />
      </div>
      <div>
        <h1 className="text-[25px] text-white">{title}</h1>
        <p className="mt-4 text-[15px] text-white opacity-65">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit
          ullam reiciendis commodi saepe suscipit culpa doloribus atque harum
          numquam quis eveniet esse dicta sit, itaque, accusantium, animi
          tempora maxime provident architecto veritatis accusamus. Commodi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          eius!
        </p>
        <div className="mt-[1.3rem] grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4">
          <h1 className="flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-white">
            {tech1}
          </h1>
          <h1 className="flex items-center justify-center rounded-lg bg-white px-6 py-3 text-center text-black">
            {tech2}
          </h1>
          <h1 className="flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3 text-center text-black">
            {tech3}
          </h1>
          <h1 className="flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-center text-white">
            {tech4}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
