import React from "react";
import "./NavBody.scss";

function switchKey() {
    let count = 1;
    let N = 0;
    let paper = ["Hello!! Wellcome", "This is SHI-HAO Page. . ."];
    function ByOne() {
        let screen = paper[N].substring(0, count);
        text.innerText = screen;
        count++;
        if (count > paper[N].length) {
            return count = 1, N++;
        }
        setTimeout(ByOne, 200); //速度
    }
    setTimeout(ByOne, 1000); //延遲顯示

    function Bytwo() {
        let screen = paper[N].substring(0, count);
        text1.innerText = screen;
        count++;
        if (count > paper[N].length) {
            return count = 1, N++;
        }
        setTimeout(Bytwo, 200);
    }
    setTimeout(Bytwo, 4500);
}


function NavBody() {
    return (
        <div onClick={switchKey()}>
            <div className="wellcome">
                <ul>
                    <li id="text" ></li>
                    <li id="text1"> </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBody;