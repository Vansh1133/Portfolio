import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
FaGithub,
FaLinkedin,
FaDownload,
FaArrowDown
} from "react-icons/fa";

function Hero() {

return(

<section className="hero" id="home">

<div className="bg-circle one"></div>
<div className="bg-circle two"></div>

<motion.div
className="hero-text"
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
>

<h3>👋 Hello, I'm</h3>

<h1>

Vansh <span>Sharma</span>

</h1>

<TypeAnimation
sequence={[
"Full Stack Developer",2000,
"React Developer",2000,
"Java Developer",2000,
"Backend Developer",2000
]}
speed={40}
repeat={Infinity}
className="typing"
/>

<p>

I build beautiful,
fast and scalable web applications
using React, Node.js, Express.js
and MongoDB.

</p>

<div className="buttons">

<a href="/resume.pdf" className="btn">

<FaDownload/>

Resume

</a>

<a
href="https://github.com/Vansh1133"
className="btn2"
target="_blank"
>

<FaGithub/>

Github

</a>

<a
href="https://www.linkedin.com/in/vansh-sharma-7497362b1/"
className="btn2"
target="_blank"
>

<FaLinkedin/>

LinkedIn

</a>

</div>

</motion.div>

<motion.div

className="hero-img"

initial={{opacity:0,x:80}}

animate={{opacity:1,x:0}}

transition={{duration:1}}

>

<div className="image-border">

<img
src="/profile.png"
alt=""
/>

</div>

</motion.div>

<div className="scroll-down">

<FaArrowDown/>

</div>

</section>

)

}

export default Hero;