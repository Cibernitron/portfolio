import React from "react";
import { FaDownload } from "react-icons/fa";
import "../index.scss";

export default function Button({ name, href, onClick, download }) {
  return (
    <div className="button-container-1" onClick={onClick}>
      <span className="mas">
        {name}
        <FaDownload className="button-icon" />
      </span>
      {href ? (
        <a href={href} download={download} className="button-link">
          <button className="nav-button">
            {name}
            <FaDownload className="button-icon" />
          </button>
        </a>
      ) : (
        <button className="nav-button" onClick={onClick}>
          {name}
        </button>
      )}
    </div>
  );
}
