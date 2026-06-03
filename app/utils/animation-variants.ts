import { Variants } from "framer-motion";

// Títulos - Deslizar desde izquierda + rotación
export const titleVariants: Variants = {
  hidden: { opacity: 0, x: -50, rotateY: 90 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Subtítulos - Deslizar desde derecha con fade
export const subtitleVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Párrafos - Aparecer de abajo hacia arriba
export const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Textos destacados - Escalado + glow
export const highlightVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    scale: 1.05,
    textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
    transition: { duration: 0.3 }
  }
};

// Listas - Aparecer en cascada
export const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Botones - Bounce o pulse
export const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    }
  },
  hover: {
    scale: 1.08,
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.95 }
};

// Iconos - Rotación con fade
export const iconVariants: Variants = {
  hidden: { opacity: 0, rotate: -90 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    rotate: 15,
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};

// Cards/Contenedores - Aparecer con elevación
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.3 }
  }
};

// Líneas decorativas - Expandir desde centro
export const lineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Backgrounds/Overlays - Fade suave
export const backgroundVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

// Texto que se revela carácter por carácter
export const revealVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

// Entrada con movimiento en perspectiva 3D
export const perspective3DVariants: Variants = {
  hidden: { opacity: 0, rotateX: -20, z: -100 },
  visible: {
    opacity: 1,
    rotateX: 0,
    z: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Entrada con bounce
export const bounceInVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      duration: 0.8
    }
  }
};
