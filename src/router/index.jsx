import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import UserEventPage from "../pages/UserEventPage";
import EventPage from "../pages/EventPage";
import CommunityPage from "../pages/CommunityPage";
import PartnershipPage from "../pages/PartnershipPage";
import AboutPage from "../pages/AboutPage";
import PostDetailPage from "../pages/PostDetailPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<UserEventPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/event" element={<EventPage />} />
        <Route exact path="/community" element={<CommunityPage />} />
        <Route path="/posts/:slug/detail" element={<PostDetailPage />} />
        <Route exact path="/partnership" element={<PartnershipPage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
