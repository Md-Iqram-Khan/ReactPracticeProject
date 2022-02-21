import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import HomeBar from "../Navbar/HomeBar";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <HomeBar />
      <div>
        <h1 className="text-center">Please Login</h1>
        <div className="d-flex justify-content-center">
          <Button onClick={signInWithGoogle} className="btn-danger">
            Google SignIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
