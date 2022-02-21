import React from "react";
import "./expert.css";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="expert">
      <img className="" src={img} alt="img" />
      <h1 className="title text-dark text-center mt-2">{name}</h1>
      <p className="title">Best Mechanic in town with 5 years experience.</p>
    </div>
  );
};

export default Expert;
