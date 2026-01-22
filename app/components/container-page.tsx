"use client";

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ContainerPageProps {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
    withPadding?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    animate?: boolean;
    delay?: number;
}

const ContainerPage = (props: ContainerPageProps) => {
    const { 
        children, 
        className = '', 
        fullWidth = false,
        withPadding = true,
        maxWidth = '2xl',
        animate = true,
        delay = 0
    } = props;

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Mapeo de tamaños máximos
    const maxWidthClasses = {
        sm: 'max-w-3xl',
        md: 'max-w-4xl',
        lg: 'max-w-5xl',
        xl: 'max-w-6xl',
        '2xl': 'max-w-7xl',
        full: 'max-w-full'
    };

    // Clases base
    const baseClasses = `
        w-full
        mx-auto
        ${fullWidth ? 'px-0' : withPadding ? 'px-4 sm:px-6 lg:px-8' : ''}
        ${!fullWidth ? maxWidthClasses[maxWidth] : ''}
        relative
        transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    `;

    const content = (
        <div className={`${baseClasses} ${className}`}>
            {/* Líneas decorativas de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Línea vertical izquierda */}
                
                {/* Puntos decorativos en las esquinas */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-blue-500/20 rounded-full"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-purple-500/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-pink-500/20 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-blue-500/20 rounded-full"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
    );

    if (animate) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.6, 
                    delay,
                    ease: "easeOut"
                }}
                className={`mt-20 md:mt-28 lg:mt-32 pb-20 md:pb-32 ${fullWidth ? '' : 'px-4 sm:px-6'}`}
            >
                {content}
            </motion.div>
        );
    }

    return (
        <div className={`mt-20 md:mt-28 lg:mt-32 pb-20 md:pb-32 ${fullWidth ? '' : 'px-4 sm:px-6'}`}>
            {content}
        </div>
    );
};

export default ContainerPage;