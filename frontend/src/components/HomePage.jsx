import React from "react";
import Hero from "./Hero";
import Announcement from "./Announcement";
import Specification from "./Specification";
import Message from "./Message";
import Journal from "./Journal";
import Event from "./Event";
import Glimpse from "./Glimpse";
import Subscription from "./Subscription";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";

const HomePage = () => {
  return (
    <>
      <HeroHeader />
      <Hero />
      <Announcement />
      <Specification />
      <Message />
      <Journal />
      <Event />
      <Glimpse />
      <Subscription />
      <Footer />
    </>
  );
};

export default HomePage;
