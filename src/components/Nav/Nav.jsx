import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navlink = (
    <>
      <li className="hover:text-gray-500">
        <a href="#home">home</a>
      </li>
      <li className="hover:text-gray-500">
        <a href="#about">About</a>
      </li>
      <li className="hover:text-gray-500">
        <a href="#skills">Skills</a>
      </li>
      <li className="hover:text-gray-500">
        <a href="#projects">Projects</a>
      </li>
      <li className="hover:text-gray-500">
        <a href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <nav className="w-full fixed top-0 text-white  z-10 ">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="">
          <span className="text-3xl font-bold text-indigo-500 ">
            Mohiminul Islam
          </span>
        </div>
        <ul className="hidden md:flex space-x-10   font-bold text-sm uppercase">
          {navlink}
        </ul>
        <div
          id="hamburger"
          className={`md:hidden cursor-pointer z-20`}
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
        </div>
        <ul
          id="menu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-indigo-900 absolute top-full w-32 p-10 rounded-b-3xl space-y-5 text-white text-center`}
        >
          {navlink}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
