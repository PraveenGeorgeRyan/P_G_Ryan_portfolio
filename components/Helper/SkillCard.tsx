import Image from "next/image";
import React from "react";

interface SkillCardProps {
  title: string;
  image: string;
  percent: string;
}

const SkillCard = ({ title, image, percent }: SkillCardProps) => {
  return (
    <div className="cursor-pointer rounded-lg bg-gray-900 p-6 text-center transition-all duration-300 hover:bg-red-700">
      <Image
        src={`${image}`}
        alt={title}
        width={80}
        height={80}
        className="mx-auto object-cover"
      />
      <h1 className="mt-4 text-[18px] font-[600] text-white">{title}</h1>
      <div className="mt-4 rounded-lg bg-black p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
