import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../Header/Header";
// import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  // toast.configure();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nfr3rbm", "template_80rdh7s", form.current, {
        publicKey: "3HOIK0j3DEYVQKvI9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Mailed Succesfully!!");
          // toast("Mailed Succesfully!!");
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, white, #E9F1FA)",
      }}
    >
      <Header />
      <h2
        style={{
          textDecoration: "underline",
          textAlign: "center",
          marginBottom: "3%",
        }}
      >
        𝕮𝖔𝖓𝖙𝖆𝖈𝖙
      </h2>

      <div className="container d-flex flex-column flex-md-row">
        <div style={{ width: "100%", maxWidth: "500px", marginRight: "5%" }}>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <h1>Get in touch</h1>
            <p>
              I'm here to help. If you have questions or feedback, please reach
              out here.
            </p>
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Your Name
            </label>
            <input className="form-input" type="text" name="from_name" />
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Your Email
            </label>
            <input className="form-input" type="email" name="from_email" />
            <label className="form-label" style={{ fontWeight: "bold" }}>
              Your Message
            </label>
            <textarea className="form-textarea" name="message" />
            <button className="submit-button" type="submit">
              Send
            </button>
          </form>
        </div>
        <div style={{ width: "100%" }}>
          <h4 style={{ textDecoration: "underline" }}>Direct contact</h4>
          <div className="mb-3">
            <h6>Email</h6>
            <a href="mailto:rajarun612@gmail.com">rajarun612@gmail.com</a>
          </div>
          <div className="mb-3">
            <h6>Phone No</h6>
            <a href="tel:8883314331">888-331-4331</a>
          </div>
          <h4 style={{ textDecoration: "underline", marginTop: "20px" }}>
            Follow me
          </h4>
          <div className="mb-3">
            <h6>Linkedin</h6>
            <a
              href="https://linkedin.com/in/arun-raj-b5860917b/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/arun-raj-b5860917b
            </a>
          </div>
          <div>
            <h6>Github</h6>
            <a
              href="https://github.com/arunraj369"
              target="_blank"
              rel="noreferrer"
            >
              github.com/arunraj369
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
