"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const CircleImage = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
                duration: 0.7, 
                type: "spring",
                stiffness: 100,
                damping: 15 
            }}
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 z-40"
        >
            {/* Borde de gradiente azul a morado */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-600 rounded-full p-1 animate-gradient-x shadow-lg">
                <div className="w-full h-full rounded-full bg-gray-900/95 backdrop-blur-xl"></div>
            </div>
            
            {/* Contenedor de la imagen */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
                {/* Imagen */}
                <Image
                    src="/img/avatar-1.png" 
                    alt="Imagen circular"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-center"
                    priority
                />
                
                {/* Overlay de gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10"></div>
                
                {/* Indicador de estado */}
                <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse"></div>
            </div>
            
            {/* Tooltip minimalista */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-sm">
                Mi perfil
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
            </div>
            
            {/* Estilos para animación de gradiente */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient-x {
                    background-size: 200% 200%;
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </motion.div>
    );
}

export default CircleImage;