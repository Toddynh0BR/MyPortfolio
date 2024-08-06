import styled from "styled-components";

export const Container = styled.div`
gap: 8rem;
display: flex;
align-items: center;
flex-direction: column;

@media (max-width: 750px){
 gap: 5rem;
}
`

export const Myprojects = styled.div`
width: 120rem;

margin: auto;
margin-top: 8rem;

gap: 5rem;
display: grid;
grid-template-columns: repeat(3, 1fr);

@media (max-width: 750px){
 width: 29.8rem;
 
 margin-top: 2rem;

 gap: 3rem;
 grid-template-columns: repeat(1, 1fr);
}
`