import React, { useState } from "react";

export default function Project({ project, openImage }) {
  const { name, description, images, stack, github, web } = project;

  const [mainImg, setMainImg] = useState(0);

  return (
    <div className="project__section-info">
      <div className="project__section-main">
        <img
          src={require(`../assets/projects/${images[mainImg].img}`).default}
          alt={name}
          className="project__section-img"
          onClick={() => openImage(images)}
          title="Open image"
        />
        <div className="project__section-details">
          <h2 className="project__section-title">{name}</h2>
          <p className="project__section-description">{description}</p>
          <div className="project__section-stack">
            <span>Use:</span>
            {stack.map((el, i) => (
              <li key={i} className="project__section-item">
                -
                <img
                  src={require("../assets/icons/" + `${el}.png`).default}
                  alt={el}
                  className="project__section-icon"
                  title={el}
                />
                {el}
              </li>
            ))}
          </div>
          <div className="project__section-links">
            <p className="links__section">Links:</p>
            <p>
              <span>Github:</span> -
              <a href={github} target="_blank">
                {github}
              </a>
            </p>
            {web !== "" && (
              <p>
                <span>
                  Site: -{" "}
                  <a href={web} target="_blank">
                    {web}
                  </a>
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="project__screenshots">
        {images.map(({ img }, i) => (
          <div key={i} className="project__image-sections">
            <img
              src={require("../assets/projects/" + img).default}
              alt=""
              onClick={() => setMainImg(i)}
              title="click"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
