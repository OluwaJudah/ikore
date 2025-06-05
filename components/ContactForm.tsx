// At the top of your file
"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedSection } from "./AnimatedSection";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2boljis", // Replace with actual Service ID
        "template_eorsdm4", // Replace with actual Template ID
        form.current!,
        "r-6zJCnsDi1Lfx1NF" // Replace with your Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="bg-green-900 min-h-screen pt-40 px-4 sm:px-6 md:px-20 lg:px-32 py-16 space-y-12 scroll-mt-12"
      >
        <h2 className="text-4xl font-bold font-sans text-center text-white">
          Contact Us
        </h2>
        <p className="text-center text-gray-200 text-white">
          To get in contact with us fill in the form and we'll get back to you.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto space-y-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border rounded-md h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-white text-green-900 font-light px-6 py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </section>
    </AnimatedSection>
  );
};

export default ContactForm;
