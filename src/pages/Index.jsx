import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import { theme } from "../styles/themes";

const Index = () => {
  const sections = [
    { id: "home", label: "Accueil", component: <Home id="home" /> },
    { id: "about", label: "Profil", component: <About id="about" /> },
    { id: "skills", label: "Compétences", component: <Skills id="skills" /> },
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
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const Section = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  display: flex;

  background-color: ${theme.colors.dark};
  transition: transform 0.5s ease-in-out;
`;
