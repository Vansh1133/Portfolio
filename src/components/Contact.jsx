import {
FaEnvelope,
FaGithub,
FaLinkedin,
FaPhone
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact(){

return(

<section id="contact">

<h2 className="title">

Contact <span>Me</span>

</h2>

<div className="contact-box">

<motion.div

className="contact-left"

initial={{x:-80,opacity:0}}

whileInView={{x:0,opacity:1}}

transition={{duration:1}}

viewport={{once:true}}

>

<h3>

Let's Work Together 🚀

</h3>

<p>

I'm looking for Software Development opportunities.

</p>

<div className="contact-info">

<p>

<FaEnvelope/>

&nbsp;

vanshsharma77890@gmail.com

</p>

<p>

<FaPhone/>

&nbsp;

+91 7906366371

</p>

<p>

<FaGithub/>

&nbsp;

github.com/Vansh1133

</p>

<p>

<FaLinkedin/>

&nbsp;

linkedin.com/in/yourprofile

</p>

</div>

</motion.div>

<motion.form

className="contact-form"

initial={{x:80,opacity:0}}

whileInView={{x:0,opacity:1}}

transition={{duration:1}}

viewport={{once:true}}

>

<input placeholder="Your Name"/>

<input placeholder="Email"/>

<textarea
rows="6"
placeholder="Message"
></textarea>

<button className="btn">

Send Message

</button>

</motion.form>

</div>

</section>

)

}

export default Contact;