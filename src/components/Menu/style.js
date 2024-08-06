import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100%;
transition: .5s ease-in-out;

top: -100%;
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

 margin-left: 4rem;
 margin-bottom: 1rem;

 cursor: pointer;
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
 font-size: 2.4rem;
 margin-right: 1rem;
 cursor: pointer;
 }
}

span {
 display: block;
  margin-bottom: 1rem;

 font-weight: 600;
 font-size: 2.4rem;
}

`