import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

const BackButton = () => {
  return (
    <Button type="text" icon={<ArrowLeftOutlined />} size="large">
      Back
    </Button>
  );
};

export default BackButton;
