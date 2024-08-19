import React from "react";
import styled from "styled-components";

const ExtendedContent = ({ title, content, onBackClick }) => {
  return (
    <ContentContainer>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button onClick={onBackClick}>Retour</Button>
    </ContentContainer>
  );
};

export default ExtendedContent;

const ContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d0d0d0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
