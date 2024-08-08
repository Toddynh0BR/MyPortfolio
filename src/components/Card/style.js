import styled from "styled-components";

export const Container = styled.div`
height: 46rem;
width: 36rem;
position: relative;
transition: .3s ease-in-out;

.title {
 position: absolute;
 top: 1rem;
 left: 1rem;
}
h3 {
 margin-bottom: 1rem;
 font-weight: 700;
 font-size: 2rem;
 color: #FFFFFF;
}

h4 {
 font-size: 1.2rem;
 font-weight: 400;
 color: #FFFFFF;
}

img {
 height: 100%;
 width: 100%;
 
 position: absolute;
 z-index: -1;
 top: 0;
}

&:hover{
 transform: scale(105%);
 cursor: pointer;
}
@media (max-width: 750px){
 width: 29.8rem;
 height: 38.2rem;
}
`