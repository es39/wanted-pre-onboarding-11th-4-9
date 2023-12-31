import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  main {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
  }
`;
export default GlobalStyle;
