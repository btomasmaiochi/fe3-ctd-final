import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

const Home = () => {
  const { state, dispatch } = useContextGlobal();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({ type: "GET_DENTISTS", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  return (
    <main className={state.theme ? "dark" : "light"}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
