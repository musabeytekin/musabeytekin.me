import React from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { toggleMenu } from "../../redux/menuSlice";
import { useDispatch, useSelector } from "react-redux";

import "./hamburgerMenu.css"
const Index = () => {
const isOpen = useSelector((state) => state.menu.isOpen);

  const dispatch = useDispatch();
  return (
      <button className="btn-primary border-none rounded-circle toggle-menu-button"
        type="button"
        onClick={() => dispatch(toggleMenu())}
      >
      {isOpen ? <RxCross2 className="menu-toggle-icon" /> : <RxHamburgerMenu className="menu-toggle-icon" />}
        
      </button>
  );
};

export default Index;
