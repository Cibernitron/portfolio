import React from "react";
import styled from "styled-components";
import photo from "../assets/jason4.jpg";
import Title from "../components/Title";
import { theme } from "../styles/themes";

const About = ({ id }) => {
  return (
    <Container id={id}>
      <Title name="À propos de moi" color={theme.colors.white} />
      <ContentContainer>
        <Text>
          <Photo src={photo} alt="Photo de Jason VAUQUELIN" />
          <p>
            <strong>Développeur web passionné</strong>, j'ai effectué une
            reconversion réussie après 8 ans dans le commerce. Titulaire d'une
            licence en Conception et Développement d'Applications, et formé au
            développement web (DWWM) chez Creative Formation, je m'adapte à
            l'évolution technologique avec un réel enthousiasme pour la création
            de solutions numériques.
          </p>

          <p>
            Mon expérience dans le commerce m'a apporté une{" "}
            <strong>compréhension approfondie de la relation client</strong> et
            du cycle de vente, que je mets à profit dans mes projets web. Grâce
            à des compétences en{" "}
            <strong>HTML, CSS, JavaScript, PHP, SQL</strong>, ainsi qu'en{" "}
            <strong>React</strong> et <strong>Laravel</strong>, j'ai participé à
            des projets innovants chez <strong>Videlum</strong>, renforçant mes
            capacités en <strong>gestion de projet</strong> et{" "}
            <strong>optimisation des performances</strong>.
          </p>

          <p>
            Toujours en quête de perfectionnement, je m'efforce d'améliorer mes
            compétences pour contribuer à des projets alliant{" "}
            <strong>performance, innovation</strong>, et{" "}
            <strong>expérience utilisateur</strong>.
          </p>
        </Text>
      </ContentContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  margin-top: 109px;
`;

const ContentContainer = styled.div`
  max-width: 80vw;
  margin: auto;
`;

const Photo = styled.img`
  float: left;
  margin: 0 20px 20px 0;
  max-width: 350px;
  height: auto;

  @media (max-width: 768px) {
    float: none;
    display: block;
    margin: 0 auto 20px;
    max-width: 250px;
  }
`;

const Text = styled.div`
  color: ${theme.colors.white};
  font-size: 1rem;
  text-align: left;

  p {
    margin: 0 0 1rem 0;
  }
`;
