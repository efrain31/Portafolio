"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    description?: string;
    techStack?: string[];
    image: string;
    urlGithub?: string;
    urlDemo?: string;
  };
  index: number;
}

const PortfolioBox = ({ data, index }: PortfolioBoxProps) => {
  const { id, title, description, techStack, image, urlGithub, urlDemo } = data;
  const [isExpanded, setIsExpanded] = useState(false);

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
        className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-400 cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        {/* Imagen */}
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-indigo-700 transition-colors duration-300">
            {title}
          </h3>

          {description && (
            <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
              {description}
            </p>
          )}

          {techStack && techStack.length > 0 && (
            <p className="text-sm text-gray-700 mt-auto">
              <span className="font-semibold">Tech stack : </span>
              <span className="text-indigo-500">{techStack.join(", ")}</span>
            </p>
          )}

          {/* Links */}
          <div className="flex items-center gap-5 pt-1 border-t border-gray-100 mt-1">
            {hasDemo ? (
              <button
                type="button"
                onClick={openDemo}
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200 underline underline-offset-2 decoration-transparent hover:decoration-indigo-400"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Live Preview
              </button>
            ) : (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 cursor-default"
                disabled
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Sin demo
              </button>
            )}

            {hasGithub && (
              <button
                type="button"
                onClick={openGithub}
                className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200 underline underline-offset-2 decoration-transparent hover:decoration-indigo-400"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </button>
            )}
          </div>
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
