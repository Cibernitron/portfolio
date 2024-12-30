import React, { useEffect, useState } from "react";
import styled from "styled-components";
import homeVideo from "../assets/homecode.mp4";
import { theme } from "../styles/themes";

const Home = ({ id }) => {
  const [nameText, setNameText] = useState(""); // Le texte du nom
  const [workText, setWorkText] = useState(""); // Le texte du titre

  const fullName = "Jaason VAUQUELIN";
  const fullWork = "CConcepteur & Développeur d'Application Web";

  useEffect(() => {
    const timer = setTimeout(() => {
      startTypingAnimation(); // Démarre l'animation de frappe après 1 seconde
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Fonction pour démarrer l'animation de frappe
  const startTypingAnimation = () => {
    let nameIndex = 0;
    let workIndex = 0;

    // Fonction pour taper le nom
    const typeName = () => {
      if (nameIndex < fullName.length) {
        setNameText((prev) => prev + fullName.charAt(nameIndex)); // Ajoute la lettre au nom
        nameIndex++;
        setTimeout(typeName, 100); // Réduit le délai à 100ms pour une frappe plus rapide
      }
    };

    // Fonction pour taper le titre
    const typeWork = () => {
      if (workIndex < fullWork.length) {
        setWorkText((prev) => prev + fullWork.charAt(workIndex)); // Ajoute la lettre au titre
        workIndex++;
        setTimeout(typeWork, 75); // Réduit le délai à 75ms pour un affichage rapide du titre
      }
    };

    // Démarre l'animation de frappe du nom
    typeName();

    // Commence l'animation du titre après que le nom soit complètement affiché
    setTimeout(typeWork, fullName.length * 120); // Le délai pour que le titre commence après le nom
  };

  return (
    <VideoContainer id={id}>
      <Video autoPlay loop muted playsInline>
        <source src={homeVideo} type="video/mp4" />
      </Video>

      <Title>
        <Name>{nameText}</Name>
        <Work>{workText}</Work>
      </Title>
    </VideoContainer>
  );
};

export default Home;

const VideoContainer = styled.div`
  scroll-snap-align: start;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  scroll-snap-type: y mandatory;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
`;

const Name = styled.h1`
  color: ${theme.colors.white};
  text-align: center;
  margin: 0;
`;

const Work = styled.h2`
  color: ${theme.colors.white};
  font-style: italic;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;
