import React from "react";
import "./stylesheets/Header.css";
import logo from "../images/logo/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="amazon logo" />
      <div className="header_search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__options">
          <span className="header__option1 ">Hello Guest</span>
          <span className="header__option2">Sign In</span>
        </div>
        <div className="header__options">
          <span className="header__option1">Returns</span>
          <span className="header__option2">& Orders</span>
        </div>
        <div className="header__options">
          <span className="header__option1">Your</span>
          <span className="header__option2">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
