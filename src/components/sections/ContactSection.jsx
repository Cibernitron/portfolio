// AboutSection.jsx
import React from "react";
import styled from "styled-components";

const AboutSection = ({ id }) => {
  return (
    <Container id={id}>
      <Content>
        <h2>Contactez moi</h2>
        <p>
          Je suis passionné par le développement web et la création
          d'applications innovantes.
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

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.25rem;
  }
`;
