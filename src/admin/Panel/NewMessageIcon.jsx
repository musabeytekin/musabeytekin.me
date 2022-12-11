import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";
const NewMessageIcon = () => {
  return (
    <div className="notification-menu-item__icon">
        <BsEnvelopeFill />
      <div className="badge badge-warning">New</div>
    </div>
  );
};

export default NewMessageIcon;
