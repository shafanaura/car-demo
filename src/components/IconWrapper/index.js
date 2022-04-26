import { Badge } from "antd";
import React from "react";
import styles from "./styles.module.css";

const IconWrapper = ({ icon, count }) => {
  return (
    <Badge count={count}>
      <div className={styles.container}>{icon}</div>
    </Badge>
  );
};

export default IconWrapper;
