import React, { useState } from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Marathon Management System",
      image: "https://i.ibb.co/dDxZpX8/Screenshot-14.png",
      description: "A platform for managing marathon events, registrations, and results.",
      stack: ["React", "Node.js", "MongoDB", "Express.js"],
      challenges: [
        "Implementing a real-time leaderboard for participants.",
        "Handling user authentication and role-based access control.",
        "Optimizing the backend for high traffic during registration periods.",
      ],
      improvements: [
        "Add social media sharing for participants' achievements.",
        "Introduce a reward tracking system for regular participants.",
        "Optimize real-time updates using WebSockets.",
      ],
      github_client:
        "https://github.com/programming-hero-web-course2/b10a11-client-side-abdullahalmamun111",
      github_server:
        "https://github.com/programming-hero-web-course2/b10a11-server-side-abdullahalmamun111",
      live: "https://assignment-11-authentica-2a8c3.web.app/",
      details: `This project is designed to streamline the organization of marathon events. It allows organizers to create events, participants to register, and tracks real-time race progress. Key features include: - Real-time leaderboard updates with participant tracking. - Registration system with payment integration. - Admin dashboard for managing events and monitoring participant progress. During development, one of the significant challenges was implementing the real-time leaderboard efficiently. We had to optimize the backend to ensure data updates were pushed seamlessly to all users. Additionally, we worked on a user-friendly interface to ensure participants could easily find event details and results. Planned improvements include integrating a more robust reward system, adding social media connectivity, and optimizing the database for faster query execution during peak loads.`,
    },
    {
      id: 2,
      name: "Crowdfunding Platform",
      image: "https://i.ibb.co.com/8g86Wwx/image.png",
      description:
        "A platform that helps individuals raise funds for personal needs, creative projects, and startups.",
      stack: ["React", "Tailwind CSS", "DaisyUI", "MongoDB"],
      challenges: [
        "Ensuring smooth user experience for donors and campaigners.",
        "Integrating real-time updates for fundraising progress.",
        "Securing sensitive financial transactions.",
      ],
      improvements: [
        "Improve UI for better mobile responsiveness.",
        "Add more interactive features for campaign pages.",
        "Optimize performance for faster load times.",
      ],
      github_client: "https://github.com/programming-hero-web-course2/b10-a10-client-side-abdullahalmamun111",
      github_server: "https://github.com/programming-hero-web-course2/b10-a10-server-side-abdullahalmamun111",
      live: "https://assignment-10-authentica-b4564.web.app/",
      details:
        "This platform connects users with projects that need funding, making it easy for individuals to contribute to meaningful causes.",
    },
    {
      id: 3,
      name: "Winter Donation Platform",
      image: "https://i.ibb.co.com/NxwZP7k/image.png",
      description: "A platform for raising funds to support those in need during the winter season.",
      stack: ["React", "Firebase"],
      challenges: [
        "Ensuring data privacy for donors and recipients.",
        "Implementing a seamless donation process.",
        "Managing a large number of donations during peak times.",
      ],
      improvements: [
        "Add a dashboard for donors to track their contributions.",
        "Enable recurring donations for long-term support.",
        "Provide more visibility into where the donations are being used.",
      ],
      github_client: "https://github.com/programming-hero-web-course1/b10-a9-authentication-abdullahalmamun111",
      github_server: "",
      live: "https://assignment-09-authentication.web.app/",
      details:
        "This platform allows users to donate to individuals and organizations providing support to those affected by the winter season, ensuring they have access to essential resources like warm clothing, food, and shelter.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="project" className="bg-gray-900 py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm text-yellow-500 uppercase font-semibold tracking-wider">
          Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          My Best Work
        </h2>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <button
                onClick={() => {
                  setSelectedProject(project);
                  document.getElementById("my_modal_4").showModal();
                }}
                className="mt-4 inline-block bg-yellow-500 text-black font-medium px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-purple-300 ">
          {selectedProject && (
            <div>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full object-cover rounded-md mb-4"
              />
              <p>
                <strong>Description: </strong>
                {selectedProject.details}
              </p>
              <p className="mt-2">
                <strong>Main Technology Stack: </strong>
                {selectedProject.stack.join(", ")}
              </p>
              <p className="mt-2">
                <strong>Challenges: </strong>
                <ul className="list-disc list-inside">
                  {selectedProject.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </p>
              <p className="mt-2">
                <strong>Improvements: </strong>
                <ul className="list-disc list-inside">
                  {selectedProject.improvements.map((improvement, index) => (
                    <li key={index}>{improvement}</li>
                  ))}
                </ul>
              </p>
              <div className="mt-4 gap-3 flex flex-col md:flex-row my-3">
                <div>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition"
                  >
                    Live Demo
                  </a>
                </div>
                <div>
                  <a
                    href={selectedProject.github_client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition"
                  >
                    Client Side GitHub Repo
                  </a>
                </div>
                <div>
                  <a
                    href={selectedProject.github_server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition"
                  >
                    Server Side GitHub Repo
                  </a>
                </div>
              </div>
              <div className="">
                <form method="dialog">
                  <button
                    onClick={() => {
                      document.getElementById("my_modal_4").closeModal();
                      setSelectedProject(null);
                    }}
                    className="btn w-full bg-green-400 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
};

export default Project;
