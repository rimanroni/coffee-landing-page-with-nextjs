"use client"
import gsap from "gsap";
import  ScrollTrigger  from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import Badge from "./Badge";
import Separator from "./Separator";

 
const data = [
      {
        imgSrc:"/assets/about/photo-1.jpg",
        title:"Our Journey",
        description:"Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time"
      },
      {
        imgSrc:"/assets/about/photo-2.jpg",
        title:"Our Promise",
        description:"At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community."
      },
      {
        imgSrc:"/assets/about/photo-3.jpg",
        title:"Our Team",
        description:"At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories."
      },

]
const About = () => {
  const scrollSectionRef = useRef(null)
  const scrollTriggerRef = useRef(null)
 
 
    return (
        <section className="  overflow-hidden  bg-primary  ">
        <div ref={scrollTriggerRef}> 
            <div ref={scrollSectionRef}>
                {data.map((item , indx)=>(
                   <div className="w-screen   flex flex-col justify-center items-center relative" key={indx}>
                      <div className="container mx-auto">
                            <div className="flex gap-[40px] items-center relative">
                                 {/* text */}
                             <div className="flex-1 flex flex-col justify-center items-center gap-5 py-8">
                                <div>
                                <Badge containerStyle={'w-[180px] relative top-[80px]  h-[180px]'}/>
                                </div>
                                <div className="text-center mt-12  ">
                                    {/* title  */}
                                    <h2 className="text-white h2 text-center mb-4">
                                        <span className="mr-4">{item.title.split(' ')[0]}</span>
                                        <span className="text-accent">{item.title.split(' ')[1]}</span>
                                    </h2>
                                    {/* separator */}
                                    <div className="mb-8">
                                    <Separator/>
                                    </div>
                                    {/* description  */}
                                    <p className="leading-relaxed text-center mb-12 px-8 lg:px-0">{item.description}</p>
                                    {/* button */}
                                    <button className="btn  ">See More</button>
                                </div>
                             </div>
                             {/* image */}
                             <div className="hidden items-center justify-start lg:flex lg:flex-1 w-full h-[70vh] relative ">
                                <Image src={item.imgSrc} fill alt="" />
                             </div>
                            </div>
                      </div>
                   </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default About;