import { Container, Main } from "./style";
import Swal from 'sweetalert2'

import { useEffect, useState } from 'react';
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";

export function Contact(){
   const [name, setName] = useState('');
   const [text, setText] = useState('');
   const [email, setEmail] = useState('');
   const [Loading, setLoading] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  async function handleSend() {
    if (!name || !email || !text) {
      return Toast.fire({
        icon: "warning",
        title: "Fill in all fields!"
      });
    }
  
    if (!emailPattern.test(email)) {
      return Toast.fire({
        icon: "warning",
        title: "Enter a valid email address!"
      });
    }
  
    setLoading(true)
    try {
      await api.post("/send", { name, email, text });
  
      setName('');
      setText('');
      setEmail('');
  
      Toast.fire({
        icon: "success",
        title: "Message sent successfully!"
      });
      setLoading(false)
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: "Error sending message!"
      });
      setLoading(false)
    }
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
          id="name" 
          type="text" 
          value={name}
          placeholder="Your Name"
          onChange={e => setName(e.target.value)}
         />
       </div>

       <div className="input-wrapper email">
         <label htmlFor="email">Email</label>
         <input 
          id="email" 
          type="text"
          value={email} 
          placeholder="email@example.com"
          onChange={e => setEmail(e.target.value)}
         />
       </div>

       <div className="input-wrapper text">
         <label htmlFor="text">Message</label>
         <textarea 
          id="text" 
          value={text}
          placeholder="Hello, my name is . . ."
          onChange={e => setText(e.target.value)}
         />
       </div>
      </Main>
          
       <Button
         title="Send message"
         loading={Loading}
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