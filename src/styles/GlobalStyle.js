import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

p{
  font-size: 1.25rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

  ::-webkit-scrollbar {
    width: 0;
  }
.data-scroll-container {
  height: 100vh;
}
`;
export default GlobalStyle;
