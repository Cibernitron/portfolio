import React from "react";
import styled from "styled-components";
import Skill from "../components/SkillBar";
import Curriculum from "../components/Curriculum";
import Title from "../components/Title";
import { theme } from "../styles/themes";

const Skills = ({ id }) => {
  const skills = [
    { name: "HTML", level: "80%", color: `${theme.colors.dark}` },
    { name: "CSS", level: "80%", color: `${theme.colors.dark}` },
    { name: "JavaScript", level: "70%", color: `${theme.colors.dark}` },
    { name: "SQL", level: "60%", color: `${theme.colors.dark}` },
    { name: "PHP", level: "55%", color: `${theme.colors.dark}` },
    { name: "React", level: "70%", color: `${theme.colors.dark}` },
    { name: "Laravel", level: "55%", color: `${theme.colors.dark}` },
    { name: "Java", level: "15%", color: `${theme.colors.dark}` },
  ];

  return (
    <Container id={id}>
      <Content>
        <Title name="Mes Compétences" color={theme.colors.dark} />
        <SkillsContent>
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </SkillsContainer>
          <CurriculumContainer>
            <Curriculum />
          </CurriculumContainer>
        </SkillsContent>
      </Content>
    </Container>
  );
};

export default Skills;

// Styled components
const Container = styled.div`
  scroll-snap-align: start;
  width: 100%;
  display: flex;
  background-color: ${theme.colors.white};
  overflow: hidden; /* Prevent scrolling overflow */
  min-height: 100vh; /* Ensure container takes at least the full viewport height */
  @media (min-width: 768px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 109px;

  p {
    color: ${theme.colors.dark};
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 80px;
  }
`;

const SkillsContent = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex: 1; /* Allow the container to grow and fill available space */
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

const SkillsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto; /* Allow scrolling if content overflows */
  min-height: 0; /* Prevent shrinking issues */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CurriculumContainer = styled.div`
  flex: 1;
  width: 50%;
  max-width: 100%;
  padding: 0 2rem; /* Adjust padding as needed */
  box-sizing: border-box;
  position: relative;
  top: 0; /* Reset top position */

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
