import React from "react";
import "../assets/Header.css";
import { Outlet, Link } from "react-router-dom";

function Header() {

    return (
        <ul className="header-container">
            <li>
                <Link to={"/"}>Blog Application</Link>
            </li>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
        </ul>
    )
}

export default Header;