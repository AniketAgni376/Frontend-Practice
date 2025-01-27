import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
       
       <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
         return  <div className="masker">
         <h1 className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-['founders-grotesk'] text-8xl text-white font-medium">
            {item}
         </h1>
       </div>  
        })}
        
       </div>
       
       <div className="border-t-[1px] border-zinc-800 mt-[90px] flex justify-between items-center py-5 px-20">
             {[
              "For public and private companies",
              "From the first pitch to IPO",
             ].map((item, index) =>(
                <p className="text-md font-light tracking-tight leading-none">
                  {item}</p>
             ))}
       
       
       <div className="start flex items-center gap-5">
        <div className='px-5 py-2 mt-1 border-[2px] border-zinc-500 rounded-full font-light text-sm capitalize'>start the project<div/>
        <div className="w-3 h-3 rounded-full border-[2px] border-zinc-500">
          <FaArrowUpLong />
        </div>
       </div>
      </div>

       </div>
    </div>
  );
}

export default LandingPage