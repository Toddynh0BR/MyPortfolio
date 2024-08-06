import styled from "styled-components";

export const Container = styled.div`
height: 46rem;
width: 36rem;
position: relative;

-webkit-box-shadow: inset 0px 0px 29px 28px rgba(0,0,0,0.75);
-moz-box-shadow: inset 0px 0px 29px 28px rgba(0,0,0,0.75);
box-shadow: inset 0px 0px 29px 28px rgba(0,0,0,0.75);

 cursor: pointer;


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

@media (max-width: 750px){
 width: 29.8rem;
 height: 38.2rem;
}
`