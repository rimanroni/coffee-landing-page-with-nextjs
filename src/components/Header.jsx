"use client"

import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";
const Header = () => {
     const [navActive, setNavActive] = useState(false);
     const handleNav = () =>{
        setNavActive(!navActive)
     }
  
   
    return (
        <header className=" bg-primary/[0.93] bg-hero_overlay p-4 z-[60]  ">
           <div className="  mx-4">
             <div className=" flex  justify-between  items-center">
                {/*  logo  */}
                 <Link href={'/'}>
                 <img src="/assets/logo.svg" className="object-contain" alt="" />
                 </Link>
                
                {/*  nav items  */}
                <div className={` hidden  lg:block`}>
                <Nav/>
                </div>

                 {/* nav tigger btn  */}
                 <div className="block lg:hidden">
                <button 
                 className="text-4xl text-accent"
                 onClick={handleNav}>{navActive?
                 <motion.p 
                   initial={{y:-10, opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{duration:.5, delay:.6}}
                 ><IoClose className="hover:text-red-600" /></motion.p>: 
                 <p><FaBars/></p>}
                 </button>
                </div>
             </div>
             {/* responsive nav */}
             {navActive&&<div className="mt-5 lg:hidden">
                 <Nav signal={true}/>
                </div>}
           </div>
            {/*  nav  */}
         
        </header>
    );
};

export default Header;