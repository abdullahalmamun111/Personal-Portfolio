import React from 'react';

const MySkills = () => {
  const skills = {
    Frontend: [
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Bootstrap", icon: "📦" },
      { name: "React JS", icon: "⚛️" },
      { name: "JavaScript", icon: "✨" },
      { name: "Responsive Design", icon: "📱" }, // Added for Junior Dev
      { name: "ES6+", icon: "⚙️" }, // Added for Junior Dev
    ],
    Backend: [
      { name: "Firebase", icon: "🔥" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Node.js", icon: "🟩" }, // Added for Junior Dev
      { name: "Express", icon: "⚡" }, // Added for Junior Dev
    ],
    Tools: [
      { name: "Git", icon: "🔧" },
      { name: "GitHub", icon: "🐙" },
      { name: "VS Code", icon: "🖥️" },
      { name: "NPM", icon: "📦" }, // Added for Junior Dev
      { name: "Postman", icon: "📮" }, // Added for Junior Dev
    ],
    Other: [
      { name: "Problem Solving", icon: "🧠" },
      { name: "Team Collaboration", icon: "🤝" },
      { name: "Communication Skills", icon: "📢" },
      { name: "Time Management", icon: "⏰" }, // Added for Junior Dev
    ],
  };

  return (
    <section id='skills' className="bg-gray-800 py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-sm text-yellow-500 uppercase font-semibold tracking-wider">
          My Skills
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          What I’m Good At
        </h2>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Frontend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.Frontend.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg bg-white hover:shadow-lg transition-shadow transform hover:scale-105"
              >
                <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                <p className="text-lg font-medium text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Backend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.Backend.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg bg-white hover:shadow-lg transition-shadow transform hover:scale-105"
              >
                <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                <p className="text-lg font-medium text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.Tools.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-4 border border-gray-300 rounded-lg bg-white hover:shadow-lg transition-shadow transform hover:scale-105"
              >
                <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                <p className="text-lg font-medium text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Other Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.Other.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2 border border-gray-300 rounded-lg bg-white hover:shadow-lg transition-shadow transform hover:scale-105"
              >
                <span className="text-3xl sm:text-4xl">{skill.icon}</span>
                <p className="text-lg font-medium text-gray-800">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default MySkills;
