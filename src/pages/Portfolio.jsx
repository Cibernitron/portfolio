import React from "react";
import styled from "styled-components";

const Portfolio = ({ id }) => {
  return (
    <Container id={id} className="container">
      <ContentContainer className="content-container">
        <h2>Mes Projets</h2>
        <p>
          Je suis passionné par le développement web et la création
          d'applications innovantes.
        </p>
      </ContentContainer>
    </Container>
  );
};

export default Portfolio;
const Container = styled.div``;

const ContentContainer = styled.div``;
