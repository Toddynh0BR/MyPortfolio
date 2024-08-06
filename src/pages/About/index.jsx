import { Container, Main } from "./style";
import { useEffect, useState } from 'react'; 
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";

import { FaArrowRightLong } from "react-icons/fa6";

export function About(){
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
       title="ABOUT ME"
       subtitle="IT’S A-ME, MARIO!"
       onclick={()=> setMenuOpen(true)}
      />

      <Main>
       <h2>My Background</h2>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse, atque cupiditate cumque asperiores exercitationem quisquam assumenda veritatis maxime consequatur harum aliquid accusamus tempore inventore, enim corporis! Obcaecati, libero nulla?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates magni distinctio recusandae unde, illum et, minima eaque dolorem id enim saepe maxime minus accusantium soluta, libero cumque animi placeat numquam?
       </p>
       <h2>My Hobbies and Interests</h2>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse, atque cupiditate cumque asperiores exercitationem quisquam assumenda veritatis maxime consequatur harum aliquid accusamus tempore inventore, enim corporis! Obcaecati, libero nulla?
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates magni distinctio recusandae unde, illum et, minima eaque dolorem id enim saepe maxime minus accusantium soluta, libero cumque animi placeat numquam?
       </p>
      </Main>

          
      <Link to="/contact">
       <Button
         title="Contact me"
         icon={FaArrowRightLong}
       />
      </Link>

      <Footer
       titleone="HOME"
       titletwo="PROJECTS"
       titlethree="CONTACT"
       linkone="/"
       linktwo="/projects"
       linkthree="/contact"
      />
    </Container>
 )
}