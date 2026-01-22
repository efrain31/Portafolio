"use client";

import { useEffect, useState } from 'react';

const TerminalDisplay = () => {
    const [lines, setLines] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const terminalLines = [
        "// MIS SERVICIOS DE DESARROLLO WEB",
        "const services = {",
        "  frontend: [",
        "    'Desarrollo Frontend con React & Next.js',",
        "    'Interfaces responsivas y optimizadas para móviles',",
        "    'Optimización de rendimiento web (Core Web Vitals)',",
        "    'Integración de APIs REST & GraphQL',",
        "    'SEO técnico y estratégico',",
        "    'Animaciones y micro-interacciones',",
        "  ],",
        "  backend: [",
        "    'Desarrollo Backend con FastAPI & Node.js',",
        "    'APIs escalables, seguras y documentadas',",
        "    'Bases de datos SQL (PostgreSQL, MySQL) & NoSQL (MongoDB)',",
        "    'Autenticación JWT, OAuth2 y autorización',",
        "    'Arquitectura de microservicios',",
        "    'WebSockets y comunicación en tiempo real',",
        "  ],",
        "  devops: [",
        "    'Despliegue en la nube (AWS, Vercel, Heroku)',",
        "    'CI/CD pipelines automatizados',",
        "    'Dockerización y contenedores',",
        "    'Manejo de servidores y balanceo de carga',",
        "    'Monitoreo y logging',",
        "    'Backups y recuperación de desastres',",
        "  ],",
        "  fullstack: [",
        "    'Desarrollo completo de aplicaciones web',",
        "    'Arquitectura de software escalable',",
        "    'Testing automatizado (Unit, Integration, E2E)',",
        "    'Mantenimiento y optimización continua',",
        "    'Consultoría técnica y mentoría',",
        "  ]",
        "};",
        "",
        "console.log('🚀 SERVICIOS CARGADOS EXITOSAMENTE');",
        "console.log('📞 Contacto: +52 3327409328');",
        "console.log('💼 Portafolio disponible para revisión');"
    ];

    useEffect(() => {
        if (currentIndex >= terminalLines.length) {
            setIsComplete(true);
            return;
        }

        const timer = setTimeout(() => {
            setLines(prev => [...prev, terminalLines[currentIndex]]);
            setCurrentIndex(prev => prev + 1);
        }, 80); 

        return () => clearTimeout(timer);
    }, [currentIndex, terminalLines]);

    const getLineColor = (line: string) => {
        if (!line) return 'text-gray-500';
        if (line.startsWith('//')) return 'text-gray-500';
        if (line.includes("'")) return 'text-yellow-300';
        if (line.includes('console.log')) return 'text-green-400';
        if (line.includes('const') || line.includes('{') || line.includes('}') || line.includes('[') || line.includes(']')) 
            return 'text-blue-400';
        return 'text-white';
    };

    const showCursor = !isComplete && currentIndex < terminalLines.length;

    return (
        <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border-2 border-gray-00/70 overflow-hidden shadow-3xl w-full">
            {/* Barra superior de VS Code */}
            <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 px-8 py-4 border-b-2 border-gray-700/70">
                <div className="flex items-center space-x-4">
                    <div className="w-5 h-5 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer shadow-lg"></div>
                    <div className="w-5 h-5 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg"></div>
                    <div className="w-5 h-5 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer shadow-lg"></div>
                </div>
                <div className="text-lg text-gray-200 font-mono font-medium tracking-wide">
                    🚀 TERMINAL ~/services.js
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
            </div>

            {/* Barra de pestañas */}
            <div className="flex items-center bg-gray-800/90 px-6 py-3 border-b border-gray-700/60">
                <div className="flex items-center px-6 py-3 bg-gray-900 rounded-t-xl border-2 border-b-0 border-gray-700/60 shadow-inner">
                    <svg className="w-7 h-7 text-blue-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                    <span className="text-xl text-gray-100 font-mono font-bold tracking-wider">SERVICES.JS</span>
                    <span className="ml-6 text-gray-500 text-2xl hover:text-gray-300 cursor-pointer transition-colors">×</span>
                </div>
                <div className="flex items-center px-6 py-3 ml-6 hover:bg-gray-700/50 rounded-xl cursor-pointer transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base text-gray-400 font-mono font-medium">TERMINAL</span>
                </div>
            </div>

            {/* Área de contenido de la terminal */}
            <div className="p-8 font-mono bg-gray-900/90 min-h-[500px] max-h-[600px] overflow-y-auto">
                {/* Línea de comando inicial */}
                <div className="flex items-center mb-6 bg-gray-800/50 p-4 rounded-xl border-l-4 border-green-500">
                    <span className="text-green-400 mr-4 font-bold text-2xl">$</span>
                    <span className="text-blue-400 mr-4 text-2xl font-semibold">node</span>
                    <span className="text-yellow-400 text-2xl font-bold tracking-wider">services.js</span>
                    <span className="ml-8 text-gray-400 text-lg animate-pulse flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
                        ejecutando servicios...
                    </span>
                </div>

                {/* Líneas de código con efecto de escritura */}
                <div className="space-y-3 mt-6">
                    {lines.map((line, index) => {
                        if (line === "") return <div key={index} className="h-6"></div>;
                        
                        return (
                            <div key={index} className="flex items-start group hover:bg-gray-800/40 px-4 py-3 rounded-xl transition-all duration-300">
                                <span className="text-gray-500 mr-6 select-none w-10 text-right text-xl font-bold">
                                    {index + 1}
                                </span>
                                <span className={`${getLineColor(line)} font-mono text-xl leading-relaxed tracking-wide group-hover:tracking-wider transition-all`}>
                                    {line}
                                </span>
                            </div>
                        );
                    })}
                    
                    {showCursor && (
                        <div className="flex items-start px-4 py-3">
                            <span className="text-gray-500 mr-6 select-none w-10 text-right text-xl font-bold">
                                {lines.length + 1}
                            </span>
                            <span className="text-white font-mono text-2xl">
                                <span className="inline-block w-3 h-8 bg-gray-300 animate-pulse ml-1 rounded-md"></span>
                            </span>
                        </div>
                    )}

                    {isComplete && (
                        <>
                            <div className="flex items-start mt-10 px-4 py-3 bg-gradient-to-r from-green-900/20 to-transparent rounded-xl border-l-8 border-green-500">
                                <span className="text-green-400 mr-6 select-none w-10 text-right text-3xl font-bold">
                                    ✓
                                </span>
                                <div>
                                    <span className="text-green-300 font-mono text-2xl font-bold tracking-wider">
                                        ✅ PROCESO COMPLETADO EXITOSAMENTE
                                    </span>
                                    <span className="text-gray-400 font-mono text-lg block mt-2">
                                        Todos los servicios han sido cargados y están listos para su implementación
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-start mt-8 px-4 py-4 bg-gradient-to-r from-blue-900/30 to-transparent rounded-2xl border-2 border-blue-500/30">
                                <span className="text-green-400 mr-5 font-mono text-3xl font-bold">$</span>
                                <div>
                                    <span className="text-gray-100 font-mono text-2xl font-medium block mb-2">
                                     ¿LISTO PARA COMENZAR TU PROYECTO?
                                    </span>
                                  
                                    <span className="text-gray-500 font-mono text-lg block mt-1">
                                        O contáctame directamente para una consulta gratuita
                                    </span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* Barra inferior de estado */}
            <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 px-8 py-4 border-t-2 border-gray-700/70 text-base">
                <div className="flex items-center space-x-10">
                    <div className="flex items-center text-gray-200">
                        <svg className="w-7 h-7 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="font-bold text-lg">JAVASCRIPT</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                        <svg className="w-7 h-7 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-bold text-lg">{lines.length}/{terminalLines.length} LÍNEAS</span>
                    </div>
                    <div className="flex items-center text-gray-200">
                        <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                        <span className="font-bold text-lg">CONECTADO • {lines.length} LÍNEAS/S</span>
                    </div>
                </div>
                <div className="text-gray-300">
                    <span className="font-mono font-bold text-lg tracking-wider">UTF-8 • LATINOAMÉRICA</span>
                </div>
            </div>
        </div>
    );
};

export default TerminalDisplay;