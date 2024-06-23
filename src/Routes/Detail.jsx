import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

const Detail = () => {
  const { state } = useContextGlobal();
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const DETAIL_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    const fetchDentistDetail = async () => {
      try {
        const response = await axios.get(DETAIL_URL);
        setDentist(response.data);
      } catch (error) {
        console.error("Error fetching detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDentistDetail();
  }, [id]);

  return (
    <div className={state.theme ? "dark" : "light"}>
      <h1>Detail Dentist {dentist ? dentist.id : ''}</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        dentist && (
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
        )
      )}
    </div>
  );
};

export default Detail;

