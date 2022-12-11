import React from "react";
import NewMessageIcon from './NewMessageIcon';

const handleClick = (e) => {
  // e.preventDefault();
  console.log("clicked");
};

const NewNotification = ({ notification }) => {
  return (
    <li
      className="notification-menu-item list-group-item "
      onClick={handleClick}
    >
     <NewMessageIcon/>
      <div className="notification-menu-item__content">
        <div className="notification-menu-item__content__title">
          {notification.title}
        </div>
        <div className="notification-menu-item__content__content">
          {notification.content}
        </div>
      </div>
    </li>
  );
};

export default NewNotification;
