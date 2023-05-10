import React from "react";
import "./App.css";
import EventCard from "./components/card/EventCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <>
      <EventCard
        title="Produktif di era pandemi"
        category="Webinar"
        organizer="Universitas Indonesia"
        date="7 September 2022"
      />
      {/* <Header /> */}
    </>
  );
}

export default App;
