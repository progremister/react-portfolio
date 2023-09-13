import { ChangeEvent, FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { mobile, messageImg } from "../constants/images";
import AppWrap from "../wrappers/AppWrap";
import MotionWrap from "../wrappers/MotionWrap";

const Contact = () => {
  const formElement = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_h47ak47",
        "template_zy2fh47",
        {
          from_name: formData.name,
          to_name: "Dmytro",
          from_email: formData.email,
          to_email: "kolosovskyi.dmytro@gmail.com",
          message: formData.message,
        },
        "1Lmuo44Dlt5Z2GxzZ"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "I appreciate your opinion! I'll get you back as soon as possible."
          );
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Oops! Something went wrong.");
        }
      );
      setIsFormSubmitted(true);
  };

  return (
    <>
      <h2 className="head-text">Chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={messageImg} alt="email" />
          <a href="mailto:kolosovskyi.dmytro@gmail.com" className="p-text">
            kolosovskyi.dmytro@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={mobile} alt="mobile" />
          <a href="tel:+421950462032" className="p-text">
            +421 950 462032
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" ref={formElement} onSubmit={handleSubmit}>
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <textarea
              className="p-text"
              name="message"
              value={message}
              placeholder="Your Message"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending..." : "Send Messsage"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__whitebg"
);
