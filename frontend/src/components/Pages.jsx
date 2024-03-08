import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PastEvents from "./PastEvents";
import PresentEvents from "./PresentEvents";
import AfterEvent from "./AfterEvent";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/past" element={<PastEvents />} />
        <Route path="/events/present" element={<PresentEvents />} />
        <Route path="/afterevent" element={<AfterEvent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
