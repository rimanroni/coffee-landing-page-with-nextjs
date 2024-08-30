import Image from "next/image";


const Badge = ({containerStyle}) => {
    return (
        <div className={` relative ${containerStyle}`}>
            <img src="assets/badge.svg" className="object-contain" alt="" />
        </div>
    );
};

export default Badge;

 