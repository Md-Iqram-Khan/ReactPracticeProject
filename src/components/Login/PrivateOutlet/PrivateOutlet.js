import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateOutlet = () => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner className="text-center" animation="border" variant="danger" />
      </div>
    );
  }
  return user?.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateOutlet;
