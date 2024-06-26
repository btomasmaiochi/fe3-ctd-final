import React from "react";
import Form from "../Components/Form";
import { useContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContextGlobal();

  return (
    <div className={state.theme ? "dark" : "light"}>
      <h2 style={{ textAlign: "center" }}>Want to know more?</h2>
      <p style={{ textAlign: "center" }}>
        Send us your questions and we will contact you
      </p>
      <Form />
    </div>
  );
};

export default Contact;
