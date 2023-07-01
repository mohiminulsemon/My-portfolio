import "./About.css";

const About = () => {
  return (
    <section className="py-24 text-white" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="./undraw_Male_avatar_g98d.png"
            alt="About"
            className="rounded-full w-64 h-64 mx-auto lg:mx-0 lg:mr-auto shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-indigo-500">
            About Me
          </h2>
          <p className="text-lg">
            Hi, My name is Mohiminul Islam; some people also call me Semon. I am
            twenty-four years old. I was always trying to learn software skills;
            I spent my whole varsity career studying subjects and attempting to
            learn languages. At the moment, I am proficient in four languages:
            c, c++, java, and javascript. I used to be a problem solver as well,
            and I used to compete in a lot of programming challenges. In
            addition, I learned about data structures and algorithms.
          </p>
          <p className="text-lg mt-4">
            I recently finished a web development course.I continued learning web
            development for past 8 months with dedication and sincerity. I
            completed various projects on web. You can find more on my github.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
