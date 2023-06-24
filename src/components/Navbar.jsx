import React from "react"
import Image from "next/image"


export default function Navbar(){
    return(
        <>
        
        <nav style = {{zIndex:333}} className="text-white flex items-center justify-around py-3">
            <div>
                <h1 className=" font-bold text-2xl text-white">Panto</h1>
            </div>
            <div>
                <ul  className="text-white flex items-center justify-around gap-[20px]">
                    <li>Furniture</li>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
<Image src="/Bag.png" width={30} height={30} alt="icon"/>
            </div>
        </nav>
        
        </>
    )
}