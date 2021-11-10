import React, { ReactNode } from "react";

type TeamCardProps = {
    header: string
}

interface IProps {
    children: ReactNode;
    header: string
};


export default function TeamCard({ children, ...props }: IProps) {
    return (
        <>
            <div className="relative py-3 w-full sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
                <div className="relative px-8 py-10 bg-white shadow-lg rounded-3xl sm:p-8">
                    <div className="divide-y divide-gray-200">
                        <h2 className="text-lg font-bold">Team Name: {props.header}</h2>
                    </div>
                    <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <h3 className="text-md font-semibold">Team Members:</h3>
                        <div className="text-md mt-4 leading-6">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}