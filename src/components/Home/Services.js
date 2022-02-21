import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./services.css";
const Services = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div id="services">
      <h2 className="text-center text-uppercase my-3">Car Service</h2>
      <div className="container">
        <div className="Service-area ">
          {data.map((item) => (
            <Service key={item.id} service={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
