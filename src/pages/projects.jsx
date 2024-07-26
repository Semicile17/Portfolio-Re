import logo from "../assets/images/logo.png";
import "./styles/project.css";
import floppyDisc from "../assets/images/floppy.png"; // Ensure you have this image in your assets folder

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A web application to manage daily tasks and productivity.",
    link: "#",
  },
  {
    title: "E-commerce Site",
    description:
      "An online store with a variety of products and a shopping cart.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="section relative mt-96">
      
      <h2 className=" text-3xl  tracking-tight font-extrabold text-center font-arcade">
        My Projects
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card ">
            <div className="floppy-container">
              <span className="z-30 mb-100 font-arcade">{project.title}</span>
              <img src={floppyDisc} alt="Floppy Disc" className="floppy-icon" />
            </div>
            <div className="project-details border-primary">
              <img src={logo} alt="project_img" className="h-24" />
              <h4 className="font-arcade text-xs">{project.title}</h4>
              <p className="font-Code">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-arcade text-xs hover:text-secondary"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
