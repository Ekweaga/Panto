import Image from 'next/image'

import styles from './page.module.css'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"



export default function Home() {
  return (
   

    <>
  <div className="relative">

    <div style={{zIndex:333}} className="absolute right-0 left-0 top-0">
      <Navbar/>
    </div>

    <div style={{zIndex:333}} className="flex items-center justify-center absolute right-0 left-0 top-[150px]">
      <Header/>
    </div>
    <div className="absolute right-0 left-0 top-0">

      <img src="/Rectangle 1441.png" className="w-full h-[600px]" alt="icon"/>

    </div>

  </div><br/><br/>

  <div className='h-[300px] mt-[600px] p-3 w-[90%] mx-auto'>
  <div className="flex gap-[50px]">
    <div>
      <h1 className="font-bold text-2xl">Why <br/>Choosing Us</h1>
    </div>


    <div className="reasonContent flex gap-[50px]">
      <div>
        <h1 className="font-bold">Luxury Facilities</h1>
        <p className="w-[300px]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <div><span className="text-[#E58411]">More info</span></div>
      </div>
      <div>
        <h1 className="font-bold">Luxury Facilities</h1>
        <p className="w-[300px]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <div><span className="text-[#E58411]">More info</span></div>
      </div>
      <div>
        <h1 className="font-bold">Luxury Facilities</h1>
        <p className="w-[300px]">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        <div><span className="text-[#E58411]">More info</span></div>
      </div>

    </div>


  </div>
  </div>


<div className="flex gap-[150px]">
  <div className=''>
     
      <div style={{zIndex:333,marginTop:''}} className="" >
  <img src="/Rectangle 1446.png" className=" w-[400px] h-[300px] " alt="icon" style={{zIndex:333}}/>
      </div>
   
  </div>

  <div>
    <h2 className="text-[#E58411] font-bold mb-[20px]">EXPERIENCE</h2>
    <h1 className="font-bold text-3xl mb-[25px]">We Provide You<br/> The Best Experience</h1>
    <p className="w-[500px] text-sm mb-[20px]">You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and
     lucurious style and with premium quality materials.</p>
        <div><span className="text-[#E58411]">More info</span></div>
  </div>
</div>


<div className='mt-[60px] flex justify-between'>
  <div className='ml-[100px] mt-[100px]'>
     <h2 className="text-[#E58411] font-bold mb-[20px]">MATERIALS</h2>
    <h1 className="font-bold text-3xl mb-[25px]">Very Serious<br/>Materials For Making<br/>Furniture</h1>
    <p className="w-[500px] text-sm mb-[20px]">Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price.</p>
        <div><span className="text-[#E58411]">More info</span></div>
  </div>

  <div className="flex items-center">
    <div> <img src="/Group 48095419.png" className=" w-[300px] h-[300px] " alt="icon" style={{zIndex:333}}/>
    <img src="/Group 48095417.png" className=" w-[300px] h-[300px] " alt="icon" style={{zIndex:333}}/></div>
    <div> <img src="/Rectangle 1446 (1).png" className=" w-[300px] h-[300px] " alt="icon" style={{zIndex:333}}/></div>

  </div>
</div>


<div className="mt-[130px]">
  <div><h1 className="text-center text-[#E58411]">TESTIMONIALS</h1>
  <h2 className="font-bold text-2xl text-center">Our Client Reviews</h2></div>

  <div className='flex items-center justify-center gap-3 mt-[90px]'>
    <div>
      <Image src="/slide1.png" width={300} height={200} alt="alt"/>
    </div>

    <div>
      <Image src="/slide2.png" width={300} height={200} alt="alt"/>
    </div>

    <div>
      <Image src="/slide3.png" width={300} height={200} alt="alt"/>
    </div>
  </div>
</div>

<div className="h-[300px] bg-[#F7F7F7] text-black mt-[300px] flex items-center justify-center">
  <div className='flex gap-[150px]'>
    <div>
    <h1 className="font-bold text-black">Panto</h1>
            <p className='w-[300px] text-sm mt-[20px]'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
    </div>

    <div>
      <h2 className='text-[#F6C79B] font-bold'>Services</h2>
      <ul className="text-sm flex flex-col gap-2 mt-[20px]">
        <li>Email marketing</li>
        <li>Ads campaigns</li>
        <li>Branding</li>
      </ul>
    </div>

    <div>
      <h2 className='text-[#F6C79B] font-bold'>Services</h2>
      <ul className="text-sm flex flex-col gap-2 mt-[20px]">
        <li>Email marketing</li>
        <li>Ads campaigns</li>
        <li>Branding</li>
      </ul>
    </div>
    <div>
      <h2 className='text-[#F6C79B] font-bold'>Services</h2>
      <ul className="text-sm flex flex-col gap-2 mt-[20px]">
        <li>Email marketing</li>
        <li>Ads campaigns</li>
        <li>Branding</li>
      </ul>
    </div>
  </div>
           

        </div>
    </>
  )
}
