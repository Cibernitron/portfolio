import React from "react";
import styled, { keyframes } from "styled-components";
import rune from "../assets/BifrostRunes.png";
import text from "../assets/BifrostText.png";

// Définition de l'animation
const rotate = keyframes`
    from {
        transform: rotate(360deg); 
    }
    to {
        transform: rotate(0deg); 
    }
`;

const DisplayLogo = ({ href }) => {
  return (
    <Logo href={href}>
      <Image className="rune" src={rune} alt="Rune" />
      <Image src={text} alt="Text" />
    </Logo>
  );
};

export default DisplayLogo;

const Logo = styled.a`
  position: relative;
  aspect-ratio: 1/1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #181515;
  border-radius: 8px;
`;

const Image = styled.img`
  position: absolute;
  aspect-ratio: 1/1;
  width: 100%;
  height: auto;
  object-fit: contain;

  &.rune {
    animation: ${rotate} 40s linear infinite;
  }
`;
