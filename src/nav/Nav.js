import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";




function Nav () {
    return (
        <nav className="nav">
            <h1 className="navhead">士豪經驗歷程</h1>
            <ul className="navmenu_ul">
                 <li>
                    <NavLink 
                    to="/" className="fa-solid fa-circle-user icon">回首頁</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/NavMenu" className="fa-solid fa-circle-user icon">學習過程</NavLink>
                </li>
                <li>
                    <NavLink to="" className="fa-regular fa-handshake icon">工作經歷</NavLink>
                </li>
                <li>
                    <NavLink to="" className="fa-solid fa-wrench icon">技術能力</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;