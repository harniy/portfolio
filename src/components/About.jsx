import React, { useEffect, useRef } from "react";
import avatar from "../assets/avatar.jpg";

export default function About({ setAboutSection }) {

  const aboutSection = useRef(null);

  useEffect(() => {
    setAboutSection(aboutSection.current)
  }, [aboutSection])

  return (
    <div className="about__container" ref={aboutSection}>
      <div className="about__container-avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="about__container-info">
        <h2>About Me</h2>

        <p>
          I am a front-end developer. I work with pure <span>JavaScript</span>,{" "}
          <span>React</span> and <span>Vue</span> frameworks. I have experience
          with <span>Node JS</span>, <span>MongoDB</span> and <span>Redux</span>
          . Always open to new things and constantly improving my skills.
        </p>
        <p>
          P.S. I know googling very well and can independently find solutions to
          problems ;)
        </p>
      </div>
    </div>
  );
}
