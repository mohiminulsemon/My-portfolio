import { useState } from "react";
import { RiFacebookFill, RiGitRepositoryFill, RiGithubFill, RiLinkedinBoxFill, RiSendPlaneFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to send email

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");

    // Show success toast message
    toast.success("Message sent successfully!");
  };
  <form  className="form">
    <div className="descr">Contact Me</div>
    <div className="input">
      <input
        required=""
        autoComplete="off"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="name">Name</label>
    </div>

    <div className="input">
      <input
        required=""
        autoComplete="off"
        name="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="email">E-mail</label>
    </div>

    <div className="input">
      <textarea
        required=""
        cols="30"
        rows="1"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <label htmlFor="message">Message</label>
    </div>
    <button type="submit" className="flex items-center">
      
    </button>
  </form>;
  return (
    <section className="py-6 " id="contact">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
          <div className="flex items-center">
    <RiGithubFill className="w-5 h-5 mr-2 sm:mr-6" />
    <span>github</span>
  </div>
  <div className="flex items-center">
    <RiLinkedinBoxFill className="w-5 h-5 mr-2 sm:mr-6" />
    <span>linkedin</span>
  </div>
  <div className="flex items-center">
    <RiFacebookFill className="w-5 h-5 mr-2 sm:mr-6" />
    <span>facebook</span>
  </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              required=""
              autoComplete="off"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md shadow-sm focus:ring"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              required=""
              autoComplete="off"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md shadow-sm focus:ring"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows="3"
              className="block w-full rounded-md focus:ring"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <button
            type="button"
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
