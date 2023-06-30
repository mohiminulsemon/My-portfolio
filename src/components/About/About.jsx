import "./About.css";

const About = () => {
  return (
    <section className="py-24 text-white" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="/about-picture.jpg"
            alt="About"
            className="rounded-full w-64 h-64 mx-auto lg:mx-0 lg:mr-auto shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-indigo-500">About Me</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            venenatis vestibulum aliquet. Suspendisse volutpat elit quis mi
            efficitur, non aliquet lorem dapibus. In eget pharetra odio, vitae
            consequat justo. Nunc facilisis pellentesque facilisis. Mauris non
            laoreet velit.
          </p>
          <p className="text-lg mt-4">
            Proin at gravida odio. Sed ac lorem consequat, finibus lectus id,
            lobortis purus. Mauris at sem vitae mauris vestibulum interdum nec
            et ante. In consectetur ligula ut ipsum sollicitudin pharetra.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
