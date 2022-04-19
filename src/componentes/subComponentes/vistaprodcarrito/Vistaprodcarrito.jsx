import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Vistaprodcarrito.scss";

import VPC from "./VPC/VPC";

export default function Vistaprodcarrito({ setListOrders, listOrders }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://country-app-v3.herokuapp.com/orders/${localStorage.getItem("id")}`)
      .then(({ data }) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const ids = data.map((item) => item.id);
    setListOrders([...ids]);
  }, []);

  useEffect(() => {
    if (listOrders.length === 0) {
      setData([]);
    }
  }, [listOrders]);

  return (
    <div className="flex0">
      {/* Estos VPC luego pueden ser mapeados con la data de la API */}
      {data.map((item) => (
        <VPC key={item.id} {...item} />
      ))}
    </div>
  );
}
