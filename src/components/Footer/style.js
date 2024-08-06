import styled from "styled-components";

export const Container = styled.div`
height: 40rem;
width: 100%;

background-color: #000000;
padding: 8rem;


justify-content: space-between;
align-items: center;

&, .pages, .others, .info {
 display: flex;
}


span {
 color: #FFFFFF;
 font-weight: 700;
 font-size: 1.6rem;
 transition: .3s ease-in-out;
}

.pages {
 align-items: center;
 gap: 3rem;

 span:hover {
 filter: brightness(60%);
 }
}

.others {
 width: 71rem;
 align-items: center;
 justify-content: space-between;
}

.info {
 gap: 1rem;

 flex-direction: column;
}

img {
 height: 8rem;
 width: 8rem;
}

@media (max-width: 750px){
 height: 30rem;

 justify-content: center;
 flex-direction: column;
 gap: 5rem;

 .others {
 width: 29.8rem;

 gap: 2rem;
 justify-content: left;
 flex-direction: row-reverse;
 }
}
`