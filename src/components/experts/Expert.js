import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="">
      <div className=" my-3">
        <img className="" src={img} alt="img" />
        <div className="">
          <h1>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Expert;
