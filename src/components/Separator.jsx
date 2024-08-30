import Image from "next/image";

 

const Separator = ({bg='white'}) => {
    const imgSrch = bg === 'accent' ? '/assets/separator-accent.svg' : '/assets/separator-white.svg';
    return (
        <div className="relative w-[138px] h-[26px] mx-auto">
           <Image src={imgSrch} fill alt=""/>
        </div>
    );
};

export default Separator;