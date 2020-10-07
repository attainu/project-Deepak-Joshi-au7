import React from "react";
import "./Header.css";
import logo from "../../images/logo/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
export default function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="amazon logo" />
      </Link>
      <div className="header_search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__options">
            <span className="header__option1 ">Hello Guest</span>
            <span className="header__option2">Sign In</span>
          </div>
        </Link>
        <div className="header__options">
          <span className="header__option1">Returns</span>
          <span className="header__option2">& Orders</span>
        </div>
        <div className="header__options">
          <span className="header__option1">Your</span>
          <span className="header__option2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
