import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [menu,setMenu]=useState(false);

    return(

        <nav>

            <div className="logo">
                Vansh.
            </div>

            <ul className={menu?"nav-links active":"nav-links"}>

                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>

                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>

                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>

                <li>
                    <Link to="experience" smooth={true} duration={500}>
                        Experience
                    </Link>
                </li>

                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>

            </ul>

            <div
            className="menu"
            onClick={()=>setMenu(!menu)}
            >

                {menu?<FaTimes/>:<FaBars/>}

            </div>

        </nav>

    )

}

export default Navbar;