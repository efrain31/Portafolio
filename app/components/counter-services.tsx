"use client";

import { dataCounter } from "@/data";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const CounterServices = () => {
    return (
        <div className="relative">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl blur-xl"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto relative z-10">
                {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }, index) => (
                    <motion.div 
                        key={id} 
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                    >
                        {/* Contenedor con bordes semitransparentes */}
                        <div className={`
                            relative bg-white/70 backdrop-blur-sm rounded-xl p-4 md:p-6 
                            border border-white-200/50 shadow-lg hover:shadow-xl
                            transition-all duration-300 hover:scale-105
                            ${lineRight ? 'border-r-2 md:border-r-2 border-blue-500/30' : ''}
                            ${lineRightMobile ? 'border-r-2 border-purple-500/30 md:border-r-0' : ''}
                            group hover:bg-white/90
                        `}>
                            {/* Borde superior decorativo */}
                            <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Contador con animación mejorada */}
                            <div className="flex items-center justify-center mb-2">
                                <p className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    + 
                                    <CountUp 
                                        end={endCounter} 
                                        start={0} 
                                        duration={3.5} 
                                        delay={0.5}
                                        separator=","
                                        className="ml-1"
                                    />
                                </p>
                            </div>
                            
                            {/* Texto descriptivo */}
                            <div className="text-center">
                                <p className="text-xs md:text-sm font-semibold uppercase text-gray-700 tracking-wider">
                                    {text}
                                </p>
                                <div className="mt-2 h-0.5 w-8 mx-auto bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full group-hover:w-12 transition-all duration-300"></div>
                            </div>
                            
                            {/* Icono decorativo */}
                            <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        
                        {/* Línea divisoria para desktop */}
                        {lineRight && (
                            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
                        )}
                        
                        {/* Línea divisoria para móvil */}
                        {lineRightMobile && (
                            <div className="md:hidden absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
                        )}
                    </motion.div>
                ))}
            </div>
            
            {/* Indicadores decorativos */}
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse delay-75"></div>
        </div>
    );
}

export default CounterServices;