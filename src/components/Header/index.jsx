import { Container } from "./style";

import Simbol from "../../assets/simbol.png";
import { TbMenuDeep } from "react-icons/tb";

export function Header({title, subtitle, onclick}){
 return(
    <Container>
        <img src={Simbol} alt="Simbolo da rebelião" />
        <TbMenuDeep onClick={onclick}/>
        
        <h1>{title}</h1>
        <h2 translate="no">{subtitle}</h2>
    </Container>
 )
}