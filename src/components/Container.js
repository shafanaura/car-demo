import React from "react";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "16px 32px" }}>{children}</div>
    </>
  );
};

export default Container;
