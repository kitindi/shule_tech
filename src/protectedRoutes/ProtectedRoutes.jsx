import React from "react";
import { useAuth } from "../context/authcontext";
import { Navigate } from "react-router";
import Layout from "../pages/Layout";

const ProtectedRoutes = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Layout /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
