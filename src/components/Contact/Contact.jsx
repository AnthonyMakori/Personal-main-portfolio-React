import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef(null);
  const [done, setDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if any field is empty
    const { user_name, user_email, message } = form.current;
    if (!user_name.value || !user_email.value || !message.value) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_s5218gu",
        "template_kccjbks",
        form.current,
        "mHk0lToNOoDO8K6s2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setIsLoading(false);
          form.current.reset();
          setShowSuccessMessage(true);

          // Automatically hide the success message after 3 seconds
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* Left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>

      {/* Right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user border-2 border-blue-500 p-2 rounded-md mb-4 focus:outline-none focus:border-blue-700"
            placeholder="Name"
            disabled={isLoading}
          />
          <input
            type="email"
            name="user_email"
            className="user border-2 border-blue-500 p-2 rounded-md mb-4 focus:outline-none focus:border-blue-700"
            placeholder="Email"
            disabled={isLoading}
          />
          <textarea
            name="message"
            className="user border-2 border-blue-500 p-2 rounded-md mb-4 focus:outline-none focus:border-blue-700"
            placeholder="Message"
            disabled={isLoading}
          />
          <input
            type="submit"
            value={isLoading ? "Sending..." : "Send"}
            className="button bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
            disabled={isLoading}
          />
          <span>{done && "Thanks for contacting me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>

      {/* Success message */}
      {showSuccessMessage && (
        <div
          className={`fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-md shadow-lg 
          transform transition-all duration-500 ease-in-out ${
            showSuccessMessage ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          Success! Your message has been sent.
        </div>
      )}
    </div>
  );
};

export default Contact;
