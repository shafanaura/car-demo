import { Space } from "antd";
import React from "react";
import BackButton from "./BackButton";
import Navbar from "./Navbar";

const Container = ({ children, back }) => {
  return (
    <>
      <Navbar />
      <Space
        direction="vertical"
        size={24}
        style={{
          padding: "16px 32px",
          display: "flex",
          backgroundColor: "#f5f5f5",
        }}
      >
        {back && <BackButton />}
        {children}
      </Space>
    </>
  );
};

export default Container;
