import React, { useState } from "react";
import { MdCalendarToday, MdSchool, MdWork } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { portfolio } from "../../info/info";

const Experience = ({ scrollRef, post }) => {
  const lang = 'es'
    const {
      experience: { work, education,title,subtitle },
    } = portfolio;
  const [qual, setQual] = useState(false);

     const handleQual = (bool) => {
       setQual(bool);
     };
  return (
    <section
      ref={(element) => {
        scrollRef.current[2] = element;
      }}
      className={`experiencie section reveal ${
        post[2] == true ? "active" : ""
      }`}
      id="experience"
    >
      <h2 className="section__title">{title[lang]}</h2>
      <span className="section__subtitle">{subtitle[lang]}</span>
      <div className="experiencie__container container" id="main-container">
        <div className="experience__tabs">
          <div
            className={`experience__button ${!qual ? "active" : ""}`}
            onClick={() => handleQual(false)}
            data-target="#work"
          >
            <MdWork /> Trabajo
          </div>
          <div
            className={`experience__button ${qual ? "active" : ""}`}
            onClick={() => handleQual(true)}
            data-target="#education"
          >
            <MdSchool /> Educacion
          </div>
        </div>
        <div
          className={`${
            qual ? "experience__block experience__content" : "experience__none"
          }`}
          data-content
          id="education"
        >
          {education.map((item, index) => (
            <div key={index} className="experience__data">
              {(index + 1) % 2 == 0 ? (
                <>
                  <div></div>
                  <div>
                    <span className="experience__rounder"></span>
                  </div>
                  <div>
                    <h3 className="experience__title">{item.title[lang]}</h3>
                    <span className="experience__subtitle">
                      {item.subtitle[lang]}
                    </span>
                    <div className="experience__calendar">
                      <IoCalendarOutline />
                      {item.years}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="experience__title">{item.title[lang]}</h3>
                    <span className="experience__subtitle">
                      {item.subtitle[lang]}
                    </span>
                    <div className="experience__calendar">
                      <IoCalendarOutline />
                      {item.years}
                    </div>
                  </div>
                  <div>
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div
          className={`${
            !qual ? "experience__block experience__content" : "experience__none"
          }`}
          data-content
          id="work"
        >
          {work.map((item, index) => (
            <div key={index} className="experience__data">
              {(index + 1) % 2 == 0 ? (
                <>
                  <div></div>
                  <div>
                    <span className="experience__rounder"></span>
                    {index + 1 == work.length ? (
                      ""
                    ) : (
                      <span className="experience__line"></span>
                    )}
                  </div>
                  <div>
                    <h3 className="experience__title">{item.title[lang]}</h3>
                    <span className="experience__subtitle">
                      {item.subtitle[lang]}
                    </span>
                    <div className="experience__calendar">
                      <MdCalendarToday />
                      {item.years}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="experience__title">{item.title[lang]}</h3>
                    <span className="experience__subtitle">
                      {item.subtitle[lang]}
                    </span>
                    <div className="experience__calendar">
                      <MdCalendarToday />
                      {item.years}
                    </div>
                  </div>
                  <div>
                    <span className="experience__rounder"></span>
                    <span className="experience__line"></span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
