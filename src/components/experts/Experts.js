import React, { useEffect, useState } from "react";
import Expert from "./Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("expert.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div>
      <h2 className="text-uppercase my-3">Our Experts</h2>
      {experts.map((expert) => (
        <Expert key={expert.id} expert={expert} />
      ))}
    </div>
  );
};

export default Experts;
