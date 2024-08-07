import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;


button {
 margin-top: 8rem;
 margin-bottom: 10rem;
}
`

export const Main = styled.div`
width: 120rem;
margin-top: 10rem;

gap: 4rem;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-areas: 
"title title"
"input1 input2"
"input3 input3"
;

color: #000000;


h2 {
 font-weight: 700;
 font-size: 3.2rem;
 font-family: 'League Spartan', sans-serif;
 margin-bottom: 2rem;

 grid-area: title;
}

.name {
 grid-area: input1;
}
.email {
 grid-area: input2;
}
.text {
 grid-area: input3;
}

.input-wrapper {
 gap: 2rem;
 display: flex;
 flex-direction: column;
}

label {
 font-weight: 700;
 font-size: 1.6rem;
 font-family: 'League Spartan', sans-serif;
}

input{
 width: 100%;

 border: none;
 outline: none;
 padding: .2rem;
 border-bottom: 1px solid #000000;
}

textarea {
 width: 100%;
 height: 2rem;
 border: none;
 resize: none;
 outline: none;
 padding: 0rem;
 border-bottom: 1px solid #000000;
}

textarea:focus {
 min-height: 2rem;
 border-bottom: 2px solid #000000;
}
input:focus {
 border-bottom: 2px solid #000000; 
}


@media (max-width: 750px){
 width: 29.8rem;

grid-template-columns: repeat(1, 1fr);
grid-template-areas: 
"title"
"input1"
"input2"
"input3"
;
}
`