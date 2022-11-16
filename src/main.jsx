import React from 'react'
import ReactDOM from 'react-dom/client'
import { PostScheduling } from './pages/PostScheduling'
import GlobalStyles from './styles/global'
import { createTheme, ThemeProvider } from '@mui/material'
import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'


const theme = createTheme({
  palette:{
    secondary: {
      main: "#00D062"
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PostScheduling />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)


