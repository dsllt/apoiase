
import Container from '@mui/material/Container';
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Form } from '../components/Form'
import { useState } from 'react';

import { gql, useQuery } from '@apollo/client'

const GET_APOIASE_QUERY = gql`
  query {
    apoiases {
      id
      postName
      postBody
      postVisualization
      postOption
      postDateAndTime 
    }
  }
`

export function PostScheduling(){
  const { data }=useQuery(GET_APOIASE_QUERY)
  console.log(data)

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