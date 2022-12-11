import React from "react";
import NewNotification from "./NewNotification";
const NotificationMenu = ({ notifications }) => {
  return (
    <ul className="notification-menu list-group ">
      {notifications.map((notification, index) => (
        <NewNotification notification={notification} key={index} />
      ))}

    </ul>
  );
};

export default NotificationMenu;
