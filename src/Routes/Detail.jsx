import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

const Detail = () => {
  const { state } = useContextGlobal();
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const DETAIL_URL = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    axios.get(DETAIL_URL)
      .then((response) => {
        setDentist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching detail:", error);
      });
  }, [DETAIL_URL]);

  return (
    <div className={state.theme ? "dark" : "light"}>
      <h1>Detail Dentist {dentist.id}</h1>
      {dentist.id ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Sitio web</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Cargando</p>
      )}
    </div>
  );
};

export default Detail;
