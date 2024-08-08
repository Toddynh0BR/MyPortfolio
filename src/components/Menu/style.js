import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;
transition: .5s ease-in-out;

top: -150%;
&[data-menu-open="true"]{
top: 0;
}

gap: 20rem;
display: flex;
align-items: center;
justify-content: center;

color: #000000;
background-color: #FFFFFF;
font-family: 'League Spartan', sans-serif;

z-index: 2;
position: fixed;

a {
 color: #000000;
}

.X {
 top: 2rem;
 right: 2rem;
 position: absolute;
 
 font-size: 5em;
 cursor: pointer;
}

h2 {
 font-weight: 700;
 font-size: 6.4rem;

 width: fit-content;
 margin-left: 4rem;
 margin-bottom: 1rem;

 position: relative;

 cursor: pointer;
}

h2::after {
content: " ";
width: 0%;
height: .5rem;
position: absolute;

left: 0;
bottom: 0;
transition: .5s ease-in-out;
background-color: #000000;
}

h2:hover::after {
  width: 100%;
}

h4 { 
  font-weight: 500;
  font-size: 2.4rem;
 
  margin-bottom: -8.5rem;
  transform: rotate(-90deg);
  transform-origin: left bottom;
}

.Info {
 margin-bottom: -5rem;

 svg {
 box-sizing: content-box;
 margin-right: 1rem;
 padding: 1rem;

 transition: .4s ease-in-out;
 border-radius: 50%;
 font-size: 2.4rem;
 cursor: pointer;
 }

 svg:hover {
  background-color: #000000;
  color: #FFFFFF;
 }

}

span {
 display: block;
 margin-bottom: 1rem;

 font-weight: 600;
 font-size: 2.4rem;
}



@media (max-width: 750px){
 gap: 10rem;
 flex-direction: column;

 h2 {
 margin-left: 0rem;
 font-size: 6rem;
 }
}
`