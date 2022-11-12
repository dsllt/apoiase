import { BiChevronDown, BiChevronUp, BiChevronRight } from 'react-icons/bi'

import { Container, Menu } from './styles'

import { ButtonHeader } from '../ButtonHeader'

export function Header(){
  return(
    <Container>
      <Menu>
        <img src="/src/assets/Logo.svg" alt='Logo apoia.se' id='logo-svg'/>

        <ButtonHeader title='Produto'> <BiChevronDown /> </ButtonHeader>
        <ButtonHeader title='Recursos'> <BiChevronDown /> </ButtonHeader>

      </Menu>

      <ButtonHeader title='Acessar Minha Conta'> <BiChevronRight /> </ButtonHeader>

    </Container>
  )
}