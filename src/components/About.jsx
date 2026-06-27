import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaDatabase } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-left"
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
      >

        <img src="/profile.png" alt="Vansh"/>

      </motion.div>

      <motion.div
        className="about-right"
        initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
      >

        <h2>
          About <span>Me</span>
        </h2>

        <p>
          Hello! I'm Vansh Sharma,
          a passionate Full Stack Developer
          pursuing B.Tech in Computer Science
          from GLA University.

          I enjoy building modern web
          applications using React,
          Node.js, Express.js and MongoDB.

          Along with development I regularly
          practice Data Structures & Algorithms
          and continuously learn new technologies.
        </p>

        <div className="tech">

          <div className="tech-card">
            <FaReact/>
            React
          </div>

          <div className="tech-card">
            <FaNodeJs/>
            Node
          </div>

          <div className="tech-card">
            <FaJava/>
            Java
          </div>

          <div className="tech-card">
            <FaDatabase/>
            MongoDB
          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default About;