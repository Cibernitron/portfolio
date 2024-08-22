import React from "react";
import styled from "styled-components";
import { theme } from "../styles/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Content>
        <Button href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Retour
        </Button>
        <Title>Politique de confidentialité</Title>

        <Section>
          <Subtitle>1. Introduction</Subtitle>
          <Text>
            Cette Politique de confidentialité explique comment nous collectons,
            utilisons et protégeons vos informations personnelles lorsque vous
            utilisez notre site web. Nous nous engageons à respecter votre vie
            privée et à protéger vos données personnelles.
          </Text>
        </Section>

        <Section>
          <Subtitle>2. Données collectées</Subtitle>
          <Text>Nous pouvons collecter et traiter les données suivantes :</Text>
          <List>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Objet du message</li>
            <li>Message envoyé via le formulaire de contact</li>
            <li>Consentement pour l'utilisation des données personnelles</li>
          </List>
        </Section>

        <Section>
          <Subtitle>3. Utilisation des données</Subtitle>
          <Text>Les données collectées sont utilisées pour :</Text>
          <List>
            <li>
              Vous recontacter en réponse à votre demande via le formulaire de
              contact
            </li>
            <li>Vous fournir les informations ou services demandés</li>
            <li>Améliorer notre site web et nos services</li>
          </List>
        </Section>

        <Section>
          <Subtitle>4. Partage des données</Subtitle>
          <Text>
            Vos informations personnelles ne sont pas partagées avec des tiers
            sauf dans les cas suivants :
          </Text>
          <List>
            <li>Pour se conformer à une obligation légale</li>
            <li>Pour protéger et défendre nos droits ou propriété</li>
            <li>Avec votre consentement explicite</li>
          </List>
        </Section>

        <Section>
          <Subtitle>5. Sécurité des données</Subtitle>
          <Text>
            Nous mettons en œuvre des mesures de sécurité pour protéger vos
            données personnelles contre l'accès non autorisé, l'altération, la
            divulgation ou la destruction.
          </Text>
        </Section>

        <Section>
          <Subtitle>6. Vos droits</Subtitle>
          <Text>
            Conformément à la réglementation applicable, vous disposez des
            droits suivants concernant vos données personnelles :
          </Text>
          <List>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit d'opposition au traitement de vos données</li>
            <li>Droit à la portabilité des données</li>
          </List>
          <Text>
            Pour exercer ces droits, vous pouvez nous contacter via notre
            adresse email :{" "}
            <strong>
              <a href="mailto:contact@jasonvauquelin.fr">
                contact@jasonvauquelin.fr
              </a>
            </strong>
            .
          </Text>
        </Section>

        <Section>
          <Subtitle>
            7. Modifications de la Politique de confidentialité
          </Subtitle>
          <Text>
            Nous nous réservons le droit de modifier cette Politique de
            confidentialité à tout moment. Toute modification sera publiée sur
            cette page avec une date de mise à jour.
          </Text>
        </Section>

        <Section>
          <Subtitle>8. Contact</Subtitle>
          <Text>
            Si vous avez des questions concernant cette Politique de
            confidentialité, vous pouvez nous contacter par email à :{" "}
            <strong>
              <a href="mailto:contact@jasonvauquelin.fr">
                contact@jasonvauquelin.fr
              </a>
            </strong>
            .
          </Text>
        </Section>
      </Content>
    </Container>
  );
};

export default PrivacyPolicy;

// Styled components
const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.white};
  padding: 4rem 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Button = styled.a`
  color: ${theme.colors.dark};
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  width: fit-content;
  font-size: 2rem;
  border: 1px solid ${theme.colors.dark};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.dark};
    border: 1px solid ${theme.colors.white};
  }

  @media (max-width: 768px) {
    position: relative;
  }
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${theme.colors.dark};
  border-radius: 10px;
  box-shadow: 16px 16px 0.5rem rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    border-radius: 0px;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.white};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.white};
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${theme.colors.white};
  line-height: 1.6;
  a {
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.linkhover};
    }
  }
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 2rem;
  color: ${theme.colors.white};

  li {
    margin-bottom: 0.5rem;
  }
`;
