import React from "react";
import "./panel.css";
import {  HiOutlineEnvelope} from "react-icons/hi";
// import {} from "react-icons/bs";
import {BiEnvelope} from "react-icons/bi";
import { FaUsers} from "react-icons/fa";
import { BiMessageAltCheck } from "react-icons/bi";
import { AiFillShopping } from "react-icons/ai";
const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-3">
        <div className="content-card card-info">
          <BiEnvelope className="img-card img-card-message" />
          <div className="d-flex flex-column gap-2">
            <span>9,1923</span>
            <span>New Messages</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="content-card card-info">
          <FaUsers className="img-card img-card-users" />
          <div className="d-flex flex-column gap-2">
            <span>120</span>
            <span>Visitors</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="content-card card-info">
          <BiMessageAltCheck className="img-card img-card-total-messages" />
          <div className="d-flex flex-column gap-2">
            <span>92.758</span>
            <span>Total Messages</span>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="content-card card-info">
          <AiFillShopping className="img-card img-card-orders" />
          <div className="d-flex flex-column gap-2">
            <span>50</span>
            <span>Orders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
