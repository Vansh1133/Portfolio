import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "FitFlow",
    image: "/fitflow.png",
    desc: "AI Powered Sports & Fitness Learning Platform using React, Node.js, Express.js and MongoDB.",
    tech: ["React","Node","MongoDB","Express"],
    live: "https://fitflow-client-hvci.onrender.com/",
    github: "https://github.com/Vansh1133"
  },
  {
    title: "E-Commerce",
    image: "/ecommerce.png",
    desc: "Modern responsive shopping website with search and categories.",
    tech: ["HTML","CSS","JavaScript"],
    live: "#",
    github: "https://github.com/Vansh1133"
  }
];

function Projects() {
  return (
    <section id="projects">

      <h2 className="title">
        Featured <span>Projects</span>
      </h2>

      <div className="projects-grid">

        {projects.map((project,index)=>(

          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.4}
            scale={1.04}
            key={index}
          >

            <motion.div
              className="premium-card"
              initial={{opacity:0,y:80}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:.7}}
              viewport={{once:true}}
            >

              <img src={project.image} alt={project.title}/>

              <div className="overlay"></div>

              <div className="project-info">

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="badge-box">

                  {project.tech.map((item,i)=>

                    <span key={i}>{item}</span>

                  )}

                </div>

                <div className="project-links">

                  <a
                    href={project.live}
                    target="_blank"
                    className="btn"
                  >
                    <FaExternalLinkAlt/>
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="btn2"
                  >
                    <FaGithub/>
                    Code
                  </a>

                </div>

              </div>

            </motion.div>

          </Tilt>

        ))}

      </div>

    </section>
  );
}

export default Projects;