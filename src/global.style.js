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

  .App {
    width: 100%;
    min-height: 100vh;
  }

  .wrapp {
    width: 80%;
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

  @media only screen and (max-width: 900px) {
    .wrapp {
      width: 100%;
    }

    main {
      margin-top: 20rem;
    }
  }
`;
