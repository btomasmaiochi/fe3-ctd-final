import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [typeSubmit, setTypeSubmit] = useState({});

  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setTypeSubmit({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTypeSubmit({ success: true });
    } else {
      setTypeSubmit({ error: true });
    }
  };

  const validateForm = () => {
    return data.name.trim().length > 5 && regexEmail.test(data.email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={data.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleInputChange}
        />
        <button>Enviar</button>
      </form>
      {typeSubmit.success && (
        <p style={{ color: "green", textAlign: "center" }}>
          {`Gracias ${data.name}, formulario completado exitosamente`}
        </p>
      )}
      {typeSubmit.error && (
        <p style={{ color: "red", textAlign: "center" }}>
          Ups, no se pueden enviar los datos, verifica y vuelve a intentar
        </p>
      )}
    </div>
  );
};

export default Form;
