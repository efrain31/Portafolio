"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "backOut"
            }
        }
    };

    return (
        <MotionTransition 
            position="bottom" 
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-gradient-to-b from-navy-900/95 via-navy-800/90 to-transparent backdrop-blur-md py-3 shadow-lg' 
                    : 'bg-transparent py-5'
            }`}
        >
            <motion.header
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Logo/Título con gradiente */}
                        <Link href='/' className="group">
                            <motion.div 
                                variants={itemVariants}
                                className="inline-block"
                            >
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                    <span className="text-white group-hover:text-gray-200 transition-colors duration-300">
                                        Un vistazo a{' '}
                                    </span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
                                        mi trayectoria
                                    </span>
                                </h1>
                                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 rounded-full"></div>
                            </motion.div>
                        </Link>

                        {/* Redes sociales - Desktop */}
                        <motion.div 
                            variants={itemVariants}
                            className="hidden md:flex items-center space-x-3 lg:space-x-4"
                        >
                            {socialNetworks.map(({ logo, src, id }, index) => (
                                <motion.div
                                    key={id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        href={src}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative group/social"
                                        aria-label={`Enlace a ${src}`}
                                    >
                                        <div className="relative p-2 rounded-xl bg-gradient-to-br from-white/10 to-gray-900/20 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group-hover/social:border-cyan-300/50">
                                            <div className="text-xl lg:text-2xl text-white group-hover/social:text-transparent group-hover/social:bg-clip-text group-hover/social:bg-gradient-to-r group-hover/social:from-cyan-300 group-hover/social:to-blue-300 transition-all duration-300">
                                                {logo}
                                            </div>
                                            {/* Efecto de fondo en hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                            {/* Punto indicador */}
                                            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                        {/* Tooltip */}
                                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded opacity-0 group-hover/social:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm">
                                            {src.split('//')[1]?.split('/')[0] || 'Red social'}
                                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                            
                            {/* Separador decorativo */}
                            <div className="h-6 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent mx-2"></div>
                            
                            {/* Botón de contacto */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/contact"
                                    className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-cyan-500/25"
                                >
                                    <span>Contacto</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Redes sociales - Mobile (fixed en lado derecho) */}
                        {isClient && (
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col space-y-3 md:hidden z-50"
                            >
                                {socialNetworks.map(({ logo, src, id }, index) => (
                                    <motion.div
                                        key={id}
                                        initial={{ scale: 0, opacity: 0, x: 20 }}
                                        animate={{ scale: 1, opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                        whileHover={{ scale: 1.15, x: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Link
                                            href={src}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative group/social-mobile"
                                            aria-label={`Enlace a ${src}`}
                                        >
                                            <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                                                <div className="text-xl text-white group-hover/social-mobile:text-cyan-300 transition-colors duration-300">
                                                    {logo}
                                                </div>
                                            </div>
                                            {/* Indicador de notificación */}
                                            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-ping opacity-75"></div>
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                {/* Indicador visual */}
                                <div className="w-px h-12 mx-auto bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
                            </motion.div>
                        )}
                    </div>
                    
                    {/* Indicador de scroll */}
                    {isClient && isScrolled && (
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            className="h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mt-3"
                        ></motion.div>
                    )}
                </div>
            </motion.header>
        </MotionTransition>
    );
}

export default Header;