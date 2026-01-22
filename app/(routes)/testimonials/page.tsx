"use client";

import PyramidSkills from "@/app/components/pyramid-skills";
import TransitionPage from "@/app/components/transition-page";
import { CoverParticles } from "@/app/components/cover.particle";
import { motion } from "framer-motion";
import ContainerPage from "@/app/components/container-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CoverParticles />
      
      <ContainerPage 
        maxWidth="xl"
        animate={true}
        delay={0.2}
        className="relative z-10"
        withPadding={false}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex flex-col"
        >
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-24 md:pt-32 pb-12 md:pb-16 text-center"
          >
            <div className="max-w-3xl mx-auto px-4">
              <div className="inline-flex items-center mb-6">
                <span className="text-sm font-medium text-white-500 uppercase tracking-wider">
                  Habilidades
                </span>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white-900 mb-6">
                Mi{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  stack tecnológico
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text--600 leading-relaxed max-w-2xl mx-auto"
              >
                Un conjunto cuidadosamente seleccionado de tecnologías y herramientas 
                que utilizo para crear soluciones eficientes y escalables.
              </motion.p>
            </div>
          </motion.div>

         
          <div className="flex-1 relative">
            {/* FondO
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent"></div> */}
            
            {/* Componente PyramidSkills centrado */}
            <div className="relative w-full max-w-6xl mx-auto px-4">
              <PyramidSkills />
            </div>
          </div>

         
          <div className="h-20 md:h-32"></div>
        </motion.div>
      </ContainerPage>
    </>
  );
};

export default ServicesPage;