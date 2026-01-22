import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Introduction = () => {
    // Variantes de animación
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
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
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const solarVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5
            }
        },
        pulse: {
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="z-20 w-full bg-gradient-to-b from-darkBg/60 via-black/50 to-transparent overflow-hidden">
            <motion.div 
                className="z-20 flex flex-col-reverse md:flex-row items-center h-full p-6 py-10 gap-8 md:py-12 lg:py-16 relative"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >

                {/* Efectos solares en el fondo */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Núcleo del sol */}
                    <motion.div 
                        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96"
                        variants={solarVariants}
                        animate="pulse"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-70"></div>
                        <div className="absolute inset-8 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full blur-xl opacity-80"></div>
                        <div className="absolute inset-12 bg-yellow-200 rounded-full blur-lg opacity-90"></div>
                    </motion.div>

                    {/* Erupciones solares */}
                    <motion.div 
                        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="w-80 h-80 md:w-120 md:h-120 border-2 border-orange-500/30 rounded-full"></div>
                    </motion.div>

                    {/* Partículas solares */}
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
                            animate={{
                                x: Math.cos(i * 30 * Math.PI / 180) * 200,
                                y: Math.sin(i * 30 * Math.PI / 180) * 200,
                                scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 4 + i * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2
                            }}
                        >
                            <div className="w-4 h-4 bg-yellow-400 rounded-full blur-sm opacity-70"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Imagen con efectos solares */}
                <motion.div 
                    className="flex justify-center md:justify-start w-full md:w-1/2 relative z-10"
                    variants={itemVariants}
                >
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        {/* Efecto de radiación solar */}
                        <motion.div 
                            className="absolute -inset-8"
                            animate={{
                                rotate: 360
                            }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <div className="absolute inset-0 border-4 border-orange-500/20 rounded-full"></div>
                            <div className="absolute inset-4 border-4 border-yellow-500/15 rounded-full"></div>
                            <div className="absolute inset-8 border-4 border-yellow-400/10 rounded-full"></div>
                        </motion.div>

                        {/* Glow solar */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-orange-600/40 via-yellow-500/30 to-red-600/40 rounded-3xl blur-2xl"></div>
                        
                        {/* Imagen con filtro solar */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/30">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-yellow-400/10 z-10 mix-blend-overlay"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-200/5 to-orange-500/10 z-10"></div>
                            
                            <Image
                                src="/img/space2.png"
                                priority
                                width={1200}
                                height={800}
                                alt="Avatar espacial cerca del sol"
                                className="relative w-full h-auto transform transition-transform duration-500 hover:scale-105"
                                style={{
                                    filter: 'brightness(1.1) contrast(1.2) saturate(1.3)'
                                }}
                            />
                            
                            {/* Efecto de calor */}
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/0 via-orange-400/10 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Destellos solares */}
                        <motion.div 
                            className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full blur-md"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 0.9, 0.6]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div 
                            className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-md"
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        />

                        {/* Texto de "Cerca del sol" */}
                        <motion.div 
                            className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600/90 to-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            <span className="text-xs md:text-sm font-bold text-yellow-100 flex items-center gap-1">
                                <span className="text-yellow-300 animate-pulse">☀️</span>
                               DEV'S
                                <span className="text-yellow-300 animate-pulse ml-1">🔥</span>
                            </span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Texto y botones */}
                <motion.div 
                    className="flex flex-col justify-center max-w-md mx-auto text-center md:text-left w-full md:w-1/2 relative z-10"
                    variants={itemVariants}
                >
                    {/* Badge solar */}
                    <motion.div 
                        className="inline-flex items-center mb-4 md:mb-6 self-center md:self-start bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500/30"
                        variants={itemVariants}
                    >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-xs md:text-sm font-medium text-yellow-300 uppercase tracking-wider">
                            Explorador Espacial
                        </span>
                    </motion.div>

                    <motion.h1 
                        className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold"
                        variants={itemVariants}
                    >
                        Si lo puedes imaginar, <br />
                        <div className="mt-2 h-12 md:h-14 lg:h-16">
                            <TypeAnimation
                                sequence={[
                                    'lo puedes programar',
                                    1200,
                                    'lo puedes mejorar',
                                    1200,
                                    'lo puedes crear',
                                    1200,
                                    'lo puedes desarrollar',
                                    1200,
                                    'lo puedes transformar',
                                    1200,
                                    'lo puedes conquistar',
                                    1200
                                ]}
                                wrapper="span"
                                speed={45}
                                repeat={Infinity}
                                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 font-extrabold"
                            />
                        </div>
                    </motion.h1>

                    <motion.p 
                        className="max-w-[90%] text-center md:text-left mx-auto mb-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed md:mx-0 md:mb-10"
                        variants={itemVariants}
                    ><br /><br />
                        Como desarrollador frontend y backend, navego por el espacio digital creando experiencias que brillan como estrellas en el universo web.
                        <span className="block mt-2 text-yellow-300/80 font-medium">
                            Llevando ideas al límite de la innovación.
                        </span>
                    </motion.p>

                    <motion.div 
                        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start md:gap-8"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="https://github.com/efrain31?tab=repositories"
                            className="px-6 py-3 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-xl font-medium text-sm md:text-base hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="w-5 h-5 group-hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            Explorar Proyectos
                        </motion.a>
                        
                        <motion.a
                            href="https://wa.me/523327409328"
                            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-medium text-sm md:text-base hover:shadow-2xl hover:shadow-red-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg className="w-5 h-5 group-hover:text-yellow-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
                            </svg>
                            Contáctame Ahora
                        </motion.a>
                    </motion.div>

                    {/* Temperatura solar ficticia */}
                    <motion.div 
                        className="mt-8 md:mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-orange-900/30 to-red-900/20 backdrop-blur-sm px-4 py-2 rounded-full self-center md:self-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                       
                    </motion.div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Introduction;