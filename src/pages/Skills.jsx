import React from "react";
import styled from "styled-components";
import Skill from "../components/SkillBar";
import Curriculum from "../components/Curriculum";
import Title from "../components/Title";
import { theme } from "../styles/themes";

const Skills = ({ id }) => {
  const skills = [
    {
      name: "HTML",
      level: "80%",
      color: `${theme.colors.dark}`,
    },
    { name: "CSS", level: "80%", color: `${theme.colors.dark}` },
    {
      name: "JavaScript",
      level: "70%",
      color: `${theme.colors.dark}`,
    },
    { name: "SQL", level: "60%", color: `${theme.colors.dark}` },
    { name: "PHP", level: "55%", color: `${theme.colors.dark}` },
    {
      name: "React",
      level: "70%",
      color: `${theme.colors.dark}`,
    },
    {
      name: "Laravel",
      level: "55%",
      color: `${theme.colors.dark}`,
    },
    { name: "Java", level: "15%", color: `${theme.colors.dark}` },
  ];

  return (
    <Container id={id}>
      <Content>
        <Title name="Mes Compétences" />
        <SkillsContent>
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill
                key={skill.name}
                logo={skill.logo}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </SkillsContainer>
          <Curriculum />
        </SkillsContent>
      </Content>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  margin-top: 109px;

  p {
    font-size: 1.25rem;
    color: ${theme.colors.dark};
  }
`;

const SkillsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const SkillsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
