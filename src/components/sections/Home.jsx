import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin } from "react-icons/si";

import LogoAlex from "../../img/LogoAlex.png";
import { portfolio } from "../../info/info";
const Home = () => {
  const lang = "es";
  
  const {
    home: { title, description, subtitle },
  } = portfolio;

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social__media">
            <a href="https://github.com/Al4ex" target="_blank" className="home_social__icon">
              <GoMarkGithub />
            </a>
            <a href="https://www.linkedin.com/in/alexander-cruz-aragón-468ab5191/" target="_blank" className="home_social__icon">
              <SiLinkedin />
            </a>
            <a href="#" className="home_social__icon">
              <i className="uil uil-estate"></i>{" "}
            </a>
          </div>
          <div className="home__logo">
            <img x="12" y="18" src={LogoAlex} alt="" />
          </div>
          <div className="home__info">
            <h1 className="home__title">{title[lang]}</h1>
            <h3 className="home__subtitle">{subtitle[lang]}</h3>
            <p className="home__description">{description[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
