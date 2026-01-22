import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
    return (
        <MotionTransition 
            position='right' 
            className="bottom-0 left-0 hidden md:inline-block md:absolute"
        >
            <div className="relative w-[280px] h-[280px]">
                {/* Chispas sutiles */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-300 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-[2px] h-[2px] bg-yellow-400 rounded-full animate-pulse" 
                         style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-orange-300/70 rounded-full animate-pulse"
                         style={{ animationDelay: '1s' }}></div>
                </div>
                
                <Image 
                    src="/img/space5.png" 
                    width={300}
                    height={300}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-all duration-500"
                    alt="Minimal particles with sun sparks" 
                    priority={false}
                />
            </div>
        </MotionTransition>
    );
}

export default AvatarServices;