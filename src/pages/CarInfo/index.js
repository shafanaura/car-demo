import CarDetail from "pages/CarInfo/CarDetail";
import Container from "components/Container";
import React from "react";
import CarStatus from "./CarStatus";
import CarRegister from "./CarRegister";

const CarInfo = () => {
  return (
    <Container back>
      <CarDetail />
      <CarStatus />
      <CarRegister />
    </Container>
  );
};

export default CarInfo;
