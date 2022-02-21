import React from "react";
import Banner from "../../Banner/Banner";
import Experts from "../../experts/Experts";
import HomeBar from "../../Navbar/HomeBar";
import Services from "../Services";

const HomePage = () => {
  return (
    <div>
      <HomeBar />
      <Banner />
      <Services />
      <Experts />
    </div>
  );
};

export default HomePage;
