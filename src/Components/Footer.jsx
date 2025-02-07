import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Copyright */}
        <p className="text-sm text-gray-400">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">Abdullah Almamun</span>. All Rights Reserved.
        </p>

        {/* Right Section: Designed By */}
        <p className="text-sm text-gray-400 mt-2 md:mt-0">
          Designed by{" "}
          <a
            href="#"
            className="text-yellow-400 hover:underline font-semibold"
          >
            Abdullah Almamun
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
