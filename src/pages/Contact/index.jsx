import { Container, Main } from "./style";

import { useEffect, useState } from 'react'; 

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";

export function Contact(){
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [menuOpen, setMenuOpen] = useState(false);
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 function handleSend(){
      if (!name || !email || !message){
         return alert("Preencha todos os campos")
      }

      if (!emailPattern.test(email)) {
         return alert("Digite um email válido")
      }

      console.log(`
         Nome: ${name},
         Email: ${email},
         Mensagem: ${message}.
         `)

      alert("Mensagem enviada")
   };


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
       title="CONTACT ME"
       subtitle="SAY HELLO TO ME"
       onclick={()=> setMenuOpen(true)}
      />


      <Main>
      <h2>Contact me</h2>

       <div className="input-wrapper name">
         <label htmlFor="name">Name</label>
         <input 
          type="text" 
          id="name" 
          placeholder="Your Name"
          onChange={e => setName(e.target.value)}
         />
       </div>

       <div className="input-wrapper email">
         <label htmlFor="email">Email</label>
         <input 
          type="text" 
          id="email" 
          placeholder="email@example.com"
          onChange={e => setEmail(e.target.value)}
         />
       </div>

       <div className="input-wrapper message">
         <label htmlFor="message">Message</label>
         <textarea 
          id="message" 
          placeholder="Hello, my name is . . ."
          onChange={e => setMessage(e.target.value)}
         />
       </div>
      </Main>
          
       <Button
         title="Send message"
         onClick={handleSend}
       />

      <Footer
       titleone="HOME"
       titletwo="PROJECTS"
       titlethree="ABOUT"
       linkone="/"
       linktwo="/projects"
       linkthree="/about"
      />
    </Container>
 )
}