import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PastEvents from "./PastEvents";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/past" element={<PastEvents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
