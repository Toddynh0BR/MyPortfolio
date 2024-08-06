import { Container } from "./style";

import { Link } from "react-router-dom";

import { FaInstagram, FaLinkedin, FaGithub  } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

export function Menu({menu, onclick}){
    return(
        <Container data-menu-open={menu}>
            <IoCloseOutline  className="X" onClick={onclick}/>

            <div className="Main">
                <h4>MENU</h4>
                <Link to="/">
                <h2>HOME</h2>
                </Link>

                <Link to="/projects">
                <h2>PROJECTS</h2>
                </Link>

                <Link to="/about">
                <h2>ABOUT</h2>
                </Link>

                <Link to="/contact">
                <h2>CONTACT</h2>
                </Link>
            </div>

            <div className="Info">
                <span>galaxyplay41@gmail.com</span>
                <span>+55 81 9970 4376</span>
                <a href="https://www.instagram.com/matheus_augusto_007?igsh=dGw5bjR0N3U2eWIw" target="blank">
                <FaInstagram/>
                </a>
                <a href="https://www.linkedin.com/in/matheus-augusto-a950672a1/" target="_blank" >
                <FaLinkedin/>
                </a>
                <a href="https://github.com/Toddynh0BR" target="blank">                
                <FaGithub/>
                </a>
            </div>
        </Container>
    )
}
