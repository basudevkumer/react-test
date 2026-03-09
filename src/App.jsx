import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./page/Home";
import About from "./page/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
