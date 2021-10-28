import React from "react";

type Props = {
    absolute: boolean
}

export default function Footer(props: Props) {
    return (
        <>
            <footer
                className={
                (props.absolute
                    ? "absolute w-full bottom-0"
                    : "relative") + " bg-blueGray-200 pt-8 pb-6"
                }
            >
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{ transform: "translateZ(0)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold py-4">Share your experience!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Tweet, blog, chat away in Teams, however you want to... share the experience! 
                            </h5>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Let&apos;s get excited about Jamstack!
                            </h5>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-6/12 px-4 ml-auto">
                                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://reactjs.org/tutorial/tutorial.html"
                                            >
                                                Intro to React
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://nextjs.org/docs/getting-started"
                                            >
                                                Next.JS Getting Started
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://nextjs.org/docs/basic-features/typescript"
                                            >
                                                Next.JS with TypeScript
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://react-hooks-cheatsheet.com/"
                                            >
                                                React Hooks Cheatsheet
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://react-typescript-cheatsheet.netlify.app/"
                                            >
                                                React TypeScript Cheatsheet
                                            </a>
                                        </li>    
                                        <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer"
                                            >
                                                Theme MIT License
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-8/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © {new Date().getFullYear()} by{" "}
                                <a
                                    href="https://www.perficient.com"
                                    className="text-blueGray-500 hover:text-blueGray-800"
                                >
                                    Perficient
                                </a>
                                .
                            </div>
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Theme Copyright © {new Date().getFullYear()} Notus NextJS by{" "}
                                <a
                                    href="https://www.creative-tim.com?ref=nnjs-footer"
                                    className="text-blueGray-500 hover:text-blueGray-800"
                                >
                                    Creative Tim
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
