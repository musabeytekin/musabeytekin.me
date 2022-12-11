import React from "react";
import { useEffect, useState } from "react";
import "./panel.css";
import { RxDashboard } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import { FcManager } from "react-icons/fc";
import notificationicon from "./notification.png";
import NotificationMenu from "./NotificationMenu";
import { BiLogOut } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Index = () => {
  const testNotifications = [
    {
      type: "new message",
      title: "New Message!!!",
      content: "This is the content of notification 1".substring(0, 20) + "..."
    },
    {
      title: "New Message!!!",
      content: "This is the content of notification 2".substring(0, 20) + "..."
    },
    {
      title: "New Message!!!",
      content: "This is the content of notification 3".substring(0, 20) + "..."
    }
  ];

  const [active, setActive] = useState(null);
  const [isNotificationMenuOpen, setIsNotificationMenuOpen] = useState(false);
  const [isAdminHeaderMenuOpen, setIsAdminHeaderMenuOpen] = useState(false);
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
    document.title = "Admin Dashboard";
    console.log(document);
    const html = document.querySelector("html");
    console.log((html.style.background = "#e5e5e5"));
    document.body.style.background = "transparent";
  }, []);

  return (
    <main id="admin-dashboard">
      <div className="admin-menu">
        <nav>
          <Link
            to="/admin/panel/"
            className="admin-menu__item admin-menu__item--active"
            onClick={handleClick}
          >
            <RxDashboard className="nav-icon" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/panel/"
            className="admin-menu__item"
            onClick={handleClick}
          >
            <RxDashboard className="nav-icon" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/panel/"
            className="admin-menu__item"
            onClick={handleClick}
          >
            <RxDashboard className="nav-icon" />
            <span>Dashboard</span>
          </Link>
        </nav>
      </div>

      <div className="content">
        <header className="content-header content-card">
          <h2 className=""> Welcome to Admin Panel...</h2>
          <div className="admin-nav">
            <OutsideClickHandler
              onOutsideClick={() => {
                setIsAdminHeaderMenuOpen(false);
                setIsNotificationMenuOpen(false);
              }}
            >
              <nav>
                <FcManager
                  className="admin-nav-item"
                  onClick={() =>
                    setIsAdminHeaderMenuOpen((prev) => {
                      setIsNotificationMenuOpen(false);
                      return !prev;
                    })
                  }
                />
                {isAdminHeaderMenuOpen && (
                  <ul className="list-group admin-manage-modal">
                    <li className="list-group-item">
                      <BiLogOut />
                      Logout
                    </li>
                  </ul>
                )}
                <img
                  src={notificationicon}
                  alt=""
                  className="admin-nav-item"
                  onClick={() =>
                    setIsNotificationMenuOpen((prev) => {
                      setIsAdminHeaderMenuOpen(false);
                      return !prev;
                    })
                  }
                />
                {isNotificationMenuOpen && (
                  <NotificationMenu notifications={testNotifications} />
                )}
              </nav>
            </OutsideClickHandler>
          </div>
        </header>
        <div className="content-body mt-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Index;
