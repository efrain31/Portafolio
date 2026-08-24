import { BookText, CodeSquare, UserRound, Crop, Pencil, Computer, Book, Phone, Workflow, ArrowRight } from "lucide-react";

const GithubIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export const socialNetworks = [
    {
        id: 1,
        logo: <GithubIcon />,
        src: "https://github.com/efrain31",
    },
    {
        id: 2,
        logo: <LinkedinIcon />,
        src: "https://www.linkedin.com/in/ulises-efrain-hernandez-zu%C3%B1iga-3193192b4/",
    },
    {
        id: 4,
        logo: <Phone size={30} strokeWidth={1} />,
        src: "https://wa.me/523327409328",
    },
];


export const itemsNavbar = [

    {
        id: 2,
        title: "Trayectoria",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Habilidades",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Proyectos",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Staks",
        icon: <Workflow size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Project Manager & Full-Stack Developer / Mid",
        subtitle: "Geovoy",
        description: "Desarrollo Full Stack en Back-end y Front-end en gestion de proyectos con gps , lectoras (transporte de personal)",
        date: "Ene 2024 / en curso",
        duration: "En curso",
        status: "Activo",
        achievement: "Implementación de sistema GPS en tiempo real",
    },
    {
        id: 2,
        title: "Mid-Level Developer (Backend and DevOps)",
        subtitle: "Nubitec",
        description: "Desarrollo Full Stack en Back-end y Front-end en gestion de licencias gubertamentales, seriadas y verficadas para su control y distribuicion ",
        date: "Non 2022 / Dic 2024",
        duration: "2 años",
        status: "Completado",
        achievement: "Certificación de licencias gubernamentales",
    },
    {
        id: 3,
        title: "Junior Developer (Backend and Frontend)",
        subtitle: "BlackFord",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Jul 2021 / Oct 2022",
        duration: "1 año y 4 meses",
        status: "Completado",
        achievement: "Diseño de 15+ interfaces de usuario",
    },
    {
        id: 4,
        title: "UX/UI Digital Interface Designer",
        subtitle: "Cre-art",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2020 / Jun 2021",
        duration: "12 meses",
        status: "Completado",
        achievement: "Rediseño completo de plataforma digital",
    },
    {
        id: 5,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "Desarrollos personales",
        description: "Como desarrollador Front-end, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: " 2019 /",
        duration: "5 años",
        status: "En progresión",
        achievement: "10+ proyectos personales desarrollados",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 8,
        text: "Experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 15,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 30,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 10,
        text: "Lenguajes en uso",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
     {
        icon: <Pencil />,
        title: "Arquitectura ",
        //(SE USAR VARUABLES Y FUNCIONES)
        description: "Diseño arquitecturas basadas en abstracciones reutilizables",
    }, {
        icon: <Pencil />,
        //(CONECTAR APIS)
        title: " Integraciones",
        description: "Implemento integraciones entre sistemas distribuidos",
    }, {
        icon: <Pencil />,
        //(ARREGLO BUS)
        title: "Insidencias",
        description: "Resuelvo insidencias criticas en entornos productivos",
    },
     {
        icon: <Pencil />,
        //depoys
        title: "Liberaciones",
        description: "Orquesto procesos de liberacion de software en  servidores locales o externos",
    },
    {
        icon: <Pencil />,
        //CONSUTAS SQL 
        title: "Optimizacion",
        description: "Optimizacion de pertinencias de datos mediante consultas estructuradas",
    },{
        icon: <Pencil />,
        //SUBIR CODIGO PUSH 
        title: "Git's",
        description: "Ejecuto pipelines de entrega continua",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Desarrollo Back-end",
        description: "Desarrollo y soporte  de apis y arquitecturas de diseños logicos ",
    },
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad para una marca sólida coherente,diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <ArrowRight className="animate-bounce" />,
        title: "Ver más",
        description: "Desliza para descubrir más servicios",
    },
];

