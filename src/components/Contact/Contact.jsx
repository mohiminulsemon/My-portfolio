import emailjs from "emailjs-com";
import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiSendPlaneFill,
} from "react-icons/ri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS service
    emailjs.sendForm("service_q32x64o", "template_9pj3jj3", e.target, "pzo9S9jphsjeWF3PW")
      .then((result) => {
        console.log(result.text);

        // Show success toast message
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error(error);
        // Show error toast message
        toast.error("Failed to send message. Please try again later.");
      });
      e.target.reset();
  };
  return (
    <section className="py-6 text-white" id="contact">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold  text-brown-200">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <div className="flex items-center">
              <RiGithubFill className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="https://github.com/mohiminulsemon" target="_blank" rel="noreferrer">
                github
              </a>
            </div>
            <div className="flex items-center">
              <RiLinkedinBoxFill className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="https://www.linkedin.com/in/mohiminul-semon-a29a131a9/" target="_blank" rel="noreferrer">
                linkedin
              </a>
            </div>
            <div className="flex items-center">
              <RiFacebookFill className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="https://www.facebook.com/mohiminul.semon.7" target="_blank" rel="noreferrer">
                facebook
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              required=""
              autoComplete="off"
              type="text"
              name="name"
              className="block w-full rounded-md shadow-sm focus:ring p-2 bg-pink-200 text-black font-semibold"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              required=""
              autoComplete="off"
              name="email"
              className="block w-full rounded-md shadow-sm focus:ring p-2 bg-pink-200 text-black font-semibold"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              className="block w-full rounded-md focus:ring p-2 bg-pink-200 text-black font-semibold"
              name="message"
            ></textarea>
          </label>
          <button
            type="submit"
            className="flex items-center self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri focus:ri hover:ri"
          >
            {" "}
            <RiSendPlaneFill className="mr-2" />
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
