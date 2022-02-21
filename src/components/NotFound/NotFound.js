import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Utilitis/images/404_4x.jpg";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img
          src={img}
          alt="img"
          className="w-50"
          style={{ maxHeight: "250px" }}
        />
      </div>

      <h2 className="text-danger text-center">Page Not Found</h2>
      {/* <Link to='/'> </LinK> */}
      <Link to="/" className="text-decoration-none">
        <div className="d-flex justify-content-center">
          <Button className="btn-danger">Go Home</Button>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
