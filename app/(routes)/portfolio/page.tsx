"use client";

import { dataPortfolio } from "@/data";
import TransitionPage from "@/app/components/transition-page";
import ContainerPage from "@/app/components/container-page";
import { CoverParticles } from "@/app/components/cover.particle";
import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "@/app/utils/motion-transitions";
import { titleVariants, subtitleVariants, paragraphVariants, cardVariants, perspective3DVariants } from "@/app/utils/animation-variants";
import Image from "next/image";
import { useState, useEffect } from "react";

const PortfolioPage = () => {
    const [expandedImage, setExpandedImage] = useState<{ url: string; index: number } | null>(null);
    const [carouselIndices, setCarouselIndices] = useState<{ [key: number]: number }>({});

    // Auto-advance carousel every 7 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndices((prev) => {
                const newIndices = { ...prev };
                dataPortfolio.forEach((project, idx) => {
                    const imageList = project.images || [project.image];
                    newIndices[idx] = ((prev[idx] || 0) + 1) % imageList.length;
                });
                return newIndices;
            });
        }, 7000);

        return () => clearInterval(interval);
    }, []);

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
                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8 }} className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></motion.div>
                            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-sm font-large text-white-800 uppercase tracking-wider">
                                Portfolio
                            </motion.span>
                            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3"></motion.div>
                        </div>

                        <motion.h1 variants={titleVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-900 mb-6">
                            Trabajos{' '}
                            <motion.span variants={perspective3DVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                destacados
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            variants={paragraphVariants}
                            className="text-lg md:text-xl text-white-800 leading-relaxed max-w-3xl mx-auto"
                        >
                            Una selección de proyectos donde he aplicado mis habilidades en desarrollo,
                            diseño y tecnología para crear soluciones innovadoras.
                        </motion.p>
                    </motion.div>

                    {/* Modal para imagen ampliada */}
                    <AnimatePresence>
                        {expandedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-transparent"
                                onClick={() => setExpandedImage(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.85, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.85, opacity: 0 }}
                                    className="relative rounded-3xl overflow-hidden flex items-center justify-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={expandedImage.url}
                                        alt="Proyecto ampliado"
                                        width={1800}
                                        height={600}
                                        className="max-h-[85vh] max-w-[98vw] w-auto h-auto object-contain"
                                        priority
                                    />
                                    <button
                                        onClick={() => setExpandedImage(null)}
                                        className="absolute top-6 right-6 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-2xl transition-all"
                                    >
                                        ✕
                                    </button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Proyectos - Layout Simple */}
                    <div className="relative w-full space-y-20">
                        {dataPortfolio.map((data, index) => (
                            <motion.div
                                key={data.id}
                                className="relative w-full"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.div
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: false, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    {/* Carrusel de Imágenes - Izquierda con Parallax */}
                                    <motion.div
                                        className="relative rounded-3xl overflow-hidden h-80 lg:h-96 cursor-pointer group"
                                        initial={{ opacity: 0, x: -50, y: 30 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: false, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    >
                                        {(() => {
                                            const imageList = data.images || [data.image];
                                            const currentImageIndex = carouselIndices[index] || 0;
                                            return (
                                                <motion.div
                                                    className="w-full h-full relative"
                                                    initial={{ scale: 0.95, opacity: 0 }}
                                                    whileInView={{ scale: 1, opacity: 1 }}
                                                    viewport={{ once: false }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <Image
                                                        src={imageList[currentImageIndex]}
                                                        alt={data.title}
                                                        fill
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        onClick={() => setExpandedImage({ url: imageList[currentImageIndex], index })}
                                                    />
                                                </motion.div>
                                            );
                                        })()}
                                        {/* Indicadores */}
                                        {(() => {
                                            const imageList = data.images || [data.image];
                                            return imageList.length > 1 ? (
                                                <motion.div
                                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    {imageList.map((_, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            className={`h-2 rounded-full transition-all ${
                                                                idx === (carouselIndices[index] || 0)
                                                                    ? "bg-white w-6"
                                                                    : "bg-white/50 w-2"
                                                            }`}
                                                            whileHover={{ scale: 1.2 }}
                                                        />
                                                    ))}
                                                </motion.div>
                                            ) : null;
                                        })()}
                                    </motion.div>

                                    {/* Contenido - Derecha */}
                                    <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                        <div>
                                            <motion.span initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
                                                Project {index + 1}
                                            </motion.span>
                                            <motion.h2 variants={titleVariants} className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
                                                {data.title}
                                            </motion.h2>
                                        </div>

                                        <motion.p variants={paragraphVariants} className="text-gray-300 text-lg leading-relaxed">
                                            {data.description}
                                        </motion.p>

                                        {data.techStack && (
                                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.05, delayChildren: 0.2 }} className="flex flex-wrap gap-3 pt-4">
                                                {data.techStack.map((tech, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="px-4 py-2 border border-cyan-400/50 text-cyan-300 rounded-full text-sm font-medium"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </motion.div>
                                        )}

                                        <motion.div
                                            className="flex gap-4 pt-6"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false }}
                                            transition={{ delay: 0.4, duration: 0.6 }}
                                        >
                                            {data.urlDemo && data.urlDemo !== "#!" && (
                                                <motion.button
                                                    onClick={() => window.open(data.urlDemo, "_blank")}
                                                    className="px-8 py-3 bg-cyan-500 text-gray-900 font-bold rounded-full"
                                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Ver Demo
                                                </motion.button>
                                            )}
                                            {data.urlGithub && data.urlGithub !== "#!" && (
                                                <motion.button
                                                    onClick={() => window.open(data.urlGithub, "_blank")}
                                                    className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full"
                                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)" }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Ver Código
                                                </motion.button>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

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