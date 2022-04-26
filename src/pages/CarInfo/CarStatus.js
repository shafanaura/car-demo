import { Card, Space, Typography } from "antd";
import React from "react";

const CarStatus = () => {
  return (
    <Card>
      <Space size={48}>
        <Typography.Text strong>Register Time History</Typography.Text>
        <Typography.Text disabled strong>
          Car Condition
        </Typography.Text>
      </Space>
    </Card>
  );
};

export default CarStatus;
