"use client";

import { Avatar } from "@/app/components/avatar";
import ContainerPage from "@/app/components/container-page";
import CounterServices from "@/app/components/counter-services";
import TimeLine from "@/app/components/time-line";
import TransitionPage from "@/app/components/transition-page";
import { CoverParticles } from "@/app/components/cover.particle";
import { motion } from "framer-motion";

const AboutMePage = () => {
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
                    {/* Sección: Presentación */}
                    <motion.section 
                        variants={itemVariants}
                        className="relative pt-8 md:pt-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                            {/* Título */}
                            <div className="md:w-2/3">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white-900 leading-tight">
                                    Mi{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        trayectoria profesional
                                    </span>
                                </h1>
                                <p className="mt-4 text-lg text-white-900 max-w-2xl">
                                    Un recorrido detallado por mi evolución profesional, 
                                    experiencias clave y logros significativos en el campo 
                                    del desarrollo y la tecnología.
                                </p>
                            </div>

                          
                        </div>

                        {/* Separador decorativo */}
                        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                    </motion.section>

                    {/* Sección: Métricas */}
                    <motion.section 
                        variants={itemVariants}
                        className="pt-8"
                    >
                        <div className="mb-8 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-white-800 mb-3">
                                En <span className="text-white-600">números</span>
                            </h2>
                            <p className="text-white-600 max-w-xl">
                                Algunas métricas que reflejan mi experiencia y compromiso
                            </p>
                        </div>
                        <CounterServices />
                    </motion.section>

                    {/* Sección: Línea de tiempo */}
                    <motion.section 
                        variants={itemVariants}
                        className="pt-12"
                    >
                        <div className="mb-10 text-center">
                            <div className="inline-flex items-center mb-4">
                                <div className="w-8 h-1 bg-blue-500 rounded-full mr-3"></div>
                                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                                    Cronología
                                </span>
                                <div className="w-8 h-1 bg-purple-500 rounded-full ml-3"></div>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white-900 mb-4">
                                Mi <span className="text-white-600">camino</span> profesional
                            </h2>
                            <p className="text--600 max-w-2xl mx-auto">
                                Un recorrido cronológico por los momentos más importantes de mi carrera
                            </p>
                        </div>
                        
                        <TimeLine />
                        
                    </motion.section>

                    {/* Sección: Cierre */}
                    <motion.section 
                        variants={itemVariants}
                        className="pt-12 pb-20"
                    >  {/* Avatar - Posicionado cuidadosamente */}
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                                    <Avatar />
                                </div>
                            </div>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-10 text-center">
                            <div className="max-w-2xl mx-auto">
                                
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    ¿Interesado en conocer más?
                                </h3>
                                <p className="text-gray-700 mb-6">
                                    Si quieres profundizar en algún aspecto de mi experiencia 
                                    o discutir posibles colaboraciones, estaré encantado de conversar.
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
                    </motion.section>
                </motion.div>
            </ContainerPage>
            
        </>
    );
};

export default AboutMePage;