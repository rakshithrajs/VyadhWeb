import React from "react";
import VIT from "/VITLogo.png";

const footer = () => {
    return (
        <>
            <hr className=" w-[75%] m-auto" />
            <footer className=" bg-vyadhColor-100 text-center text-white grid gap-[5vw] md:grid-cols-custom md:auto-cols-min md:text-[1.5vw] md:text-left px-[8vw] pb-[10vw] pt-[2vw]">
                <div>
                    <address className=" font-Jost not-italic mx-[1vw]">
                        VIT, Vellore Campus, <br />
                        Tiruvalam Rd, <br />
                        Katpadi, Vellore, <br />
                        Tamil Nadu 632014
                    </address>
                    <p>
                        <img
                            src={VIT}
                            alt="VIT Logo"
                            className=" aspect-auto md:h-[9vw]"
                        />
                    </p>
                </div>
                <div className=" font-DM flex flex-col justify-center md:justify-start md:text-[1vw]">
                    <h6 className="mb-4 uppercase">WEBSITE</h6>
                    <p className="mb-4 text-gray-400">
                        <a href="#!">About Us</a>
                    </p>
                    <p className="mb-4 text-gray-400">
                        <a href="#!">Achievements</a>
                    </p>
                    <p className="mb-4 text-gray-400">
                        <a href="#!">Competitions</a>
                    </p>
                    <p className="mb-4 text-gray-400">
                        <a href="#!">Sponsors</a>
                    </p>
                    <p className="mb-4 text-gray-400">
                        <a href="#!">Board</a>
                    </p>
                    <p className="text-gray-400">
                        <a href="#!">Contact Us</a>
                    </p>
                </div>
                <div className="font-DM flex flex-col justify-center md:justify-start md:text-[1vw]">
                    <h6 className="mb-4 uppercase mx-[3vw]">CONTACT US</h6>
                    <p className="mb-4 flex items-center justify-center gap-2 md:justify-start">
                        <svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-[4vw] md:size-[1vw]"
                        >
                            <path
                                d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M21 3L11 10L1 3"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <a
                            href="mailto:teamvyadh@vit.ac.in"
                            className=" align-top"
                        >
                            teamvyadh@vit.ac.in
                        </a>
                    </p>
                    <p className="mb-4 space-x-2 flex items-center justify-center md:justify-start">
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-[4vw] md:size-[1vw]"
                        >
                            <path
                                d="M4.09395 8.7852L3.83722 9.04192L4.00187 9.3655C5.67025 12.6443 8.35702 15.3189 11.6333 16.9975L11.9573 17.1635L12.2148 16.9061L14.6898 14.4311C14.859 14.2619 15.109 14.2076 15.3216 14.2805L15.3216 14.2805L15.3269 14.2823C16.6374 14.7152 18.0516 14.9488 19.5 14.9488C19.8426 14.9488 20.125 15.2311 20.125 15.5738V19.5C20.125 19.8426 19.8426 20.125 19.5 20.125C9.21239 20.125 0.875 11.7876 0.875 1.5C0.875 1.15739 1.15739 0.875 1.5 0.875H5.4375C5.78011 0.875 6.0625 1.15739 6.0625 1.5C6.0625 2.95841 6.29566 4.35999 6.72768 5.66913C6.79668 5.89225 6.74568 6.13346 6.56895 6.3102L4.09395 8.7852Z"
                                fill="white"
                                stroke="white"
                            />
                        </svg>
                        <div className="flex md:flex-col">
                            <p className=" space-x-2">
                                <p className=" inline">Captain:</p>
                                <a href="tel:#">+91sssssssss</a>
                            </p>
                            <p className=" space-x-2">
                                <p className="inline align-top">
                                    Vice Captain:
                                </p>
                                <a href="tel:#" className="align-top">
                                    +91sssssssss
                                </a>
                            </p>
                        </div>
                    </p>
                    <h6 className="mb-4 uppercase mx-[2vw] md:justify-start">
                        SOCIALS
                    </h6>
                    <div className="flex space-x-3 justify-center items-center mx-[2vw] md:justify-start">
                        <a href="#!">
                            <svg
                                width="27"
                                height="27"
                                viewBox="0 0 27 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-[4vw] md:size-[1.5vw]"
                            >
                                <path
                                    d="M20.495 8.18763C21.3897 8.18763 22.115 7.46233 22.115 6.56763C22.115 5.67293 21.3897 4.94763 20.495 4.94763C19.6003 4.94763 18.875 5.67293 18.875 6.56763C18.875 7.46233 19.6003 8.18763 20.495 8.18763Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.75 13.5C6.75 17.2226 9.77738 20.25 13.5 20.25C17.2226 20.25 20.25 17.2226 20.25 13.5C20.25 9.77738 17.2226 6.75 13.5 6.75C9.77738 6.75 6.75 9.77738 6.75 13.5ZM10.125 13.5C10.125 11.6387 11.6387 10.125 13.5 10.125C15.3613 10.125 16.875 11.6387 16.875 13.5C16.875 15.3613 15.3613 16.875 13.5 16.875C11.6387 16.875 10.125 15.3613 10.125 13.5Z"
                                    fill="white"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.75 27H20.25C23.7195 27 27 23.7195 27 20.25V6.75C27 3.2805 23.7195 0 20.25 0H6.75C3.2805 0 0 3.2805 0 6.75V20.25C0 23.7195 3.2805 27 6.75 27ZM3.375 6.75C3.375 5.17219 5.17219 3.375 6.75 3.375H20.25C21.8278 3.375 23.625 5.17219 23.625 6.75V20.25C23.625 21.8278 21.8278 23.625 20.25 23.625H6.75C5.14181 23.625 3.375 21.8582 3.375 20.25V6.75Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                        <a href="#!" className="">
                            <svg
                                width="21"
                                height="19"
                                viewBox="0 0 21 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-[4vw] md:size-[1.5vw]"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2.75861 4.74268H2.73004C1.3013 4.74268 0.375 3.80793 0.375 2.62307C0.375 1.41516 1.32868 0.5 2.786 0.5C4.24212 0.5 5.13746 1.41285 5.16604 2.61961C5.16604 3.80448 4.24212 4.74268 2.75861 4.74268ZM20.6252 18.5001H16.1497V12.1723C16.1497 10.5161 15.4496 9.38537 13.9101 9.38537C12.7326 9.38537 12.0778 10.1484 11.773 10.8837C11.6723 11.1161 11.6741 11.4289 11.676 11.7514C11.6763 11.7951 11.6765 11.8391 11.6765 11.883V18.5001H7.24268C7.24268 18.5001 7.29983 7.29112 7.24268 6.27223H11.6765V8.19129C11.9385 7.3522 13.3553 6.15466 15.6163 6.15466C18.4214 6.15466 20.6252 7.91352 20.6252 11.7009V18.5001ZM4.83263 6.27222H0.885742V18.5H4.83263V6.27222Z"
                                    fill="white"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <a href="#root">
                        <svg
                            width="52"
                            height="52"
                            viewBox="0 0 52 52"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" size-[3vw] "
                        >
                            <circle
                                cx="26"
                                cy="26"
                                r="25.5"
                                transform="rotate(90 26 26)"
                                fill="#03002A"
                                stroke="white"
                            />
                            <path
                                d="M26 19L26 35"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M32 25L26.4096 18.1978C26.3584 18.1356 26.2955 18.0858 26.225 18.0517C26.1544 18.0176 26.0779 18 26.0005 18C25.9232 18 25.8467 18.0176 25.7761 18.0517C25.7056 18.0858 25.6426 18.1356 25.5915 18.1978L20 25"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </footer>
        </>
    );
};

export default footer;
