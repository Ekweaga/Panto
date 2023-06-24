import React from "react"
import Image from "next/image"


export default function Header(){
    return(
        <>
        <div className="text-white flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mt-[30px]">
                <h1 className="font-bold text-5xl text-center text-white">Make Your Interior More <br/>Minimalistic & Modern</h1>
                <p className=" mt-[25px] w-[400px] text-center">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
            </div>

            <div className="opacity-80 bg-white w-[300px] border-full rounded-full py-2 relative flex items-center justify-center mt-[30px]">
                <div>
                <input type="text" placeholder="search furniture" className="bg-transparent"/>
                <div className="absolute right-3 top-1">
                <Image src="/Frame 48095395.png" width={30} height={30} alt="searchicon"/>
                </div>
                </div>
                
            </div>
        </div>
        </>
    )
}