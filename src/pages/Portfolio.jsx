import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/themes";
import Skoll from "../components/LogoSkoll";
import LogoBifrost from "../components/LogoBifrost";
import Arrow1 from "../assets/arrow1.png";
import Arrow2 from "../assets/arrow2.png";
import Arrow3 from "../assets/arrow3.png";
import Arrow4 from "../assets/arrow4.png";
import LogoHA from "../assets/logo_heroes-arena.png";
import Title from "../components/Title"; // Ou le chemin correct
import { darken } from "polished";

const projects = [
  {
    name: "Heroes Arena",
    image: LogoHA,
    link: "https://www.heroesarena.ciberweblab.fr",
    title: "Projet Personnel.",
    dev: "Html, Css, Js, Php et Sql.",
    statut: "En cours de développement.",
    color: "#ffff00",
    description: (
      <>
        Jeu de cartes de héros de Comics, conçu pour laisser libre cours à mon
        imagination et ma curiosité. <br />
        Actuellement en refonte, le jeu propose pour l'instant une
        fonctionnalité permettant de sélectionner des cartes.
      </>
    ),
  },
  {
    name: "Skoll Winter Festival",
    image: <Skoll />,
    link: "http://www.skollwinterfestival.jasonvauquelin.fr/",
    title: "Projet de stage chez Videlum.",
    dev: "Html, Css, Js, Php et Sql.",
    statut: "Projet terminé",
    color: "#00bfff",
    description: (
      <>
        Site internet de l'édition 2024 du Skoll Winter Festival, <br />
        dédié à la communication et à la vente de billets pour le festival de
        musique techno Skoll Winter Festival 2024.
      </>
    ),
  },
  {
    name: "Bifrost Agency",
    image: <LogoBifrost />,
    link: "https://bifrost.ciberweblab.fr/",
    title: "Projet d'apprentissage chez Videlum.",
    dev: "React & Laravel.",
    statut: "Projet en pause.",
    color: "#fbfbfb",
    description: (
      <>
        Site internet de la Bifrost Agency, conçu pour promouvoir les artistes
        du label 'Bifrost Agency'.
        <br />
        Pendant la phase de développement, des artistes fictifs ont été
        utilisés.
      </>
    ),
  },
];
// Fonction pour ajuster la couleur (par exemple, pour l'assombrir)
const adjustColor = (color, amount) => {
  let colorValue = color.replace("#", "");
  let r = parseInt(colorValue.substring(0, 2), 16);
  let g = parseInt(colorValue.substring(2, 4), 16);
  let b = parseInt(colorValue.substring(4, 6), 16);

  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));

  return `rgb(${r}, ${g}, ${b})`;
};
const Portfolio = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };
  const arrowImages = [Arrow1, Arrow2, Arrow3, Arrow4];

  return (
    <Container id={id} className="container">
      <Content>
        <Title name="Mes Projets" color={theme.colors.white} />
        <Carousel>
          <ArrowButton onClick={handlePrev}>‹</ArrowButton>
          <ProjectContainer>
            <ProjectName>{projects[currentIndex].name}</ProjectName>
            <ProjectImageContainer>
              {["title", "description", "dev", "statut"].map((key, index) => (
                <TextBloc key={key}>
                  <Arrow src={arrowImages[index]} alt={`arrow${index + 1}`} />{" "}
                  <State>{projects[currentIndex][key]}</State>
                </TextBloc>
              ))}

              {typeof projects[currentIndex].image === "string" ? (
                <ProjectImage
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].name}
                  loading="lazy"
                />
              ) : (
                <CustomComponentContainer>
                  {projects[currentIndex].image}
                </CustomComponentContainer>
              )}
            </ProjectImageContainer>
            <LinkButton
              href={projects[currentIndex].link}
              backgroundcolor={projects[currentIndex].color}
            >
              Visiter le Projet
            </LinkButton>
          </ProjectContainer>
          <ArrowButton onClick={handleNext}>›</ArrowButton>
        </Carousel>
      </Content>
    </Container>
  );
};

export default Portfolio;

const Container = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LinkButton = styled.a`
  width: 200px;
  height: 50px;
  color: ${theme.colors.dark};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 2rem;
  background-color: ${(props) => props.backgroundcolor};
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  /* Transition pour une animation fluide */
  transition: all 0.3s ease;

  /* Ombre initiale pour effet de profondeur */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  /* Effet de survol */
  &:hover {
    transform: scale(1.1); /* Le bouton "grandit" légèrement */
    background-color: ${(props) =>
      darken(0.3, props.backgroundcolor)}; /* Assombrir la couleur de fond */
    color: ${theme.colors.white}; /* Changer la couleur du texte en blanc */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); /* Ombre plus prononcée au survol */
  }

  /* Effet de focus pour l'accessibilité (quand le bouton est sélectionné) */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  }

  /* Option pour plus de visibilité sur les petits écrans */
  @media (max-width: 768px) {
    width: 150px;
    height: 45px;
    font-size: 0.9rem;
  }
`;

