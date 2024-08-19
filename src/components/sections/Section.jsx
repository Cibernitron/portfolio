import React from "react";
import styled from "styled-components";

const Section = ({ children, show }) => {
  return (
    <SectionContainer>
      <ContentWrapper $show={show}>{children}</ContentWrapper>
    </SectionContainer>
  );
};

export default Section;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 200%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $show }) => ($show ? `translateX(-50%)` : `translateX(0)`)};
`;
