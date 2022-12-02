import React from "react";
import "./Nav.scss";

function Nav() {
    return <nav className="nav">
        <h1 className="navhead">士豪經驗歷程</h1>
        <ul className="navmenu_ul">
            <li>
                <a href=""><i class="fa-solid fa-circle-user icon"></i>個人經歷</a>
            </li>
            <li>
                <a href=""><i class="fa-regular fa-handshake icon"></i>工作經歷</a>
            </li>
            <li>
                <a href=""><i class="fa-solid fa-wrench icon"></i>技術能力</a>
            </li>
        </ul>
        </nav>
}

export default Nav;