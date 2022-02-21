import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { id, name, description, img, price } = service;
  return (
    <div className="service pb-2">
      <img src={img} alt="img" />
      <h5> {name}</h5>
      <p>Description: {description}</p>
      <p>Price: {price} TK</p>
      <Link to={`/booking/${id}`}>
        <Button className=" btn-sm btn-danger ">Book {name}</Button>
      </Link>
    </div>
  );
};

export default Service;
