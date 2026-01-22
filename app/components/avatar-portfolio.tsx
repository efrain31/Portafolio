"use client"

import Image from 'next/image';
import { MotionTransition } from './transition-component';
import { motion } from 'framer-motion';

const AvatarPortfolio = () => {
    return (
        <MotionTransition 
            position='bottom' 
            className="bottom-0 left-0 hidden md:inline-block md:absolute z-20"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                    duration: 0.6,
                    delay: 0.2
                }}
                whileHover={{ scale: 1.05 }}
                className="relative"
            >
                {/* Borde de gradiente azul a morado */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-600 rounded-full opacity-60 blur-md animate-gradient-x">
                    <div className="absolute inset-1 rounded-full bg-gray-900/95 backdrop-blur-lg"></div>
                </div>
                
                {/* Contenedor principal */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-white/20 shadow-xl">
                    <Image 
                        src="/img/space6.png" 
                        width={256} 
                        height={256} 
                        className="w-full h-full object-cover object-center"
                        alt="Elemento decorativo espacial"
                        priority
                    />
                    
                    {/* Overlay de gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20"></div>
                    
                    {/* Efecto de brillo interno */}
                    <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-white/5"></div>
                </div>
                
                {/* Elemento decorativo flotante */}
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
            </motion.div>
        </MotionTransition>
    );
}

const AvatarPortfolio2 = () => {
    return (
        <MotionTransition 
            position='bottom' 
            className="bottom-0 right-0 hidden md:inline-block md:absolute z-20"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ 
                    duration: 0.6,
                    delay: 0.4
                }}
                whileHover={{ scale: 1.05 }}
                className="relative"
            >
                {/* Borde de gradiente inverso (morado a azul) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-400 to-blue-500 rounded-full opacity-60 blur-md animate-gradient-x-reverse">
                    <div className="absolute inset-1 rounded-full bg-gray-900/95 backdrop-blur-lg"></div>
                </div>
                
                {/* Contenedor principal - con rotación diferente */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-white/20 shadow-xl rotate-6">
                    <Image 
                        src="/img/space6.png" 
                        width={256} 
                        height={256} 
                        className="w-full h-full object-cover object-center"
                        alt="Elemento decorativo espacial"
                        priority
                    />
                    
                    {/* Overlay de gradiente inverso */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20"></div>
                    
                    {/* Efecto de brillo interno */}
                    <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-white/5"></div>
                </div>
                
                {/* Elemento decorativo flotante */}
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 animate-pulse delay-100"></div>
            </motion.div>
        </MotionTransition>
    );
}
// Animaciones

const PortfolioStyles = () => (
    <style jsx global>{`
        @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        @keyframes gradient-x-reverse {
            0%, 100% { background-position: 100% 50%; }
            50% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease infinite;
        }
        .animate-gradient-x-reverse {
            background-size: 200% 200%;
            animation: gradient-x-reverse 4s ease infinite;
        }
    `}</style>
);

const AvatarPortfolioWithStyles = () => {
    return (
        <>
            <AvatarPortfolio />
            <AvatarPortfolio2 />
            <PortfolioStyles />
        </>
    );
}

export default AvatarPortfolioWithStyles;
export { AvatarPortfolio2 };