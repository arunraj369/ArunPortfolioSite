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
      <div className="contact-container d-flex flex-row flex-wrap">
        <div>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <h1>Get in touch</h1>
            <p>
              I'm here to help.if you have question,feedback,please reach out
              here
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
        <div style={{ display: "inline-block", marginLeft: "5%" }}>
          <h4 style={{ textDecoration: "underline" }}>Direct contact</h4>
          <h6>Email</h6>
          {/* <p>rajarun612@gmail.com</p> */}
          <a href="mailto:rajarun612@gmail.com">rajarun612@gmail.com</a>
          <h6>Phone No</h6>
          <a href="tel:8883314331">888-331-4331</a>

          <h4 style={{ textDecoration: "underline", marginTop: "20px" }}>
            Follow me
          </h4>
          <h6>Linkedin</h6>
          {/* <p>linkedin.com/in/arun-raj-b5860917b/</p> */}
          <a
            href="https://linkedin.com/in/arun-raj-b5860917b/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/arun-raj-b5860917b
          </a>
          <h6>Github</h6>
          {/* <p>github.com/arunraj369</p> */}
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
  );
}
export default Contact;
