import React from "react";
import { FaDownload } from "react-icons/fa";
import "../index.scss";

export default function Button({ name, href, onClick, download }) {
  return (
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
