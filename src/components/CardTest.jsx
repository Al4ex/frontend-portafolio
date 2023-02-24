import React, { useEffect, useRef } from "react";
import Portafolio1 from "../img/portfolio1.jpg";
import Portafolio2 from "../img/portfolio2.jpg";
import Portafolio3 from "../img/portfolio3.jpg";
import "./Card.css";

const CardTest = ({ id, image }) => {
  const imageRef = useRef([]);
  let i = 0;
  /* const handleClick = (side) => {
    console.log(side)
    if (side == 'next') {
      i++
      if (i > 2) {
        i = 0;
      }
      imageRef.current.forEach((img, inde) => {
        if (inde == i) {
          img.className = "f fade block";
        } else {
          img.className = "f none ";
        }
      });
      
      
    } else {
      i--;
      if (i < 0) {
        i = 2;
      }
      
      console.log(i, 'ant')
      imageRef.current.forEach((img, inde) => {
        if (inde == i) {
          img.className = "f fade block";
        } else {
          img.className = "f none";
        }
      });
      
      
      
      
    }

    console.log(i)
  }
  const handlePrev = () => {
    
  };
  const handleNext = () => {
    
  };
 */

  /* useEffect(() => {
    imageRef.current[0].className = "f block";
    imageRef.current[1].className = "f block";
    imageRef.current[2].className = "f block";
  }, []); */

  return (
    <div className="card card1">
        <a onClick={() => handleClick("prev")} className="prev">
          &#10094;
        </a>
      <div className="div">
        {/* {image.map((img, index) => (
          <img
            key={index}
            ref={(el) => {
              imageRef.current[index] = el;
            }}
            className="f none"
            src={img}
            alt=""
          />
        ))} */}
              <ul className="ul">
                  <li>
        <img className="" src={Portafolio1} alt="" />
                      
                  </li>
                  <li>
        <img className="" src={Portafolio2} alt="" />
                      
                  </li>
                  <li>
        <img className="" src={Portafolio3} alt="" />
                      
                  </li>
              </ul>

      </div>
        <a onClick={() => handleClick("next")} className="next">
          &#10095;
        </a>
      <div className="card__details">
        <div className="technologies">
          <span className="dev__icon">
            <i className="uil uil-react"></i>
          </span>
          <span className="dev__icon">
            <i className="uil uil-html5"></i>
          </span>
          <span className="dev__icon">
            <i className="uil uil-java-script"></i>
          </span>
          <span className="dev__icon">
            <i className="uil uil-react"></i>
          </span>
          <span className="dev__icon">
            <i className="uil uil-html5"></i>
          </span>
          <span className="dev__icon">
            <i className="uil uil-java-script"></i>
          </span>
        </div>
        <div className="buttons">
          <a className="button">
            Demo
            <i className="portfolio__arrow uil uil-arrow-right"></i>
          </a>
          <a className="button">
            Demo
            <i className="portfolio__arrow uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardTest;
