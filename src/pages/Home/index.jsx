import { Container, Main, Projects } from "./style";
import { useEffect, useState } from 'react'; 
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { Card } from "../../components/Card";

import FoodExplorer from "../../assets/FoodExplorer.svg";
import RocketMovies from "../../assets/RocketMovies.svg";
import TodoApp from "../../assets/TodoApp.svg";

import { 
         DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejsSmall, DiNpm, 
         DiGithubBadge, DiDatabase,DiVisualstudio, DiJava, DiMongodb,
         DiResponsive, DiPython, DiPhp 
       } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export function Home(){
 const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 return(
    <Container>

        <Menu
         menu={menuOpen}
         onclick={()=> setMenuOpen(false)}
        />
        
        <Header
         title="MATHEUS AUGUSTO"
         subtitle="FULL STACK ENGINEER"
         onclick={()=> setMenuOpen(true)}
        />

        <Main>
            <h2>About me</h2>
            <p>
            I am a junior full stack developer, dedicated to continuous learning and self-improvement. With a solid foundation in web development, my focus is on constantly expanding my knowledge and skills in both Front-End and Back-End areas. I am always looking for new opportunities to learn and apply emerging technologies, and I strive to take on complex challenges that allow me to grow professionally.
            </p>
            
            <h2>My Skills</h2>
            <div className="Skills">

                <div className="Skill">
                    <DiHtml5 />
                    <p translate="no">HTML</p>
                </div>

                <div className="Skill">
                    <DiCss3 />
                    <p translate="no">CSS</p>
                </div>

                <div className="Skill">
                    <DiJavascript />
                    <p translate="no">JavaScript</p>
                </div>

                <div className="Skill">
                    <DiReact />
                    <p translate="no">ReactJS</p>
                </div>

                <div className="Skill">
                    <DiNodejsSmall />
                    <p translate="no">NodeJS</p>
                </div>

                <div className="Skill">
                    <DiGithubBadge />
                    <p translate="no">GitHub</p>
                </div>

                <div className="Skill">
                    <FaGitAlt />
                    <p translate="no">Git</p>
                </div>

                <div className="Skill">
                    <DiNpm />
                    <p translate="no">NPM</p>
                </div>

                <div className="Skill">
                    <DiDatabase />
                    <p translate="no">Database</p>
                </div>

                <div className="Skill">
                    <DiVisualstudio />
                    <p translate="no">VsCode</p>
                </div>

            </div>
        </Main>

        <Projects>

         <Card 
         title="FoodExplorer"
         techs="ReactJs, NodeJs, Git, NPM"
         image={FoodExplorer}
         link="https://toddyfoodexplorer.netlify.app/"
        />

        <Card 
         title="Todo App"
         techs="HTML, CSS, JS"
         image={TodoApp}
         link="https://toddynh0br.github.io/Todo-App/"
        />

        <Card 
         title="RocketMovies"
         techs="ReactJs, NodeJs, Git, NPM"
         image={RocketMovies}
         link="https://rocketmovies-toddy.netlify.app/"
        />


        </Projects>

        <div className="buttons">
         <Link to="/projects">
          <Button
           title="All Projects"
           icon={FaArrowRightLong}
          />
         </Link>

         <Link to="/contact">
          <Button
           title="Contact me"
           icon={FaArrowRightLong}
          />
         </Link>
        </div>
        
        <Footer
         titleone="PROJECTS"
         titletwo="ABOUT"
         titlethree="CONTACT"
         linkone="/projects"
         linktwo="/about"
         linkthree="/contact"
        />
    </Container>
 )
}