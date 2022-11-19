
import Container from '@mui/material/Container';
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Form } from '../components/Form'

export function PostScheduling(){

  return (
    <Container disableGutters={true} maxWidth='false' >
      <Container
        component='article'
        maxWidth='md'
      >
        <Header />
        <Form />
      </Container>
      <Footer />
    </Container>

  )
}