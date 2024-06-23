import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import '../index.css';

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobal();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const encontrado = state.favs.find((fav) => fav.id === id);
    setIsFav(encontrado);
  }, [state.favs, id]);

  const toggleFavorite = () => {
    if (!isFav) {
      dispatch({ type: "ADD_FAV", payload: { id, name, username } });
    } else {
      dispatch({ type: "DELETE_FAV", payload: id });
    }
  };

  return (
    <div className={`card ${state.theme ? "dark" : "light"}`}>
      <Link to={`/dentist/${id}`}>
        <img style={{ maxWidth: "100%" }} src="/images/doctor.jpg" alt="dentist" />
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Username: {username}</p>
      </Link>
      <button onClick={toggleFavorite} className="favButton">
        {isFav ? (
          <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
        ) : (
          <FontAwesomeIcon icon={faHeartBroken} style={{ color: "black" }} />
        )}
      </button>
    </div>
  );
};

export default Card;
