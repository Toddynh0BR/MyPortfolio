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
       I have been working in web programming for over a year, with experience in Front-End and Back-End, developing a wide range of applications, from simple interactive websites to single pages with advanced functionality. I graduated from RocketSeat's Explorer Specialist course, which covers a wide range of technologies and tools, including JavaScript, CSS, Git, GitHub, React.js, Node.js, Figma, and responsiveness techniques, among others.

My approach is characterized by the continuous search for technical and aesthetic excellence, resulting in web solutions that are not only robust, but also visually impactful. My professional trajectory is marked by a firm commitment to continuous learning and an incessant search for innovation. In each project, I strive to improve my technical and design skills, ensuring that each delivery not only meets, but exceeds client expectations.

I am excited to continue my journey in web development, exploring new challenges and contributing with my passion and expertise. With a keen eye on emerging trends and industry best practices, I am prepared to transform ideas into innovative solutions, creating memorable digital experiences and advanced features that make a difference.
       </p>
       <h2>My Hobbies and Interests</h2>
       <p>
       I have a habit of developing several applications with JavaScript, constantly seeking new challenges to test and improve my programming and logic skills. A large part of my work includes Front-End Mentor challenges, which allow me to explore and solve complex problems. In addition, I regularly participate in events promoted by RocketSeat, where I have the opportunity to learn about new technologies and industry trends.

I also dedicate myself to helping other developers on the RocketSeat forums, answering technical questions and sharing knowledge. I am passionate about discovering and studying new technologies and gadgets, always seeking innovation and improvement.

Outside of the programming universe, I am a big fan of pop culture, especially rock and movies, which are constant sources of inspiration and entertainment for me.
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