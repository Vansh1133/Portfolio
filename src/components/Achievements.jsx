import { motion } from "framer-motion";

const achievements = [
  { number: "150+", title: "DSA Problems" },
  { number: "2+", title: "Full Stack Projects" },
  { number: "2026", title: "Placement Goal" },
  { number: "5+", title: "Technologies" }
];

function Achievements() {
  return (
    <section id="achievements">
      <h2 className="title">
        My <span>Achievements</span>
      </h2>

      <div className="achievement-grid">

        {achievements.map((item,index)=>(

          <motion.div
            key={index}
            className="achievement-card"
            initial={{opacity:0,y:50}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.6,delay:index*.15}}
            viewport={{once:true}}
          >

            <h1>{item.number}</h1>

            <p>{item.title}</p>

          </motion.div>

        ))}

      </div>
    </section>
  );
}

export default Achievements;