export interface PhotoItem {
  id: string;
  src: string;
  title: string;
  description: string;
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
    badge: "❤️ Un Regalo con Todo mi Amor",
    title: "Para la mejor Mamá del Universo",
    subtitle: "Gracias por tu paciencia infinita, tu sonrisa cálida, tu amor incondicional y por ser mi mayor orgullo. Este detalle es para ti con todo mi corazón.",
    stats: [
      { number: "∞", label: "Mi Amor por Ti" },
      { number: "100%", label: "Mi Agradecimiento" },
      { number: "365", label: "Días Orgulloso de Ser tu Hijo" },
      { number: "1", label: "La N° 1 en Mi Vida" },
    ]
  },
  photos: [
    {
      id: "1",
      src: "/photos/20240505_121408_Original.jpg",
      title: "Mi Mayor Tesoro ❤️",
      description: "Eres mi persona favorita en todo el universo. Gracias por existir y por ser la mejor mamá del mundo.",
    },
    {
      id: "2",
      src: "/photos/24F988B9-9FC4-47AA-A20E-191885A78F3D.PNG",
      title: "Tu Sonrisa es Mi Luz ✨",
      description: "Verte sonreír me llena el alma de alegría y me da toda la fuerza para salir adelante todos los días.",
    },
    {
      id: "3",
      src: "/photos/64C53401-1D5D-4FD9-BE4F-CFC59987A812.PNG",
      title: "El Abrazo Más Bonito 🤗",
      description: "No hay lugar en el mundo donde me sienta más seguro, amado y en paz que cuando estoy a tu lado.",
    },
    {
      id: "4",
      src: "/photos/7E985EB3-6F70-446B-8C9D-86E105D26D24.PNG",
      title: "Siempre Juntos 💖",
      description: "Gracias por estar conmigo en cada etapa de mi vida. Eres mi mayor orgullo y mi mayor bendición.",
    },
    {
      id: "5",
      src: "/photos/Archivo_008.png",
      title: "Amor Sin Medida 🌹",
      description: "Todo lo bueno que soy y lo que sueño lograr te lo debo a ti y al amor tan puro que siempre me has entregado.",
    },
    {
      id: "6",
      src: "/photos/IMG_20190224_141405895_Original.jpg",
      title: "Mi Guía y Mi Ejemplo 🌟",
      description: "Admiro tu fuerza, tu enorme corazón y la ternura con la que siempre cuidas de mí.",
    },
    {
      id: "7",
      src: "/photos/IMG_7291.PNG",
      title: "Para Siempre en Mi Corazón 💕",
      description: "Te amo con toda mi alma, mami. Hoy, mañana y por todos los días de mi vida.",
    },
    {
      id: "8",
      src: "/photos/IMG_6855.jpg",
      title: "La Reina de Mi Vida 👑",
      description: "Eres el corazón que une a toda la familia y la mujer que más amo y respeto en este planeta.",
    },
    {
      id: "9",
      src: "/photos/20230820_160833.jpg",
      title: "Verte Feliz es Mi Mayor Alegría 💐",
      description: "Mi mayor deseo en esta vida siempre será verte sonreír y hacerte sentir tan amada como tú me haces sentir a mí.",
    },
  ] as PhotoItem[],

  timeline: [
    {
      id: "t1",
      year: "Siempre",
      title: "Tus Abrazos Curativos",
      description: "Desde que era un niño, un abrazo tuyo bastaba para calmar cualquier tristeza o día difícil en mi vida.",
      iconName: "Heart",
      tag: "Amor Infinito"
    },
    {
      id: "t2",
      year: "Cada Día",
      title: "Tus Consejos de Oro",
      description: "Tu sabiduría, tus palabras y tu escucha atenta han sido mi mejor brújula y guía en cada paso.",
      iconName: "Sparkles",
      tag: "Sabiduría"
    },
    {
      id: "t3",
      year: "Incondicional",
      title: "Tus Cuidados y Amor",
      description: "Ese toque único de cariño que le pones a todo lo que haces, haciéndome sentir siempre seguro.",
      iconName: "Coffee",
      tag: "Hogar & Calidez"
    },
    {
      id: "t4",
      year: "Por Siempre",
      title: "Tu Ejemplo de Vida",
      description: "Me enseñaste a sonreír ante la vida, a ser una persona de bien y a luchar por mis metas.",
      iconName: "Smile",
      tag: "Mi Inspiración"
    }
  ] as MemoryTimelineItem[],

  reasons: [
    {
      id: 1,
      title: "Tu Paciencia Conmigo",
      description: "Siempre estás dispuesta a escucharme, entenderme y darme tu apoyo sin juzgarme jamás.",
      icon: "HeartHandshake"
    },
    {
      id: 2,
      title: "Tu Fuerza e Inspiración",
      description: "Tu valentía para superar cualquier reto con una sonrisa es lo que más me motiva cada día.",
      icon: "ShieldCheck"
    },
    {
      id: 3,
      title: "La Calidez de Tu Amor",
      description: "A tu lado siempre encuentro refugio, paz y el verdadero significado del amor incondicional.",
      icon: "Home"
    },
    {
      id: 4,
      title: "Tu Alegría Contagiosa",
      description: "Tus risas llenan mis días de luz y me contagian de alegría siempre.",
      icon: "Sun"
    },
    {
      id: 5,
      title: "Tu Amor Sin Medida",
      description: "Ese amor tan puro y sincero que me acompaña donde quiera que yo esté.",
      icon: "Gift"
    },
    {
      id: 6,
      title: "Tus Detalles Únicos",
      description: "Siempre estás pendiente de mí, cuidándome en todo momento con todo tu corazón.",
      icon: "Star"
    }
  ] as LoveReason[],

  letter: {
    salutation: "Querida Mamá,",
    paragraphs: [
      "Hoy quiero hacer una pausa para agradecerte desde el fondo de mi corazón todo lo que has hecho y sigues haciendo por mí. A veces los días pasan tan rápido que olvido decirte lo inmensamente importante y especial que eres en mi vida.",
      "Eres mi mayor orgullo, mi puerto seguro y mi ejemplo más grande de amor y perseverancia. Cada paso que doy y cada meta que alcanzo llevan la huella de tus sacrificios, tus enseñanzas y tu fe infinita en mí.",
      "Hice este rincón especial solo para ti, para recordarte siempre lo mucho que te amo, te admiro y te agradezco ser mi mamá. ¡Te amo con todo mi corazón!"
    ],
    closing: "Con todo mi amor y gratitud siempre,",
    signature: "Tu hijo Carlitos ❤️"
  }
};
