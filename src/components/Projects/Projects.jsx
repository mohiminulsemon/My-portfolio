import { RiExternalLinkLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto ">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-indigo-500">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
            <div className="image-wrap">
            <img
              src="./summer-camp-d4e33.web.app_.png"
              alt="Project 1"
              
            />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum diam a nibh fermentum, non suscipit justo feugiat.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  <RiExternalLinkLine className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 flex items-center"
                >
                  <IoLogoGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
           <div className="image-wrap">
           <img
              src="./toy-palace-caa9c.web.app_ (2).png"
              alt="Project 2"
              
            />
           </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum diam a nibh fermentum, non suscipit justo feugiat.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  <RiExternalLinkLine className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 flex items-center"
                >
                  <IoLogoGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
            <div className="image-wrap">
            <img
              src="./chef-s-recipes.web.app_.png"
              alt="Project 3"
              
            />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                dictum diam a nibh fermentum, non suscipit justo feugiat.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  <RiExternalLinkLine className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="https://github.com/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-500 flex items-center"
                >
                  <IoLogoGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
