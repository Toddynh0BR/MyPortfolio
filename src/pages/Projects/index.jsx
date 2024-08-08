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
import FocusTimer from "../../assets/FocusTimer.svg";
import TodoApp from "../../assets/TodoApp.svg";
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
         link="https://toddyfoodexplorer.netlify.app/"
        />

        <Card 
         title="Todo App"
         techs="HTML, CSS, JS"
         image={TodoApp}
         link="https://toddynh0br.github.io/Todo-App/"
        />

        <Card 
         title="FocusTimer"
         techs="HTML, CSS, JS"
         image={FocusTimer}
         link="https://toddynh0br.github.io/Focus-Timer/"
        />
        
        <Card 
         title="CalculatorApp"
         techs="HTML, CSS, JS"
         image={CalculatorApp}
         link="https://toddynh0br.github.io/Calculator-App/"
        />

        <Card 
         title="InteractiveCardDetail"
         techs="HTML, CSS, JS"
         image={InteractiveCardDetail}
         link="https://toddynh0br.github.io/Interactive-Card-Details/"
        />

        <Card 
         title="AgeCalculator"
         techs="HTML, CSS, JS"
         image={AgeCalculator}
         link="https://toddynh0br.github.io/Age-Calculator/"
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