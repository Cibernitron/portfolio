import React, { useState } from "react";
import styled from "styled-components";
import cv from "../assets/cv.jpg";
import cvdl from "../assets/cv.pdf";
import Button from "../components/Button";

const Curriculum = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleImageClick = () => {
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <CVContainer>
      <Preview onClick={handleImageClick}>
        <img src={cv} alt="Prévisualisation du CV" />
      </Preview>
      <Button name="Télécharger le CV" href={cvdl} download />
      {isViewerOpen && (
        <ImageViewer onClick={handleCloseViewer}>
          <ViewerImage src={cv} alt="CV en grand" />
        </ImageViewer>
      )}
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
  margin: 0 auto;
  position: relative;
  max-height: 600px;
  overflow: hidden;
`;

const Preview = styled.div`
  cursor: pointer;
  padding: 10px; /* Ajoute du padding pour créer de l'espace autour de l'image */
  overflow: hidden;
  box-sizing: border-box; /* Assure que le padding est pris en compte dans les dimensions totales */

  img {
    max-width: 100%;
    max-height: 450px;
    transition: transform 0.3s ease;
    border: 1px solid black;

    &:hover {
      transform: scale(
        1.05
      ); /* Assure que l'image reste dans les limites du conteneur */
    }
  }
`;

const ImageViewer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: zoom-out;
`;

const ViewerImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;
