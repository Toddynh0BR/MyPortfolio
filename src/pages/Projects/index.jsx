import { Container, Myprojects } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'; 

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { Card } from "../../components/Card";

import FoodExplorer from "../../assets/FoodExplorer.png";
import GitFavorites from "../../assets/GitFavorites.png";
import { FaArrowRightLong } from "react-icons/fa6";

export function Projects(){
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
       title="MY PROJECTS"
       subtitle="MADE WITH LOVE"
       onclick={()=> setMenuOpen(true)}
      />

      <Myprojects>
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
      </Myprojects>



       <Link to="/contact">
        <Button
         title="Contact me"
         icon={FaArrowRightLong}
        />
       </Link>

     <Footer
      titleone="HOME"
      titletwo="ABOUT"
      titlethree="CONTACT"
      linkone="/"
      linktwo="/about"
      linkthree="/contact"
     />
    </Container>
 )
}