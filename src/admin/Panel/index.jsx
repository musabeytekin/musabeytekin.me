import React from "react";
import { useEffect, useState } from "react";
import "./panel.css";
import { RxDashboard } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { FcManager } from "react-icons/fc";
import notificationicon from "./notification.png";
import OutsideClickHandler from "react-outside-click-handler";
const Index = () => {
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("active", active);
  const handleClick = (e) => {
    const active = document.querySelector(".admin-menu__item--active");
    console.log("active click", active);
    if (active) {
      active.classList.remove("admin-menu__item--active");
    }
    e.currentTarget.classList.add("admin-menu__item--active");
    setActive(e.currentTarget);
  };

  useEffect(() => {
    const adminMenu = document.querySelector(".admin-menu");
    const content = document.querySelector(".content");
    console.log("useeffect launced", isMenuOpen);
    if (adminMenu.style.display === "none" && !isMenuOpen) {
      adminMenu.style.display = "flex";
      content.style.width = "80vw";
    } else if (adminMenu.style.display === "flex" && isMenuOpen) {
      setTimeout(() => {
        adminMenu.style.display = "none";
        content.style.width = "100vw";
      }, 600);
    }
  }, [isMenuOpen]);
  useEffect(() => {
    document.title = "Admin Dashboard";
  }, []);

  return (
    <main id="admin-dashboard">
      <div className="admin-page">
        {isMenuOpen ? (
          <div
            className="admin-menu w-20"
            onMouseLeave={() => {
              setIsMenuOpen(false);
              console.log("mouse leave");
            }}
            // className={`admin-menu animate__animated ${
            //   isMenuOpen ? "animate__slideInLeft" : "animate__slideOutLeft"
            // }`}
          >
            <nav className="mt-5">
              <Link
                to="/admin/dashboard"
                className="admin-menu__item admin-menu__item--active"
                onClick={handleClick}
              >
                <RxDashboard />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/admin/dashboard"
                className="admin-menu__item"
                onClick={handleClick}
              >
                <RxDashboard />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/admin/dashboard"
                className="admin-menu__item"
                onClick={handleClick}
              >
                <RxDashboard />
                <span>Dashboard</span>
              </Link>
            </nav>
          </div>
        ) : (
          <div
            className="admin-menu menu-unhover"
            onMouseEnter={() => {
              setIsMenuOpen(true);
              console.log("mouse enter");
            }}

            // className={`admin-menu animate__animated ${
            //   isMenuOpen ? "animate__slideInLeft" : "animate__slideOutLeft"
            // }`}
          >
            <nav className="mt-5 ">
              <Link
                to="/admin/dashboard"
                className="admin-menu__item admin-menu__item--active"
                onClick={handleClick}
              >
                <RxDashboard className="" />
              </Link>
              <Link
                to="/admin/dashboard"
                className="admin-menu__item"
                onClick={handleClick}
              >
                <RxDashboard />
              </Link>
              <Link
                to="/admin/dashboard"
                className="admin-menu__item"
                onClick={handleClick}
              >
                <RxDashboard />
              </Link>
            </nav>
          </div>
        )}
        <div
          className={`content`}
          style={isMenuOpen ? { width: "80vw" } : { width: "95vw" }}
        >
          <header className="content-header">
            <nav>
              <img src={notificationicon} alt="" />
              <FcManager className="content-header__menu" />
            </nav>
          </header>
          <div className="content-body">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
