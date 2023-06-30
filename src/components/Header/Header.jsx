import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import "./Header.css";

const Header = () => {
  return (
    <header className="text-white" id="home">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Hello
            <Typewriter
              options={{
                strings: ["Welcome", "Bonjour", "Hola", "Ciao"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-lg mb-5">
            My name is John Doe, and I'm a passionate web developer with
            experience in front-end development. I love creating beautiful and
            functional websites.
          </p>
          <div className="flex space-x-4 my-4">
            <a
              href="https://twitter.com/"
              className="text-white hover:text-gray-300"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/"
              className="text-white hover:text-gray-300"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
          <a
            href="/resume.pdf"
            className="text-white bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded"
          >
            <FiDownload className="w-6 h-6 inline-block mr-2" />
            Download Resume
          </a>
        </div>
        <div className="">
          <img src="./pp.png" alt="Profile" className="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
