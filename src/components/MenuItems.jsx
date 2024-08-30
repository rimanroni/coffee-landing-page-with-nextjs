import Image from "next/image";

 

const MenuItems = ({img, description, name, price}) => {
    return (
        <div className="flex relative items-center gap-4">
             <div className="relative w-[60px] h-[60px] rounded-full">
                <Image src={img}  className="object-cover"   width={100} height={50} alt="" />
             </div>
             {/* text  */}
             <div className="flex-1 flex flex-col  gap-2">
             <div className="flex justify-between gap-4 items-baseline">
                {/* name */}
                <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">{name}</p>
                {/* border */}
                <div className="flex-1 border-b border-dashed border-primary"></div>
                {/* price  */}
                <p className="leading-none font-primary font-semibold text-[30px]">{price.toFixed(2)}</p>
             </div>
             <p>{description}</p>
             </div>
        </div>
    );
};

export default MenuItems;