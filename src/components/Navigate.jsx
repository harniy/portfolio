import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Menu from "@material-ui/icons/Menu";

export default function Navigate({
  setHeaderStyle,
  smothScroll,
}) {
  const [fixHeader, setFixHeader] = useState(false);
  const [isMenu, setIsMenu] = useState(false)

  const headerScroll = () => {
    if (window.scrollY > 100) {
      setFixHeader(true);
    } else {
      setFixHeader(false);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      headerScroll();
    };
  }, []);

  useEffect(() => {
    setHeaderStyle(fixHeader);
  }, [fixHeader]);

  return (
    <>
    <Menu className="header__mobile" onClick={() => setIsMenu(!isMenu)} />
      <nav className={`header__nav ${fixHeader ? "header__scroll" : ""} ${isMenu ? 'show__menu' : ''}`}>
        <div className="header__nav-leftl">
          <ul className="header__nav-list menu-list">
            <li className="header__nav-item">
              <p style={{cursor: 'pointer'}} onClick={() => smothScroll("home")} className=" header__nav-active">
                Sey hello
              </p>
            </li>
            <li className="header__nav-item">
              <p style={{cursor: 'pointer'}} onClick={() => smothScroll("projects")}>
                Projects
              </p>
            </li>
            <li className="header__nav-item">
              <p style={{cursor: 'pointer'}} onClick={() => smothScroll('about')}>About</p>
            </li>
          </ul>
        </div>
        <div className="header__nav-right">
          <ul className="header__nav-list social">
            <li className="header__nav-item">
              <a
                href="https://github.com/harniy"
                title="gitgub"
                target="_blank"
              >
                <GitHub />
              </a>
            </li>
            <li className="header__nav-item">
              <a
                href="https://www.linkedin.com/in/kirill-morenkov/"
                title="LinkedIn"
                target="_blank"
              >
                <LinkedIn />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
