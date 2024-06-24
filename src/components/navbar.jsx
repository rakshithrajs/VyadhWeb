import React, { useState } from "react";
import Vyadh_Logo from "/image.png";
import menu from "/menu.svg";

const mobile = () => {
    return (
        // for small screens
        <div>
            <img
                src={Vyadh_Logo}
                alt="Vyadh Logo"
                loading="lazy"
                className=" h-[15.04vw] w-[23vw] float-start mt-[2vw] ml-[2vw] md:h-[7.75vw] md:w-[11.85vw]"
            />
            <div className=" md:hidden float-end hs-dropdown inline-flex relative">
                <button id="trigger" type="button" className=" hs-dropdown-toggle flex items-center justify-center float-end bg-vyadhColor-100 rounded-full cursor-pointer size-[10vw] p-[2vw] m-[5vw]">
                    <img src={menu} alt="" className=" size-[8vw]" />
                </button>
                <ul className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden absolute text-[5vw] bg-vyadhColor-100 text-white rounded-md w-fit p-[2vw]" aria-labelledby="trigger">
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Achievements</a>
                    </li>
                    <li>
                        <a href="#">Competitions</a>
                    </li>
                    <li>
                        <a href="#">Sponsors</a>
                    </li>
                    <li>
                        <a href="#">Board</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            {/* for medium and large screens */}
            <nav className="hidden md:block mt-[3.65vw] mr-[2.34vw] w-[75%] rounded-2xl px-[2.34vw] py-[1vw]  bg-vyadhColor-100 text-white float-right drop-shadow-xl">
                <ul className="md:flex justify-around text-[1.5vw]">
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Achievements</a>
                    </li>
                    <li>
                        <a href="#">Competitions</a>
                    </li>
                    <li>
                        <a href="#">Sponsors</a>
                    </li>
                    <li>
                        <a href="#">Board</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default mobile;
