import React, { useEffect, useRef, useState } from "react";




import CardPortafolio from "./CardPortafolio";
import { info } from "../info/info";
import Home from "./sections/Home";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import CardTest from "./CardTest";
import PortfolioEvidence from "./sections/PortfolioEvidence";
import ContactMe from "./sections/ContactMe";

let initialState = [false,false,false,false,false];
const Main = ({mode}) => {
  
  const [post, setPost] = useState(initialState);
  const scrollRef = useRef([]);
  
 
  
  
  useEffect(() => {
    const arraySection = scrollRef.current;
    const handleShow = () => {
      arraySection.forEach((el, index) => {
        var position = el.getBoundingClientRect();

        if (200 + position.top < window.innerHeight && position.bottom >= 200) {
          handleIncrementClick(index);
        }
      });
    };

    const handleIncrementClick = (index) => {
      const removeBool = post[index];
      if (!removeBool) {
        // console.log(removeBool)
        // post.splice(index, 0, "true");
        const nextCounters = post.filter((a, i) => i !== index);
        nextCounters.splice(index, 0, true);
        // post.some(e => e == false) ?  : ''
        setPost(nextCounters);
      }
    };
  
  window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll",handleShow);
    };
    
  },[post]);

  return (
    <main className="main">
      <Home />
      <AboutMe scrollRef={scrollRef} post={post} />
      <Skills scrollRef={scrollRef} post={post} />
      <Experience scrollRef={scrollRef} post={post} />
      <PortfolioEvidence scrollRef={scrollRef} post={post} />
      <ContactMe scrollRef={scrollRef} post={post} mode={mode}/>
    </main>
  );
};

export default Main;
