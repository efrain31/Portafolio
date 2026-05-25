"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const levels = [
  {
    category: "UI/UX",
    description: "Diseño de interfaces y experiencia de usuario, enfocado en usabilidad y en la experiencia de usuarios.",
    icons: [
      { src: "/icons/adobexd.webp",    label: "Adobe XD" },
      { src: "/icons/figma2.webp",     label: "Figma" },
      { src: "/icons/figma.png",       label: "Figma" },
      { src: "/icons/adobesuite.jpg",  label: "Adobe Suite" },
    ],
    color: "from-orange-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-orange-500/20 to-pink-500/15",
  },
  {
    category: "Front-End",
    description: "Desarrollo de interfaces web usando React, Next.js, Angular y Tailwind CSS con arquitectura modular.",
    icons: [
      { src: "/icons/html.png",        label: "HTML5" },
      { src: "/icons/css.png",         label: "CSS3" },
      { src: "/icons/javascrity.png",  label: "JavaScript" },
      { src: "/icons/react.webp",      label: "React" },
      { src: "/icons/angular.png",     label: "Angular" },
      { src: "/icons/laravel5.png",    label: "Laravel" },
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/15",
  },
  {
    category: "Back-End",
    description: "Creación de APIs REST y lógica de servidor. Experiencia en múltiples lenguajes y frameworks.",
    icons: [
      { src: "/icons/node2.png",       label: "Node.js" },
      { src: "/icons/python.png",      label: "Python" },
      { src: "/icons/Fastapi.webp",    label: "FastAPI" },
      { src: "/icons/java.png",        label: "Java" },
      { src: "/icons/c++.png",         label: "C++" },
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-500/20 to-emerald-500/15",
  },
  {
    category: "Móvil",
    description: "Desarrollo de aplicaciones móviles nativas y multiplataforma para Android e iOS.",
    icons: [
      { src: "/icons/kotlin2.jpg",     label: "Kotlin" },
      { src: "/icons/kotlin.png",      label: "Kotlin" },
      { src: "/icons/fluter.jpg",      label: "Flutter" },
      { src: "/icons/ios.png",         label: "iOS" },
    ],
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-violet-500/15",
  },
  {
    category: "BD",
    description: "Gestión y consultas de bases de datos SQL y NoSQL, optimizando rendimiento en grandes volúmenes.",
    icons: [
      { src: "/icons/mysql2.jpg",      label: "MySQL" },
      { src: "/icons/mysql.png",       label: "MySQL" },
      { src: "/icons/mongo.png",       label: "MongoDB" },
    ],
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-gradient-to-br from-yellow-500/20 to-amber-500/15",
  },
  {
    category: "DevOps & Tools",
    description: "Herramientas de control de versiones, contenedores y despliegue continuo en entornos productivos.",
    icons: [
      { src: "/icons/git.png",         label: "Git" },
      { src: "/icons/git2.png",        label: "GitHub" },
      { src: "/icons/docker.png",      label: "Docker" },
      { src: "/icons/linux.png",       label: "Linux" },
      { src: "/icons/firebase.png",    label: "Firebase" },
    ],
    color: "from-red-500 to-rose-500",
    bgColor: "bg-gradient-to-br from-red-500/20 to-rose-500/15",
  },
];

const PyramidSkills = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative py-16 md:py-24 lg:py-32 ">

      <div className="container max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center mb-6">
            <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">habilidades</span>
            </h2>
            <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-4"></div>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Un recorrido por las tecnologías y herramientas que utilizo para crear soluciones innovadoras
          </p>
        </motion.div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* Borde con gradiente */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${level.color} rounded-2xl opacity-60 blur transition duration-500 group-hover:opacity-100 group-hover:blur-md`}></div>
              
              {/* Tarjeta principal */}
              <div className={`relative p-6 rounded-2xl ${level.bgColor} backdrop-blur-sm border border-gray-700/50 h-full transition-all duration-300`}>
                {/* Encabezado de la tarjeta */}
                <div className="flex items-center justify-between mb-6">
                  <motion.h3 
                    className="text-xl font-bold text-white"
                    animate={{ x: hoveredCard === index ? 5 : 0 }}
                  >
                    {level.category}
                  </motion.h3>
                  <span className="text-xs font-bold text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full">
                    {level.icons.length} tecnologías
                  </span>
                </div>

                {/* Descripción */}
                <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
                  {level.description}
                </p>

                {/* Iconos */}
                <div className="flex flex-wrap gap-3">
                  {level.icons.map((icon, iconIndex) => (
                    <motion.div
                      key={`${index}-${iconIndex}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.08 + iconIndex * 0.04 }}
                      whileHover={{ scale: 1.18, y: -6 }}
                      whileTap={{ scale: 0.93 }}
                      className="relative group/icon"
                      title={icon.label}
                    >
                      {/* Contenedor del icono */}
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-900/70 border border-gray-700/60 flex items-center justify-center p-2 backdrop-blur-sm transition-all duration-300 group-hover/icon:border-white/30 group-hover/icon:bg-gray-800/80 shadow-md">
                        <Image
                          src={icon.src}
                          alt={icon.label}
                          width={40}
                          height={40}
                          className="object-contain w-8 h-8 md:w-9 md:h-9 filter brightness-100 group-hover/icon:brightness-125 transition-all duration-300"
                        />
                        {/* Brillo en hover */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Tooltip con nombre */}
                      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gray-900 border border-gray-700 rounded text-[10px] text-white/80 whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                        {icon.label}
                      </div>

                      {/* Punto gradiente */}
                      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r ${level.color} opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300`} />
                    </motion.div>
                  ))}
                </div>

                {/* Línea decorativa inferior */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCard === index ? "100%" : "30%" }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${level.color} rounded-full`}
                ></motion.div>

                {/* Indicador de hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Número de tarjeta */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-400">#{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota al pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 pt-8 border-t border-gray-700/30"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-blue-400 font-medium">6 categorías</span> • 
            <span className="text-purple-400 font-medium mx-2">{levels.reduce((acc, level) => acc + level.icons.length, 0)} iconos</span> • 
            <span className="text-pink-400 font-medium mx-2">Stack completo</span>
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