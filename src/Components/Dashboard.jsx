import React from "react";
import Cards from "./Cards";
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="cards">
        <Cards title="Total Products" count={6} button_name="Product Details" path="/products"/>
        <Cards title="Total Orders" count={5} button_name="Order Details" path="/orders"/>
      </div>
    </div>
  );
};

export default Dashboard;
