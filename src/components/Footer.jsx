import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';
import moment from 'moment';
 
const navitems = [
    {path:"/", name:"Home", delay:".1"},
    {path:"/", name:"Explore" , delay:'.2'},
    {path:"/", name:"About" , delay:'.3'},
    {path:"/", name:"Menu" , delay:'.4'},
    {path:"/", name:"Contact" , delay:'.5'},
 ]
const Footer = () => {
    return (
        <div className='bg-footer bg-cover bg-no-repeat  pt-16 relative'>
           {/* overlay div */}
           <div className="w-full h-full z-10 bg-black/[.90] top-0 absolute "></div>
            <div className='z-20 relative container mx-auto text-white'>
               <div className='flex  flex-col justify-center items-center lg:gap-8'>

               {/*  logo */}
               <Link href={'/'} className='relative w-[120px] h-[50px] mx-auto' >
                 <Image src={'/assets/logo.svg'} fill alt='' quality={100} priority className='object-contain'/>
               </Link>
               {/* nav */}
               <nav className='flex mt-5 flex-col lg:flex-row gap-8 lg:gap-12 justify-center mb-4 items-center'>
                {navitems.map((item, indx)=>(
                     <Link
                      className='text-white uppercase tracking-widest hover:text-accent duration-300'
                     key={indx} href={item.path}>{item.name}</Link>
                ))}
               </nav>
               {/* social link */}
               <ul className='flex gap-6 text-2xl mb-5 '>
                  <Link href={'/'} className='w-[54px] duration-300 h-[54px] border border-white/[0.15]  hover:text-accent  rounded-full flex justify-center items-center'> <FaFacebook/> </Link>
                  <Link href={'/'} className='w-[54px] duration-300 h-[54px] border border-white/[0.15] hover:text-accent  rounded-full flex justify-center items-center'> <FaInstagram/> </Link>
                  <Link href={'/'} className='w-[54px] h-[54px] border border-white/[0.15] duration-300 hover:text-accent  rounded-full flex justify-center items-center'> <FaYoutube/> </Link>
                  <Link href={'/'} className='w-[54px] h-[54px] border border-white/[0.15] duration-300 hover:text-accent  rounded-full flex justify-center items-center'> <FaTwitter/> </Link>
               </ul>
               {/* copy right */}
               <div className='font-semibold text-red-400 my-5'>
               © {moment().format('YYYY')}  Zinbo All Rights Reserved.

               </div>
               </div>
            </div>
        </div>
    ); 
};

export default Footer;