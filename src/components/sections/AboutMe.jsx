import React from "react";
import { portfolio } from "../../info/info";
import CV from "../../assets/pdf/CV_Alexander_CRUZ_ARAGON.pdf"

const AboutMe = ({ scrollRef, post }) => {
  const lang = 'es'
  console.log(1)
     const {about:{title,description,experience,subtitle}} = portfolio
  return (
    <section
      ref={(element) => {
        scrollRef.current[0] = element;
      }}
      className={`about section reveal ${post[0] == true ? "active" : ""}`}
      id="about"
    >
      <h2 className="section__title">{title[lang]}</h2>
      <span className="section__subtitle">{subtitle[lang]}</span>
      <div className="container grid about__container">
        <div className="about__data">
          <p className="about__description">{description[lang]}</p>
        </div>
        <div className="about__info">
          <div className="">
            <span className="about__info-age">04+</span>
            <span className="about__info-name">{experience.full[lang]}</span>
          </div>
          <div className="">
            <span className="about__info-age">20</span>
            <span className="about__info-name">{experience.proyects[lang]}</span>
          </div>
        </div>
        <div className="about__download">
          <a
            download=""
            href={CV}
            className="button button--flex"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
