import React from "react";
import styled from "styled-components";

const Contact = ({ id }) => {
  return (
    <Container id={id} className="container">
      <ContentContainer className="content-container">
        <h2>Contactez moi</h2>
        <p>
          Je suis passionné par le développement web et la création
          d'applications innovantes.
        </p>
      </ContentContainer>
    </Container>
  );
};

export default Contact;
const Container = styled.div``;

const ContentContainer = styled.div``;
