import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Section from "../components/sections/Section";
import VideoSection from "../components/sections/VideoSection";
import ExtendedContent from "../components/ExtendedContent";
import Button from "../components/Button";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export default function Index() {
  const [currentContent, setCurrentContent] = useState(null);

  const sections = [
    { id: "home", label: "Accueil" },
    { id: "profile", label: "Profil" },
    { id: "skills", label: "Compétences" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const handleContentClick = (index) => {
    setCurrentContent(index);
  };

  const handleBackClick = () => {
    setCurrentContent(null);
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Header sections={sections} handleContentClick={handleContentClick} />
      <SectionWrapper $currentContent={currentContent}>
        <Section show={currentContent === 0}>
          <VideoSection />
          <ExtendedContent
            title="Accueil"
            content="Bienvenue sur mon site..."
            onBackClick={handleBackClick}
          />
        </Section>
        {sections.slice(1).map((section, index) => (
          <Section key={section.id} show={currentContent === index + 1}>
            <DefaultContent>
              <h1>{section.label}</h1>
              <p>Ceci est la section {section.label.toLowerCase()}...</p>
              <Button onClick={() => handleContentClick(index + 1)}>
                Visiter {section.label}
              </Button>
            </DefaultContent>
            <ExtendedContent
              title={`Contenu de ${section.label}`}
              content={`Voici le contenu détaillé de la section ${section.label.toLowerCase()}...`}
              onBackClick={handleBackClick}
            />
          </Section>
        ))}
      </SectionWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* overflow-x: hidden;
  overflow-y: auto; */
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const DefaultContent = styled.div`
  text-align: center;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.25rem;
  }
`;
