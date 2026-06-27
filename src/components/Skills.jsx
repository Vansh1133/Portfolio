import {
FaJava,
FaReact,
FaNodeJs,
FaGithub,
FaHtml5,
FaCss3Alt,
FaJs,
FaGitAlt,
FaPython
} from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
{
icon:<FaJava/>,
name:"Java",
level:"90%"
},
{
icon:<FaReact/>,
name:"React",
level:"90%"
},
{
icon:<FaNodeJs/>,
name:"Node.js",
level:"88%"
},
{
icon:<SiExpress/>,
name:"Express.js",
level:"85%"
},
{
icon:<SiMongodb/>,
name:"MongoDB",
level:"88%"
},
{
icon:<FaPython/>,
name:"Python",
level:"80%"
},
{
icon:<FaHtml5/>,
name:"HTML5",
level:"95%"
},
{
icon:<FaCss3Alt/>,
name:"CSS3",
level:"92%"
},
{
icon:<FaJs/>,
name:"JavaScript",
level:"90%"
},
{
icon:<FaGitAlt/>,
name:"Git",
level:"85%"
},
{
icon:<FaGithub/>,
name:"GitHub",
level:"90%"
}
];

function Skills(){

return(

<section id="skills">

<h2 className="title">
My <span>Skills</span>
</h2>

<div className="skills-grid">

{
skills.map((skill,index)=>(

<motion.div
className="skill-card"
key={index}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:.5,delay:index*.08}}
viewport={{once:true}}
whileHover={{scale:1.05}}
>

<div className="skill-icon">

{skill.icon}

</div>

<h3>{skill.name}</h3>

<div className="progress">

<div
className="progress-fill"
style={{width:skill.level}}
>

</div>

</div>

<p>{skill.level}</p>

</motion.div>

))
}

</div>

</section>

)

}

export default Skills;