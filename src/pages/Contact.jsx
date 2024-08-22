import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Title from "../components/Title";
import { theme } from "../styles/themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/SendButton";
import Footer from "../components/Footer";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error(
        "Vous devez accepter les conditions pour envoyer le formulaire.",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    }

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
          toast.success("Votre message a été envoyé avec succès !", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setFormData({
            name: "",
            firstName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            consent: false,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "Une erreur est survenue, votre message n'a pas été envoyé",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        }
      );
  };

  return (
    <End>
      <Container id={id} className="container">
        <Content className="content-container">
          <Title name="Me Contacter" />
          <ContentContainer>
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
                <FontAwesomeIcon className="icon linked" icon={faLinkedin} />
                <ContactText>Jason Vauquelin</ContactText>
              </ContactLinkSocials>
              <ContactLinkSocials
                href="https://github.com/Cibernitron"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon github" icon={faGithub} />
                <ContactText>Cibernitron</ContactText>
              </ContactLinkSocials>
            </ContactInfo>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormItem>
                  <label htmlFor="name">Nom*</label>
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
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </FormItem>
              </FormGroup>
              <FormGroup>
                <FormItem>
                  <label htmlFor="email">Email*</label>
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
                  <label htmlFor="phone">N° de téléphone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormItem>
              </FormGroup>
              <FormItem>
                <label htmlFor="subject">Objet*</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormItem>
              <FormItem>
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormItem>
              <RequiredFieldsNote>* Champs obligatoires</RequiredFieldsNote>
              <ConsentContainer>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="consent">
                  En soumettant ce formulaire, j'accepte que mes données
                  personnelles soient utilisées pour me recontacter. Aucun autre
                  traitement ne sera effectué avec mes informations. Pour
                  connaître et exercer vos droits, veuillez consultez la{" "}
                  <a href="/privacyPolicy">Politique de confidentialité</a>.
                </label>
              </ConsentContainer>

              <Button
                type="submit"
                name="Envoyer"
                disabled={!formData.consent}
              ></Button>
            </Form>
          </ContentContainer>
          <ToastContainer />
        </Content>
      </Container>
      <Footer />
    </End>
  );
};

export default Contact;

// Styled components
const End = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
const Container = styled.div`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 4rem;
  display: flex;
  background-color: ${theme.colors.white};
`;

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 109px;

  p {
    color: ${theme.colors.dark};
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ContactInfo = styled.div`
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

  &:hover {
    .linked {
      color: #0a66c2;
      transition: color 1s ease;
    }
    .github {
      color: #6b737b;
      transition: color 1s ease;
    }

    .icon {
      animation: ${shakeAnimation} 0.5s ease;
    }
  }

  .icon {
    font-size: 50px;
    margin-right: 10px;
    transition: transform 0.5s ease;
  }
`;

const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
  /* background-color: white; */

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const FormItem = styled.div`
  flex: 1;

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

const ConsentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input[type="checkbox"] {
    margin-right: 10px;
  }

  label {
    font-size: 0.9rem;
    color: ${theme.colors.dark};

    a {
      color: #0a66c2;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const RequiredFieldsNote = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: ${theme.colors.dark};
  margin-top: 10px;
`;
