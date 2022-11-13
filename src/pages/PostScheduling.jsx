import { Container } from './styles'
import { Header } from "../components/Header"
import { SelectionButton } from "../components/SelectionButton"
import { Footer } from "../components/Footer"
import { Form } from '../components/Form'

export function PostScheduling(){
  return (
    <Container>
      <Header />
      <Form />
      <SelectionButton />
      <Footer />
    </Container>
  )
}