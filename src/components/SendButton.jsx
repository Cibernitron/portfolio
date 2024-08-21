import React from "react";
import "../index.scss";
import styled from "styled-components";
import { theme } from "../styles/themes";

export default function Button({ name, href, onClick, download, disabled }) {
  return disabled ? (
    <ButtonDisabled>{name}</ButtonDisabled>
  ) : (
    <div className="button-container-2" onClick={onClick}>
      <span className="mas2">{name}</span>
      {href ? (
        <a href={href} download={download} className="button-link">
          <button className="nav-button">{name}</button>
        </a>
      ) : (
        <button className="nav-button" onClick={onClick}>
          {name}
        </button>
      )}
    </div>
  );
}
const ButtonDisabled = styled.div`
  position: relative;
  width: 150px;
  height: 75px;
  margin-left: calc(50% - 75px);
  overflow: hidden;
  border: 1px solid ${theme.colors.dark};
  background-color: #949292;
  transition: 0.5s;
  border-radius: 8px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;
