import { delay, motion } from "framer-motion";
import Link from "next/link";
 

 
const Nav = ({signal}) => {
    const navitems = [
        {path:"/", name:"Home", delay:".1"},
        {path:"/", name:"Explore" , delay:'.2'},
        {path:"/", name:"About" , delay:'.3'},
        {path:"/", name:"Menu" , delay:'.4'},
        {path:"/", name:"Contact" , delay:'.5'},
     ]
    
    return (
        <nav className="mr-12 ">
            <ul className={`flex ${signal&&'flex-col  items-center   justify-center   mt-4'} gap-3     font-bold`}>
                {navitems.map((item)=>(
                    <Link className="text-left" 
                    key={item.name}
                    href={item?.path}> <motion.span
                    className="hover:text-accent duration-300"
                    initial={{y:-10, opacity:0}}
                   animate={{y:0, opacity:1}}
                   transition={{duration:.5, delay:item.delay}}
                    
                    >{item?.name}</motion.span> </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;