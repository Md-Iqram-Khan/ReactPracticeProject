import React from "react";
import "./service.css";

const Service = ({ service }) => {
  const { name, description, img, price } = service;
  return (
    <div className="service">
      <img src={img} alt="img" />
      <h5>Service Name: {name}</h5>
      <p>Description: {description}</p>
      <p>Price: {price} TK</p>
    </div>
  );
};

export default Service;
