import React from 'react'
import ReactDOM from 'react-dom/client'
import { PostScheduling } from './pages/PostScheduling'
import GlobalStyles from './styles/global'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette:{
    secondary: {
      main: "#00D062"
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PostScheduling />
    </ThemeProvider>
  </React.StrictMode>
)


