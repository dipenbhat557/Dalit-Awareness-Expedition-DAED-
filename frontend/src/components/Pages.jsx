import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PastEvents from "./PastEvents";
import PresentEvents from "./PresentEvents";
import AfterEvent from "./AfterEvent";
import JournalPage from "./JournalPage";
import AfterJournalPage from "./AfterJournalPage";
import AboutDAED from "./AboutDAED";
import AboutTeam from "./AboutTeam";
import Contact from "./Contact";
import Support from "./Support";
const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/past" element={<PastEvents />} />
        <Route path="/event/present" element={<PresentEvents />} />
        <Route path="/afterevent" element={<AfterEvent />} />
        <Route path="/journals" element={<JournalPage />} />
        <Route path="/afterjournal" element={<AfterJournalPage />} />
        <Route path="/about/us" element={<AboutDAED />} />
        <Route path="/about/team" element={<AboutTeam />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/supportus" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
