import React from "react";
import Hero from "./Hero";
import OurPartner from "./OurPartners";
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
      <HeroHeader active="home" />
      <Hero />
      <Announcement />
      {/* <Specification /> */}
      <OurPartner></OurPartner>
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
