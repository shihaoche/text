import React from "react";
import "./NavMenu.scss";


function switchKey() {
    let count = 1;
    let N = 0;
    let paper = ["高職就讀：私立東海高職", "科系：資訊科",
        "大專就讀：私立萬能技術學院", "科系：電子工程系應用電子組",
        "二技就讀：私立中華技術學院", "科系：電子工程系"];
    function oneByOne() {
        let screen = paper[N].substring(0, count);
        textshool.innerText = screen;
        count++;
        if (count > paper[N].length) {
            return count = 1, N++;
        }
        setTimeout(oneByOne, 200);
    }
    setTimeout(oneByOne, 1000);


    function one() {
        let screen = paper[N].substring(0, count);
        textdepartment.innerText = screen;
        count++;
        if (count > paper[N].length) {
            return count = 1, N++;
        }
        setTimeout(one, 200);
    }
    setTimeout(one, 3500);


    function one1() {
        let screen = paper[N].substring(0, count);
        textshool1.innerText = screen;
        count++;
        if (count > paper[N].length) {
            return count = 1, N++;
        }
        setTimeout(one1, 200);
    }
    setTimeout(one1, 5500);


    function one2() {
        let screen = paper[N].substring(0, count);
        textdepartment1.innerText = screen;
        count++;
        if (count > paper[N].length) {
            return count = 1, N++;
        }
        setTimeout(one2, 200);
    }
    setTimeout(one2, 8500);


    function one3() {
        let screen = paper[N].substring(0, count);
        textshool2.innerText = screen;
        count++;
        if (count > paper[N].length) {
            return count = 1, N++;
        }
        setTimeout(one3, 200);
    }
    setTimeout(one3, 11500);


    function one4() {
        let screen = paper[N].substring(0, count);
        textdepartment2.innerText = screen;
        count++;
        if (count > paper[N].length) {
            return count = 1, N++;
        }
        setTimeout(one4, 200);
    }
    setTimeout(one4, 14500);

}

function NavMenu () {
    return (
        <div className="NavMenuHead" onClick={switchKey()}>
            <div className="Navlist">
                <ul className="Navlist_school">
                    <li id="textshool"></li>
                    <li id="textshool1"></li>
                    <li id="textshool2"></li>
                </ul>
                <ul className="Navlist_department">
                    <li id="textdepartment"></li>
                    <li id="textdepartment1"></li>
                    <li id="textdepartment2"></li>
                </ul>
                <div className="Navline"></div>
                <div className="Navimge" ></div>

            </div >
            <div className="Navlist">
                <div className="Navimge_process"></div>
                <div className="Navline"></div>
                <p className="Navlist_page">
                    學生時期從高職開始接觸電腦相關資訊，主要學電腦硬體方面知識，<br />
                    大專時期電子工程系，上課內容主要是教<span className="Navlist_page-color">Html、C++</span> 以及<span className="Navlist_page-color">VB</span>，<br />
                    出社會工作時，因資訊類經驗不足，故找向維修方向增進工作經驗，<br />
                    上班空閒持續進修學業，以及上補習班學<span className="Navlist_page-color">CCNA</span>與<span className="Navlist_page-color">Linux</span>多方進修學習，<br />
                    近期在台北職訓學院上培訓程式課程，主要教<span className="Navlist_page-color">JAVA</span>與基本前端<span className="Navlist_page-color">Html</span>，<br />
                    課程結束後自覺能力還不足，又至台大資訊訓練中心補上<span className="Navlist_page-color">Javascript</span>與<br />
                    <span className="Navlist_page-color">React.js</span>實務，目前將學會技術寫出個人作品，並持續學習新能力。<br />
                </p>
            </div>
        </div>
    );
};

export default NavMenu;