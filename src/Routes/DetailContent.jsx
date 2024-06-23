import React from "react";

const DetailContent = ({ dentist }) => {
  return (
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
  );
};

export default DetailContent;
