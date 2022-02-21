import React from "react";
import { Carousel, Container } from "react-bootstrap";
import banner1 from "../../Utilitis/images/stock-photo-various-car-parts-and-accessories-isolated-on-gray-background-d-illustration-673268599.jpg";
import banner2 from "../../Utilitis/images/stock-vector-tire-car-advertisement-poster-information-store-action-landscape-poster-digital-banner-flyer-1301106034.jpg";
import "./banner.css";
const Banner = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
