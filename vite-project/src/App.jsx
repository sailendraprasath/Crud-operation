import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Componments/Users";
import CreateUsers from "./Componments/CreateUsers";
import UpdateUsers from "./Componments/UpdateUsers";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/Create" element={<CreateUsers />} />
          <Route path="/Update/:id" element={<UpdateUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
