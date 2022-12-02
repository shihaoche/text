import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./nav/Nav.js";
import NavMenu from "./navmenu/NavMenu.js";
import "./index.scss";

let paper = "Hello!! Wellcome \n This is SHI-HAO Page. . .";
let count = 1;
function oneByOne() {
    let screen = paper.substring(0, count);
    text.innerText = screen;
    count++;
    if (count > paper.length){
        return ;
    }   
    setTimeout(oneByOne, 150);
}
onload = oneByOne;

function App() {
    return <div>
        <Nav />
        <div>
            <p id="text" className="wellcome"></p>
        </div>
        
    </div>

}
let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);