import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "a Next.js Developer",
        1000,
        "a React Developer",
        1000,
        "a Mobile Developer",
        1000,
        "a Designer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-[25px] font-bold text-white sm:text-[35px] lg:text-[40px] xl:text-[50px]"
      repeat={Infinity}
    />
  );
};

export default TypeWriteEffect;
