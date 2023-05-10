import React from "react";
import "./App.css";
import EventCard from "./components/card/EventCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gerak from "./components/Gerak";
import BenefitCard from "./components/card/BenefitCard";
// import AppRouter from "./router";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <EventCard
        title="Produktif di era pandemi"
        category="Webinar"
        organizer="Universitas Indonesia"
        date="7 September 2022"
      />
      {/* <AppRouter /> */}
      <Gerak />
      <BenefitCard />
    </>
  );
}

export default App;
