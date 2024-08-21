import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
.data-scroll-container {
  height: 100vh;
}
`;
export default GlobalStyle;
