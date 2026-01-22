"use client";

import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
// import { useTheme } from "next-themes"; // Si usas next-themes para modo claro/oscuro

export const CoverParticles = () => {
    const [init, setInit] = useState(false);
    const [mounted, setMounted] = useState(false);
    // const { theme } = useTheme(); // Descomenta si usas next-themes

    useEffect(() => {
        setMounted(true);
    }, []);

    // Inicializar el motor de partículas
    useEffect(() => {
        const initializeParticles = async () => {
            try {
                await initParticlesEngine(async (engine) => {
                    await loadSlim(engine);
                });
                setInit(true);
            } catch (error) {
                console.error("Error initializing particles:", error);
            }
        };

        initializeParticles();
    }, []);

    // Configuración mejorada de partículas con tipos correctos
    const particlesOptions: ISourceOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: ["connect", "repulse", "bubble"],
                    parallax: {
                        enable: true,
                        smooth: 10,
                        force: 60
                    }
                },
                resize: {
                    enable: true,
                    delay: 0.5
                }
            },
            modes: {
                push: {
                    quantity: 4,
                    groups: ["click"],
                },
                repulse: {
                    distance: 150,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad"
                },
                connect: {
                    distance: 120,
                    links: {
                        opacity: 0.8
                    },
                    radius: 200
                },
                bubble: {
                    distance: 200,
                    size: 10,
                    duration: 2,
                    opacity: 0.8,
                    color: "#3b82f6"
                },
                grab: {
                    distance: 180,
                    links: {
                        opacity: 0.5
                    }
                }
            }
        },
        particles: {
            color: {
                value: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"],
            },
            links: {
                color: {
                    value: "#ffffff"
                },
                distance: 120,
                enable: true,
                opacity: 0.4,
                width: 1.5,
                frequency: 1,
                triangles: {
                    enable: true,
                    frequency: 1
                },
                warp: true
            },
            move: {
                angle: {
                    offset: 0,
                    value: 90
                },
                attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                        x: 3000,
                        y: 3000
                    }
                },
                center: {
                    x: 50,
                    y: 50,
                    mode: "percent", // Usar "percent" que es el valor válido
                    radius: 0
                },
                decay: 0,
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50
                },
                outModes: {
                    default: "out",
                    bottom: "out",
                    left: "out",
                    right: "out",
                    top: "out"
                },
                random: true,
                speed: {
                    min: 0.1,
                    max: 1.5
                },
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    width: 1920,
                    height: 1080
                },
                value: 120
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 0.5
                },
                animation: {
                    enable: true,
                    speed: 1,
                    sync: false,
                }
            },
            shape: {
                type: ["circle", "triangle", "polygon"],
                options: {
                    polygon: {
                        sides: 6
                    },
                    triangle: {
                        sides: 3
                    }
                }
            },
            size: {
                value: {
                    min: 1,
                    max: 8
                },
                animation: {
                    enable: true,
                    speed: 4,
                    sync: false,
                }
            },
            stroke: {
                width: 0
            }
        },
        detectRetina: true,
        pauseOnBlur: true,
        pauseOnOutsideViewport: true,
        smooth: true
    };

    if (!mounted || !init) {
        return (
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10 animate-pulse" />
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Particles
                id="tsparticles"
                className="absolute inset-0"
                options={particlesOptions}
            />
            {/* Capa de gradiente adicional para mejorar el efecto */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
            {/* Efectos de iluminación */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
    );
};