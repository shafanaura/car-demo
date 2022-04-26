import {
  BellOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, Typography } from "antd";
import IconWrapper from "components/IconWrapper";
import React from "react";
import styles from "./styles.module.css";

const iconSize = {
  style: {
    fontSize: 18,
  },
};

const MenuList = [
  {
    icon: <QuestionCircleOutlined {...iconSize} />,
  },
  {
    icon: <InfoCircleOutlined {...iconSize} />,
  },
  {
    icon: <BellOutlined {...iconSize} />,
    count: 3,
  },
];

const Navbar = () => {
  return (
    <div className={`${styles["flex-center"]} ${styles.container}`}>
      <b className={styles["title-header"]}>Car Information</b>
      <Input
        style={{ width: 400 }}
        placeholder="Search..."
        suffix={<SearchOutlined style={{ fontSize: 18, color: "#9E9E9E" }} />}
      />
      <div className={styles["flex-center"]} style={{ gap: 32 }}>
        <div className={styles["flex-center"]} style={{ gap: 18 }}>
          {MenuList.map((item) => (
            <IconWrapper icon={item.icon} count={item.count} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Avatar
            shape="square"
            size={48}
            src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Loren Alvin</Typography>
            <Typography style={{ fontWeight: 500, opacity: 0.5 }}>
              Admin
            </Typography>
          </div>
        </div>
        <Button type="text" icon={<LogoutOutlined {...iconSize} />} />
      </div>
    </div>
  );
};

export default Navbar;
