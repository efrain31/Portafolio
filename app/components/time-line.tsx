"use client";

import { dataAboutPage } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const TimeLine = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);
    
    // Dividir los datos: 3 arriba, 2 abajo
    const topItems = dataAboutPage.slice(0, 3);
    const bottomItems = dataAboutPage.slice(3, 5);
    
    const handleCardClick = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <div className="relative py-12 md:py-16 lg:py-20">
            {/* Línea central curva */}
            <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 rounded-full"></div>
                {/* Curvatura en el centro */}
                <div className="absolute left-1/2 top-1/2 w-32 h-32 border-2 border-blue-300/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Puntos de conexión */}
            <div className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 top-1/4 w-3 h-3 rounded-full bg-blue-500 border-4 border-white shadow-lg z-10"></div>
            <div className="absolute hidden lg:block left-1/2 transform -translate-x-1/2 top-3/4 w-3 h-3 rounded-full bg-purple-500 border-4 border-white shadow-lg z-10"></div>

            {/* Primera fila: 3 elementos */}
            <div className="relative mb-8 lg:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {topItems.map((data, index) => (
                        <motion.div 
                            key={data.id}
                            className="relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            layout
                        >
                            {/* Líneas conectadoras para la primera fila */}
                            <div className={`hidden lg:block absolute ${index === 0 ? 'right-0' : index === 2 ? 'left-0' : 'left-1/2'} top-1/2 h-1 w-12 ${index === 0 ? 'bg-gradient-to-l' : index === 2 ? 'bg-gradient-to-r' : 'bg-gradient-to-r'} from-blue-200/50 to-blue-200`}></div>
                            
                            <div className={`
                                relative 
                                ${index === 0 ? 'lg:translate-y-8 lg:rotate-[-2deg]' : ''}
                                ${index === 1 ? 'lg:translate-y-[-12px]' : ''}
                                ${index === 2 ? 'lg:translate-y-8 lg:rotate-[2deg]' : ''}
                                transition-all duration-500 hover:scale-[1.02] hover:rotate-0
                                ${expandedCard === index ? 'lg:!translate-y-0 lg:!rotate-0 z-50' : ''}
                            `}>
                                <motion.div 
                                    className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 h-full cursor-pointer overflow-hidden
                                        ${expandedCard === index ? 'shadow-2xl border-blue-200 scale-105 lg:scale-110' : ''}
                                    `}
                                    onClick={() => handleCardClick(index)}
                                    layout
                                >
                                    <div className="p-6">
                                        {/* Decoración superior */}
                                        <div className={`absolute -top-2 left-6 right-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-opacity duration-300
                                            ${expandedCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                                        `}></div>
                                        
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-2">
                                                <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-purple-500' : 'bg-pink-500'} animate-pulse`}></div>
                                                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                                    {data.date}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                                    #{String(index + 1).padStart(2, '0')}
                                                </span>
                                                <motion.div
                                                    animate={{ rotate: expandedCard === index ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-blue-500"
                                                >
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </motion.div>
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {data.title}
                                        </h3>
                                        <p className="text-gray-700 font-medium mb-3 bg-gradient-to-r from-blue-50 to-transparent p-2 rounded-lg">
                                            {data.subtitle}
                                        </p>
                                        
                                        {/* Contenido colapsable */}
                                        <AnimatePresence>
                                            <motion.div
                                                initial={false}
                                                animate={{ height: expandedCard === index ? 'auto' : 0, opacity: expandedCard === index ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-gray-100">
                                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                        {data.description}
                                                    </p>
                                                    
                                                    {/* Detalles adicionales (puedes agregar más información aquí) */}
                                                    <div className="mt-4 space-y-3">
                                                         <div className="flex items-center text-sm text-gray-500">
                                                            <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                            </svg>
                                                            <span>Duración: en curso</span>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                            </svg>
                                                            <span>Duración: 12 meses</span>
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span>Proyecto completado exitosamente</span>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                        
                                        {/* Descripción breve (visible cuando está colapsado) */}
                                        <AnimatePresence>
                                            {expandedCard !== index && (
                                                <motion.p 
                                                    initial={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="text-gray-600 text-sm leading-relaxed pt-2"
                                                >
                                                    {data.description.length > 120 
                                                        ? `${data.description.substring(0, 120)}...` 
                                                        : data.description
                                                    }
                                                    <span className="block mt-2 text-blue-500 text-xs font-medium">
                                                        Haz clic para expandir →
                                                    </span>
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Indicador de esquina */}
                                    <div className={`absolute top-2 ${index % 2 === 0 ? 'right-2' : 'left-2'} w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-purple-500' : 'bg-pink-500'}`}></div>
                                    
                                    {/* Indicador de expansión */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform transition-transform duration-300
                                        ${expandedCard === index ? 'scale-x-100' : 'scale-x-0'}
                                    `}></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Segunda fila: 2 elementos */}
            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                    {bottomItems.map((data, index) => {
                        const globalIndex = index + 3; 
                        return (
                            <motion.div 
                                key={data.id}
                                className="relative"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
                                layout
                            >
                                {/* Líneas conectadoras para la segunda fila */}
                                <div className={`hidden lg:block absolute ${index === 0 ? 'right-0' : 'left-0'} top-1/2 h-1 w-16 ${index === 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-purple-200/50 to-purple-200`}></div>
                                
                                <div className={`
                                    relative
                                    ${index === 0 ? 'lg:translate-x-12 lg:translate-y-4 lg:rotate-[-3deg]' : ''}
                                    ${index === 1 ? 'lg:translate-x-[-12px] lg:translate-y-[-4px] lg:rotate-[3deg]' : ''}
                                    transition-all duration-500 hover:scale-[1.02] hover:rotate-0
                                    ${expandedCard === globalIndex ? 'lg:!translate-x-0 lg:!translate-y-0 lg:!rotate-0 z-50' : ''}
                                `}>
                                    <motion.div 
                                        className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-100 h-full cursor-pointer overflow-hidden
                                            ${expandedCard === globalIndex ? 'shadow-2xl border-purple-200 scale-105 lg:scale-110' : ''}
                                        `}
                                        onClick={() => handleCardClick(globalIndex)}
                                        layout
                                    >
                                        <div className="p-6">
                                            {/* Decoración superior */}
                                            <div className={`absolute -top-2 left-6 right-6 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-opacity duration-300
                                                ${expandedCard === globalIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                                            `}></div>
                                            
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <div className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-indigo-500' : 'bg-teal-500'} animate-pulse`}></div>
                                                    <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                                                        {data.date}
                                                    </span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                                        #{String(globalIndex + 1).padStart(2, '0')}
                                                    </span>
                                                    <motion.div
                                                        animate={{ rotate: expandedCard === globalIndex ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="text-purple-500"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </motion.div>
                                                </div>
                                            </div>
                                            
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                                                {data.title}
                                            </h3>
                                            <p className="text-gray-700 font-medium mb-3 bg-gradient-to-r from-purple-50 to-transparent p-2 rounded-lg">
                                                {data.subtitle}
                                            </p>
                                            
                                            {/* Contenido colapsable */}
                                            <AnimatePresence>
                                                <motion.div
                                                    initial={false}
                                                    animate={{ height: expandedCard === globalIndex ? 'auto' : 0, opacity: expandedCard === globalIndex ? 1 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 border-t border-gray-100">
                                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                            {data.description}
                                                        </p>
                                                        
                                                        {/* Detalles adicionales */}
                                                        <div className="mt-4 space-y-3">
                                                            <div className="flex items-center text-sm text-gray-500">
                                                                <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Duración: 8 meses</span>
                                                            </div>
                                                            <div className="flex items-center text-sm text-gray-500">
                                                                <svg className="w-4 h-4 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                                <span>Logros destacados alcanzados</span>
                                                            </div>
                                                        </div>
                                                        
                                                      
                                                    </div>
                                                </motion.div>
                                            </AnimatePresence>
                                            
                                            {/* Descripción breve (visible cuando está colapsado) */}
                                            <AnimatePresence>
                                                {expandedCard !== globalIndex && (
                                                    <motion.p 
                                                        initial={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="text-gray-600 text-sm leading-relaxed pt-2"
                                                    >
                                                        {data.description.length > 120 
                                                            ? `${data.description.substring(0, 120)}...` 
                                                            : data.description
                                                        }
                                                        <span className="block mt-2 text-purple-500 text-xs font-medium">
                                                            Haz clic para expandir →
                                                        </span>
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Indicador de esquina */}
                                        <div className={`absolute top-2 ${index % 2 === 0 ? 'right-2' : 'left-2'} w-2 h-2 rounded-full ${index === 0 ? 'bg-indigo-500' : 'bg-teal-500'}`}></div>
                                        
                                        {/* Indicador de expansión */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform transition-transform duration-300
                                            ${expandedCard === globalIndex ? 'scale-x-100' : 'scale-x-0'}
                                        `}></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Indicador de progreso */}
            <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    </div>
                
                </div>
            </motion.div>

            {/* Elementos decorativos flotantes */}
            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-blue-300/30 animate-pulse hidden lg:block"></div>
            <div className="absolute top-20 right-10 w-3 h-3 rounded-full bg-purple-300/30 animate-pulse hidden lg:block"></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 rounded-full bg-pink-300/30 animate-pulse hidden lg:block"></div>
            <div className="absolute bottom-10 right-20 w-5 h-5 rounded-full bg-indigo-300/20 animate-pulse hidden lg:block"></div>
        </div>
    );
}

export default TimeLine;