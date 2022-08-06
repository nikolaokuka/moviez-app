import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%; // -> 10px -> 1rem
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Open Sans', sans-serif;
  }

  .wrapp {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    margin-top: 10rem;
    padding: 2rem 0;
    position: relative;
    flex: 1;
  }

  .dark {
    background-color: #1c2022;
    color: #dadada;
  }
`;
