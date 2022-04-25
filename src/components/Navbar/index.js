import { Input } from "antd";
import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <b className={styles["title-header"]}>Car Information</b>
      <Input placeholder="Search" size="large" />
    </div>
  );
};

export default Navbar;
