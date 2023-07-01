import { RiExternalLinkLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="py-16" id="projects">
      <div className="container mx-auto ">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-brown-200">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-pink-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="image-wrap">
              <img src="./summer-camp-d4e33.web.app_.png" alt="Project 1" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Camp de Sunshne</h3>
              <p className="text-gray-600 mb-4">
                - Three types of roles - admin, instructor, student. <br />
                - Students can browse and enroll classes, instructors can add
                and update classes. <br />- Admins possess the authority to
                effectively oversee and govern instructors and students.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://summer-camp-d4e33.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  <RiExternalLinkLine className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="https://github.com/mohiminulsemon/camp-de-sunshine-client"
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
          <div className="bg-pink-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="image-wrap">
              <img src="./toy-palace-caa9c.web.app_ (2).png" alt="Project 2" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Toy Palace</h3>
              <p className="text-gray-600 mb-4">
                - An ecommerce site for buying and selling toys. <br /> -
                Sellers have control to add, update, and remove toys listed.{" "}
                <br />- There is a blog section and blogs can be downloaded in
                pdf form.
              </p>
              <div className="flex justify-between">
                <a
                  href="https://toy-palace-caa9c.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  <RiExternalLinkLine className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="https://github.com/mohiminulsemon/Toy-palace-client"
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
          <div className="bg-pink-200 shadow-lg rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="image-wrap">
              <img src="./chef-s-recipes.web.app_.png" alt="Project 3" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Chef's Recipes</h3>
              <p className="text-gray-600 mb-4">
                - It is a recipe related website, where users can find recipes.{" "}
                <br />
                - Users can explore renowned chefs' popular recipes for culinary
                inspiration and creativity. <br />
                - Users can create a personalized recipe list with their
                favorite dishes. <br />
              </p>
              <div className="flex justify-between">
                <a
                  href="https://chef-s-recipes.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  <RiExternalLinkLine className="mr-2" />
                  Visit Website
                </a>
                <a
                  href="https://github.com/mohiminulsemon/chefs-recipes-client"
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
