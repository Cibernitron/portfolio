import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { theme } from "../styles/themes";

const Contact = ({ id }) => {
  return (
    <Container id={id} className="container">
      <ContentContainer className="content-container">
        <Title name="Me Contacter" />
        <p>
          Je suis passionné par le développement web et la création
          d'applications innovantes.
        </p>
      </ContentContainer>
    </Container>
  );
};

export default Contact;
const Container = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.dark};
`;

const ContentContainer = styled.div``;
