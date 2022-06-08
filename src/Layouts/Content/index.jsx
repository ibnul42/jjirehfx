import React from "react"; // requires a loader
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import HomePage02 from "../../Pages/HomePage02";
import HomePage04 from "../../Pages/HomePage04";
import LoginRegister from "../../Pages/LoginRegister";

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginRegister login={true} register={false} />} />
      <Route path="/register" element={<LoginRegister login={false} register={true} />} />
      <Route path="/home2" element={<HomePage02 />} />
      <Route path="/home4" element={<HomePage04 />} />
    </Routes>
  );
}

export default Content;
