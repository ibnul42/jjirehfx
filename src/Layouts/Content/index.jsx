import React from "react"; // requires a loader
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import HomePage02 from "../../Pages/HomePage02";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home2" element={<HomePage02 />} />
    </Routes>
  );
}

export default Content;
