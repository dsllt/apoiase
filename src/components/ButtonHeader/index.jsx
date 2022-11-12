import { Container } from "./styles";

export function ButtonHeader({title,children, ...rest}){
  return (
    <Container {...rest}>
        {title}
        {children}
    </Container>
  )
}