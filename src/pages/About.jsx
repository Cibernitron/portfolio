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
            <strong>Développeur web passionné</strong>, je suis passé d'une
            carrière de 8 ans dans le commerce à une spécialisation dans le
            développement web, un domaine qui m'enthousiasme profondément.
            Détenteur d'une{" "}
            <strong>
              licence en Conception et Développement d'Applications
            </strong>{" "}
            et d'une formation approfondie en développement web (DWWM) chez
            Creative Formation, j'ai acquis une solide expertise technique tout
            en restant constamment à l'affût des dernières évolutions
            technologiques.
          </p>

          <p>
            Mon expérience dans le commerce m'a permis de développer une{" "}
            <strong>compréhension approfondie de la relation client</strong> et
            du cycle de vente, compétences que j'intègre efficacement dans mes
            projets web. Ma maîtrise de technologies telles que{" "}
            <strong>HTML, CSS, JavaScript, PHP, SQL</strong>, ainsi que des
            frameworks modernes comme <strong>React</strong> et{" "}
            <strong>Laravel</strong>, m'a permis de contribuer à des projets
            innovants chez <strong>Videlum</strong>, où j'ai renforcé mes
            capacités en <strong>gestion de projet</strong> et en{" "}
            <strong>optimisation des performances</strong>.
          </p>

          <p>
            Toujours en quête d'excellence, je suis déterminé à apporter des
            solutions numériques alliant{" "}
            <strong>performance, innovation</strong>, et{" "}
            <strong>expérience utilisateur</strong>. Mon objectif est de
            participer à des projets ambitieux où je pourrai mettre à profit mes
            compétences techniques et ma passion pour le développement web.
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
