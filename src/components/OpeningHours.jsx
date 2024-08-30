import Image from "next/image";
import Separator from "./Separator";
import Badge from "./Badge";

 

const OpeningHours = () => {
    
    return (
        <section className="flex   bg-primary  mt-4">
            {/* 1 */}
          <div className="hidden relative lg:flex justify-center items-center flex-1  ">
            {/* overlay div */}
            <div className="bg-black/60 w-full h-full absolute z-40 top-0"></div>
            <Image src={'/assets/opening-hours/img.png'}  fill alt="" priority  className="object-cover w-full h-full"/>
            <Badge containerStyle={'w-[320px] py-12   h-[320px] absoult z-40'}/>
          </div>
          {/* 2 */}
          <div className="flex-1 p-4 relative bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center">
            {/* overlay div */}
            <div className="bg-black/[0.85]  w-full h-full absolute z-10 top-0"></div>
            {/* taxt and image  */}
            <div className="z-20 flex flex-col items-center justify-center ">
                <h2 className="h2 text-white mb-4">Opening Hours</h2>
                <Separator bg="accent"/>
                <div className="relative mt-12 w-full lg:w-[470px] h-[220px]">
                 <Image src={'/assets/opening-hours/program-badge.svg'} fill alt=" " quality={100} className="object-cover" priority />
                </div>
            </div>

          </div>
        </section>
    );
};

export default OpeningHours;