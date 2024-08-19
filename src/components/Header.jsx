import React from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";
import logo from "../assets/jason.png";

const Header = ({ sections }) => {
  const handleScrollTo = (id) => {
    if (document.getElementById(id)) {
      scroller.scrollTo(id, {
        duration: 10, // Durée en millisecondes
        delay: 10, // Délai avant le début du défilement
        smooth: "easeInOutQuad", // Type de lissage
        containerId: "SectionsContainer", // ID du conteneur de défilement (optionnel)
      });
    } else {
      console.error(`Element with ID "${id}" not found.`);
    }
  };

  return (
    <Container>
      <Logo src={logo} />
      <NavBar>
        {sections.map((section) => (
          <NavLink key={section.id} onClick={() => handleScrollTo(section.id)}>
            {section.label}
          </NavLink>
        ))}
      </NavBar>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-sizing: border-box; /* Inclut le padding dans la largeur totale */
`;

const Logo = styled.img`
  height: 75px;
  border: 1px solid white;
  border-radius: 50%;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap; /* Permet à la barre de navigation de se réorganiser si nécessaire */
`;

const NavLink = styled.div`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
