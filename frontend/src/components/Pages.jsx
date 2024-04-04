import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AfterEvent from "./AfterEvent";
import AfterJournalPage from "./AfterJournalPage";
import Contact from "./Contact";
import HomePage from "./HomePage";
import JournalPage from "./JournalPage";
import PastEvents from "./PastEvents";
import PresentEvents from "./PresentEvents";
import Support from "./Support";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/past" element={<PastEvents />} />
        <Route path="/events/present" element={<PresentEvents />} />
        <Route path="/afterevent" element={<AfterEvent />} />
        <Route path="/journals" element={<JournalPage />} />
        <Route path="/afterjournal" element={<AfterJournalPage />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
