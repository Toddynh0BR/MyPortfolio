import { Container, Main, Projects } from "./style";
import { useEffect, useState } from 'react'; 
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { Card } from "../../components/Card";

import FoodExplorer from "../../assets/FoodExplorer.png";
import GitFavorites from "../../assets/GitFavorites.png";

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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corporis iusto exercitationem, animi totam ipsum est ab nemo assumenda repellat itaque. Odit perferendis asperiores itaque? Beatae reiciendis non fugit temporibus.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis fugit mollitia eos repudiandae eveniet quasi animi odit quidem voluptas quis dolorem sapiente deleniti sequi, autem vitae dolore! Distinctio, voluptatem aspernatur?
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
         link="#"
        />

        <Card 
         title="GitFavorites"
         techs="HTML, CSS, JS, API"
         image={GitFavorites}
         link="#"
        />

        <Card 
         title="RocketMovies"
         techs="ReactJs, NodeJs, Git, NPM"
         image={FoodExplorer}
         link="#"
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