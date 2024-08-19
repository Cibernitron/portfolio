import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

// Animation keyframes pour l'effet de remplissage
const fillAnimation = (level) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${level};
  }
`;

// Composant Skill
const Skill = ({ name, level, color }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <SkillContainer ref={ref}>
      <SkillContent>
        <SkillName>{name}</SkillName>
        <SkillBar>
          <SkillLevel
            className={isVisible ? "visible" : ""}
            $level={level}
            style={{ width: isVisible ? level : 0, backgroundColor: color }}
          />
        </SkillBar>
      </SkillContent>
    </SkillContainer>
  );
};

export default Skill;

// Composants stylisés
const SkillContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const SkillContent = styled.div`
  width: 100%;
`;

const SkillName = styled.p`
  font-size: 1.25rem;
  color: white;
  margin: 0;
  text-align: start;
`;

const SkillBar = styled.div`
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  flex-grow: 1; /* La barre prend tout l'espace disponible */
  height: 10px;
`;

const SkillLevel = styled.div`
  /* background-color: #6f99dd; */
  height: 100%;
  border-radius: 5px;

  transition: width 2s ease-in-out;

  &.visible {
    animation: ${({ $level }) => fillAnimation($level)} 2s forwards;
  }
`;
