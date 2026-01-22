"use client"

import Link from "next/link";
import { itemsNavbar } from "@/data";
import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
    const router = usePathname();

    return (
        <MotionTransition 
            position="right" 
            className="fixed z-40 flex items-center justify-center w-full h-20 md:h-24 bottom-0 md:bottom-8"
        >
            <motion.nav
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="relative"
            >
                {/* Borde de gradiente naranja a morado */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-purple-600 rounded-full p-1 animate-gradient-x shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gray-900/95 backdrop-blur-xl"></div>
                </div>
                
                {/* Contenedor principal */}
                <div className="relative flex items-center justify-center gap-3 md:gap-4 px-4 md:px-6 py-3 rounded-full border-2 border-transparent">
                    {itemsNavbar.map((item, index) => {
                        const isActive = router === item.link;
                        
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ scale: 0, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ 
                                    delay: index * 0.08, 
                                    type: "spring", 
                                    stiffness: 180,
                                    damping: 15
                                }}
                                whileHover={{ 
                                    scale: 1.15,
                                    y: -3,
                                    transition: { type: "spring", stiffness: 300 }
                                }}
                                whileTap={{ scale: 0.9 }}
                                className="relative group"
                            >
                                <Link 
                                    href={item.link} 
                                    className="relative block p-3 md:p-4 rounded-full transition-all duration-300"
                                    aria-label={item.title || `Navegar a ${item.link}`}
                                >
                                    {/* Efecto de fondo en hover - con gradiente naranja/morado */}
                                    <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                                        isActive 
                                            ? 'bg-gradient-to-r from-orange-500/30 to-purple-600/30 scale-110' 
                                            : 'bg-gradient-to-r from-orange-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100'
                                    }`}></div>
                                    
                                    {/* Anillo exterior en hover - naranja/morado */}
                                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
                                    
                                    {/* Icono  */}
                                    <div className={`relative z-10 transition-all duration-300 ${
                                        isActive 
                                            ? 'text-orange-300 scale-125' 
                                            : 'text-gray-300 group-hover:text-white'
                                    }`}>
                                        <div className="text-2xl md:text-3xl">
                                            {item.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Punto indicador activo - con gradiente */}
                                    {isActive && (
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 shadow-lg"
                                        />
                                    )}
                                    
                                    {/* Efecto de brillo en activo */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-600/20 animate-pulse"></div>
                                    )}
                                </Link>
                                
                                {/* Tooltip mejorado - con gradiente naranja/morado */}
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-orange-600 to-purple-600 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                                    {item.title || item.link.replace('/', '')}
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-orange-600 to-purple-600 rotate-45"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                    
                    {/* Separador decorativo - con gradiente */}
                    <div className="h-8 w-0.5 bg-gradient-to-b from-transparent via-orange-500/50 to-transparent mx-2 md:mx-4"></div>
                    
                    {/* Botón de inicio - */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                        whileHover={{ 
                            scale: 1.15,
                            y: -3,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="relative group"
                    >
                        <Link 
                            href="/"
                            className="relative block p-3 md:p-4 rounded-full transition-all duration-300"
                            aria-label="Ir al inicio"
                        >
                            {/* Efecto de fondo en hover */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Icono de inicio */}
                            <div className="relative z-10 text-2xl md:text-3xl text-gray-300 group-hover:text-white transition-colors duration-300">
                                <svg 
                                    className="w-6 h-6 md:w-7 md:h-7" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                                    />
                                </svg>
                            </div>
                            
                            {/* Punto indicador si está en inicio */}
                            {router === '/' && (
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 shadow-lg"
                                />
                            )}
                        </Link>
                        
                        {/* Tooltip para inicio */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-gradient-to-r from-orange-600 to-purple-600 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl">
                            Inicio
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-orange-600 to-purple-600 rotate-45"></div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Línea decorativa inferior animada - con gradiente naranja/morado */}
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ delay: 0.6, duration: 1, type: "spring" }}
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-orange-500 to-purple-600 rounded-full shadow-lg"
                />
            </motion.nav>
            
            {/* Estilos para animación de gradiente */}
            <style jsx>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-position: 0% 30%;
                    }
                    50% {
                        background-position: 100% 30%;
                    }
                }
                .animate-gradient-x {
                    background-size: 100% 100%;
                    animation: gradient-x 3s ease infinite;
                }
            `}</style>
        </MotionTransition>
    );
}

export default Navbar;