import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
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

  return (
    <section className="py-16 text-white flex" id="contact">
      <div className="w-1/2 my-auto">
        <img src="../../../public/Full Inbox _Monochromatic.svg" alt="" className="mx-auto"/>
      </div>
      <div className="form-container mx-auto w-1/3">
        <form onSubmit={handleSubmit} className="form">
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
            {" "}
            <RiSendPlaneFill className="mr-2" />
            Send message 
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
