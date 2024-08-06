import { Container } from "./style";
import { Link } from 'react-router-dom';

import Simbol from "../../assets/simbol.png"

export function Footer({titleone, titletwo, titlethree, linkone, linktwo, linkthree}){
 return(
    <Container>
        <div className="pages">
         <Link to={linkone}>
         <span>{titleone}</span>
         </Link>

         <Link to={linktwo}>
         <span>{titletwo}</span>
         </Link>

         <Link to={linkthree}>
         <span>{titlethree}</span>
         </Link>
        </div>

        <div className="others">
         <div className="info">
          <span>galaxyplay41@gmail.com</span>
          <span>+55 81 99970-4376</span>
         </div>

         <img src={Simbol} alt="Simbolo da rebeliao" />
        </div>
    </Container>
 )
}