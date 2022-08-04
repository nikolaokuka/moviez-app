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
`;
