import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/jason.png";
import { theme } from "../styles/themes";

const Header = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
      <Logo
        src={logo}
        $isOpen={isOpen}
        onClick={() => handleScrollTo("home")}
      />
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
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-sizing: border-box;
  background-color: rgba(15, 15, 24, 0.9);

  @media (max-width: 768px) {
    border-bottom: 1px solid ${theme.colors.white};
  }
`;
const shakeAnimation = keyframes`
  0%, 100% {
    transform: rotate(0);
  }
  20%, 60% {
    transform: rotate(-10deg);
  }
  20%, 80% {
    transform: rotate(10deg);
  }
`;
const Logo = styled.img`
  height: 75px;
  border: 1px solid ${theme.colors.white};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    animation: ${shakeAnimation} 0.5s ease;
  }
  @media (max-width: 768px) {
    height: 50px;
    margin: 15px 0;
  }
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
    background-color: ${theme.colors.white};
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
    text-shadow: 0 0 0.5rem ${theme.colors.white};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: calc((100vh - 109px) / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid ${theme.colors.white};
    background-color: rgba(15, 15, 24, 0.9);

    &:last-child {
      border-bottom: none;
    }
  }
`;
