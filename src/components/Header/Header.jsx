import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import "./Header.css";

const Header = () => {
  return (
    <header className="text-white" id="home">
      <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-28 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left lg:w-1/2">
          <h2 className="text-2xl mb-5">
            {" "}
            Hi There,
            <br /> I&apos;m{" "}
            <span className="text-brown-200 text-3xl font-bold">
              Mohiminul Islam
            </span>{" "}
            <br />
            And I&apos;m a
          </h2>
          <p className="text-4xl lg:text-5xl font-bold mb-6">
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "Web Developer",
                  "Mern Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="text-lg mb-5">
            I&apos;m a passionate web developer with experience in front-end
            development. I love exploring new technology in the world and creating beautiful and functional websites.
          </p>
          <div className="flex space-x-4 my-4">
            <a
              href="https://facebook.com/mohiminul.semon.7"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohiminul-semon-a29a131a9/"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/mohiminulsemon"
              className="text-white hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
          <a
            href="./resume.pdf"
            className="w-52 text-white bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded"
            target="_blank"
          >
            <FiDownload className="w-6 h-6 inline-block mr-2" />
            Download Resume
          </a>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <img
            src="./pp.png"
            alt="Profile"
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-contain rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
