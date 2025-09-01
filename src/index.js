import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./nav/Nav.js";
import Navmenu from "./navmenu/NavMenu.js";
import NavBody from "./navbody/NavBody.js";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<NavBody />} />
                <Route path="Navmenu" element={<Navmenu />} />
            </Routes>
        </BrowserRouter>
    );
}
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />)