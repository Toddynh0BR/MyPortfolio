import styled from "styled-components";

export const Container = styled.div`
.buttons {
 gap: 4rem;
 display: flex;
 align-items: center;
 justify-content: center;

 margin-bottom: 8rem;
}

@media (max-width: 750px){
 .buttons {
  gap: 2rem;
  flex-direction: column;

  margin-bottom: 6rem;
 }
}
`

export const Main = styled.div`
width: 56rem;
margin: auto;
margin-bottom: 8rem;


h2 {
 font-family: 'League Spartan', sans-serif;
 font-size: 3.2rem;
 font-weight: 700;

 margin-top: 8rem;
 margin-bottom: 2rem;
}

p {
 font-size: 1.6rem;
 font-weight: 400;
}

.Skills {
 display: grid;
 row-gap: 0rem;
 grid-template-columns: repeat(5, 1fr);
}

.Skill {
 gap: .5rem;
 display: flex;
 align-items: center;
 white-space: nowrap;
 padding: .5rem;

 svg {
 font-size: 2rem;
 }
}

@media (max-width: 750px){
 width: 29.8rem;

 .Skills {
 grid-template-columns: repeat(2, 1fr);
 }
}
`

export const Projects = styled.div`
width: 120rem;
margin: auto;
margin-bottom: 10rem;

gap: 5rem;
display: flex;
align-items: center;

@media (max-width: 750px){
 width: 29.8rem;

 margin-bottom: 5rem;

 gap: 3rem;
 flex-direction: column;
}
`