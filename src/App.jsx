import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Adding from "./pages/Adding";
import Updating from "./pages/Updating";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Adding />} />
          <Route path="/update/:id" element={<Updating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
