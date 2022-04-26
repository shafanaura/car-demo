import {
  BellOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Input, Typography } from "antd";
import IconWrapper from "components/IconWrapper";
import React, { useEffect, useState } from "react";
import { DataService } from "service/DataService";
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

const api = new DataService();

const Navbar = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.getUserDetail().then((res) => setProfile(res));
  }, []);

  return (
    <div className={`flex-center ${styles.container}`}>
      <b className={styles["title-header"]}>Car Information</b>
      <Input
        style={{ width: 400 }}
        placeholder="Search..."
        suffix={<SearchOutlined style={{ fontSize: 18, color: "#9E9E9E" }} />}
      />
      <div className="flex-center" style={{ gap: 32 }}>
        <div className="flex-center" style={{ gap: 18 }}>
          {MenuList.map((item) => (
            <IconWrapper icon={item.icon} count={item.count} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Avatar shape="square" size={48} src={profile?.image} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>{profile?.name}</Typography>
            <Typography style={{ fontWeight: 500, opacity: 0.5 }}>
              {profile?.role}
            </Typography>
          </div>
        </div>
        <Button type="text" icon={<LogoutOutlined {...iconSize} />} />
      </div>
    </div>
  );
};

export default Navbar;
