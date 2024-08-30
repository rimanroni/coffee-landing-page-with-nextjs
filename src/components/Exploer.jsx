import Image from "next/image";

 

const Exploer = () => {
    return ( 
        <section className="py-12 relative xl:py-0 xl:h-[90vh] xl:w-screen">
             <div className="  mx-auto lg:w-full lg:h-full flex lg:justify-center lg:items-center ">
                <div className="  w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
                    <div className="flex-1 p-4   flex flex-col justify-around items-end text-center lg:text-left gap-12 lg:gap-4 max-w-[400px] mx-auto lg:max-w-none lg:mx-0 ">
                        
                      {/* items one  */}
                        <div className="relative flex items-start ">
                            <div className="lg:max-w-[420px] text-center lg:text-right  lg:flex lg:flex-col lg:items-end">
                                <div className="mb-6 flex   justify-center items-center">
                                    <Image src={'/assets/explore/coffees/coffee-1.svg'} width={56} alt="svg icon" height={56}/>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Rich Espresso Blends</h3>
                                <p className="max-w-[400px]">Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat</p>
                            </div>
                        </div>
                        {/* items two */}
                        <div className="relative flex items-start ">
                            <div className="lg:max-w-[420px]     lg:flex lg:flex-col  ">
                                <div className="mb-6 flex lg:justify-start  justify-center items-center ">
                                    <Image src={'/assets/explore/coffees/coffee-2.svg'} width={56} alt="svg icon" height={56}/>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Classic Drip Coffee</h3>
                                <p className="max-w-[400px]">Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.</p>
                            </div>
                        </div>
                        
                        </div>
                    {/* Image */} 

                    <div className="hidden lg:flex justify-center">
                        <div className="w-[322px] flex flex-col justify-around items-center h-[580px] relative ">
                         <Image src='/assets/explore/cup.png'  alt=""     width={200} height={100}  data-scroll data-scroll-speed="0.1"  /> 
                         </div>
                    </div>

                    <div className="flex-1 p-4   flex flex-col justify-around items-end text-center lg:text-left gap-12 lg:gap-4 max-w-[400px] mx-auto lg:max-w-none lg:mx-0 ">
                    
                     {/* items three */}
                     <div className="relative flex items-start ">
                            <div className="lg:max-w-[420px]      lg:flex lg:flex-col  ">
                                <div className="mb-6 flex lg:justify-start  justify-center items-center">
                                    <Image src={'/assets/explore/coffees/coffee-3.svg'} width={56} alt="svg icon" height={56}/>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Smooth Cold Brews</h3>
                                <p className="max-w-[400px]">Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.</p>
                            </div>
                        </div>
                        {/* items four */}
                        <div className="relative   flex items-start ">
                            <div className="lg:max-w-[420px] text-center lg:text-right  lg:flex lg:flex-col lg:items-end">
                                <div className="mb-6 flex  justify-center items-center">
                                    <Image src={'/assets/explore/coffees/coffee-4.svg'} width={56} alt="svg icon" height={56}/>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Flavorful Latte Varieties</h3>
                                <p className="max-w-[400px]">Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Exploer;