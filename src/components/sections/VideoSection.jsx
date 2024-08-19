import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import homeVideo from "../../assets/homecode.mov";

const VideoSection = ({ show, id }) => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <VideoContainer id={id}>
      <Video autoPlay loop muted playsInline>
        <source src={homeVideo} type="video/mp4" />
      </Video>
      <Title $show={showTitle}>
        <Name>Jason VAUQUELIN</Name>
        <Work>Concepteur & Développeur d'Application Web</Work>
      </Title>
    </VideoContainer>
  );
};

export default VideoSection;

const VideoContainer = styled.div`
  scroll-snap-align: start;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  animation: ${({ $show }) => ($show ? fadeIn : "none")} 5s forwards;
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
  color: white;
  text-align: center;
  margin: 0;
`;

const Work = styled.h2`
  color: white;
  font-style: italic;
  text-align: center;
`;
