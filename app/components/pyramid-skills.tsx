"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const levels = [
  {
    category: "UI/UX",
    description: "Diseño de interfaces y experiencia de usuario, enfocado en usabilidad y a la experiencia de usuarios.",
    icons: ["/icons/adobexd.webp", "/icons/figma2.webp", "/icons/adobesuite.jpg"],
    color: "from-orange-500 to-pink-500",
    bgColor: "bg-gradient-to-r from-orange-500/10 to-pink-500/10",
  },
  {
    category: "Front-End",
    description: "Desarrollo de interfaces web usando React, Next.js y Tailwind CSS. Implementación de sistemas complejos con arquitectura modular.",
    icons: ["/icons/react.webp", "/icons/laravel5.png", "/icons/html.png"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
  },
  {
    category: "Back-End",
    description: "Creación de APIs y lógica del servidor con Node.js. Experiencia en bases de datos y escalabilidad mediana.",
    icons: ["/icons/node2.png", "/icons/javascrity.png", "/icons/python.png", "/icons/Fastapi.webp"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
  },
  {
    category: "Móvil",
    description: "Desarrollo de aplicaciones móviles nativas y multiplataforma utilizando Android.",
    icons: ["/icons/kotlin2.jpg"],
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-r from-purple-500/10 to-violet-500/10",
  },
  {
    category: "BD",
    description: "Gestión y consultas de bases de datos SQL y NoSQL, optimizando rendimiento en grandes volúmenes de datos.",
    icons: ["/icons/mysql2.jpg", "/icons/mongo.png"],
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-gradient-to-r from-yellow-500/10 to-amber-500/10",
  },
  {
    category: "Servicios",
    description: "Implementación de servicios en la nube y APIs, incluyendo despliegue continuo con herramientas como Firebase y AWS.",
    icons: ["/icons/firebase.png", "/icons/linux.png", "/icons/docker.png", "/icons/git.png"],
    color: "from-red-500 to-rose-500",
    bgColor: "bg-gradient-to-r from-red-500/10 to-rose-500/10",
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

                {/* Iconos con efecto mejorado */}
                <div className="flex flex-wrap gap-3">
                  {level.icons.map((icon, iconIndex) => (
                    <motion.div
                      key={`${index}-${iconIndex}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.1 + iconIndex * 0.05 }}
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/icon"
                    >
                      {/* Fondo del icono */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl blur-sm opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Contenedor del icono */}
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center p-2 backdrop-blur-sm transition-all duration-300 group-hover/icon:border-gray-600">
                        <Image
                          src={icon}
                          alt={`Icon ${iconIndex + 1} for ${level.category}`}
                          width={40}
                          height={40}
                          className="object-contain w-8 h-8 md:w-10 md:h-10 filter brightness-100 group-hover/icon:brightness-125 transition-all duration-300"
                        />
                        
                        {/* Efecto de brillo en hover */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Punto decorativo */}
                      <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gradient-to-r ${level.color} opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300`}></div>
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
            <span className="text-purple-400 font-medium mx-2">{levels.reduce((acc, level) => acc + level.icons.length, 0)} tecnologías</span> • 
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