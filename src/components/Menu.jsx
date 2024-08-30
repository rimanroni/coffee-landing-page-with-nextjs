import { useState } from "react";
import MenuItems from "./MenuItems";
import Separator from "./Separator";

 
const menuData = [
  {
      imgSrc:"/assets/menu/coffee-1.png",
      
      name: "Espresso",
      description: "A strong and bold coffee shot with a rich flavor.",
      price: 2.50

  },
  {
    imgSrc:"/assets/menu/coffee-2.png",
    name: "Latte",
    description: "Smooth and creamy coffee with steamed milk and a layer of foam.",
    price: 3.75
  },
  {
    imgSrc:"/assets/menu/coffee-3.png",
    name: "Cappuccino",
    description: "A perfect balance of espresso, steamed milk, and thick foam.",
    price: 4.00
  } ,
  {
    imgSrc:"/assets/menu/coffee-4.png",
    name: "Mocha",
    description: "A delightful blend of espresso, chocolate, and steamed milk.",
    price: 4.25
  },
  {
    imgSrc:"/assets/menu/coffee-5.png",
    name: "Americano",
    description: "Espresso diluted with hot water, giving a light and smooth coffee.",
    price: 2.75
  },  {
    imgSrc:"/assets/menu/coffee-1.png",
    
    name: "Espresso",
    description: "A strong and bold coffee shot with a rich flavor.",
    price: 2.50

},
{
    imgSrc:"/assets/menu/coffee-2.png",
    name: "Latte",
    description: "Smooth and creamy coffee with steamed milk and a layer of foam.",
    price: 3.75
  },
  {
    imgSrc:"/assets/menu/coffee-3.png",
    name: "Cappuccino",
    description: "A perfect balance of espresso, steamed milk, and thick foam.",
    price: 4.00
  } ,
  {
    imgSrc:"/assets/menu/coffee-4.png",
    name: "Mocha",
    description: "A delightful blend of espresso, chocolate, and steamed milk.",
    price: 4.25
  },
  {
    imgSrc:"/assets/menu/coffee-5.png",
    name: "Americano",
    description: "Espresso diluted with hot water, giving a light and smooth coffee.",
    price: 2.75
  }      
          
]
const Menu = () => {
     const [view, setView] = useState(false);
     const data = view ? menuData : menuData.slice(0,6)
    return (
        <section className="pt-12 pb-16  lg:pt-16 lg:pb-36">
            <div className=" px-8 mx-auto ">
                <div className="flex flex-col gap-4 mb-12 lg:mb-24">
                    <h2 className="h2 text-center">Our Menu </h2>
                    <div className="mb-4">
                        <Separator bg="accent"/>
                    </div>
                    <p className="text-center   mx-auto">
                    Coffee Haven is a cozy and welcoming cafe dedicated to serving high-quality coffee and creating a comfortable space for everyone. Our baristas are passionate about crafting the perfect cup, from classic espresso shots to creamy lattes and indulgent mochas. Whether you're stopping by for a quick coffee to go or settling in for a relaxing afternoon, Coffee Haven is your home away from home. Our focus on sustainability and ethically sourced beans ensures that every sip not only tastes good but does good, too. Come for the coffee, stay for the vibe.
                    </p>
                </div>
                {/* menu and button */}
                <div className="flex flex-col items-center gap-12 lg:gap-24 ">
                    {/* menu */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-8  gap-x-16 place-content-center">
                        {data.map((item, indx)=>(
                             
                               <MenuItems key={indx} img={item.imgSrc} description={item.description} name={item.name} price={item.price}/>
                           
                        ))}
                     </div>
                   {/*  button */}
                   <button onClick={()=>setView(!view)} className="btn uppercase " > {view?"view less" : 'View Full Menu'} </button>
                </div>
            </div>
        </section>
    );
};

export default Menu;