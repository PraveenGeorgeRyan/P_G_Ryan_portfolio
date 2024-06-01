import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React from "react";

interface ServiceCardProps {
  title: string;
  num: string;
}

const iconMapping = {
  "01": ServerIcon,
  "02": CommandLineIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon,
};

const ServiceCard = ({ title, num }: ServiceCardProps) => {
  const IconComponent =
    (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon;

  return (
    <div className=" custom__service relative z-[100] rounded-2xl bg-black p-6 text-center shadow-md">
      <IconComponent className="relative z-[1] mx-auto w-20 text-yellow-300" />
      <h1 className="relative z-[1] mt-4 text-[25px] text-white">{title}</h1>
      <p className="mt-[0.8rem] text-[15px] text-white opacity-60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lectus
        nulla at volutpat diam ut.{" "}
      </p>
      <p className="absolute right-4 top-3 text-[1.6rem] font-bold text-white">
        {num}
      </p>
    </div>
  );
};

export default ServiceCard;
