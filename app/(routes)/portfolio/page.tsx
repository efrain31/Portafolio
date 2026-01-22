"use client";

import { dataPortfolio } from "@/data";
import TransitionPage from "@/app/components/transition-page";
import ContainerPage from "@/app/components/container-page";
import PortfolioBox from "@/app/components/portfolio-box";
import { CoverParticles } from "@/app/components/cover.particle";
import { motion } from "framer-motion";

const PortfolioPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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
                    className="min-h-screen flex flex-col"
                >
                    {/* Encabezado */}
                    <motion.div 
                        variants={itemVariants}
                        className="pt-24 md:pt-32 pb-12 text-center"
                    >
                        <div className="inline-flex items-center mb-6">
                            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                            <span className="text-sm font-large text-white-800 uppercase tracking-wider">
                                Portfolio
                            </span>
                            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3"></div>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-900 mb-6">
                            Trabajos{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                destacados
                            </span>
                        </h1>
                        
                        <motion.p 
                            variants={itemVariants}
                            className="text-lg md:text-xl text-white-800 leading-relaxed max-w-3xl mx-auto"
                        >
                            Una selección de proyectos donde he aplicado mis habilidades en desarrollo, 
                            diseño y tecnología para crear soluciones innovadoras.
                        </motion.p>
                    </motion.div>

                    {/* Grid de proyectos */}
                    <motion.div 
                        variants={containerVariants}
                        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto"
                    >
                        {dataPortfolio.map((data, index) => (
                            <motion.div
                                key={data.id}
                                variants={itemVariants}
                                custom={index}
                            >
                                <PortfolioBox 
                                    data={data} 
                                    index={index}
                                
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Pie de página */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-16 pt-8 border-t border-gray-200/50 text-center"
                    >
                        <p className="text-gray-500 text-sm">
                            Mostrando <span className="font-semibold text-blue-600">{dataPortfolio.length}</span> proyectos
                        </p>
                    </motion.div>
                </motion.div>
            </ContainerPage>
        </>
    );
};

export default PortfolioPage;