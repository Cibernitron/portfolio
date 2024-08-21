import React, { useState } from "react";
import styled from "styled-components";
import { scroller } from "react-scroll";
import logo from "../assets/jason.png";

const Header = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id) => {
    if (document.getElementById(id)) {
      scroller.scrollTo(id, {
        duration: 500,
        delay: 10,
        smooth: "easeInOutQuad",
        containerId: "SectionsContainer",
      });
      setIsOpen(false);
    } else {
      console.error(`Element with ID "${id}" not found.`);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Logo src={logo} />
      <Hamburger onClick={toggleMenu} $isOpen={isOpen}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavBar $isOpen={isOpen}>
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
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 75px;
  border: 1px solid white;
  border-radius: 50%;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1100;

  span {
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    span:nth-child(1) {
      transform: translateY(9px) rotate(315deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-315deg);
    }
  `}

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavBar = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    gap: 0;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    height: ${({ $isOpen }) => ($isOpen ? "100vh" : "0")};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
`;

const NavLink = styled.div`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: calc((100vh - 109px) / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
  }
`;
