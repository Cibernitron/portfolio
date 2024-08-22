import React, { useState, useEffect } from "react";
import styled from "styled-components";
import loup from "../assets/loup-neon.png";
import yeux from "../assets/yeuxblancs.png";
import aurora from "../assets/aurorav2.mp4";

// Composant DisplayLogo
const DisplayLogo = () => {
  const [visibleEyes, setVisibleEyes] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleEyes((prev) => !prev);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <BannerContainer>
      <BackgroundVideo autoPlay loop muted playsInline>
        <source src={aurora} type="video/mp4" />
      </BackgroundVideo>
      <MaskContainer>
        <WolfImage src={loup} alt="loup origami" />
        <EyesImage
          src={yeux}
          alt="Yeux du loup"
          className={visibleEyes ? "opacity1" : "opacity0"}
        />
      </MaskContainer>
    </BannerContainer>
  );
};

export default DisplayLogo;

// Styled Components
const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const MaskContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${loup});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const WolfImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
  object-fit: contain;
  position: absolute;
  z-index: 1;
`;

const EyesImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
  object-fit: contain;
  position: absolute;
  transition: opacity 1s ease;

  &.opacity1 {
    opacity: 1;
  }
  &.opacity0 {
    opacity: 0;
  }
`;
