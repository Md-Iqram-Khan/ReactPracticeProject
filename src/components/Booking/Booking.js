import React from "react";
import { useParams } from "react-router-dom";
import HomeBar from "../Navbar/HomeBar";

const Booking = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <HomeBar />
      Booking:{serviceId}
    </div>
  );
};

export default Booking;