export const dataPortfolio = [
    {
        id: 6,
        title: "Portafolio Fotográfico",
        description: "Sitio web de portafolio para fotógrafo profesional con galería dinámica y diseño responsivo.",
        category: "web",
        techStack: ["React", "Next.js", "Tailwind CSS"],
        images: ["/img/ALEV2.png","/img/ALEV4.png","/img/ALEV3.png","/img/ALEV5.png"],
        urlGithub: "#!",
        urlDemo: "https://ale-vazquez.vercel.app/",
    },

     {
        id: 9,
        title: "ERP Aeropuerto Panamá",
        description: "Sistema de gestión empresarial con control de proyectos GPS y lectoras para transporte de personal.",
        category: "web",
        techStack: ["PHP", "JavaScript", "MySQL"],
        images: ["/img/p1.png","/img/p2.png","/img/p3.png","/img/p4.png"],
        imagesAfter: ["/img/a2.png","/img/a2.png","/img/a3.png","/img/a4.png","/img/a5.png","/img/a6.png"],
        urlGithub: "#!",
        urlDemo: "https://lectorasbusmenpa.geovoy.com/",
    },
    {
        id: 7,
        title: "CRM Empresarial",
        description: "Sistema de gestión empresarial con control de proyectos GPS y lectoras para transporte de personal.",
        category: "web",
        techStack: ["PHP", "JavaScript", "MySQL"],
        images: ["/img/GEOVOY.png","/img/GEOVOY2.png","/img/GEOVOY3.png","/img/GEOVOY4.png"],
        imagesAfter: ["/img/a15.png","/img/a16.png","/img/a17.png","/img/a18.png","/img/a189.png"],
        urlGithub: "#!",
        urlDemo: "https://www.geovoy.com/app/",
    },
    {
        id: 8,
        title: "Consumo de APIs Externas",
        description: "Plataforma de visualización de rutas en tiempo real integrando APIs externas de geolocalización.",
        category: "web",
        techStack: ["PHP", "JavaScript", "Vite"],
        images: ["/img/rutas1.png","/img/rutas2.png","/img/rutas3.png"],
        urlGithub: "#!",
        urlDemo: "https://rutasfoxconnbusmen.geovoy.com/",
    },
   {
        id: 2,
        title: "Ecommerce — GoodPet",
        description: "Tienda en línea para mascotas con catálogo de productos, carrito y diseño moderno.",
        category: "web",
        techStack: ["React", "Next.js", "Tailwind CSS"],
        image: "/img/goodpet.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 1,
        title: "Landing Page — Acuaclub",
        description: "Landing page interactiva con integración de hardware Arduino para control de sensores.",
        category: "web",
        techStack: ["Angular", "CSS", "Arduino"],
        image: "/img/Acuaclub.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Ecommerce — Cosmética",
        description: "Tienda online de productos de belleza con panel de administración y gestión de inventario.",
        category: "web",
        techStack: ["Laravel", "PHP", "MySQL"],
        image: "/img/laravel-cosmetic.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Landing Page — Taekwondo",
        description: "Landing page para academia de artes marciales con sección de clases y registro de alumnos.",
        category: "web",
        techStack: ["Angular", "HTML", "CSS"],
        image: "/img/tecnokwon.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    //MOVILES
     {
        id: 10,
        title: "Aplicación Móvil Aeropuerto de Panamá",
        description: "App Android nativa para gestión de pedidos con interfaz declarativa en Jetpack Compose.",
        category: "mobile",
        isMobile: true,
        techStack: ["Swifter", "Kotlin", "Flutter"],
        image: "",
        images: ["/img/moviles/app1/antes/m (0).png","/img/moviles/app1/antes/m (1).jpeg","/img/moviles/app1/antes/m (2).jpeg","/img/moviles/app1/antes/m (3).jpeg","/img/moviles/app1/antes/m (4).jpeg","/img/moviles/app1/antes/m (5).jpeg"],
        imagesAfter: ["/img/moviles/app1/despues/n (0).jpeg","/img/moviles/app1/despues/n (1).jpeg","/img/moviles/app1/despues/n (2).jpeg","/img/moviles/app1/despues/n (4).jpeg","/img/moviles/app1/despues/n (5).jpeg","/img/moviles/app1/despues/n (6).jpeg","/img/moviles/app1/despues/n (7).jpeg","/img/moviles/app1/despues/n (8).jpeg","/img/moviles/app1/despues/n (9).jpeg","/img/moviles/app1/despues/n (10).jpeg"],
        urlGithub: "#!",
        urlDemo: "#!",
    }, {
        id:11,
        title: "Aplicación Móvil Monitoreo de Rutas",
        description: "App Android nativa para gestión de pedidos con interfaz declarativa en Jetpack Compose.",
        category: "mobile",
        isMobile: true,
        techStack: ["Swifter", "Kotlin", "Flutter"],
        image: "",
        images: ["/img/moviles/app2/antes/m (6).png","/img/moviles/app2/antes/m (7).jpeg","/img/moviles/app2/antes/m (8).jpeg","/img/moviles/app2/antes/m (9).jpeg","/img/moviles/app2/antes/m (10).jpeg","/img/moviles/app2/antes/m (11).jpeg","/img/moviles/app2/antes/m (12).jpeg"],
        imagesAfter: [""],
        urlGithub: "#!",
        urlDemo: "#!",
    }, {
        id: 12,
        title: "Aplicación Móvil Monitoreo de transporte de personal",
        description: "App Android nativa para gestión de pedidos con interfaz declarativa en Jetpack Compose.",
        category: "mobile",
        isMobile: true,
        techStack: ["Kotlin", "Jetpack Compose", "Android"],
        image: "",
        images: ["/img/moviles/app3/antes/m (19).png","/img/moviles/app3/antes/m (20).jpeg","/img/moviles/app3/antes/m (21).jpeg","/img/moviles/app3/antes/m (22).jpeg","/img/moviles/app3/antes/m (23).jpeg","/img/moviles/app3/antes/m (26).jpeg"],
        imagesAfter:["/img/moviles/app3/despues/n (7).jpeg","/img/moviles/app3/despues/n (8).jpeg","/img/moviles/app3/despues/n (10).jpeg","/img/moviles/app3/despues/n (11).jpeg","/img/moviles/app3/despues/n (12).jpeg","/img/moviles/app3/despues/n (13).jpeg","/img/moviles/app3/despues/n (14).jpeg","/img/moviles/app3/despues/n (16).jpeg","/img/moviles/app3/despues/n (17).jpeg","/img/moviles/app3/despues/n (18).jpeg","/img/moviles/app3/despues/n (19).jpeg","/img/moviles/app3/despues/n (20).jpeg","/img/moviles/app3/despues/n (21).jpeg","/img/moviles/app3/despues/n (22).jpeg","/img/moviles/app3/despues/n (23).jpeg"],
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 13,
        title: "Aplicación Móvil Tienda de mascotas",
        description: "App Android nativa para gestión de pedidos con interfaz declarativa en Jetpack Compose.",
        category: "mobile",
        isMobile: true,
        techStack: ["Kotlin", "Jetpack Compose", "Android"],
        image: "/img/good pet movil.png",
        images: ["/img/good pet movil.png"],
        imagesAfter: ["/img/good pet movil.png"],
        urlGithub: "#!",
        urlDemo: "#!",
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];