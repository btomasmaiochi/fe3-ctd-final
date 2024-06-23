import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

export const ContextGlobal = createContext();

const initialState = {
  theme: localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : false,
  dentists: [],
  favs: localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")) : [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      const newTheme = !state.theme;
      localStorage.setItem("theme", JSON.stringify(newTheme));
      return { ...state, theme: newTheme };

    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };

    case "ADD_FAV":
      const updatedFavs = [...state.favs, action.payload];
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };

    case "DELETE_FAV":
      const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload);
      localStorage.setItem("favs", JSON.stringify(filteredFavs));
      return { ...state, favs: filteredFavs };

    default:
      return state;
  }
};

export const ContextGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
