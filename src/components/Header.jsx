import React, { useState } from "react";
import Navigate from "./Navigate";

export default function Header({ scrollElement, aboutSection }) {
  const [headerStyle, setHeaderStyle] = useState(false);

  const smothScroll = (domEl) => {
    switch (domEl) {
      case 'projects':
        scrollElement.scrollIntoView({behavior: "smooth" });
        break
      case 'about':
        aboutSection.scrollIntoView({behavior: "smooth" });
        break
      case 'home':
        window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
      break
    }
  };

  return (
    <header className="header">
      <Navigate
        scrollElement={scrollElement}
        setHeaderStyle={setHeaderStyle}
        smothScroll={smothScroll}
      />
      <div className="header__background-filter">
        <div className="header__content">
          <p className="header__content-title">Hi, i'm Kirill</p>
          <p className="header__content-description">
            I'm a front end developer specializing in React, Vue and vanilla js
          </p>

          <div className="header__content-button" onClick={() => smothScroll('projects')}>
            look projects
          </div>
        </div>
      </div>
    </header>
  );
}
