import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Parcours from "../pages/Parcours";

const Index = () => {
  const sections = [
    { id: "home", label: "Accueil", component: <Home id="home" /> },
    { id: "about", label: "Profil", component: <About id="about" /> },
    { id: "skills", label: "Compétences", component: <Skills id="skills" /> },
    {
      id: "parcours",
      label: "Parcours",
      component: <Parcours id="parcours" />,
    },
    {
      id: "portfolio",
      label: "Portfolio",
      component: <Portfolio id="portfolio" />,
    },
    { id: "contact", label: "Contact", component: <Contact id="contact" /> },
  ];

  return (
    <MainContainer>
      <Header sections={sections} />
      <SectionsContainer id="SectionsContainer">
        {sections.map((section) => (
          <Section key={section.id} id={section.id}>
            {section.component}
          </Section>
        ))}
      </SectionsContainer>
    </MainContainer>
  );
};

export default Index;

const MainContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

const SectionsContainer = styled.div`
  height: 100vh;
  overflow-y: auto; /* Permet le défilement automatique */
  scroll-snap-type: y mandatory; /* Assure l'alignement des sections */
  scroll-behavior: smooth; /* Comportement de défilement fluide */
`;

const Section = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222637;
  transition: transform 0.5s ease-in-out;
`;
