import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-10 px-5 md:px-20 lg:px-40"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 mb-10">
          Feel free to contact me through email, phone, or WhatsApp. I would
          love to hear from you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contact Info</h3>
            <p className="text-gray-400">
              Here are my details for easy communication.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-blue-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>
                <a
                  href="mailto:your-email@example.com"
                  className="text-blue-400 hover:underline"
                >
                  almamun602767@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-green-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.25V4.5a2.25 2.25 0 00-2.25-2.25h-12A2.25 2.25 0 003.75 4.5v15a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25v-3.75"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p>
                <a
                  href="tel:+1234567890"
                  className="text-blue-400 hover:underline"
                >
                  +00801835371391
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-teal-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 6.75l13.5 4.5M5.25 17.25l13.5-4.5m-13.5-4.5v9m13.5-9v9"
                />
              </svg>
            </span>
            <div>
              <h4 className="font-bold">WhatsApp</h4>
              <p>
                <a
                  href="https://web.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
          <form
            action="https://formspree.io/f/mbllpkaz"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-md hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
