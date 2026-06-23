"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    description?: string;
    techStack?: string[];
    image: string;
    images?: string[];
    urlGithub?: string;
    urlDemo?: string;
  };
  index: number;
}

const PortfolioBox = ({ data, index }: PortfolioBoxProps) => {
  const { id, title, description, techStack, image, images, urlGithub, urlDemo } = data;
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = images && images.length > 0 ? images : [image];
  const currentImage = imageList[currentImageIndex];
  const [isScrolling, setIsScrolling] = useState(false);

  // Auto-advance carousel every 10 seconds, but pause during scroll
  useEffect(() => {
    if (imageList.length <= 1 || isScrolling) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === imageList.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [imageList.length, isScrolling]);

  // Detect when user is scrolling
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);


  const hasDemo = urlDemo && urlDemo !== "#!";
  const hasGithub = urlGithub && urlGithub !== "#!";

  const openDemo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasDemo) window.open(urlDemo, "_blank", "noopener,noreferrer");
  };

  const openGithub = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasGithub) window.open(urlGithub, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <motion.article
        key={id}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
        onClick={() => setIsExpanded(true)}
      >
        {/* Difuminación azul de fondo */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-400 pointer-events-none rounded-3xl"
          style={{
            background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.6), transparent 70%)"
          }}
        />
        {/* Imagen con carrusel */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <Image
            src={currentImage}
            alt={title}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Indicadores del carrusel */}
          {imageList.length > 1 && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Controles de navegación */}
          {imageList.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) =>
                    prev === 0 ? imageList.length - 1 : prev - 1
                  );
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all"
                aria-label="Imagen anterior"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) =>
                    prev === imageList.length - 1 ? 0 : prev + 1
                  );
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all"
                aria-label="Imagen siguiente"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Gradiente azul navy en la parte inferior */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 50%, transparent 100%)"
          }}
        />

        {/* Bookmark icon */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(true);
          }}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 border border-white/40 text-white flex items-center justify-center transition-all"
          aria-label="Ver detalles"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
          </svg>
        </button>

        {/* Contenido superpuesto */}
        <div className="absolute bottom-0 left-0 right-0 p-5 space-y-4 z-20">
          {/* Encabezado destacado */}
          <div className="space-y-2">
            <h3 className="text-2xl md:text-xl font-bold text-white leading-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm md:text-xs text-white/80 leading-relaxed line-clamp-3">
                {description}
              </p>
            )}
          </div>

          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {techStack.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/20 border border-white/40 text-white font-semibold hover:bg-white/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Botón principal */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (hasDemo) {
                openDemo(e);
              } else {
                setIsExpanded(true);
              }
            }}
            className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 rounded-full text-sm transition-all hover:scale-105"
          >
            {hasDemo ? " IR a Web" : "Ver Proyecto"}
          </button>
        </div>
      </motion.article>

      {/* Modal expandido */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Proyecto: ${title}`}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
            onClick={() => setIsExpanded(false)}
          >
            {/* Barra superior */}
            <div
              className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-white/60 text-sm font-medium">{title}</span>
              {hasDemo && (
                <button
                  type="button"
                  onClick={openDemo}
                  className="flex items-center gap-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Preview
                </button>
              )}
              {hasGithub && (
                <button
                  type="button"
                  onClick={openGithub}
                  className="flex items-center gap-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </button>
              )}
            </div>

            {/* Botón cerrar */}
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-label="Cerrar vista expandida"
              className="absolute top-5 right-5 z-[10000] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Imagen expandida */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-14"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={image}
                alt={`Expandido — ${title}`}
                width={1400}
                height={900}
                className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioBox;
