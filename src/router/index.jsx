import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import EventPage from "../pages/EventPage";
import CommunityPage from "../pages/CommunityPage";
import PartnershipPage from "../pages/PartnershipPage";
import AboutPage from "../pages/AboutPage";
import PostDetailPage from "../pages/PostDetailPage";
import EventDetailPage from "../pages/EventDetailPage";
import ProfilePage from "../pages/ProfilePage";
import ArticleDetail from "../pages/ArticleDetail";
import UploadEventPage from "../pages/UploadEventPage";
import AuthPage from "../pages/AuthPage";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/register"
          element={
            <AuthPage
              title="Buat akun baru"
              description="Daftarkan akunmu di sini!"
            />
          }
        />
        <Route
          exact
          path="/login"
          element={
            <AuthPage
              title="Masuk ke akun kamu"
              description="Login menggunakan akunmu"
            />
          }
        />
        <Route
          exact
          path="/forgot-password"
          element={
            <AuthPage
              title="Lupa Password"
              description="Masukan emailmu untuk reset password"
            />
          }
        />

        <Route exact path="/event" element={<EventPage />} />
        <Route exact path="/event/:slug/detail" element={<EventDetailPage />} />
        <Route exact path="/community" element={<CommunityPage />} />
        <Route exact path="/posts/:slug/detail" element={<PostDetailPage />} />
        <Route exact path="/article/:slug/detail" element={<ArticleDetail />} />
        <Route exact path="/partnership" element={<PartnershipPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        {/* Private Routes */}
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage title="Profile" description="Informasi akun anda" />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile/event"
          element={
            <PrivateRoute>
              <ProfilePage
                title="Event"
                description="Kelola event yang sudah kamu upload dan ikuti"
              />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile/membership"
          element={
            <PrivateRoute>
              <ProfilePage
                title="Membership"
                description="Kelola membership kamu untuk dapat benefit lebih!"
              />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/profile/security"
          element={
            <PrivateRoute>
              <ProfilePage
                title="Account Security"
                description="Amankan akun kamu dengan baik"
              />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/upload-event"
          element={
            <PrivateRoute>
              <UploadEventPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
