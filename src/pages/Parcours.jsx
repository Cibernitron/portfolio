import React from "react";
import styled from "styled-components";
const professionalExperiences = [
  {
    title: "Développeur d’Application (Alternance)",
    location: "Videlum - Verson",
    duration: "2023 - 2024",
    tasks: ["Développement et maintenance d'applications web"],
  },
  {
    title: "Développeur Web (Stage)",
    location: "Videlum - Verson",
    duration: "2023",
    tasks: ["Création du site Skoll Winter Festival"],
  },
  {
    title: "Développeur Web (Stage)",
    location: "Atelier du Dealer - Douvres la Délivrande",
    duration: "2023",
    tasks: ["Découverte du métier de Développeur Web"],
  },
  {
    title: "Assistant Commercial",
    location: "International Paper",
    duration: "2019 - 2022",
    tasks: ["Gestion des relations clients et des commandes"],
  },
  {
    title: "Responsable de rayon",
    location: "Fête Sensation",
    duration: "2017 - 2019",
    tasks: ["Ventes, Encaissement, Gestion des stocks, Conseil Client"],
  },
  {
    title: "Vendeur SAV",
    location: "IKEA",
    duration: "2016 - 2017",
    tasks: [
      "Service après-vente, Assistance clientèle, Remise en état de carton endommagés, Assistance SAV",
    ],
  },
  {
    title: "Téléconseiller",
    location: "WebHelp",
    duration: "2016",
    tasks: ["Service Fidélisation et Résiliation pour SFR"],
  },
  {
    title: "Vendeur",
    location: "La Grande Récrée",
    duration: "2015 - 2016",
    tasks: ["Vente de produits et conseil à la clientèle"],
  },
  {
    title: "Serveur (Alternance)",
    location: "Dupont avec un Thé",
    duration: "2012 - 2014",
    tasks: ["Service en salle et gestion des commandes"],
  },
];

const educationalExperiences = [
  {
    title: "Licence Concepteur Développeur d’Application",
    location: "",
    duration: "Décembre 2023 à Juillet 2024",
    tasks: ["En Alternance", "Creative Formation"],
  },
  {
    title: "Titre professionnel Développeur web, web mobile",
    location: "",
    duration: "Février à Novembre 2023",
    tasks: ["Creative Formation"],
  },
  {
    title: "BTS Techniques de Commercialisation",
    location: "",
    duration: "2012 - 2014",
    tasks: ["MFR Maltot Apprentissage"],
  },
  {
    title: "BAC Sciences et Techniques de la Gestion",
    location: "",
    duration: "2012",
    tasks: ["Lycée Augustin Fresnel - Caen"],
  },
];

const Career = ({ id }) => {
  return (
    <Container id={id}>
      <Section>
        <Title>Parcours Professionnel</Title>
        <ExperienceList>
          {professionalExperiences.map((exp, index) => (
            <Experience key={index}>
              <Summary>
                <TitleCard>{exp.title}</TitleCard>
                <Duration>{exp.duration}</Duration>
              </Summary>
              <Description>
                <ul>
                  <Location>{exp.location}</Location>
                  {exp.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </Description>
            </Experience>
          ))}
        </ExperienceList>
      </Section>

      <Section>
        <Title>Parcours Scolaire</Title>
        <ExperienceList>
          {educationalExperiences.map((exp, index) => (
            <Experience key={index}>
              <Summary>
                <TitleCard>{exp.title}</TitleCard>
                <Duration>{exp.duration}</Duration>
              </Summary>
              <Description>
                <ul>
                  <Location>{exp.location}</Location>
                  {exp.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </Description>
            </Experience>
          ))}
        </ExperienceList>
      </Section>
    </Container>
  );
};

export default Career;

const Container = styled.div`
  padding: 20px;
  background-color: #222637;
  display: flex;
  /* flex-direction: column; */
  align-items: start;
  max-width: 80vw;
  margin: 0 auto;
  gap: 4rem;
`;

const Section = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Experience = styled.details`
  background-color: #333748;
  padding: 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;

const Summary = styled.summary`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const TitleCard = styled.span`
  font-weight: bold;
`;

const Duration = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const Description = styled.div`
  margin: 10px 0;

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 5px;
  }
`;

const Location = styled.p`
  font-size: 1rem;
  font-style: italic;
  margin: 5px 0;
`;
