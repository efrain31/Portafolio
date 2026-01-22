"use client"

import Image from "next/image";
import { MotionTransition } from "./transition-component";
import { useEffect, useState } from "react";

// Valores fijos para las partículas para evitar errores de hidratación
const PARTICLE_POSITIONS = [
    { top: "25%", left: "25%", delay: "0s", duration: "3s" },
    { top: "75%", left: "75%", delay: "0.7s", duration: "3.5s" },
    { top: "50%", left: "50%", delay: "1.4s", duration: "4s" },
    { top: "10%", left: "90%", delay: "2.1s", duration: "3.2s" },
    { top: "90%", left: "10%", delay: "2.8s", duration: "3.8s" }
];

export function Avatar() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        const handleMouseMove = (e: MouseEvent) => {
            if (!isClient) return;
            const x = (e.clientX / window.innerWidth - 0.15) * 45;
            const y = (e.clientY / window.innerHeight - 0.15) * 45;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isClient]);

    return (
        <MotionTransition 
            position="bottom" 
            className="relative md:absolute md:bottom-8 md:left-0 z-20"
        >
            {/* Contenedor principal */}
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] mx-auto md:mx-0">
                {/* Efecto de brillo detrás */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-xl animate-pulse"></div>
                
                {/* Efecto de borde animado */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-border p-[2px] animate-spin-slow">
                    <div className="absolute inset-0 rounded-full bg-white"></div>
                </div>

                {/* Contenedor de la imagen con efectos de hover */}
                <div 
                    className="relative w-full h-full rounded-full overflow-hidden border-3 border-white shadow-xl transition-transform duration-300 hover:scale-105"
                    style={isClient ? {
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out'
                    } : {}}
                >
                    {/* Overlay de gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10 z-10"></div>
                    
                    {/* Imagen principal */}
                    <Image
                        src="/img/avatar-1.png"
                        width={600}
                        height={600}
                        alt="Avatar profesional"
                        className={`
                            w-full h-full object-cover object-center
                            transition-all duration-700
                            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                        `}
                        priority
                        quality={95}
                        onLoadingComplete={() => setIsLoaded(true)}
                    />
                    
                    {/* Efecto de brillo al cargar */}
                    {!isLoaded && (
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-full"></div>
                    )}
                </div>

                {/* Elementos decorativos flotantes */}
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-bounce delay-100"></div>
                
                {/* Badge de estado */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white px-2 py-1 rounded-full shadow-md border border-gray-100">
                    <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-medium text-gray-700">Online</span>
                    </div>
                </div>

                {/* Efecto de partículas alrededor - Usar posiciones fijas */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                    {PARTICLE_POSITIONS.map((particle, i) => (
                        <div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-blue-500 rounded-full animate-float"
                            style={{
                                top: particle.top,
                                left: particle.left,
                                animationDelay: particle.delay,
                                animationDuration: particle.duration
                            }}
                        />
                    ))}
                </div>
                
                {/* Línea decorativa hacia el contenido */}
                {isClient && (
                    <div className="absolute hidden md:block -right-8 top-1/2 transform -translate-y-1/2">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                    </div>
                )}
            </div>

            {/* Estilos CSS para animaciones */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 25s linear infinite;
                }
                
                @keyframes float {
                    0%, 100% { 
                        transform: translateY(0) translateX(0);
                        opacity: 0.6;
                    }
                    50% { 
                        transform: translateY(-15px) translateX(5px);
                        opacity: 0.2;
                    }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}</style>
        </MotionTransition>
    );
}