import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const Contact = () => {
  const formRef = null;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Rama",
          from_email: form.email,
          to_email: "alomar.ramaa@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        //TODO: Show success message
        //TODO: Hide an alert

        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        //TODO: Show error message
      });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    
    <section className="relative flex lg:flex-row flex-col max-container">
    <div className="flex-1 min-w-[50%] flex flex-col">
    <h1 className="head-text text-white font-italiana text-3xl text-center">Get in Touch</h1>
    <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
        <label className="text-white font-semibold font-italiana text-4xl">
          Name
          <input
            type="text"
            name="name"
            className="input text-lg p-4 w-full"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
  
        <label className="text-white font-semibold font-italiana text-4xl">
          Email
          <input
            type="email"
            name="email"
            className="input text-lg p-4 w-full"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
  
        <label className="text-white font-semibold font-italiana text-4xl">
          Your Message
          <textarea
            name="message"
            rows={4}
            className="textarea text-lg p-4 w-full"
            placeholder="Let me know how I can help you!"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
  
        <button
          type="submit"
          className="btn text-lg p-4 bg-white text-amber-900 border border-solid border-[#5d4037] rounded-lg"
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          Submit
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-8">
  <a
    href="https://www.linkedin.com/in/rama-al-omar/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-5xl hover:scale-110 transition-transform duration-200"
  >
    <TiSocialLinkedinCircular />
  </a>
  <a
    href="https://github.com/alomarramaa"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-5xl hover:scale-110 transition-transform duration-200"
  >
    <FaGithub />
  </a>
  <a
    href="mailto:alomar.ramaa@gmail.com"
    className="text-white text-5xl hover:scale-110 transition-transform duration-200"
  >
    <MdEmail />
  </a>
</div>

    </div>
  </section>
  
   
  );
};

export default Contact;
