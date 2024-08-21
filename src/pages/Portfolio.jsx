import React from "react";
import styled from "styled-components";
import Skoll from "../components/LogoSkoll";
import Title from "../components/Title";
import { theme } from "../styles/themes";
import LogoBifrost from "../components/LogoBifrost";
import LogoHA from "../assets/logo_heroes-arena.png";

const projects = [
  {
    name: "Heroes Arena",
    image: LogoHA,
    link: "https://www.heroesarena.ciberweblab.fr/pages/index.php",
    title: "Projet Personnel.",
    dev: "Html, Css, Js, Php et Sql.",
    statut: "En cours de développement.",
    description: "Jeu de carte de heros de Comics.",
  },
  {
    name: "Skoll Winter Festival",
    image: <Skoll />,
    link: "https://skollwinterfestival.fr",
    title: "Projet de stage chez Videlum.",
    dev: "Html, Css, Js, Php et Sql.",
    statut: "En ligne.",
    description: "Site internet du Skoll Winter Festival 2024. ",
  },
  {
    name: "Bifrost Agency",
    image: <LogoBifrost />,
    link: "https://bifrost.ciberweblab.fr/",
    title: "Projet d'apprentissage chez Videlum.",
    dev: "React & Laravel.",
    statut: "Projet en attente du client.",
    description: "Site internet de la Bifrost Agency. ",
  },
];
const Portfolio = ({ id }) => {
  return (
    <Container id={id} className="container">
      <Content>
        <Title name="Mes Projets" color={theme.colors.white} />
        <ContentContainer className="content-container">
          <ProjectsList>
            {projects.map((project, index) => (
              <ProjectItem key={index}>
                <ProjectName>{project.name}</ProjectName>
                <ProjectLink>
                  {typeof project.image === "string" ? (
                    <ProjectImage src={project.image} alt={project.name} />
                  ) : (
                    <CustomComponentContainer>
                      {project.image}
                    </CustomComponentContainer>
                  )}
                  <Overlay>
                    <CardTitle>
                      <b>Nature :</b>
                      <br />
                      {project.title}
                    </CardTitle>
                    <Description>
                      <b>Description :</b>
                      <br />
                      {project.description}
                    </Description>
                    <Dev>
                      <b>Développé en :</b>
                      <br />
                      {project.dev}
                    </Dev>
                    <Statut>
                      <b>Statut du projet :</b>
                      <br />
                      {project.statut}
                    </Statut>
                  </Overlay>
                </ProjectLink>
                <VisitButton
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visiter le projet
                </VisitButton>
              </ProjectItem>
            ))}
          </ProjectsList>
        </ContentContainer>
      </Content>
    </Container>
  );
};

export default Portfolio;

// Styled components
const Container = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  /* text-align: center; */
  margin-top: 109px;

  p {
    color: ${theme.colors.white};
  }
`;
const ContentContainer = styled.div`
  text-align: center;
`;

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5rem;
`;

const ProjectItem = styled.li`
  position: relative;
  width: 300px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectLink = styled.div`
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
`;

const VisitButton = styled.a`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${theme.colors
    .white}; /* Ajustez cette couleur selon votre thème */
  color: ${theme.colors.dark};
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  width: 100%;
  display: inline-block;

  &:hover {
    background-color: ${theme.colors
      .dark}; /* Ajustez cette couleur selon votre thème */
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white};
  }
`;

const ProjectImage = styled.img`
  width: 300px;
  aspect-ratio: 1/1;
  display: block;
  border-radius: 16px;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
`;

const CustomComponentContainer = styled.div`
  width: 300px;
  aspect-ratio: 1/1;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  border-radius: 16px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
  z-index: 2;
  ${ProjectLink}:hover & {
    opacity: 1;
  }
`;

const CardTitle = styled.p`
  margin: 0.5rem;
  text-align: center;
  line-height: 1.5rem;
`;
const Description = styled.p`
  margin: 0.5rem;
  text-align: center;
  line-height: 1.5rem;
`;
const Dev = styled.p`
  margin: 0.5rem;
  text-align: center;
  line-height: 1.5rem;
`;
const Statut = styled.p`
  margin: 0.5rem;
  text-align: center;
  line-height: 1.5rem;
  color: ${theme.colors.white};
`;

const ProjectName = styled.h3`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: ${theme.colors.white};
`;
