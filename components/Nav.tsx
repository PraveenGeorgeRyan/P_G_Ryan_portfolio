import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface NavProps {
  openNav: () => void;
}

const Nav = ({ openNav }: NavProps) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY < 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);

  const stickStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";

  return (
    <div
      className={`fixed ${stickStyle} z-[1000] w-full transition-all duration-300 `}
    >
      <div className="mx-auto flex h-[12vh] w-4/5 items-center justify-between">
        <div className="font-logo text-[18px] text-white">
          <span className="text-[30px] text-yellow-400 md:text-[40px]">PG</span>
          Ryan
        </div>
        <ul className="hidden items-center space-x-10 md:flex">
          <li>
            <a className="nav__link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav__link" href="#services">
              Services
            </a>
          </li>
          {/* <li>
            <a className="nav__link" href="#blog">
              Blog
            </a>
          </li> */}
          <li>
            <a className="nav__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={openNav}
          className="size-[2.3rem] rotate-180 text-white md:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
