import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ukvwg29",
      "template_z23vf2i",
      form.current,
      "ef4KyujVfvG2NIcNR"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hlainehtet.hh.hh@gmail.com</h5>
            <a href="mailto:hlainehtet.hh.hh@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messengar</h4>
            <h5>Hlaing Htet</h5>
            <a href="https://m.me/hlaing.htet.3954546/">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+959424144442</h5>
            <a href="tel:+959424144442">Call phone</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            // id=""
            // cols="30"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Sent Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
