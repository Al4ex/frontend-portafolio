import React, { useState } from 'react'
import { SiLinkedin } from "react-icons/si";
import { RiMenuFill, RiCloseFill, RiMoonFill, RiSunFill, RiHome2Fill, RiShieldStarLine, RiUser3Line, RiImage2Fill, RiMessage2Fill, RiBriefcaseFill } from "react-icons/ri";
const Header = ({mode,setMode}) => {

  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu)
  }
  const handleMode = () => {
    setMode(!mode)
    
  }
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Alexander
        </a>
        <div
          className={` nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#" className="nav__link">
                <RiHome2Fill className="nav__icon" /> Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <RiUser3Line className="nav__icon" /> Acerca
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <RiShieldStarLine className="nav__icon" /> Habilidades
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link">
                <RiBriefcaseFill className="nav__icon" /> Experiensa
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <RiImage2Fill className="nav__icon" /> Portafolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <RiMessage2Fill className="nav__icon" /> Contactame
              </a>
            </li>
          </ul>
          <RiCloseFill className="nav__close" onClick={handleMenu} />
        </div>
        <div className="nav__btns">
          {mode ? (
            <RiMoonFill onClick={handleMode} className="change__theme" />
          ) : (
            <RiSunFill onClick={handleMode} className="change__theme" />
          )}
          <div className="nav__toggle" id="nav-toggle">
            <RiMenuFill onClick={handleMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header