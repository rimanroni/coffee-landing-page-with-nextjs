"use client"
import About from '@/components/About';
import Exploer from '@/components/Exploer';
 
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import OpeningHours from '@/components/OpeningHours';
import Testimonials from '@/components/Testimonials';
import { useEffect } from 'react';
 

const Home = () => {
  //  add locomative scroll 
  useEffect(()=>{
  const loadLocomativeScroll = async () =>{
    const locomativeScroll = (await (import('locomotive-scroll'))).default;
     new locomativeScroll()
      };


      loadLocomativeScroll();
  },[])
  return (
    <div className='h-full overflow-x-hidden '>
      <Hero/>
      <Exploer/>
      <About/>
      <Menu/>
      <OpeningHours/>
      <Testimonials/>
     
    
    </div>
  );
};

export default Home;