import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faGithub,
  faPython,
  faJava,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faGit,
  faGoogle,
  faKaggle,
} from '@fortawesome/free-brands-svg-icons';
import './styles/skills.css'; // Import custom CSS for animations

const skills = [
  { icon: faReact, title: "React.js", level: "Advanced", projects: 10 },
  { icon: faNodeJs, title: "Node.js", level: "Intermediate", projects: 8 },
  { icon: faGit, title: "Git", level: "Advanced", projects: 15 },
  { icon: faGithub, title: "GitHub", level: "Advanced", projects: 15 },
  { icon: faPython, title: "Python", level: "Intermediate", projects: 7 },
  { icon: faJava, title: "Java", level: "Intermediate", projects: 5 },
  { icon: faCss3Alt, title: "CSS", level: "Advanced", projects: 20 },
  { icon: faHtml5, title: "HTML", level: "Advanced", projects: 20 },
  { icon: faJsSquare, title: "JavaScript", level: "Advanced", projects: 18 },
  { icon: faGoogle, title: "Google Cloud", level: "Beginner", projects: 3 },
  { icon: faKaggle, title: "Kaggle", level: "Beginner", projects: 2 },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center p-4"
          onMouseEnter={() => setHoveredSkill(index)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div className="relative z-8">
            <FontAwesomeIcon
              icon={skill.icon}
              title={skill.title}
              className={`pixely-icon text-2xl transition-scale duration-500 ${
                hoveredSkill === index ? 'scale' : ''
              }`}
            />
          </div>
          {hoveredSkill === index && (
            <div className="absolute top-16 w-48 bg-black shadow-lg p-4 rounded-md z-10 transform -translate-y-16">
              <h3 className="text-lg font-Code text-primary">{skill.title}</h3>
              <p className="mt-2 font-Code text-primary">Level: {skill.level}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-primary border-secondary h-2.5 rounded-full"
                  style={{
                    width: `${
                      skill.level === 'Beginner'
                        ? 30
                        : skill.level === 'Intermediate'
                        ? 60
                        : 100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="mt-2 font-arcade text-xs text-primary ">Projects: {skill.projects}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
