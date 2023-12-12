import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kvnu0y2",
        "template_5g9nr2w",
        form.current,
        "wxuDBBu8ZpQFFXsCP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mb-10">
      <div className="flex justify-center items-center flex-col gap-y-3">
        <h1 className="text-4xl text-center font-bold">Send Message</h1>
        <p className="text-center text-xl font-normal">
          Please write your message and send us.
        </p>
        <img src="../../public/line.png" alt="" />
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            required
            name="user_name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            required
            type="email"
            name="user_email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            required
            name="message"
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="mx-auto  flex btn text-teal-600 my-4 w-52"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
