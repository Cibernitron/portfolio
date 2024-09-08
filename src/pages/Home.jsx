import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import homeVideo from "../assets/homecode.mp4";
import { theme } from "../styles/themes";

const Home = ({ id }) => {
  const [showTitle, setShowTitle] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <VideoContainer id={id}>
      <Video
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={handleVideoLoaded}
      >
        <source src={homeVideo} type="video/mp4" />
      </Video>
      {videoLoaded && (
        <Title $show={showTitle}>
          <Name>Jason VAUQUELIN</Name>
          <Work>Concepteur & Développeur d'Application Web</Work>
        </Title>
      )}
    </VideoContainer>
  );
};

export default Home;

const VideoContainer = styled.div`
  scroll-snap-align: start;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  scroll-snap-type: y mandatory;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  animation: ${({ $show }) => ($show ? fadeIn : "none")} 10s forwards;
  z-index: 2;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Name = styled.h1`
  color: ${theme.colors.white};
  text-align: center;
  margin: 0;
`;

const Work = styled.h2`
  color: ${theme.colors.white};
  font-style: italic;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;
