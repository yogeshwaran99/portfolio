import React, { useRef } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9j6ad1c",
        "template_i96kow8",
        form.current,
        "psbHV1ix7_dkkYzTT",
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        },
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1>Contact</h1>
      </div>
      <div className="contact-content">
        <div className="contact-text">
          <p>
            Have a question, an idea, or just want to say hi? I’m always happy to hear from you.
          </p>
          <p>
            You can reach me directly at
            <a href="mailto:itsyogeshwaran@gmail.com" className="contact-email">
              {" "}
              itsyogeshwaran@gmail.com
            </a>
          </p>
          <p>Or simply drop your message in the box below!</p>
        </div>
        <div className="contact-form-wrapper">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="contact-textarea"
            />
            <button type="submit" className="contact-button">
              send
            </button>
          </form>
        </div>
        <div className="contact-footer">
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/yogeshwaran44"
              target="_blank"
              rel="noopener noreferrer"
              className="white-link"
            >
              <FaLinkedin className="fa-icon" />
            </a>
            <a
              href="https://github.com/yogeshwaran99"
              target="_blank"
              rel="noopener noreferrer"
              className="white-link"
            >
              <FaGithub className="fa-icon" />
            </a>
          </div>
          <p className="social-insta">
            <a
              href="https://www.instagram.com/yogeshwaran99"
              target="_blank"
              rel="noopener noreferrer"
              className="white-link"
            >
              <FaInstagram className="fa-icon" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
