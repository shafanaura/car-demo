import CarDetail from "pages/CarInfo/CarDetail";
import Container from "components/Container";
import React from "react";
import CarStatus from "./CarStatus";

const CarInfo = () => {
  return (
    <Container back>
      <CarDetail />
      <CarStatus />
    </Container>
  );
};

export default CarInfo;
