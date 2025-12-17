"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const levels = [
  {
    category: "UI/UX",
    description: "Diseño de interfaces y experiencia de usuario, enfocado en usabilidad y a la experiencia de usuarios.",
    icons: ["/icons/adobexd.webp", "/icons/figma2.webp", "/icons/adobesuite.jpg"],
  },
  {
    category: "Front-End",
    description: "Desarrollo de interfaces web usando React, Next.js y Tailwind CSS. Implementación de sistemas complejos con arquitectura modular.",
    icons: ["/icons/react.webp", "/icons/laravel5.png", "/icons/html.png", ""],
  },
  {
    category: "Back-End",
    description: "Creación de APIs y lógica del servidor con Node.js. Experiencia en bases de datos y escalabilidad mediana .",
    icons: ["/icons/node2.png", "/icons/javascrity.png","/icons/python.png","/icons/Fastapi.webp",]
  },
  {
    category: "Móvil",
    description: "Desarrollo de aplicaciones móviles nativas y multiplataforma utilizando Android.",
    icons: ["/icons/kotlin2.jpg", ],
  },
  {
    category: "BD",
    description: "Gestión y consultas de bases de datos SQL y NoSQL, optimizando rendimiento en grandes volúmenes de datos.",
    icons: ["/icons/mysql2.jpg", "/icons/mongo.png"],
  },
  {
    category: "Servicios",
    description: "Implementación de servicios en la nube y APIs, incluyendo despliegue continuo con herramientas como Firebase y AWS.",
    icons: ["/icons/firebase.png", "/icons/linux.png", "/icons/docker.png"],
  },
];

const PyramidSkills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b text-white">
      <div className="grid max-w-5xl gap-6 sm:grid-cols-2">
        {levels.map((level, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="p-6 border-l-4 border-secondary bg-gray-800/80 rounded-lg shadow-md flex items-center space-x-4 min-h-[150px]"
          >
            {/* Icons */}
            <div className="flex space-x-4">
              {level.icons.map((icon, iconIndex) => (
                <motion.div
                  key={`${index}-${iconIndex}`}
                  className="relative w-16 h-16 p-1 rounded-full"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: iconIndex * 0.2,
                  }}
                >
                  <Image
                    src={icon}
                    alt={`Icon for ${level.category}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold">{level.category}</h3>
              <p className="text-sm text-gray-300">{level.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PyramidSkills;
