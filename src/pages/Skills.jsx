import React from "react";
import styled from "styled-components";
import Skill from "../components/SkillBar";
import Curriculum from "../components/Curriculum";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import sqlLogo from "../assets/sql.png";
import phpLogo from "../assets/php.png";
import reactLogo from "../assets/react.png";
import laravelLogo from "../assets/laravel.png";

const Skills = ({ id }) => {
  const skills = [
    { logo: htmlLogo, name: "HTML", level: "80%", color: "#f06529" },
    { logo: cssLogo, name: "CSS", level: "80%", color: "#2965f1" },
    { logo: jsLogo, name: "JavaScript", level: "70%", color: "#f0db4f" },
    { logo: sqlLogo, name: "SQL", level: "60%", color: "blue" },
    { logo: phpLogo, name: "PHP", level: "55%", color: "blue" },
    { logo: reactLogo, name: "React", level: "70%", color: "cian" },
    { logo: laravelLogo, name: "Laravel", level: "55%", color: "orange" },
    { logo: "", name: "Java", level: "15%", color: "blue" },
  ];

  return (
    <Container id={id}>
      <Content>
        <Title>Mes Compétences</Title>
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
  background-color: #222637;
`;

const SkillsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
`;
const Title = styled.h2`
  text-align: center;
  color: white; /* Couleur du texte */
  margin-bottom: 20px;
  font-size: 2.5rem;
`;
const Content = styled.div`
  max-width: 1200px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 1.25rem;
    color: white;
  }
`;

const SkillsContainer = styled.div`
  width: 150%; /* Ajustez selon les besoins */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
