import React from "react";
import "./service.css";

const Service = ({ service }) => {
  const { name, description, img, price } = service;
  return (
    <div className="service">
      <img src={img} alt="img" />
      <h3>Service Name:{name}</h3>
      <p>Description:{description}</p>
      <h4>Price: {price} TK</h4>
    </div>
  );
};

export default Service;
