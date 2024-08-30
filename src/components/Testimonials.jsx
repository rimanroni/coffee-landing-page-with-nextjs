import {Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules'
import { IoMdQuote } from "react-icons/io";
import Image from "next/image";
const testimonials = [
    {   img:'https://i.ibb.co/gWxwfFK/girl2.jpg',
        massage:"The coffee here is absolutely amazing! The baristas are skilled and the atmosphere is perfect for both work and relaxation.",
        name:"Alice Johnson",
        position:"Graphic Designer "
     },
    {   img:" https://i.ibb.co/rc2zTGm/boy1.png",
        massage:"I love coming to this cafe. The pastries are always fresh, and the staff is incredibly friendly. It's my go-to spot for meetings.",
        name:"Michael Lee",
        position:"Freelance Writer"
     },
    {   img:"https://i.ibb.co/gWxwfFK/girl2.jpg",
        massage:"A hidden gem! The ambiance is cozy, and the menu offers a great variety. The chai latte is a must-try!",
        name:"Samantha Green",
        position:"Marketing Specialist"
     }
]
const Testimonials = () => {
    return (
        <section className="px-12 py-12  ">
            <div className="flex items-center">
                <Swiper navigation={true} modules={[Navigation]} className="h-[400px]"> 
                 {testimonials.map((item, indx)=>(
                    <SwiperSlide key={indx} className="w-full h-full">
                          <div className="flex gap-3 text-center items-center justify-center lg:px-16 h-full  ">
                            <div className="max-w-[60%] relative text-primary">
                                <div className="text-center">
                                <IoMdQuote className="lg:text-6xl inline  text-2xl text-primary mb-12"/>
                                </div>
                               <div className="relative">
                               <Image src={item?.img}  className="object-cover rounded-full mx-auto mb-4"   width={90} height={50} alt="" />
                               </div>

                                <p className="lg:text-xl  font-secondary   mb-8">{item.massage}</p>
                                <div>
                                    <p className="lg:text-2xl font-bold">{item.name}</p>
                                    <p className="font-bold">{item.position}</p>
                                </div>
                            </div>
                          </div>
                    </SwiperSlide>
                 ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;