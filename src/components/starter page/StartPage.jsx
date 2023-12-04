import React from "react";
import img from "../../assets/product1.png";
import {BsArrowRight} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";


function StartPage() {
    const navigate=useNavigate();
    const buttonClick=()=>{
        navigate('/home');
    }

  return (
    <div className=" min-h-screen flex  flex-col justify-center lg:flex-row items-center lg:px-32 px-5  bg-amber-200">
       <div className=" flex flex-col items-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
           <h1 className=" text-5xl font-semibold leading-tight mt-24">
               Wel Come !.. to shop world
              <br /> To make life 
              <span className=" text-orange-500 font-bold text-5xl">  Beautiful </span>
           </h1>
           <p className=" text-[20px] rounded-md max-w-2xl ">
              Shop Every thing from this site.  <br />every thing is available here what ever you want
              just belive us one time your life will be simple and trandy..!
               <span className=" text-[22px] text-pink-500 font-bold"> SHOP NOW!..</span>
           </p>
             <button className=" flex flex-row justify-center items-center gap-4 bg-blue-300 hover:bg-orange-400 rounded-md
                                transition-all px-4 py-2  cursor-pointer
                                " onClick={buttonClick}>Get Started
                <BsArrowRight/>
             </button>
             
       </div>


      <div className=" mt-20">
        <img  width={570} src={img} alt="image" />
      </div>
    </div>
  );
}

export default StartPage;
