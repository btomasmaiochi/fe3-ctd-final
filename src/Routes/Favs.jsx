import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <div className={state.theme ? "dark" : "light"}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
          state.favs.map((fav) => (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              username={fav.username}
            />
          ))
        ) : (
          <p style={{ color: "red", fontSize: "30px" }}>
            No hay favoritos guardados
          </p>
        )}
      </div>
    </div>
  );
};

export default Favs;
