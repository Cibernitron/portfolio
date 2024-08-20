import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Title from "../components/Title";
import { theme } from "../styles/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_no2ohrp",
        "template_ptg0qnm",
        e.target,
        "FH1efYvGvwOJCwasr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setError(
            "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
          );
        }
      );
  };

  return (
    <Container id={id} className="container">
      <Content className="content-container">
        <Title name="Me Contacter" />
        <ContactInfo>
          <ContactItem>
            <FontAwesomeIcon icon={faPhone} />
            <ContactText>06 75 52 42 39</ContactText>
          </ContactItem>
          <ContactItem>
            <FontAwesomeIcon icon={faEnvelope} />
            <ContactLink href="mailto:contact@jasonvauquelin.fr">
              contact@jasonvauquelin.fr
            </ContactLink>
          </ContactItem>
          <ContactLinkSocials
            href="https://www.linkedin.com/in/jason-vauquelin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <ContactText>Jason Vauquelin</ContactText>
          </ContactLinkSocials>
          <ContactLinkSocials
            href="https://github.com/Cibernitron"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <ContactText>Cibernitron</ContactText>
          </ContactLinkSocials>
        </ContactInfo>
        <Form onSubmit={handleSubmit}>
          <FormItem>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormItem>
          <FormItem>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormItem>
          <FormItem>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormItem>
          <SubmitButton type="submit">Envoyer</SubmitButton>
          {isSubmitted && (
            <SuccessMessage>
              Votre message a été envoyé avec succès !
            </SuccessMessage>
          )}
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </Content>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  display: flex;
  background-color: ${theme.colors.white};
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 109px;

  p {
    font-size: 1.25rem;
    color: ${theme.colors.dark};
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const shakeAnimation = keyframes`
  0%, 100% {
    transform: rotate(0);
  }
  20%, 60% {
    transform: rotate(-5deg);
  }
  40%, 80% {
    transform: rotate(5deg);
  }
`;

const ContactText = styled.span`
  margin-left: 10px;
`;

const ContactLink = styled.a`
  margin-left: 10px;
  color: ${theme.colors.dark};
  text-decoration: none;

  &:hover {
    color: #0a66c2;
  }
`;

const ContactLinkSocials = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1rem;
  color: ${theme.colors.dark};
  text-decoration: none;
  transition: color 1s ease;

  .icon {
    font-size: 50px;
    margin-right: 10px;
    transition: transform 0.5s ease;
    &:hover {
      animation: ${shakeAnimation} 0.5s ease;
    }
  }

  &:hover {
    color: #0a66c2;
  }
`;

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: ${theme.colors.dark};
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  background-color: #0a66c2;
  color: #fff;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.dark};
  }
`;

const SuccessMessage = styled.p`
  margin-top: 20px;
  color: green;
`;

const ErrorMessage = styled.p`
  margin-top: 20px;
  color: red;
`;
