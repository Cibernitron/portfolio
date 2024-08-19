import React from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa";
import cv from "../assets/cv.jpg";

const Curriculum = () => {
  return (
    <CVContainer>
      <Preview>
        <img src={cv} alt="Prévisualisation du CV" />
      </Preview>
      <DownloadButton href={cv} download>
        Télécharger le CV <FaDownload />
      </DownloadButton>
    </CVContainer>
  );
};

export default Curriculum;

// Styles
const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Preview = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  height: 100%;

  img {
    width: 100%;
  }
`;

const DownloadButton = styled.a`
  display: flex;
  position: absolute;
  bottom: 2rem;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  & > svg {
    margin-left: 0.5rem; /* Espacement entre le texte et l'icône */
  }
`;
