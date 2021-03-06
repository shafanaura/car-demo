import { CheckCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  TimePicker,
  Typography,
} from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "redux/action/CarAction";

const form = [
  {
    label: "Register Time",
    name: "registerTime",
    text: "Fill form by scheduled worklist",
    type: "checkbox",
    required: false,
  },
  { label: "PIC", name: "pic", type: "select", required: true },
  {
    label: "Employee",
    name: "employee",
    type: "select",
    required: true,
    extra: true,
    extraLabel: "+ Add More Employee",
  },
  { label: "Note", name: "note", type: "note", required: false },
  { label: "Necessity", name: "necessity", type: "text", required: true },
  { label: "Start Date", name: "startDate", type: "date", required: true },
  { label: "End Date", name: "endDate", type: "date", required: true },
  { label: "Start Time", name: "startTime", type: "time", required: true },
  { label: "End Time", name: "endTime", type: "time", required: true },
];

function component(item) {
  switch (item.type) {
    case "checkbox":
      return <Checkbox>{item.text}</Checkbox>;
    case "select":
      return (
        <Select defaultValue="lucy" style={{ width: "100%" }}>
          <Select.Option value="jack">Jack</Select.Option>
        </Select>
      );
    case "note":
      return (
        <Input.TextArea
          style={{ height: 120, borderRadius: 10 }}
          placeholder="Enter note..."
        />
      );
    case "date":
      return <DatePicker style={{ width: "100%" }} />;
    case "time":
      return <TimePicker style={{ width: "100%" }} />;
    default:
      return <Input placeholder={`Enter ${item.label}`} />;
  }
}

function renderComponent(list) {
  return list.map((item) => (
    <Form.Item
      label={item.label}
      name={item.name}
      rules={[{ required: item.required, message: "Required!" }]}
    >
      <Space direction="vertical" size="small" style={{ display: "flex" }}>
        {component(item)}
        {item.extra && (
          <Typography.Link strong underline>
            {item.extraLabel}
          </Typography.Link>
        )}
      </Space>
    </Form.Item>
  ));
}

const CarRegister = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.car.modalVisible);
  console.log(modalVisible);

  return (
    <Card>
      <Form layout="vertical">
        <Row>
          <Col span={9}>{renderComponent(form.slice(0, 4))}</Col>
          <Col span={9} offset={6}>
            {renderComponent(form.slice(4))}
            <Form.Item>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  justifyContent: "space-between",
                }}
              >
                <Button size="large" block>
                  Cancel
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  onClick={() => dispatch(openModal(true))}
                >
                  Add Register Time
                </Button>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Modal
        onCancel={() => dispatch(openModal(false))}
        cancelButtonProps={{ hidden: true }}
        okButtonProps={{ hidden: true }}
        visible={modalVisible}
      >
        <Space align="center" direction="vertical" style={{ display: "flex" }}>
          <CheckCircleOutlined style={{ fontSize: 120, color: "#4070ff" }} />
          <Typography style={{ fontWeight: 500, fontSize: 22 }}>
            Successful
          </Typography>
          <Typography style={{ color: "#AAAAAA", fontSize: 18 }}>
            Successfully add register time
          </Typography>
          <Button
            type="primary"
            size="large"
            style={{ marginTop: 16 }}
            onClick={() => dispatch(openModal(false))}
          >
            Confirm
          </Button>
        </Space>
      </Modal>
    </Card>
  );
};

export default CarRegister;
