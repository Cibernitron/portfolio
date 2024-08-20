import React from "react";
import styled from "styled-components";
import photo from "../assets/jason.png";
import Title from "../components/Title";
import { theme } from "../styles/themes";

const About = ({ id }) => {
  return (
    <Container id={id}>
      <Title name="À propos de moi" color={theme.colors.white} />
      <ContentContainer>
        <Photo src={photo} alt="Photo de Jason VAUQUELIN" />
        <Text>
          <p>
            Développeur web passionné, je suis titulaire du titre de Concepteur
            Développeur d'Applications après une reconversion professionnelle
            réussie via la formation DWWM (Développeur Web et Web Mobile).
          </p>
          <p>
            Avec une expérience solide de 10 ans dans le commerce, où j'ai
            occupé des rôles variés tels que vendeur, logisticien, responsable
            de rayon et assistant commercial, j'apporte une perspective unique
            et un sens aigu du service client à mes projets de développement.
          </p>
          <p>
            Mon parcours dans le développement web est enrichi par des
            compétences techniques avancées en HTML, CSS, JavaScript, PHP, ainsi
            qu'en frameworks modernes comme React et Laravel. J'ai perfectionné
            mes compétences grâce à un stage de deux mois et une alternance d'un
            an chez Videlum, où j'ai participé à des projets innovants et
            collaboré avec des équipes multidisciplinaires pour créer des
            solutions web robustes et performantes.
          </p>
        </Text>
      </ContentContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin: 0 auto;
  margin-top: 109px;
`;

const ContentContainer = styled.div`
  max-width: 80vw;
  margin: auto;
`;

const Photo = styled.img`
  height: 15rem;
  float: left;
  margin: 0 20px 20px 0; /* Marge autour de l'image */
  border-radius: 10px; /* Optionnel : Ajouter des coins arrondis à l'image */
`;

const Text = styled.div`
  text-align: left;
  color: ${theme.colors.white}; /* Couleur du texte */
  font-size: 1.5rem;
  p {
    margin-bottom: 1rem;
  }
`;
