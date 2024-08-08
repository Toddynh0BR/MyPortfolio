import styled from "styled-components";

export const Container = styled.button`
width: 24rem;
height: 6rem;

gap: 1rem;
display: flex;
align-items: center;
justify-content: center;

border: none;
background-color: #D9D9D9;
transition: .3s ease-in-out;

font-size: 1.6rem;
font-weight: 400;

svg {
 font-size: 1.3rem;
}

&:hover {
 filter: brightness(90%);
 cursor: pointer;
}
&:disabled{
 filter: brightness(90%);
}

@media (max-width: 750px){
 width: 29.8rem;
}
`