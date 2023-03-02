import Portafolio1 from "../img/portfolio1.jpg";
import Portafolio2 from "../img/portfolio2.jpg";
import Portafolio3 from "../img/portfolio3.jpg";
import weather1 from "../img/weather/uno.png";
import weather2 from "../img/weather/dos.png";
import res1 from "../img/restaurant/1.png";
import res2 from "../img/restaurant/2.png";
import res3 from "../img/restaurant/3.png";
import chat1 from "../img/chat/1.png";
import chat2 from "../img/chat/2.png";
import chat3 from "../img/chat/3.png";
import { SiReact } from "react-icons/si";



export const portfolio =
{
    home: {
        title: {
            es: "Hola, soy Alexander",
            en: "Hola, soy Alexander"
        },
        subtitle: {
            es: "Desarrollador Full-Stack"
        },
        description: {
            es: "Soy un desarrollador motivado y apasionado por el crecimiento profesional, con el deseo de aprender algo nuevo cada día."
        }
    },
    about: {
        title: {
            es: "Sobre mi",
            en: "About me"
        },
        subtitle: {
            es: "Conoce un poco de mi"
        },
        description: {
            es: "Soy un desarrollador con más de 4 años de experiencia en el desarrollo de sitios web y aplicaciones móviles, tanto en el Front-end como en el Back-end. Desde temprana edad, he sentido gran interés por la tecnología y los equipos de cómputo, lo que me motivó a profundizar mis conocimientos más allá del hardware. Me considero una persona optimista y proactiva, siempre dispuesta a enfrentar nuevos desafíos.",
            en: "I am a developer with over 4 years of experience in developing websites and mobile applications, both on the Front-end and Back-end. Since an early age, I have had a great interest in technology and computer equipment, which motivated me to deepen my knowledge beyond hardware. I consider myself an optimistic and proactive person, always willing to face new challenges.",
        },
        experience: {
            full: {
               es: 'Años de experiencia'
            },
            proyects: {
                es: 'Proyectos completados'
            }
        }
    },
    skills: {
        title: {
            es: "Habilidades",
            en: "Skills"
        },
        labels: {
            frontend: {
                es: "Mas de 2 años",
                en: "More than 2 years"
            },
            backend: {
                es: "Mas de 4 años",
                en: "More than 4 years"
            }
        },
        frontend: [
            {
                skill: 'HTML',
                percentage: 90
            },
            {
                skill: 'CSS',
                percentage: 85
            },
            {
                skill: 'VanillaJS',
                percentage: 92
            },
            {
                skill: 'Vue',
                percentage: 70
            },
            {
                skill: 'ReactJs',
                percentage: 60
            },
            {
                skill: 'Angular',
                percentage: 40
            },
            {
                skill: 'Bootstrap',
                percentage: 70
            },
            {
                skill: 'Tailwind',
                percentage: 80
            }
        ],
        backend: [
            {
                skill: 'NodeJS',
                percentage: 90
            },
            {
                skill: 'Laravel',
                percentage: 50
            },
            {
                skill: 'NestJs',
                percentage: 70
            },
            {
                skill: 'PHP',
                percentage: 80
            },
            {
                skill: '.NET',
                percentage: 40
            },
        ]
    },
    experience: {
        title: {
            es: "Experiencia",
            en: "Experience"
        },
        subtitle: {
            es: "Un poco de mi trayectoria",
            en: "A little bit about my own experience"
        },
        work: [
            {
                title: {
                    es: 'Desarrolador Full-Stack',
                    en: 'Full Stack Developer',
                },
                subtitle: {
                    es: 'ProContacto',
                    en: 'ProContacto',
                },
                years: 'Ene.2021-Actual'

            },
            {
                title: {
                    es: 'Desarrolador Full-Stack',
                    en: 'Full Stack Developer',
                },
                subtitle: {
                    es: 'Frelance Nuup Health Co.',
                    en: 'Frelance',
                },
                years: '2021'

            },

            {
                title: {
                    es: 'Desarrollador Full-Stack',
                    en: 'Full Stack Developer',
                },
                subtitle: {
                    es: 'Freelance Jesús Carranza, Veracruz',
                    en: 'Freelance Jesús Carranza, Veracruz',
                },
                years: 'Ene. 2020-Abr. 2020'

            },
            {
                title: {
                    es: 'Desarrolador Backend',
                    en: 'Backend Developer',
                },
                subtitle: {
                    es: 'SMART HEALTH SOLUTIONS',
                    en: 'SMART HEALTH SOLUTIONS',
                },
                years: 'Ago 2020-Dic. 2020'

            },
        ],
        education: [
            {
                title: {
                    es: 'Ingeniería en Sistemas Computacionales',
                    en: 'Ingeniería en Sistemas Computacionales',
                },
                subtitle: {
                    es: 'Instituto Tecnológico Superior de Jesús Carranza',
                    en: 'Instituto Tecnológico Superior de Jesús Carranza',
                },
                years: '2016-2021'

            },
            {
                title: {
                    es: 'Tecnologías de la información y comunicación',
                    en: 'TIC\'s',
                },
                subtitle: {
                    es: 'Colegio De Bachilleres Del Estado De Oaxaca N°29(COBAO 29)',
                    en: 'Colegio De Bachilleres Del Estado De Oaxaca N°29(COBAO 29)',
                },
                years: '2013-2016'

            },
        ],
        
    },
    portfolios: {
        title: {
            es: "Portafolio",
            en: "Portfolio"
        },
        subtitle: {
            es: "Algunos de mis proyectos",
            en: "Some of my projects"
        },
        info: [
            {
                id: 1,
                title: 'Chat Beta',
                image: [chat2, chat2, chat3],
                technologies: ['SiReact', 'SiExpress', 'SiMongodb', 'SiNodedotjs'],
                demo: 'https://chat-react-frontend.vercel.app/',
                github: 'https://github.com/Al4ex/chat-react-frontend/tree/main',
            },
            {
                id: 2,
                title: 'Clima clasico',
                image: [weather2, weather2],
                technologies: ['SiReact', 'SiTailwindcss'],
                demo: 'https://weather-react-tailwind.vercel.app',
                github: 'https://github.com/Al4ex/weather-react-tailwind',
            },
            {
                id: 3,
                title: 'Restaurante',
                image: [res3, res2, res3],
                technologies: ['SiLaravel', 'SiVuedotjs', 'SiMysql'],
                github: 'https://github.com/Al4ex/Restaurant-v1_laravel_vue',
            },
        ]
    },
    contactme: {
        title: {
            es: "Contáctame",
            en: "Contact me"
        },
        subtitle: {
            es: "Puedes contactarme con mi numero o correo",
            en: "You can contact me with my number or e-mail"
        },
        call:{
            es: "Llamame",
            en: "Call me"
        },
        email:{
            es: "Correo",
            en: "Email"
        },
        button:{
            es: "Enviar mensaje",
            en: "Send message"
        },
    },
}
export const info = [
    {
        id: 1,
        title: 'Mi github',
        image: [weather1, weather2],
        demo: 'https://weather-react-tailwind.vercel.app',
        github: 'https://github.com/Al4ex/weather-react-tailwind',
    },
    {
        id: 2,
        title: 'Mi github',
        image: [res1, res2, res3],
        github: 'https://github.com/Al4ex/Restaurant-v1_laravel_vue',
    },
    /* 
    {
        id: 3,
        title: 'Mi github',
        image: [Portafolio1, Portafolio2, Portafolio3],
    },
    {
        id: 4,
        title: 'Mi github',
        image: [Portafolio1, Portafolio2, Portafolio3],
    },
    {
        id: 5,
        title: 'Mi github',
        image: [Portafolio1, Portafolio2, Portafolio3],
    }, */
]