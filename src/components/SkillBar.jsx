import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

const fillAnimation = (level) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${level};
  }
`;

const Skill = React.memo(({ name, level }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Le seuil pour déclencher l'animation (10% visible)
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true); // Déclenche l'animation
    } else {
      setIsVisible(false); // Réinitialise l'animation quand la section sort de la vue
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
            style={{ width: isVisible ? level : 0 }}
          ></SkillLevel>
        </SkillBar>
      </SkillContent>
    </SkillContainer>
  );
});

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
  color: white;
  margin: 0;
  text-align: start;
`;

const SkillBar = styled.div`
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  flex-grow: 1;
  height: 10px;
`;

const SkillLevel = styled.div`
  height: 100%;
  border-radius: 5px;
  transition: width 2s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  will-change: width; /* Ajout de cette propriété pour améliorer les performances */
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 40%,
    rgba(98, 98, 98, 1) 70%,
    rgba(0, 0, 0, 1) 95%
  );
  &.visible {
    animation: ${({ $level }) => fillAnimation($level)} 2s forwards;
  }
`;
