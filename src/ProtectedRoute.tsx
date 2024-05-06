import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
export default function ProtectedRoute({ redirectIfUnAuth }) {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to={redirectIfUnAuth} replace />;
  }
  return <Outlet />;
}
