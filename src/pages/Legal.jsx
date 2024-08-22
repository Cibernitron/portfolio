import React from "react";
import styled from "styled-components";
import { theme } from "../styles/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LegalNotice = () => {
  return (
    <Container>
      <Content>
        <Button href="/">
          <FontAwesomeIcon icon={faArrowLeft} />
          Retour
        </Button>
        <Title>Mentions Légales</Title>

        <Section>
          <Subtitle>1. Éditeur du site</Subtitle>
          <Text>
            Le site <strong>www.jasonvauquelin.fr</strong> est édité par Jason
            VAUQUELIN, dont le siège social est situé à Laize La ville. Contact
            :{" "}
            <strong>
              <a href="mailto:contact@jasonvauquelin.fr">
                contact@jasonvauquelin.fr
              </a>
            </strong>
          </Text>
        </Section>

        <Section>
          <Subtitle>2. Hébergement</Subtitle>
          <Text>
            Le site est hébergé par <strong>O2Switch</strong>, dont le siège
            social est situé à{" "}
            <strong>
              222 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France
            </strong>
            . Contact : <strong>support@o2switch.fr</strong> /{" "}
            <strong>+33 4 44 44 60 40</strong>.
          </Text>
        </Section>

        <Section>
          <Subtitle>3. Propriété intellectuelle</Subtitle>
          <Text>
            Le contenu du site, incluant, de manière non exhaustive, les textes,
            images, graphismes, logos, icônes, vidéos, sons, logiciels, sont la
            propriété de Jason VAUQUELIN, sauf mention contraire. Toute
            reproduction, distribution, modification, adaptation, retransmission
            ou publication, même partielle, de ces différents éléments est
            strictement interdite sans l'accord exprès par écrit de Jason
            VAUQUELIN.
          </Text>
        </Section>

        <Section>
          <Subtitle>4. Responsabilité</Subtitle>
          <Text>
            Jason VAUQUELIN s'efforce de fournir sur le site{" "}
            <strong>www.jasonvauquelin.fr</strong> des informations aussi
            précises que possible. Toutefois, il ne pourra être tenu responsable
            des omissions, inexactitudes et carences dans la mise à jour,
            qu'elles soient de son fait ou du fait des tiers partenaires qui lui
            fournissent ces informations.
          </Text>
        </Section>

        <Section>
          <Subtitle>5. Données personnelles</Subtitle>
          <Text>
            Les informations personnelles que vous fournissez via les
            formulaires présents sur ce site sont utilisées exclusivement pour
            répondre à vos demandes et ne seront jamais transmises à des tiers
            sans votre consentement préalable. Pour plus d'informations,
            consultez notre{" "}
            <strong>
              <a href="/privacyPolicy">Politique de confidentialité</a>
            </strong>
            .
          </Text>
        </Section>

        <Section>
          <Subtitle>6. Droit applicable</Subtitle>
          <Text>
            Tout litige en relation avec l'utilisation du site{" "}
            <strong>www.jasonvauquelin.fr</strong> est soumis au droit français.
            Il est fait attribution exclusive de juridiction aux tribunaux
            compétents de Caen.
          </Text>
        </Section>

        <Section>
          <Subtitle>7. Contact</Subtitle>
          <Text>
            Pour toute question relative aux présentes mentions légales, vous
            pouvez nous contacter par email à :{" "}
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

export default LegalNotice;

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
    text-decoration: underline;

    &:hover {
      color: ${theme.colors.linkhover};
    }
  }
`;
