"use client";

import AvatarServices from "@/app/components/avatar-services";
import SliderServices from "@/app/components/slider-services";
import TransitionPage from "@/app/components/transition-page";
import { CoverParticles } from "@/app/components/cover.particle";
import TerminalDisplay from "@/app/components/terminaldisplay";
import ContainerPage from "@/app/components/container-page";
import { motion } from "framer-motion";

const ServicesPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <TransitionPage />
            <CoverParticles />
            
            <ContainerPage 
                maxWidth="xl"
                animate={true}
                delay={0.2}
                className="relative z-10"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12 md:space-y-16"
                >
                    {/* Avatar al inicio */}
                    <motion.section 
                        variants={itemVariants}
                        className="flex justify-center w-full py-8"
                    >
                        <AvatarServices />
                    </motion.section>

                    {/* Sección: Presentación de servicios */}
                    <motion.section 
                        variants={itemVariants}
                        className="relative pt-8 md:pt-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                            <div className="md:w-2/3">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                    Mis{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        servicios profesionales
                                    </span>
                                </h1>
                                <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                                    Ofrezco servicios de desarrollo web Frontend y Backend especializados 
                                    en la creación de sitios web, aplicaciones atractivas y funcionales.
                                </p>
                            </div>
                        </div>

                        {/* Separador decorativo */}
                        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </motion.section>

                    {/* Terminal grande */}
                    <motion.section 
                        variants={itemVariants}
                        className="w-full mb-8 pt-4"
                    >
                        <div className="transform scale-90 md:scale-95 lg:scale-100 flex justify-center">
                            <TerminalDisplay />
                        </div>
                    </motion.section>
                    
                    {/* Botón WhatsApp  */}
                    <motion.section 
                        variants={itemVariants}
                        className="flex justify-center mt-12 mb-16"
                    >
                      
                    </motion.section>

                    {/* Sección: Tecnologías  */}
                    <motion.section 
                        variants={itemVariants}
                        className="pt-8"
                    >
                        <div className="mb-8 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Tecnologías <span className="text-blue-500">principales</span>
                            </h2>
                            <p className="text-gray-400 max-w-xl">
                                Stack tecnológico que utilizo para crear soluciones innovadoras
                            </p>
                        </div>

                        {/* Grid de tecnologías con tarjetas estilo  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {/* Tarjeta 1 - Frontend */}
                            <div className="bg-gradient-to-br from-blue-50/10 to-blue-100/5 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                                        <span className="text-blue-400 text-xl">⚛️</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Frontend</h3>
                                </div>
                                <p className="text-gray-300">
                                    React, Next.js, TypeScript, Tailwind CSS, Framer Motion
                                </p>
                            </div>

                            {/* Tarjeta 2 - Backend */}
                            <div className="bg-gradient-to-br from-purple-50/10 to-purple-100/5 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                                        <span className="text-purple-400 text-xl">⚡</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Backend</h3>
                                </div>
                                <p className="text-gray-300">
                                    FastAPI, Node.js, Python, PostgreSQL, MongoDB, REST APIs
                                </p>
                            </div>

                            {/* Tarjeta 3 - UI/UX */}
                            <div className="bg-gradient-to-br from-green-50/10 to-green-100/5 rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
                                        <span className="text-green-400 text-xl">🎨</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white">UI/UX</h3>
                                </div>
                                <p className="text-gray-300">
                                    Diseño responsivo, Figma, Adobe XD, User Experience, Prototipado
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Separador decorativo */}
                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent max-w-4xl mx-auto"></div>

                    {/* Sección: Proyectos destacados */}
                    <motion.section 
                        variants={itemVariants}
                        className="pt-12"
                    >
                        <div className="mb-10 text-center">
                            <div className="inline-flex items-center mb-4">
                                <div className="w-8 h-1 bg-blue-500 rounded-full mr-3"></div>
                                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                                    Proyectos Destacados
                                </span>
                                <div className="w-8 h-1 bg-purple-500 rounded-full ml-3"></div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Mis <span className="text-blue-600">trabajos</span> más recientes
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Descubre algunos de mis proyectos más destacados
                            </p>
                        </div>
                        
                        <div className="w-full px-4">
                            <SliderServices />
                        </div>
                    </motion.section>

                    {/* Separador decorativo */}
                    <div className="mt-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent max-w-4xl mx-auto"></div>

                    {/* Sección: Cierre */}
                    <motion.section 
                        variants={itemVariants}
                        className="pt-12 pb-20"
                    >
                        <div className="bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-2xl p-8 md:p-10 text-center">
                            <div className="max-w-2xl mx-auto">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                    ¿Interesado en mis servicios?
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Si quieres discutir un proyecto específico o necesitas más información 
                                    sobre mis servicios, estaré encantado de conversar.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                   <div className="bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-2xl p-6 md:p-8 max-w-2xl w-full">
                            <div className="text-center">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                    Contacto directo
                                </h3>
                                <p className="text-gray-300 mb-6">
                                    Para consultas rápidas o cotizaciones inmediatas
                                </p>
                                <a
                                    href="https://wa.me/523327409328"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 rounded-lg"
                                >
                                    <span className="flex items-center justify-center">
                                        <span className="mr-3 text-xl">💬</span>
                                        Contáctame por WhatsApp
                                    </span>
                                </a>
                            </div>
                        </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </motion.div>
            </ContainerPage>
        </>
    );
}

export default ServicesPage;