import React, { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { portfolio } from "../../info/info";

const Skills = ({ scrollRef, post }) => {
  const lang = 'es'
  const [skill, setSkill] = useState([false, false]);
  const { skills: { frontend, backend, labels, title } } = portfolio
  
  const handleSkill = (index) => {
    let cero = 0
    index == cero ? cero = 1 : cero 
    let nextCounters = skill.filter((a, i) => i !== index);
    nextCounters.splice(index, 0, !skill[index]);
    
    if (nextCounters[cero] == true && nextCounters[index] == true) {
      nextCounters=[]
      nextCounters.splice(index, 0, !skill[index]);
      nextCounters.splice(cero, 0, skill[index]);
    }
    
    
    setSkill(nextCounters);
  };
  return (
    <section
      ref={(element) => {
        scrollRef.current[1] = element;
      }}
      className={`skills section reveal ${post[1] ? "active" : ""}`}
      id="skills"
    >
      <h2 className="section__title">{title[lang]}</h2>
      <div className="skills__container container grid">
        <div>
          <div
            className={`skill__content skill__close ${
              skill[0] ? "skill__open" : ""
            }`}
            onClick={() => handleSkill(0)}
          >
            <div className="skill__header" id="dropdown">
              <BsCodeSlash className="i icon" />
              <div className="skill__technology">
                <h1 className="skill__title">Frontend Dev</h1>
                <span className="skill__subtitle">{labels.frontend[lang]}</span>
              </div>
              <div className="arrow"></div>
              {/* <MdOutlineExpandMore className="i arrow" /> */}
            </div>
          </div>
          <div
            className={`skill__content skill__close ${
              skill[1] ? "skill__open" : ""
            }`}
            onClick={() => handleSkill(1)}
          >
            <div className="skill__header" id="dropdown">
              <AiOutlineCloudServer className="i icon" />
              <div className="skill__technology">
                <h1 className="skill__title">Backend Dev</h1>
                <span className="skill__subtitle">{labels.backend[lang]}</span>
              </div>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`skill__content skill__close ${
              skill[1] ? "skill__open" : ""
            }`}
          >
            <div className={`skill__list`}>
              {backend.map(({ skill, percentage }) => (
                <div key={skill} className="skill__data">
                  <div className="skill__item__title">
                    <h3 className="skill__name">{skill}</h3>
                    <span className="skill__number">{percentage}%</span>
                  </div>
                  <div className="skill__bar">
                    <span
                      className="skill__percentage skill__html"
                      style={{ width: `${percentage}%` }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`skill__content skill__close ${
              skill[0] ? "skill__open" : ""
            }`}
          >
            <div className={`skill__list `}>
              {frontend.map(({ skill, percentage }) => (
                <div key={skill} className="skill__data">
                  <div className="skill__item__title">
                    <h3 className="skill__name">{skill}</h3>
                    <span className="skill__number">{percentage}%</span>
                  </div>
                  <div className="skill__bar">
                    <span
                      className="skill__percentage skill__html"
                      style={{ width: `${percentage}%` }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
