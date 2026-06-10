"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  titleVariants,
  paragraphVariants,

  cardVariants,
  lineVariants,
  highlightVariants
} from "@/app/utils/animation-variants";

const levels = [

  {
    category: "Back-End",
    description: "Creación de APIs REST y lógica de servidor. Experiencia en múltiples lenguajes y frameworks.",
    icons: [
      { src: "/icons/phytonlogo.webp", label: "Python" },
      { src: "/icons/fasapilogo.webp", label: "FastAPI" },
      { src: "/icons/javalogo.webp", label: "Java" },
      { src: "/icons/clogo.webp", label: "C++" },
      { src: "/icons/phplogo.webp", label: "PhP" },
      { src: "/icons/codelogo.webp", label: "CodeNiter" },
      { src: "/icons/node2.png", label: "Node.js" },

    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/15",
  },
  {
    category: "Front-End",
    description: "Desarrollo de interfaces web usando React, Next.js, Angular y Tailwind CSS con arquitectura modular.",
    icons: [
      { src: "/icons/htmllogo.webp", label: "HTML5" },
      { src: "/icons/csslogo.webp", label: "CSS3" },
      { src: "/icons/typilogo.webp", label: "JavaScript" },
      { src: "/icons/react.webp", label: "React" },
      { src: "/icons/angularlogo.webp", label: "Angular" },
      { src: "/icons/lravellogo.webp", label: "Laravel" },
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/15",
  },

  {
    category: "Móvil",
    description: "Desarrollo de aplicaciones móviles nativas y multiplataforma para Android e iOS.",
    icons: [
      { src: "/icons/kotlin.webp", label: "Kotlin" },
      { src: "/icons/xcode.webp", label: "Xcode" },
      { src: "/icons/fluter.webp", label: "Flutter" },
    ],
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-violet-500/15",
  },
  {
    category: "BD",
    description: "Gestión y consultas de bases de datos SQL y NoSQL, optimizando rendimiento en grandes volúmenes.",
    icons: [
      { src: "/icons/posgreslogo.webp", label: "PostgreSQL" },
      { src: "/icons/mysqlogo.webp", label: "MySQL" },
      { src: "/icons/mongologo.webp", label: "MongoDB" },
      { src: "/icons/sqlserver.webp", label: "SQL Server" },
    ],
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-500/15",
  },
  {
    category: "DevOps & Tools",
    description: "Herramientas de control de versiones, contenedores y despliegue continuo en entornos productivos.",
    icons: [
      { src: "/icons/git.png", label: "Git" },
      { src: "/icons/githublogo.webp", label: "GitHub" },
      { src: "/icons/gitlablogo.webp", label: "GitLab" },
      { src: "/icons/docker.png", label: "Docker" },
      { src: "/icons/linuxlogo.webp", label: "Linux" },
      { src: "/icons/cpanel.webp", label: "cPanel" },
    ],
    color: "from-red-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-red-500/20 to-rose-500/15",
  },
  {
    category: "UI/UX",
    description: "Diseño de interfaces y experiencia de usuario, enfocado en usabilidad y en la experiencia de usuarios.",
    icons: [
      
      { src: "/icons/figmalogo.webp", label: "Figma" },
      { src: "/icons/adobe.webp", label: "Adobe Suite" },
       { src: "/icons/slack.webp", label: "Slack" },
    ],
    color: "from-orange-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-pink-500/15",
  },
];

const PyramidSkills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative py-16 md:py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center mb-6">
            <motion.div variants={lineVariants} className="w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></motion.div>
            <motion.h2 variants={titleVariants} className="text-2xl md:text-3xl font-bold text-white">
              Mis <motion.span variants={highlightVariants} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">habilidades</motion.span>
            </motion.h2>
            <motion.div variants={lineVariants} className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-4"></motion.div>
          </div>
          <motion.p variants={paragraphVariants} className="text-gray-300 max-w-2xl mx-auto text-lg">
            Un recorrido por las tecnologías y herramientas que utilizo para crear soluciones innovadoras
          </motion.p>
        </motion.div>

        {/* Secciones alternadas */}
        <div className="space-y-20 md:space-y-28">
          {levels.map((level, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                  {/* Contenido de texto */}
                  <motion.div
                    animate={{ x: hoveredIndex === index ? (isEven ? 10 : -10) : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="space-y-6">
                      {/* Etiqueta */}
                      <div className="flex items-center gap-3">
                        <div className={`h-1 rounded-full ${index % 2 === 0 ? "bg-gradient-to-r from-blue-500 to-cyan-500 w-8" : "bg-gradient-to-r from-purple-500 to-pink-500 w-8"}`}></div>
                        <span className={`text-sm font-bold tracking-widest uppercase ${index % 2 === 0 ? "text-cyan-400" : "text-purple-400"}`}>
                          {level.category}
                        </span>
                      </div>

                      {/* Título */}
                      <motion.h3 variants={titleVariants} className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        {level.category}
                      </motion.h3>

                      {/* Descripción */}
                      <motion.p variants={paragraphVariants} className="text-gray-300 text-lg leading-relaxed max-w-xl">
                        {level.description}
                      </motion.p>

                      {/* Iconos en fila */}
                      <div className="flex flex-wrap gap-2 pt-4">
                        {level.icons.slice(0, 6).map((icon, iconIndex) => (
                          <motion.div
                            key={`${index}-${iconIndex}`}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: iconIndex * 0.05 }}
                            whileHover={{ scale: 1.15, y: -4 }}
                            className="relative group/icon"
                            title={icon.label}
                          >
                            <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${index % 2 === 0 ? "from-blue-500/20 to-cyan-500/20 border border-blue-400/50" : "from-purple-500/20 to-pink-500/20 border border-purple-400/50"} flex items-center justify-center p-2 transition-all duration-300 hover:scale-110`}>
                              <Image
                                src={icon.src}
                                alt={icon.label}
                                width={32}
                                height={32}
                                className="object-contain w-7 h-7 filter brightness-110"
                              />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs text-white/80 whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none">
                              {icon.label}
                            </div>
                          </motion.div>
                        ))}
                        {level.icons.length > 6 && (
                          <div className="text-xs text-gray-500 px-2 py-1">
                            +{level.icons.length - 6} más
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Imagen/Ilustración con efectos espaciales */}
                  <motion.div
                    animate={{ y: hoveredIndex === index ? -10 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`relative h-80 md:h-96 flex items-center justify-center ${isEven ? "" : "lg:col-start-1"}`}
                  >
                    {/* SVG con formas geométricas dinámicas */}
                    <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <filter id={`glow-${index}`}>
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={index % 2 === 0 ? "#0ea5e9" : "#a855f7"} stopOpacity="0.8" />
                          <stop offset="100%" stopColor={index % 2 === 0 ? "#06b6d4" : "#ec4899"} stopOpacity="0.4" />
                        </linearGradient>
                      </defs>

                      {/* Formas geométricas con animación */}
                      {index === 0 && (
                        <>
                          <motion.circle cx="200" cy="120" r="70" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2" filter={`url(#glow-${index})`} animate={{ r: [70, 85, 70] }} transition={{ duration: 4, repeat: Infinity }} />
                          <motion.circle cx="200" cy="120" r="50" fill="none" stroke={index % 2 === 0 ? "#0ea5e9" : "#a855f7"} strokeWidth="1.5" opacity="0.6" animate={{ r: [50, 35, 50] }} transition={{ duration: 3, repeat: Infinity }} />
                          <motion.rect x="80" y="220" width="240" height="120" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2" filter={`url(#glow-${index})`} animate={{ y: [220, 200, 220] }} transition={{ duration: 3.5, repeat: Infinity }} rx="20" />
                          <motion.path d="M 100 280 Q 200 250 300 280" stroke={index % 2 === 0 ? "#06b6d4" : "#ec4899"} strokeWidth="2" fill="none" opacity="0.5" animate={{ d: ["M 100 280 Q 200 250 300 280", "M 100 290 Q 200 260 300 290", "M 100 280 Q 200 250 300 280"] }} transition={{ duration: 3, repeat: Infinity }} />
                        </>
                      )}

                      {index === 1 && (
                        <>
                          <motion.circle cx="100" cy="100" r="60" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2" filter={`url(#glow-${index})`} animate={{ cx: [100, 120, 100] }} transition={{ duration: 4, repeat: Infinity }} />
                          <motion.circle cx="300" cy="100" r="60" fill="none" stroke={index % 2 === 0 ? "#0ea5e9" : "#a855f7"} strokeWidth="2" opacity="0.6" animate={{ cx: [300, 280, 300] }} transition={{ duration: 4, repeat: Infinity }} />
                          <motion.rect x="120" y="200" width="160" height="140" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2" filter={`url(#glow-${index})`} animate={{ rotate: [0, 2, 0] }} transition={{ duration: 3, repeat: Infinity }} rx="15" />
                          <line x1="50" y1="320" x2="350" y2="320" stroke={index % 2 === 0 ? "#06b6d4" : "#ec4899"} strokeWidth="2" opacity="0.4" />
                        </>
                      )}

                      {index === 2 && (
                        <>
                          <motion.polygon points="200,60 280,160 240,280 160,280 120,160" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2.5" filter={`url(#glow-${index})`} animate={{ rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} />
                          <motion.circle cx="200" cy="200" r="40" fill="none" stroke={index % 2 === 0 ? "#0ea5e9" : "#a855f7"} strokeWidth="2" animate={{ r: [40, 55, 40] }} transition={{ duration: 3, repeat: Infinity }} opacity="0.7" />
                          <motion.path d="M 100 300 L 200 320 L 300 300" stroke={`url(#grad-${index})`} strokeWidth="2" fill="none" filter={`url(#glow-${index})`} animate={{ d: ["M 100 300 L 200 320 L 300 300", "M 100 310 L 200 330 L 300 310", "M 100 300 L 200 320 L 300 300"] }} transition={{ duration: 3, repeat: Infinity }} />
                        </>
                      )}

                      {index === 3 && (
                        <>
                          <motion.circle cx="200" cy="200" r="80" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2.5" filter={`url(#glow-${index})`} animate={{ r: [80, 95, 80] }} transition={{ duration: 3.5, repeat: Infinity }} />
                          <motion.circle cx="200" cy="200" r="50" fill="none" stroke={index % 2 === 0 ? "#0ea5e9" : "#a855f7"} strokeWidth="2" animate={{ r: [50, 65, 50] }} transition={{ duration: 2.5, repeat: Infinity }} opacity="0.8" />
                          <motion.circle cx="200" cy="200" r="25" fill="none" stroke={index % 2 === 0 ? "#06b6d4" : "#ec4899"} strokeWidth="1.5" animate={{ r: [25, 35, 25] }} transition={{ duration: 2, repeat: Infinity }} opacity="0.6" />
                          <motion.path d="M 200 120 L 200 280" stroke={`url(#grad-${index})`} strokeWidth="1.5" filter={`url(#glow-${index})`} opacity="0.4" animate={{ y: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
                        </>
                      )}

                      {index === 4 && (
                        <>
                          <motion.rect x="60" y="80" width="280" height="80" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2" filter={`url(#glow-${index})`} animate={{ x: [60, 70, 60] }} transition={{ duration: 4, repeat: Infinity }} rx="10" />
                          <motion.rect x="60" y="200" width="280" height="80" fill="none" stroke={index % 2 === 0 ? "#0ea5e9" : "#a855f7"} strokeWidth="2" animate={{ x: [60, 50, 60] }} transition={{ duration: 4, repeat: Infinity }} opacity="0.7" rx="10" />
                          <motion.line x1="60" y1="160" x2="340" y2="160" stroke={`url(#grad-${index})`} strokeWidth="2" filter={`url(#glow-${index})`} opacity="0.5" animate={{ y: [160, 165, 160] }} transition={{ duration: 3, repeat: Infinity }} />
                        </>
                      )}

                      {index === 5 && (
                        <>
                          <motion.path d="M 100 200 L 150 100 L 200 150 L 250 80 L 300 200 L 250 280 L 200 250 L 150 280 Z" fill="none" stroke={`url(#grad-${index})`} strokeWidth="2" filter={`url(#glow-${index})`} animate={{ rotate: [0, 3, 0] }} transition={{ duration: 4, repeat: Infinity }} style={{ transformOrigin: "200px 180px" }} />
                          <motion.circle cx="200" cy="180" r="35" fill="none" stroke={index % 2 === 0 ? "#0ea5e9" : "#a855f7"} strokeWidth="1.5" animate={{ r: [35, 45, 35] }} transition={{ duration: 3, repeat: Infinity }} opacity="0.6" />
                          <motion.circle cx="200" cy="180" r="15" fill={index % 2 === 0 ? "#0ea5e9" : "#a855f7"} opacity="0.3" animate={{ r: [15, 25, 15] }} transition={{ duration: 2.5, repeat: Infinity }} />
                        </>
                      )}
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Nota al pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 pt-12 border-t border-gray-700/30"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-blue-400 font-medium">6 categorías</span> •
            <span className="text-purple-400 font-medium mx-2">{levels.reduce((acc, level) => acc + level.icons.length, 0)} tecnologías</span> •
            <span className="text-pink-400 font-medium">Stack completo</span>
          </p>
        </motion.div>
      </div>

      {/* Partículas decorativas */}
      <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-blue-500/30 animate-pulse"></div>
      <div className="absolute top-20 right-10 w-3 h-3 rounded-full bg-purple-500/30 animate-pulse delay-100"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 rounded-full bg-pink-500/20 animate-pulse delay-200"></div>
    </div>
  );
};

export default PyramidSkills;