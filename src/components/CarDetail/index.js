import { Space } from "antd";
import React from "react";
import styles from "./styles.module.css";

const car = {
  license: "250453i45",
  brand: "Mercedez Benz",
  model: "Mercedez Benz Sakpole 3443 - AT/MT",
  year: "2018",
  status: false,
  insured: true,
  apk: "2021-09-20",
};

const detail = [
  {
    title: "Brand",
    value: car.brand,
  },
  {
    title: "Model",
    value: car.model,
  },
  {
    title: "Year",
    value: car.year,
  },
  {
    title: "Status",
    value: car.status ? "In" : "Out",
  },
  {
    title: "Insured",
    value: car.insured ? "Yes" : "No",
  },
  {
    title: "APK",
    value: car.apk,
  },
];

const CarDetail = () => {
  return (
    <div className={styles.container}>
      <Space size="large" direction="vertical">
        <img
          src="https://truckmagz.com/wp-content/uploads/2016/03/ultra1518-img1.jpg"
          style={{ height: 200 }}
          alt="img"
        />
        <table>
          <tr>
            <td className={styles["title-menu"]}>Car license :</td>
            <td style={{ fontWeight: 500 }}>{car.license}</td>
          </tr>
        </table>
      </Space>
      <table>
        {detail.map((item) => (
          <tr>
            <td className={styles["title-menu"]}>{item.title}</td>
            <td>: {item.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CarDetail;
