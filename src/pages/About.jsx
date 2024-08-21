import React from "react";
import styled from "styled-components";
import photo from "../assets/jason2.png";
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
            Développeur web passionné, je suis titulaire d'une licence de
            Concepteur Développeur d'Applications obtenue après une reconversion
            professionnelle réussie, suite à la formation DWWM (Développeur Web
            et Web Mobile) chez Creative Formation. Cette transition vers le
            développement web reflète ma volonté de m'adapter à un environnement
            technologique en constante évolution et ma passion pour la création
            de solutions numériques innovantes.
          </p>
          <p>
            Fort d'une expérience solide de 10 ans dans le commerce, où j'ai
            occupé des rôles variés tels que vendeur, logisticien, responsable
            de rayon, et assistant commercial, je dispose d'une compréhension
            approfondie du cycle de vente et de la gestion de la relation
            client. Ces compétences, combinées à mon expertise technique, me
            permettent d'aborder les projets de développement web avec un sens
            aigu du service client et une capacité à traduire les besoins
            commerciaux en solutions techniques efficaces.
          </p>
          <p>
            Mon parcours dans le développement web est complété par des
            compétences techniques avancées en HTML, CSS, JavaScript, PHP, SQL,
            ainsi qu'en frameworks modernes tels que React et Laravel. Durant un
            stage de deux mois et une alternance d'un an chez Videlum, j'ai eu
            l'opportunité de travailler sur des projets innovants, développant
            des applications web robustes et performantes en collaboration avec
            des équipes multidisciplinaires. Mon expérience chez Videlum m'a
            également permis de perfectionner mes compétences en gestion de
            projet, en optimisation des performances web, et en développement de
            solutions sur mesure répondant aux besoins spécifiques des clients.
          </p>
          <p>
            Engagé dans une démarche d'apprentissage continu, je reste à l'affût
            des dernières tendances technologiques et je m'efforce constamment
            d'améliorer mes compétences, tant sur le plan technique que
            professionnel. Mon objectif est de contribuer à des projets qui
            allient performance, innovation et expérience utilisateur de
            qualité, tout en continuant à développer mon expertise dans le
            domaine du développement web.
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
  font-size: 1.2rem;
  p {
    margin: 0;
    margin-bottom: 1rem;
  }
`;
