import React from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import "./index.css";

const ThemeSwitch = () => {
  const { state, dispatch } = useContextGlobal();

  const handleThemeChange = () => {
    dispatch({ type: "SWITCH_THEME" });
  };

  return (
    <div className="darkModeBox">
      <label className="switch">
        <input
          type="checkbox"
          checked={state.theme}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
