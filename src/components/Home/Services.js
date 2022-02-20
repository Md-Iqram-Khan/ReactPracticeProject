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
    <>
      <h1 className="text-center text-uppercase my-3">Car Service</h1>
      <div className="Service-area">
        {data.map((item) => (
          <Service key={item.id} service={item} />
        ))}
      </div>
    </>
  );
};

export default Services;
