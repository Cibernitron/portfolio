// AboutSection.jsx
import React from "react";
import styled from "styled-components";

const AboutSection = ({ id }) => {
  return (
    <Container id={id}>
      <Content>
        <h2>À propos de moi</h2>
        <p>
          Développeur web passionné, je suis titulaire du titre de Concepteur
          Développeur d'Applications après une reconversion professionnelle
          réussie via la formation DWWM (Développeur Web et Web Mobile).
        </p>
        <p>
          Avec une expérience solide de 10 ans dans le commerce, où j'ai occupé
          des rôles variés tels que vendeur, logisticien, responsable de rayon
          et assistant commercial, j'apporte une perspective unique et un sens
          aigu du service client à mes projets de développement.
        </p>
        <p>
          Mon parcours dans le développement web est enrichi par des compétences
          techniques avancées en HTML, CSS, JavaScript, PHP, ainsi qu'en
          frameworks modernes comme React et Laravel. J'ai perfectionné mes
          compétences grâce à un stage de deux mois et une alternance d'un an
          chez Videlum, où j'ai participé à des projets innovants et collaboré
          avec des équipes multidisciplinaires pour créer des solutions web
          robustes et performantes.
        </p>
      </Content>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222637;
`;

const Content = styled.div`
  max-width: 800px;
  padding: 20px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.25rem;
  }
`;
