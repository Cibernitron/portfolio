import React from "react";
import styled from "styled-components";
import { theme } from "../styles/themes";

const Footer = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with ID "${id}" not found.`);
    }
  };

  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightSection>
          <p>© Copyright 2024 - Jason VAUQUELIN. Tous droits réservés.</p>
        </CopyrightSection>
        <LinksSection>
          <FooterLink href="/privacyPolicy">
            Politique de confidentialité
          </FooterLink>
          <FooterLink href="/legal">Mentions Légales</FooterLink>
        </LinksSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

// Styled components
const FooterContainer = styled.footer`
  background-color: ${theme.colors.dark};
  padding: 20px 0;
  color: ${theme.colors.white};
`;

const FooterContent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CopyrightSection = styled.div`
  margin-bottom: 20px;
`;

const LinksSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterLink = styled.a`
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.linkhover};
    text-decoration: underline;
  }
`;
