import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #00D2DF;
    --gradiente-pink: linear-gradient(90deg, rgba(210,64,116,1) 0%, rgba(101,24,180,1) 100%);
    --gradiente-purple: linear-gradient(90deg, rgba(147,88,247,1) 0%, rgba(16,215,226,1) 100%);
    --dark: #121212;
    --dark-200: #151515;
    --gray-light: #C4C4C4;
  }
  
  
  * {
    ::-webkit-scrollbar {
      display: none;
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
  }
`

export default GlobalStyles