import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import './Nav.css'

const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // You can add your theme toggle functionality here
  };

  return (
    <nav className="fixed top-0 w-full z-50 text-white text-center">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <a href="#home" className="font-bold text-3xl text-indigo-500">Mohiminul Islam</a>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li className=" rounded-lg px-2 bg-indigo-600">
                <a href="#home" className="">
                  Home
                </a>
              </li>
              <li className=" rounded-lg px-2 bg-indigo-600">
                <a href="#about" className="">
                  About
                </a>
              </li>
              <li className=" rounded-lg px-2 bg-indigo-600">
                <a href="#skills" className="">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className=" rounded-lg px-2 bg-indigo-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className=" rounded-lg px-2 bg-indigo-600">
                  Contact
                </a>
              </li>
            </ul>
            <div className="ml-4 cursor-pointer" onClick={toggleTheme}>
              {isDarkMode ? (
                <FiMoon className="w-6 h-6" />
              ) : (
                <FiSun className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
