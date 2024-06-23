import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/Route";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dentist} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
