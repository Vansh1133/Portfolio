import { motion } from "framer-motion";

function Education() {

  return (

    <section id="education">

      <h2 className="title">
        Education
      </h2>

      <div className="timeline">

        <motion.div
        className="timeline-card"
        initial={{opacity:0,y:60}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.6}}
        viewport={{once:true}}
        >

          <div className="circle"></div>

          <div className="content">

            <h3>B.Tech Computer Science</h3>

            <h4>GLA University, Mathura</h4>

            <span>2022 - Present</span>

            <p>
              Pursuing Bachelor of Technology in Computer Science with focus on
              Full Stack Development, Java and Data Structures & Algorithms.
            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );

}

export default Education;