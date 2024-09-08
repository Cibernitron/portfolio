import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../styles/themes";

const LoadingPage = () => {
  return (
    <Container>
      <LoaderContainer>
        <Circle />
        <Circle />
        <Circle />
      </LoaderContainer>
      <LoadingText>
        {Array.from("Chargement en cours...").map((char, index) => (
          <Letter key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </Letter>
        ))}
      </LoadingText>
    </Container>
  );
};

export default LoadingPage;

// Keyframes pour l'animation des cercles
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Keyframes pour l'animation des lettres avec espacement
const grow = keyframes`
  0% {
    transform: scale(1);
    letter-spacing: 0;
  }
  50% {
    transform: scale(1.5);
    letter-spacing: 5px;
  }
  100% {
    transform: scale(1);
    letter-spacing: 0;
  }
`;

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.dark};
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  animation: ${pulse} 1.5s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

const LoadingText = styled.p`
  margin-top: 20px;
  color: ${theme.colors.white};
  font-size: 18px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
`;

const Letter = styled.span`
  display: inline-block;
  animation: ${grow} 1.5s infinite ease-in-out;
  font-size: 18px; /* Adjust this as needed */
  margin-right: 2px; /* Small margin between letters to avoid them sticking together */
`;
