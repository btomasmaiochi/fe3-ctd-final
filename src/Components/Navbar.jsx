import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from '../Components/utils/global.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  const [sliderPosition, setSliderPosition] = useState(state.theme ? "100%" : "0");

  const handleThemeChange = () => {
    const newPosition = state.theme ? "0" : "100%";
    setSliderPosition(newPosition);
    dispatch({ type: "SWITCH_THEME" });
  };

  return (
    <nav className={state.theme ? "dark" : "light"}>
      <div className="navbar">
        <Link to={"/"}>
          <img src="/DH.ico" alt='DH-logo' />
        </Link>

        <div className="navbar-nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/contacto"}>Contacto</Link>
          <Link to={"/favs"}>Favs</Link>
        </div>

        <button className="theme-switch-btn" onClick={handleThemeChange}>
          <div className="theme-slider" style={{ left: sliderPosition }}>
            <div className="theme-slider-circle">
              <FontAwesomeIcon icon={state.theme ? faMoon : faSun} className="darkModeIcon" />
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
