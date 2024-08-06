import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
position: relative;


display: flex;
text-align: center;
flex-direction: column;
justify-content: center;

background-color: #000000;

img, svg {
 position: absolute;
}

img {
 top: 2rem;
 left: 2rem;

 width: 8rem;
 height: 8rem;
}

svg {
 top: 3rem;
 right: 2rem;

 width: 5rem;
 height: 5rem;
 color: #FFFFFF;
 cursor: pointer;
}

h1 {
 font-family: 'League Gothic', sans-serif;
 font-size: 9.6rem;
 font-weight: 400;
 color: #FFFFFF;
}

h2 {
 font-family: 'League Spartan', sans-serif;
 letter-spacing: 1rem;
 font-size: 3.2rem;
 font-weight: 400;
 color: #FFFFFF;
}

@media (max-width: 750px){
 gap: 3rem;
 
 img {
 width: 6rem;
 height: 6rem;
 }

 svg {
 width: 4rem;
 height: 4rem;
 }

 h1 {
 line-height: 80%;
 }
}
`