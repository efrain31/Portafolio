"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub?: string;
    urlDemo?: string;
  };
  index: number;
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data, index } = props;
  const { id, title, image, urlGithub, urlDemo } = data;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(false);
  };

  const handleVisitDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (urlDemo && urlDemo !== "#!") {
      window.open(urlDemo, "_blank", "noopener,noreferrer");
    }
  };

  const handleVisitGithub = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (urlGithub && urlGithub !== "#!") {
      window.open(urlGithub, "_blank", "noopener,noreferrer");
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('button')) {
      handleExpand(e);
    }
  };

  useEffect(() => {
  }, [isExpanded]);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const initialRotation = index % 3 === 0 ? -2 : index % 3 === 1 ? 2 : 0;

  const hasDemo = urlDemo && urlDemo !== "#!";
  const hasGithub = urlGithub && urlGithub !== "#!";

  return (
    <>
      <motion.div 
        key={id} 
        initial={{ opacity: 0, y: 30, rotate: initialRotation }}
        whileInView={{ opacity: 1, y: 0, rotate: initialRotation }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ rotate: initialRotation + rotation }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative p-4 border border-gray-200/50 rounded-2xl bg-gradient-to-br from-white/50 to-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group perspective-1000 cursor-pointer"
        onClick={handleContainerClick} 
      >

        <div className="relative transform-gpu" style={{ transform: `translateZ(20px)` }}>
          <div className="mb-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
             
              <motion.div
                animate={{ rotateY: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={7600}
                  className="w-full h-auto rounded-xl transition-all duration-500 group-hover:scale-105"
                />
              </motion.div>
              
              {/* Overlay en hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl flex items-end p-4 pointer-events-none"
              >
                <div className="text-white w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm font-medium">Ver ampliado</span>
                    <motion.svg 
                      animate={{ x: isHovered ? 5 : 0 }}
                      transition={{ repeat: isHovered ? Infinity : 0, duration: 0.8, repeatType: "reverse" }}
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0l3-3m-3 3L7 13" />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Área de botones debajo de la imagen */}
          <motion.div 
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2"
          >
            {/* Botón DEMO (si está disponible) */}
            {hasDemo ? (
              <button
                onClick={handleVisitDemo}
                className="w-full inline-flex items-center justify-center text-sm text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-4 py-3 rounded-xl border border-emerald-700/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-95"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span className="font-medium">Visita el sitio </span>
              </button>
            ) : (
              // Si no hay demo, mostrar botón de expandir como principal
              <button
                onClick={handleExpand}
                className="w-full inline-flex items-center justify-center text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-3 rounded-xl border border-purple-700/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-95"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
                <span className="font-medium">Expandir imagen</span>
              </button>
            )}

            {/* Botón GITHUB (si está disponible) */}
            {hasGithub && (
              <button
                onClick={handleVisitGithub}
                className="w-full inline-flex items-center justify-center text-sm text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black px-4 py-3 rounded-xl border border-gray-900/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-95"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="font-medium">Ver Código</span>
              </button>
            )}

            {/* Botón EXPANDIR (si hay demo o github) */}
            {(hasDemo || hasGithub) && (
              <button
                onClick={handleExpand}
                className="w-full inline-flex items-center justify-center text-sm text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 px-4 py-3 rounded-xl border border-gray-200/50 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-95"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m0 0l3-3m-3 3L7 13" />
                </svg>
                <span className="font-medium">Ver detalles</span>
              </button>
            )}
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/20">
            {/* Botón de cerrar */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-6 z-[10000] w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            >
              <span className="text-2xl font-bold">✕</span>
            </button>

            {/* Botón de DEMO en vista expandida (si está disponible) */}
            {hasDemo && (
              <button
                onClick={handleVisitDemo}
                className="absolute top-6 right-24 z-[10000] inline-flex items-center justify-center text-sm text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-4 py-2 rounded-full border border-emerald-700/50 shadow-2xl hover:scale-105 transition-transform"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Ver Demo
              </button>
            )}

            {/* Botón de GITHUB en vista expandida (si está disponible) */}
            {hasGithub && (
              <button
                onClick={handleVisitGithub}
                className={`absolute top-6 ${
                  hasDemo ? 'right-44' : 'right-24'
                } z-[10000] inline-flex items-center justify-center text-sm text-white bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black px-4 py-2 rounded-full border border-gray-900/50 shadow-2xl hover:scale-105 transition-transform`}
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Ver Código
              </button>
            )}
           
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={handleClose}
            >
              <Image
                src={image}
                alt={`Expandido - ${title}`}
                width={1400}
                height={100}
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-3xl"
                priority
              />
            </div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </>
  );
};

export default PortfolioBox;