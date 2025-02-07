import React from 'react';

const AboutMe = () => {
  return (
    <section id='about' className="bg-gray-900 text-white py-16 px-6 md:px-20 lg:px-40">
      {/* Header Section */}
      <div className="text-center">
        <span className="text-sm text-yellow-500 uppercase font-bold">
          About Me
        </span>
        <h2 className="text-4xl font-bold mt-2">
          Know Me More
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-12">
        {/* Left Side: About Content */}
        <div className="lg:w-2/3">
          <h3 className="text-3xl font-bold ">
            Hi, I'm <span className="text-primary">ABDULLAH ALMAMUN</span>
          </h3>
          <div className="mt-2 w-24 h-1 bg-primary rounded-full"></div>
          <p className="text-lg text-gray-300 mt-6 leading-relaxed">
            I'm a designer & developer with a passion for web design. I enjoy
            creating simple, clean, and sleek websites that provide real value
            to the end user. My journey started with experimenting with HTML in
            my school days, and it turned into a full-fledged career.
          </p>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Beyond coding, I love exploring nature, photography, and playing cricket. 
            These hobbies keep me inspired and fuel my creativity in web development.
          </p>
        </div>

        {/* Right Side: Years of Experience */}
        <div className="lg:w-1/3 text-center lg:text-right">
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative inline-block">
              <div className="text-8xl font-extrabold ">
                1
                <span className="absolute -right-6 -top-2 text-yellow-500 text-4xl">
                  +
                </span>
              </div>
            </div>
            <p className="text-lg mt-2">Years of Experience</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid grid-cols-1 text-gray-300 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div>
          <h4 className=" font-bold">Name:</h4>
          <p className="text-lg ">ABDULLAH ALMAMUN</p>
          <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
        </div>
        <div>
          <h4 className=" font-bold">Email:</h4>
          <p className="text-lg ">almamun602767@gmail.com</p>
          <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
        </div>
        <div>
          <h4 className=" font-bold">Date of Birth:</h4>
          <p className="text-lg ">15 March, 2004</p>
          <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
        </div>
        <div>
          <h4 className=" font-bold">From:</h4>
          <p className="text-lg ">Rangpur City, Bangladesh</p>
          <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
