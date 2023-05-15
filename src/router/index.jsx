import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import UserEventPage from "../pages/UserEventPage";
import EventPage from "../pages/EventPage";
import CommunityPage from "../pages/CommunityPage";
import PartnershipPage from "../pages/PartnershipPage";
import AboutPage from "../pages/AboutPage";
import PostDetailPage from "../pages/PostDetailPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import EventDetailPage from "../pages/EventDetailPage";
import UserProfilePage from "../pages/UserProfilePage";
import ArticleDetail from "../pages/ArticleDetail";
import ArticlePage from "../pages/ArticlePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile/" element={<UserProfilePage />} />
        <Route exact path="/profile/event" element={<UserEventPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/forgot" element={<ForgotPasswordPage />} />
        <Route exact path="/event" element={<EventPage />} />
        <Route exact path="/event/:slug/detail" element={<EventDetailPage />} />
        <Route exact path="/community" element={<CommunityPage />} />
        <Route exact path="/articles" element={<ArticlePage />} />
        <Route exact path="/article/:slug/detail" element={<ArticleDetail />} />
        <Route path="/posts/:slug/detail" element={<PostDetailPage />} />
        <Route exact path="/partnership" element={<PartnershipPage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
