import React from "react";
import "./login.css";
import Title from "../../components/Title";
import { MdSupervisorAccount } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { useEffect } from "react";
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

              <form>
                <div className="form-group">
                  <label htmlFor="textEmail">Email</label>
                  <div className="d-flex align-items-center justify-content-center">
                    <MdSupervisorAccount className="login-icon" />
                    <input
                      type="email"
                      className="form-control"
                      id="textEmail"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="textPassword">Password</label>
                  <div className="d-flex align-items-center justify-content-center">
                    <BsShieldLockFill className="login-icon login-icon-lock" />
                    <input
                      type="password"
                      className="form-control"
                      id="textPassword"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  <BsShieldLockFill className="btn-login-icon"/>
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <img src="./admin.jpg" alt="" className="admin-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
