import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface NavMobileProps {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ closeNav, showNav }: NavMobileProps) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} inset-x-0 bottom-0  z-[10000] size-full bg-black opacity-70 transition-all duration-500`}
      ></div>
      <ul
        className={`text-white ${navOpenStyle} fixed z-[10006] flex h-full w-3/5 flex-col items-center justify-center space-y-14 bg-red-600 transition-all delay-300 duration-300`}
      >
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#services">
            Services
          </a>
        </li>
        {/* <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#blog">
            Blog
          </a>
        </li> */}
        <li>
          <a className="nav__link text-[25px] sm:text-[30px]" href="#contact">
            Contact
          </a>
        </li>
        <XMarkIcon
          onClick={closeNav}
          className="absolute right-[1.4rem] top-[-1.4rem] size-[2.2rem] text-white"
        />
      </ul>
    </div>
  );
};

export default NavMobile;
