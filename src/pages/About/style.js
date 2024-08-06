import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;

button {
 margin-bottom: 10rem;
}
`

export const Main = styled.div`
width: 72.1rem;
margin-top: 10rem;

color: #000000;

h2 {
 font-weight: 700;
 font-size: 3.2rem;
 font-family: 'League Spartan', sans-serif;

 margin-bottom: 2rem;
}

p {
 font-size: 1.6rem;
 font-weight: 400;

 margin-bottom: 7rem;
}

@media (max-width: 750px){
 width: 29.8rem
}
`