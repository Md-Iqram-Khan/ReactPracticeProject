import React from "react";
import { Button } from "react-bootstrap";
import HomeBar from "../Navbar/HomeBar";

const Register = () => {
  return (
    <div>
      <HomeBar />
      <div>
        <h1 className="text-center">Please Register</h1>
        <div className="d-flex justify-content-center">
          <Button className="btn-danger">Google SignIn</Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
