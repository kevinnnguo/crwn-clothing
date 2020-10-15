import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/crown.svg"

import "./header.style.scss";

const Header = () => 
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link class="option" to="/shop">SHOP</Link>
            <Link class="option" to="/shop">CONTACT</Link>
        </div>
    </div>;

export default Header;
