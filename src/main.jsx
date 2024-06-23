import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ContextGlobalProvider } from "./Components/utils/global.context";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextGlobalProvider>
        <App />
      </ContextGlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
