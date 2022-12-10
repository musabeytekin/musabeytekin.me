import React from "react";
import "./login.css";
import Title from "../../components/Title";

import { useEffect } from "react";
import adminJpg from "./admin.jpg"
import LoginForm from "./LoginForm";
const Index = () => {
  useEffect(() => {
    document.title = "Admin Login";
  }, []);
  
  return (
    <div className="login">
      <div className="login-inner h-100">
        <div className="row h-100">
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center section-bg gap-5">
            <div className="login-form w-75 d-flex flex-column justify-content-center ">
              <div className="mb-3">
                <Title underline={false}>Admin Panel</Title>
              </div>
              <LoginForm />
             
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <img src={adminJpg} alt="" className="admin-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
