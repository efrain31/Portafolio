"use client";

import { ReactNode } from 'react';

interface ScrollableContainerProps {
    children: ReactNode;
    height?: string;
}

const ScrollableContainer = ({ children, height = "500px" }: ScrollableContainerProps) => {
    return (
        <div className="relative w-full">
            {/* Gradientes de fade */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white to-transparent dark:from-gray-900 z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent dark:from-gray-900 z-10 pointer-events-none"></div>
            
            {/* Contenedor scrollable */}
            <div 
                className="w-full overflow-y-auto px-4 py-6"
                style={{ 
                    height: height,
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(100, 100, 100, 0.3) transparent'
                }}
            >
                {children}
            </div>
            
            {/* Estilos inline para scrollbar */}
            <style jsx>{`
                div[style]::-webkit-scrollbar {
                    width: 6px;
                }
                div[style]::-webkit-scrollbar-track {
                    background: transparent;
                }
                div[style]::-webkit-scrollbar-thumb {
                    background-color: rgba(100, 100, 100, 0.3);
                    border-radius: 20px;
                }
                .dark div[style]::-webkit-scrollbar-thumb {
                    background-color: rgba(150, 150, 150, 0.3);
                }
            `}</style>
        </div>
    );
};

export default ScrollableContainer;