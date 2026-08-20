export interface PhotoItem {
  id: string;
  src: string;
  title: string;
  date?: string;
  description: string;
  category: 'Familia' | 'Sonrisas' | 'Celebraciones' | 'Recuerdos';
  featured?: boolean;
}

export interface MemoryTimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface LoveReason {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const MOM_DATA = {
  header: {
    badge: "❤️ Un Homenaje Creado con Amor",
    title: "Para la mejor Mamá del Universo",
    subtitle: "Gracias por tu paciencia infinita, tu sonrisa tibia, tu amor incondicional y por hacer de cada día un lugar más hermoso.",
    stats: [
      { number: "∞", label: "Abrazos y Amor" },
      { number: "100%", label: "Dedicación y Corazón" },
      { number: "365", label: "Días de Alegría al Año" },
      { number: "1", label: "La N° 1 en Nuestras Vidas" },
    ]
  },
  photos: [
    {
      id: "1",
      src: "/photos/20240505_121408_Original.jpg",
      title: "Un Día Especial en Familia",
      date: "Mayo 2024",
      description: "Celebrando momentos únicos llenos de risas, buena comida y mucho cariño.",
      category: "Celebraciones",
      featured: true,
    },
    {
      id: "2",
      src: "/photos/24F988B9-9FC4-47AA-A20E-191885A78F3D.PNG",
      title: "Sonrisas que Iluminan todo",
      date: "Recuerdo Hermoso",
      description: "Tu alegría contagiosa siempre llena la casa de paz y felicidad.",
      category: "Sonrisas",
      featured: false,
    },
    {
      id: "3",
      src: "/photos/64C53401-1D5D-4FD9-BE4F-CFC59987A812.PNG",
      title: "Encuentro Inolvidable",
      date: "Momento Especial",
      description: "Cada abrazo tuyo recarga el alma y nos recuerda lo afortunados que somos.",
      category: "Familia",
      featured: true,
    },
    {
      id: "4",
      src: "/photos/7E985EB3-6F70-446B-8C9D-86E105D26D24.PNG",
      title: "Compartiendo Risas",
      date: "Un Día Inolvidable",
      description: "La complicidad y el cariño compartido en cada mirada.",
      category: "Familia",
      featured: false,
    },
    {
      id: "5",
      src: "/photos/Archivo_008.png",
      title: "Tiempos Preciados",
      date: "Memoria del Corazón",
      description: "Construyendo recuerdos dorados que perdurarán por siempre.",
      category: "Recuerdos",
      featured: true,
    },
    {
      id: "6",
      src: "/photos/IMG_20190224_141405895_Original.jpg",
      title: "Paseo de Febrero",
      date: "Febrero 2019",
      description: "Disfrutando de una tarde radiante al aire libre.",
      category: "Recuerdos",
      featured: false,
    },
    {
      id: "7",
      src: "/photos/IMG_7291.PNG",
      title: "Instantánea de Amor",
      date: "Momento Favorito",
      description: "Guardamos en el corazón cada uno de estos instantes a tu lado.",
      category: "Sonrisas",
      featured: true,
    },
    {
      id: "8",
      src: "/photos/IMG_6855.jpg",
      title: "Toda la Familia Unida ❤️",
      date: "Recuerdo Especial de Familia",
      description: "Un momento inolvidable con toda la familia reunida, llena de amor, risas y la mejor compañía.",
      category: "Familia",
      featured: true,
    },
    {
      id: "9",
      src: "/photos/20230820_160833.jpg",
      title: "Mamá con sus Hijos y Nietos ❤️",
      date: "Agosto 2023",
      description: "Un tesoro inigualable: Mamá rodeada del amor incondicional de todos sus hijos y nietos en un gran recuerdo familiar.",
      category: "Familia",
      featured: true,
    },
  ] as PhotoItem[],

  timeline: [
    {
      id: "t1",
      year: "Siempre",
      title: "Tus Abrazos Curativos",
      description: "Desde que éramos pequeños, un abrazo tuyo bastaba para solucionar cualquier tristeza o día difícil.",
      iconName: "Heart",
      tag: "Amor Infinito"
    },
    {
      id: "t2",
      year: "Cada Día",
      title: "Tus Consejos de Oro",
      description: "Tu sabiduría, tus palabras sabias y tu escucha atenta han sido la mejor guía en cada paso del camino.",
      iconName: "Sparkles",
      tag: "Sabiduría"
    },
    {
      id: "t3",
      year: "Incondicional",
      title: "Tus Deliciosos Platillos y Cuidados",
      description: "Ese toque único que le pones a todo lo que haces, haciendo sentir a todos como en casa.",
      iconName: "Coffee",
      tag: "Hogar & Sabor"
    },
    {
      id: "t4",
      year: "Por Siempre",
      title: "Un Legado de Sonrisas",
      description: "Nos enseñaste a sonreír ante la vida, a ser fuertes, amables y generosos con todos los que nos rodean.",
      iconName: "Smile",
      tag: "Inspiración"
    }
  ] as MemoryTimelineItem[],

  reasons: [
    {
      id: 1,
      title: "Tu Paciencia Infinita",
      description: "Siempre estás dispuesta a escuchar, comprender y dar apoyo sin juzgar.",
      icon: "HeartHandshake"
    },
    {
      id: 2,
      title: "Tu Fuerza e Inspiración",
      description: "Tu capacidad para superar cualquier reto con una sonrisa nos motiva a diario.",
      icon: "ShieldCheck"
    },
    {
      id: 3,
      title: "La Calidez de Tu Hogar",
      description: "Donde tú estás, hay luz, refugio, paz y el olor a cosas hechas con amor.",
      icon: "Home"
    },
    {
      id: 4,
      title: "Tu Alegría Contagiosa",
      description: "Tus carcajadas llenan los días más grises de verdadero sol y alegría.",
      icon: "Sun"
    },
    {
      id: 5,
      title: "Tu Amor Incondicional",
      description: "Un amor sin condiciones ni medidas que nos acompaña donde quiera que vayamos.",
      icon: "Gift"
    },
    {
      id: 6,
      title: "Tus Detalles Únicos",
      description: "Siempre recuerdas lo que le gusta a cada quien y cuidas hasta el más mínimo detalle.",
      icon: "Star"
    }
  ] as LoveReason[],

  letter: {
    salutation: "Querida Mamá,",
    paragraphs: [
      "Hoy queremos hacer una pausa para agradecerte todo lo que calladamente haces por todos nosotros. A veces la rutina diaria va tan rápido que olvidamos decirte lo tremendamente importante que eres en nuestras vidas.",
      "Eres nuestro puerto seguro, nuestro ejemplo de perseverancia y la persona que con solo una mirada sabe exactamente qué sentimos. Cada logro nuestro lleva un pedacito de tu esfuerzo y de tu fe en nosotros.",
      "Que este pequeño espacio sea un recordatorio constante de lo mucho que te amamos, te admiramos y te agradecemos hoy, mañana y siempre. ¡Te amamos con todo nuestro corazón!"
    ],
    closing: "Con todo el amor del mundo,",
    signature: "Tu Familia ❤️"
  }
};
