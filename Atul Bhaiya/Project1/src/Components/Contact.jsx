import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border rounded p-2"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded p-2"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full border rounded p-2"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

