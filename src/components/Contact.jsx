import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Icons from "./icons";

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Submit");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w6tunch",
        "template_dd5w7la",
        form.current,
        "4n4HRK8A9jxpFL9rG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setButtonText("Error");
        }
      );
  };
  return (
    <>
      <section className="contact-section">
        <hr />
        <h1 className="contact-title">CONTACT</h1>
        <form ref={form} className="form-container">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="text" name="email" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" name="message" />
          </div>
          <button type="submit" onClick={sendEmail}>
            {" "}
            {buttonText}
          </button>
        </form>

        <div className="contact-icon">
          <Icons
            link="tel:+918305284692"
            src="Images/call.png"
            title="Contact-number"
          />
          <Icons
            link="mailto:sakshidewangan51@gmail.com"
            src="Images/mail.png"
            title="Mail"
          />
          <Icons
            link="https://wa.me/918305284692"
            src="Images/whatsapp.png"
            title="Whatsapp"
          />
          <Icons
            link="https://instagram.com/__sakshidewangan__"
            src="Images/insta.png"
            title="Instagram"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
