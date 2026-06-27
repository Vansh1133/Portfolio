import { motion } from "framer-motion";

const experience = [
  {
    title: "Job Oriented Value Added Course",
    company: "GLA University",
    duration: "June 2025 - July 2025",
    desc: "Completed Full Stack Development training using React, Node.js, Express.js and MongoDB."
  },
  {
    title: "FitFlow Project",
    company: "Personal Project",
    duration: "2025",
    desc: "Developed an AI-powered Sports & Fitness Learning Platform with authentication, dashboard and MongoDB."
  }
];

function Experience() {
  return (
    <section id="experience">

      <h2 className="title">
        Experience <span>& Training</span>
      </h2>

      <div className="timeline">

        {experience.map((item,index)=>(

          <motion.div
            className="timeline-card"
            key={index}
            initial={{opacity:0,y:60}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.6,delay:index*.2}}
            viewport={{once:true}}
          >

            <div className="circle"></div>

            <div className="content">

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <span>{item.duration}</span>

              <p>{item.desc}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Experience;