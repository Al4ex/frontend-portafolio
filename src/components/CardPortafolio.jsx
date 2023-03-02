import React, { useEffect, useRef } from "react";
import { IoLink, IoLogoGithub } from "react-icons/io5";

import Portafolio1 from "../img/portfolio1.jpg";
import Portafolio2 from "../img/portfolio2.jpg";
import Portafolio3 from "../img/portfolio3.jpg";
import DinamicIcon from "./DinamicIcon";

const CardPortafolio = ({ portinfo }) => {

  const { title, subtitle, image, demo, github, technologies } = portinfo;
  
    // const size = image.length-1
    // const imageRef = useRef([]);
    // let i = 0
    // const handleClick = (side) => {
    //   console.log(side)
    //   if (side == 'next') {
    //     i++
    //     if (i > size) {
    //       i = 0;
    //     }
    //     imageRef.current.forEach((img, inde) => {
    //       if (inde == i) {
    //         img.className = "f fade block";
    //       } else {
    //         img.className = "f none ";
    //       }
    //     });
        
        
    //   } else {
    //     i--;
    //     if (i < 0) {
    //       i = size;
    //     }
        
    //     console.log(i, 'ant')
    //     imageRef.current.forEach((img, inde) => {
    //       if (inde == i) {
    //         img.className = "f fade block";
    //       } else {
    //         img.className = "f none";
    //       }
    //     });
        
        
        
        
    //   }

    //   console.log(i)
    // }
    // const handlePrev = () => {
      
    // };
    // const handleNext = () => {
      
    // };

    

    // useEffect(() => {
    //   imageRef.current[0].className = "f block";
    // }, []);

  return (

    <div className="card">
        <div className="image-container">
          <img src={image[0]} alt="Descripción de la imagen"/>
          <div className="overlay">
            <div className="overlay-content">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="icon-container">
          {technologies?.map((ele, index) => (
            <span className="" key={index}>
              <DinamicIcon icon={ele} />
            </span>
          ))}
          </div>
          <div className="button-container">
            {demo ? <a href={demo} target="_blank">Demo</a> : '' }
            {github ? <a href={github} target="_blank">Github</a> : '' }
          </div>
        </div>
      </div>
  );
};

export default CardPortafolio;
