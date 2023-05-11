import React from "react";
import "./App.css";
import EventCard from "./components/card/EventCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

import BenefitCard from "./components/card/BenefitCard";
// import AppRouter from "./router";
import infoEvent from "./assets/images/info_event.png";
import promoteEvent from "./assets/images/promote_event.png";
import belajarBareng from "./assets/images/belajar_bareng.png";
import Home from "./pages/Home";
import AppRouter from './router/index'

function App() {
  return (
    <>
    <AppRouter/>
      {/* <Home /> */}
      {/* <Header />
      <Hero /> */}
      {/* <EventCard
        title="Produktif di era pandemi"
        category="Webinar"
        organizer="Universitas Indonesia"
        date="7 September 2022"
      /> */}
      {/* <AppRouter /> */}
      {/* <Gerak />
      <BenefitCard
        title="Info Event dan Webinar"
        image={infoEvent}
        buttonText="Cari Info"
      />
      <BenefitCard
        title="Promosiin Event Kamu"
        image={promoteEvent}
        buttonText="Upload Event"
      />
      <BenefitCard
        title="Belajar Bareng Positive Circle"
        image={belajarBareng}
        buttonText="Cari Teman"
      /> */}
    </>
  );
}

export default App;
