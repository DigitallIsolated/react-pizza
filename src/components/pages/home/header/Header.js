import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderCart from "./HeaderCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo />
        <Link to={"/cart"}>
          <HeaderCart />
        </Link>
      </div>
    </div>
  );
};

export default Header;