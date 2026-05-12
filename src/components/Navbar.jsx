import { useState } from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import bag from '../assets/bag.png'
import {ChevronDown} from 'lucide-react';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
        <nav className="flex items-center justify-between flex-wrap">
          <div className="w-[22px] h-[4px] mt-[3px] flex ">
            <img src={logo} 
            alt="Logo" 
            className="w-8 h-9 object-cover rounded-lg shadow-md" />
            <h1 className="text-white text-[22px] sm:text-[28px] font-bold ml-2 cursor-pointer">
            FloraVision.
          </h1>
          </div>

          
          <div className="hidden lg:block mt-10 ml-30">
            <ul className="flex gap-10 ">
            <li className="text-white text-[24px] font-['Indie_Flower'] cursor-pointer">Home</li>
            <li className=" text-white text-[24px] font-['Indie_Flower'] cursor-pointer">
              <div className="flex items-center">Plants Type <span className="ml-2 mt-1"><ChevronDown className="fill-current" size={24}/></span></div>
            </li>
            <li className="text-white text-[24px] font-['Indie_Flower'] cursor-pointer">More</li>
            <li className="text-white text-[24px] font-['Indie_Flower'] cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="flex gap-6 text-white text-2xl mt-8">
            <span><img src={search} 
            alt="Search" 
            className="w-6 h-6 object-cover rounded-lg shadow-md cursor-pointer" /></span>
            <span><img src={bag} 
            alt="Bag" 
            className="w-6 h-6 object-cover rounded-lg shadow-md cursor-pointer" /></span>

            
            <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <div className="flex flex-col gap-1 w-6 mt-1">
                <div className="h-1 bg-white w-full"></div>
                <div className="h-1 bg-white w-1/2 ml-auto mt-1"></div>
              </div>
            </span>
          </div>
        </nav>

        
        {isOpen && (
          <div className="lg:hidden w-full mt-4 bg-gray-500/20 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4">
            <ul className="flex flex-col gap-4">
              <li className="text-white text-[22px] font-['Indie_Flower'] cursor-pointer" onClick={() => setIsOpen(false)}>Home</li>
              <li className=" text-white text-[22px] font-['Indie_Flower'] cursor-pointer" onClick={() => setIsOpen(false)}>
                <div className="flex items-center">Plants Type <span className="ml-2 mt-1"><ChevronDown className="fill-current" size={24}/></span></div> </li>
              <li className="text-white text-[22px] font-['Indie_Flower'] cursor-pointer" onClick={() => setIsOpen(false)}>More</li>
              <li className="text-white text-[22px] font-['Indie_Flower'] cursor-pointer" onClick={() => setIsOpen(false)}>Contact</li>
            </ul>
          </div>
        )}
        
        </>
    )
}
export default Navbar