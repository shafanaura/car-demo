import { EditOutlined } from "@ant-design/icons";
import { Button, Card, Image, Space, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { DataService } from "service/DataService";
import styles from "./styles.module.css";

const api = new DataService();

const CarDetail = () => {
  const [car, setCar] = useState(null);

  const detail = [
    {
      title: "Brand",
      value: car?.brand,
    },
    {
      title: "Model",
      value: car?.model,
    },
    {
      title: "Year",
      value: car?.year,
    },
    {
      title: "Status",
      value: car?.status ? "In" : "Out",
    },
    {
      title: "Insured",
      value: car?.insured ? "Yes" : "No",
    },
    {
      title: "APK",
      value: "expired " + car?.apk,
    },
  ];

  useEffect(() => {
    api.getCarDetail().then((res) => setCar(res));
  }, []);

  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Space size="large" align="start" style={{ display: "flex" }}>
          <Space size="large" direction="vertical">
            <Image height={200} src={car?.image} />
            <table>
              <tr>
                <td className={styles["title-menu"]}>Car license :</td>
                <td style={{ fontWeight: 500 }}>{car?.license}</td>
              </tr>
            </table>
          </Space>
          <table className={styles.table}>
            {detail.map((item) => (
              <tr>
                <td className={styles["title-menu"]}>{item.title}</td>
                <td>
                  :{" "}
                  {item.title === "Status" ? (
                    <Tag color={item.value === "In" ? "success" : "error"}>
                      {item.value}
                    </Tag>
                  ) : (
                    item.value
                  )}
                </td>
              </tr>
            ))}
          </table>
        </Space>
        <Button icon={<EditOutlined />} type="text" size="large" />
      </div>
    </Card>
  );
};

export default CarDetail;
