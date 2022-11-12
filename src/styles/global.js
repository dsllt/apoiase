import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 'border-box';
  }

  body, button {
    background-color: '#ffffff';
    color: '#3d4749';

    font-family: 'PT Sans', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;

  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`
