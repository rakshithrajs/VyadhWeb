import React from "react";
import altium from "/Altium.png";
import protocase from "/protocase.png";
import solidworks from "/solidworks.png";
import pcbway from "/pcbway.png";

const sponsors = () => {
    return (
        <div className=" bg-vyadhColor-100 w-full p-[6.25vw] pt-[0.25vw] mt-[2vw] inline-block">
            <h1 className=" text-white text-center text-[10vw] md:text-[2.9vw] mb-[6.3vw] font-Anton">
                SPONSORS
            </h1>
            <div className=" w-full grid grid-cols-2 gap-[7vw] md:grid-cols-4">
                <figure className="size-[40vw] bg-white rounded-[4vw] flex justify-center items-center md:size-[14.9vw] md:rounded-[1vw]">
                    <img src={altium} alt="Altium Logo" />
                </figure>
                <figure className="size-[40vw] bg-white rounded-[4vw] flex justify-center items-center md:size-[14.9vw] md:rounded-[1vw]">
                    <img src={protocase} alt="Protocase Logo" />
                </figure>
                <figure className="size-[40vw] bg-white rounded-[4vw] flex justify-center items-center md:size-[14.9vw] md:rounded-[1vw]">
                    <img src={solidworks} alt="SolidWorks Logo" />
                </figure>
                <figure className="size-[40vw] bg-white rounded-[4vw] flex justify-center items-center md:size-[14.9vw] md:rounded-[1vw]">
                    <img src={pcbway} alt="PCBWsy Logo" />
                </figure>
            </div>
        </div>
    );
};

export default sponsors;
