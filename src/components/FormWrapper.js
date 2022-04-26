import { Badge, Space } from "antd";
import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <Space size="small" direction="vertical">
      <Badge dot>
        <h3>{title}</h3>
      </Badge>
      {children}
    </Space>
  );
};

export default FormWrapper;