const Arrow = styled.img`
  width: 15vw;
  height: 15vw;
  max-width: 100px;
  max-height: 100px;
`;
const TextBloc = styled.div`
  color: ${theme.colors.dark};
  display: flex;
  position: absolute;
  gap: 2rem;
  width: 20vw;

  &:nth-child(1) {
    right: 110%;
    bottom: 70%;
    align-items: start;
    flex-direction: row-reverse;
    animation: floatBloc1 3s ease-in-out infinite; /* Animation infinie de flottement */

    /* Définition de l'animation */
    @keyframes floatBloc1 {
      0% {
        transform: translateY(0); /* Départ à la position normale */
      }
      50% {
        transform: translateY(-5px); /* Monte de 2px à 50% du temps */
      }
      100% {
        transform: translateY(0); /* Revient à la position normale à 100% */
      }
    }
  }

  &:nth-child(2) {
    left: 110%;
    top: -10%;
    flex-direction: row;
    align-items: end;
    animation: floatBloc2 5s ease-in-out infinite; /* Animation infinie de flottement */

    /* Définition de l'animation */
    @keyframes floatBloc2 {
      0% {
        transform: translateY(0); /* Départ à la position normale */
      }
      50% {
        transform: translateY(-5px); /* Monte de 2px à 50% du temps */
      }
      100% {
        transform: translateY(0); /* Revient à la position normale à 100% */
      }
    }
  }

  &:nth-child(3) {
    top: 60%;
    right: 70%;
    align-items: start;
    gap: 0;
    flex-direction: column-reverse;
    animation: floatBloc3 2s ease-in-out infinite; /* Animation infinie de flottement */

    /* Définition de l'animation */
    @keyframes floatBloc3 {
      0% {
        transform: translateY(0); /* Départ à la position normale */
      }
      50% {
        transform: translateY(-5px); /* Monte de 2px à 50% du temps */
      }
      100% {
        transform: translateY(0); /* Revient à la position normale à 100% */
      }
    }
  }

  &:nth-child(4) {
    left: 100%;
    top: 70%;
    align-items: end;
    flex-direction: row;
    animation: floatBloc4 4s ease-in-out infinite; /* Animation infinie de flottement */

    /* Définition de l'animation */
    @keyframes floatBloc4 {
      0% {
        transform: translateY(0); /* Départ à la position normale */
      }
      50% {
        transform: translateY(-5px); /* Monte de 2px à 50% du temps */
      }
      100% {
        transform: translateY(0); /* Revient à la position normale à 100% */
      }
    }
  }
  /* Ajoutez ou modifiez ceci dans votre code existant */
  &:nth-child(1) ${Arrow} {
    animation: floatArrow1 5s ease-in-out infinite;
    animation-delay: 0s; /* Aucun délai pour la première flèche */

    @keyframes floatArrow1 {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  &:nth-child(2) ${Arrow} {
    animation: floatArrow2 5s ease-in-out infinite;
    animation-delay: 0.5s; /* Délai de 0.5s pour la deuxième flèche */
    @keyframes floatArrow2 {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  &:nth-child(3) ${Arrow} {
    animation: floatArrow3 5s ease-in-out infinite;
    animation-delay: 1s; /* Délai de 1s pour la troisième flèche */
    padding-left: 150px;
    @keyframes floatArrow3 {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-15px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  &:nth-child(4) ${Arrow} {
    animation: floatArrow4 5s ease-in-out infinite;
    animation-delay: 1.5s; /* Délai de 1.5s pour la quatrième flèche */
    @keyframes floatArrow4 {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(-5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  @media (max-width: 1024px) {
    display: none; /* Masquer en dessous de 1024px */
  }
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 109px;

  p {
    color: ${theme.colors.white};
  }
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  height: 80vh;
`;
const ProjectName = styled.h3`
  color: ${theme.colors.white};
  font-size: 2rem;
  text-align: center;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);
  color: ${theme.colors.dark};
  border: none;
  padding: 1rem;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;

  /* 🖥️ Mode Desktop */
  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }

  /* 📱 Mode Mobile */
  @media (max-width: 768px) {
    position: absolute;
    top: 90%;
    transform: translateY(-30%);
    font-size: 3rem;
    padding: 0 0.5rem 0.5rem 0.5rem;
    border-radius: 0.5rem;
    width: 75px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
      left: 20px;
    }

    &:last-child {
      right: 20px;
    }
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  opacity: 0;
  transform: translateX(100%);
  animation: slideIn 1s ease-in-out forwards;
  z-index: 1; /* To ensure it's displayed over other elements */

  @keyframes slideIn {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* Optionally: for a smoother effect between images */
  &.entering {
    animation: fadeIn 0.5s forwards;
  }

  &.exiting {
    animation: fadeOut 0.5s forwards;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const ProjectImageContainer = styled.div`
  transition: transform 0.3s ease-in-out;
`;

const ProjectImage = styled.img`
  width: 200px;
  aspect-ratio: 1/1;
  border-radius: 16px;
  transition: opacity 0.3s ease;
`;

const CustomComponentContainer = styled.div`
  width: 200px;
  aspect-ratio: 1/1;
  display: flex;
  border-radius: 16px;
`;

const State = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  background-color: #d3d3d3;
  padding: 1rem;
  border-radius: 1rem;
`;
