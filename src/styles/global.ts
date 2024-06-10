// import { createGlobalStyle } from 'styled-components'

// export const Globalstyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   :root {
//     font-size: 64.5%;
//   }

//   :focus {
//     outline: none;
//     box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
//   }

//   body {
//     background: ${(props) => props.theme['base-background']};
//     color: ${(props) => props.theme['base-text']};
//     -webkit-font-smoothing: antialiased;
//   }

//   body, input, textarea, button {
//     font: 400 1.6rem Nunito, sans-serif
//   }

// `

import { createGlobalStyle } from 'styled-components'
// import firaCode from '../assets/fonts/FiraCode-Regular.woff'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 0.45rem;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['base-border']}
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors['brand-blue']};
      border-radius: 999px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${({ theme }) =>
      theme.textSizes['text-text-m']} 'Nunito', sans-serif;
      line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`
