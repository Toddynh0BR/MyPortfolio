import { Container } from "./style";

export function Button({title, icon: Icon, loading= false, ...rest}){
    return(
        <Container 
         disabled={loading}
         type='button'
         {...rest}
        >
         {Icon && <Icon />}
         {loading ? 'Sending...' : title}
        </Container>
    )
}