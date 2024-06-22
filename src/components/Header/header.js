import React from "react";

export default function Header() {
    return (
        <>
            <div className="absolute left-0 -top-16 z-40">
                <img src="/guy.svg" alt="edgePlus" className="w-1/2" />
            </div>
            <div className="flex justify-end relative z-20">
                <button className=" text-gray-900 bg-gold-premium-new font-semibold py-2 px-4 rounded-bl-3xl rounded-tr-3xl hover:bg-yellow-600 transition duration-300">
                    Ideal for Traders
                </button>
            </div>

            <div className="flex m-8 pr-8 justify-end items-start text-white relative z-20">
                <div className="text-yellow-500 text-6xl font-bold mb-4">
                    <img src='edgePlus.svg' alt='edgePlus' />
                </div>
            </div>
        </>
    );
}