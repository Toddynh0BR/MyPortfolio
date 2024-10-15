import { Container, Myprojects } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'; 

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { Card } from "../../components/Card";

import InteractiveCardDetail from "../../assets/InteractiveCardDetail.svg";
import CalculatorApp from "../../assets/Calculator App.svg";
import AgeCalculator from "../../assets/AgeCalculator.svg";
import FoodExplorer from "../../assets/FoodExplorer.svg";
import RocketMovies from "../../assets/RocketMovies.svg";
import RocketNotes from "../../assets/RocketNotes.svg";
import FocusTimer from "../../assets/FocusTimer.svg";
import TodoApp from "../../assets/TodoApp.svg";
import MHMobal from "../../assets/mhMobal.svg";
import MH from "../../assets/mh.svg";

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
         link="https://github.com/Toddynh0BR/Food-Explorer-FrontEnd"
        />

        
        <Card 
         title="MHImports"
         techs="ReactJs, NodeJs, Git, NPM"
         image={MH}
         link="https://github.com/Toddynh0BR/MH-Imports-Front"
        />

        <Card 
         title="RocketNotes"
         techs="ReactJs, NodeJs, Git, NPM"
         image={RocketNotes}
         link="https://github.com/Toddynh0BR/Rocket-Notes-Front"
        />

        <Card 
         title="RocketMovies"
         techs="ReactJs, NodeJs, Git, NPM"
         image={RocketMovies}
         link="https://github.com/Toddynh0BR/Rocket-Movies-Front"
        />

        <Card 
         title="Todo App"
         techs="HTML, CSS, JS"
         image={TodoApp}
         link="https://github.com/Toddynh0BR/Todo-App"
        />

        <Card 
         title="FocusTimer"
         techs="HTML, CSS, JS"
         image={FocusTimer}
         link="https://github.com/Toddynh0BR/Focus-Timer"
        />
        
        <Card 
         title="CalculatorApp"
         techs="HTML, CSS, JS"
         image={CalculatorApp}
         link="https://github.com/Toddynh0BR/Calculator-App"
        />

        <Card 
         title="InteractiveCardDetail"
         techs="HTML, CSS, JS"
         image={InteractiveCardDetail}
         link="https://github.com/Toddynh0BR/Interactive-Card-Details"
        />

        <Card 
         title="AgeCalculator"
         techs="HTML, CSS, JS"
         image={AgeCalculator}
         link="https://github.com/Toddynh0BR/Age-Calculator"
        />

        <Card 
         title="MHImports Mobile"
         techs="React Native, NodeJs, TS, CSS, Git, Expo"
         image={MHMobal}
         link="https://github.com/Toddynh0BR/MH-Imports-Mobal"
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