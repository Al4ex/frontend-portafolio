import React from 'react'
import { portfolio } from '../../info/info';
import CardPortafolio from '../CardPortafolio';

const PortfolioEvidence = ({ scrollRef, post }) => {
    const { portfolios } = portfolio;
    const lang = 'es'
  return (
    <section
      ref={(element) => {
        scrollRef.current[3] = element;
      }}
      className={`portfolio section reveal ${post[3] == true ? "active" : ""}`}
      id="portfolio"
    >
      <h2 className="section__title">{portfolios.title[lang]}</h2>
      <span className="section__subtitle">{portfolios.subtitle[lang]}</span>
      <div className="portfolio__container container">
        <div className="cards">
          {portfolios.info.map((el,index) => (
              <CardPortafolio key={index} portinfo={ el } />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioEvidence