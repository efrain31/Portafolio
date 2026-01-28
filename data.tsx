import { BookText, CodeSquare, UserRound, Linkedin, Crop, Pencil, Computer, Book, Github, Phone, Workflow, ArrowRight } from "lucide-react";

//npm install lucide-react
// https://lucide.dev/guide/packages/lucide-react

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
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
        title: "Trayectora",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Habilidades",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "../services",
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
        title: "Dev Full Stack JR. Geovoy",
        subtitle: "Desarrollos de Proyecto / Mantenimiento",
        description: "Desarrollo Full Stack en Back-end y Front-end en gestion de proyectos con gps , lectoras (transporte de personal)",
        date: "Ago 2025 - continuando",
    },
    {
        id: 2,
        title: "Interno en Dev Full Stack Nubit",
        subtitle: "Desarrollos de Proyecto",
        description: "Desarrollo Full Stack en Back-end y Front-end en gestion de licencias gubertamentales, seriadas y verficadas para su control y distribuicion ",
        date: "Ago 2025",
    },
    {
        id: 3,
        title: "Frontend Developer",
        subtitle: "BlackFord",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Feb 2024 ",
    },
    {
        id: 4,
        title: "Creador de Experiencias Digitales",
        subtitle: "Creart",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 5,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "Desarrollos personales",
        description: "Como desarrollador Front-end, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
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
        title: "Portafolio Fotografico (React & .next)",
        image: "/img/alecv.png",
        urlGithub: "#!",
        urlDemo: "https://ale-vazquez.vercel.app/",
    },
    {
        id: 7,
        title: "ERP Empresarial (PhP,JS,etc.)",
        image: "/img/BCollage.png",
        urlGithub: "#!",
        urlDemo: "https://www.geovoy.com/app/",
    },
    {
        id: 2,
        title: "Ecommerce (React.next & tailwind)",
        image: "/img/goodpet.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Aplicaciones Moviles (Kotlin-compose)",
        image: "/img/good pet movil.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 1,
        title: "Landing Page (Html & Arduino)",
        image: "/img/Acuaclub.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Ecommerce (Laravel)",
        image: "/img/laravel-cosmetic.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Landing Page (Angular & Html)",
        image: "/img/tecnokwon.png",
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