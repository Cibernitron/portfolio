import { createGlobalStyle } from "styled-components";
import { theme } from "../styles/themes";

const GlobalStyle = createGlobalStyle`


.container{
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  display: flex;

  transition: transform 0.5s ease-in-out;
  overflow-y: hidden; /* Cache les barres de défilement par défaut */}


.content-container {
  max-width: 80vw;
  /* padding: 20px; */
  /* text-align: center; */

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }


  p {
    font-size: 1.25rem;
  }}


  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
  }

  /* Optional: Enhance smooth scrolling */
  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default GlobalStyle;
