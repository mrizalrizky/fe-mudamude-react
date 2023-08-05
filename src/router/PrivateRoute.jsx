import React from "react";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token") ?? null;

  return token ? children : <Navigate to="/login" />;
}
