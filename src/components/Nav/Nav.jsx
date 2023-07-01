import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full fixed top-0  text-brown-200 z-10">
      <div className="container mx-auto py-5 flex items-center justify-between">
        <div className="">
          <span className="text-3xl font-bold">Portfolio</span>
        </div>
        <ul className="hidden md:flex space-x-10 font-bold text-sm uppercase">
          <li className={`hover:text-gray-500 relative ${activeNavLink === "home" ? 'active' : ''}`}>
            <a href="#home" onClick={() => handleNavLinkClick("home")}>
              home
            </a>
            {activeNavLink === "home" && (
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0"></span>
            )}
          </li>
          <li className={`hover:text-gray-500 relative ${activeNavLink === "about" ? 'active' : ''}`}>
            <a href="#about" onClick={() => handleNavLinkClick("about")}>
              About
            </a>
            {activeNavLink === "about" && (
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0"></span>
            )}
          </li>
          <li className={`hover:text-gray-500 relative ${activeNavLink === "skills" ? 'active' : ''}`}>
            <a href="#skills" onClick={() => handleNavLinkClick("skills")}>
              Skills
            </a>
            {activeNavLink === "skills" && (
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0"></span>
            )}
          </li>
          <li className={`hover:text-gray-500 relative ${activeNavLink === "projects" ? 'active' : ''}`}>
            <a href="#projects" onClick={() => handleNavLinkClick("projects")}>
              Projects
            </a>
            {activeNavLink === "projects" && (
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0"></span>
            )}
          </li>
          <li className={`hover:text-gray-500 relative ${activeNavLink === "contact" ? 'active' : ''}`}>
            <a href="#contact" onClick={() => handleNavLinkClick("contact")}>
              Contact
            </a>
            {activeNavLink === "contact" && (
              <span className="absolute w-full h-0.5 bg-white bottom-0 left-0"></span>
            )}
          </li>
        </ul>
        <button
          id="hamburger"
          className={`md:hidden cursor-pointer z-20 rounded-full p-2`}
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
        </button>
        <ul
          id="menu"
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-indigo-900 absolute top-full w-32 p-10 rounded-b-3xl space-y-5 text-white text-center`}
        >
          <li>
            <a
              href="#home"
              onClick={() => handleNavLinkClick("home")}
              className={`block py-2 px-4 hover:bg-white hover:text-indigo-900 ${activeNavLink === "home" ? 'active' : ''}`}
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleNavLinkClick("about")}
              className={`block py-2 px-4 hover:bg-white hover:text-indigo-900 ${activeNavLink === "about" ? 'active' : ''}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => handleNavLinkClick("skills")}
              className={`block py-2 px-4 hover:bg-white hover:text-indigo-900 ${activeNavLink === "skills" ? 'active' : ''}`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => handleNavLinkClick("projects")}
              className={`block py-2 px-4 hover:bg-white hover:text-indigo-900 ${activeNavLink === "projects" ? 'active' : ''}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => handleNavLinkClick("contact")}
              className={`block py-2 px-4 hover:bg-white hover:text-indigo-900 ${activeNavLink === "contact" ? 'active' : ''}`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
