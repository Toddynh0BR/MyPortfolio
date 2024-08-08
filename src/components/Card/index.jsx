import { Container } from "./style";

export function Card({title, techs, link, image}){
    return(
        <Container>
         <a href={link} target="blank">
          <div className="title">
           <h3 translate="no">{title}</h3>
           <h4 translate="no">{techs}</h4>
          </div>
          <img src={image} alt="imagem do projeto" />
         </a>
        </Container>
    )
}