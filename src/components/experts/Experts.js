import React, { useEffect, useState } from "react";
import Expert from "./Expert";
import "./experts.css";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("expert.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div id="experts">
      <hr className="my-5" />
      <h2 className="text-uppercase mb-4 text-center">Our Experts</h2>
      <div className="container">
        <div className="expert-area ">
          {experts.map((expert) => (
            <Expert key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
