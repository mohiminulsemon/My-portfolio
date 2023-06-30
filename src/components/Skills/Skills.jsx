import "./Skills.css";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiFirebase,
} from "react-icons/si";
import { FaCode, FaCodepen} from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

const Skills = () => {
  return (
    <section className="py-16 text-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-indigo-500">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="flex flex-col items-center">
            <DiHtml5 className="text-5xl text-indigo-500 mb-2" />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <DiCss3 className="text-5xl text-blue-500 mb-2" />
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <DiJavascript1 className="text-5xl text-yellow-500 mb-2" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <DiReact className="text-5xl text-blue-300 mb-2" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <DiNodejsSmall className="text-5xl text-green-500 mb-2" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <DiMongodb className="text-5xl text-green-400 mb-2" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <DiBootstrap className="text-5xl text-purple-500 mb-2" />
            <span>Bootstrap</span>
          </div>
          <div className="flex flex-col items-center">
            <DiGit className="text-5xl text-red-400 mb-2" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-5xl text-cyan-500 mb-2" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFigma className="text-5xl text-pink-500 mb-2" />
            <span>Figma</span>
          </div>
          <div className="flex flex-col items-center">
            <SiVercel className="text-5xl text-black mb-2" />
            <span>Vercel</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNetlify className="text-5xl text-indigo-600 mb-2" />
            <span>Netlify</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFirebase className="text-5xl text-yellow-600 mb-2" />
            <span>Firebase</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCode className="text-5xl text-gray-500 mb-2" />
            <span>ES6</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCodepen className="text-5xl text-teal-500 mb-2" />
            <span>Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <AiOutlineApi className="text-5xl text-orange-500 mb-2" />
            <span>APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
