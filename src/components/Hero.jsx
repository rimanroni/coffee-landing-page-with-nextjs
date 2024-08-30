'use client'

import Badge from "./Badge";
import Separator from "./Separator";

const Hero = () => {
    return (
     
        <section className="     relative text-white ">
          {/* overlay */}
          <div className="bg-hero_overlay w-full h-full absolute z-10 bg-primary/[0.93] p-5"></div>
          {/* video  */}
          <video autoPlay loop muted className="absolute  top-0 left-0 w-full h-full object-cover" ><source src="/Coffee.mp4"  type="video/mp4"/></video>
          <div className="container pt-12 py-8 mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
           {/* text */}
           <div  data-scroll data-scroll-spreed="0.4" className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-5 h-full">
            {/* badge & h1 */}
            <div className="flex flex-col items-center">
            <Badge containerStyle={'hidden lg:flex xl:flex xl:w-[130px] xl:h-[180px]'}/>
            <h1 className="h1 text-white">
               <span className="text-accent">Coffee</span> & Joy
            </h1>

            </div>
            {/* Separator */}
            <Separator/>
            <p className="lead font-light max-w-[300px] md:max-w-[450px] xl:max-w-[560px] mb-4">
            Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and warmth
            </p>
            <button className="btn lg:p-2">Our Menu</button>
           </div>
          </div>
        </section>
    );
};

export default Hero;