/**
 * ============================================================
 * CONFIG.JS — Escuela de Párvulos Monte Sión
 * ============================================================
 * Fuente única de verdad para todos los datos que cambian.
 * Edita SOLO este archivo para actualizar esos datos.
 * ============================================================
 */

const CONFIG = {

  // ==============================
  // DATOS GENERALES DE LA ESCUELA
  // ==============================
  schoolName: "Escuela de Párvulos Monte Sión",
  shortName: "Monte Sión",
  city: "Labranza",
  commune: "Temuco",
  region: "Región de La Araucanía",
  country: "Chile",
  addressText: "C. 2 Ote. 145, 4814297 Labranza, Temuco, Región de La Araucanía, Chile",

  // ==============================
  // CONTACTO (Múltiples teléfonos)
  // ==============================
  phones: [
    { number: "+56 9 7855 1360", label: "WhatsApp", isWhatsApp: false },
    { number: "+56 45 231 7514", label: "Teléfono" },
    { number: "+56 9 7855 0869", label: "Teléfono" }
  ],
  // Teléfono principal para WhatsApp (el que se usa en los botones)
  whatsappNumber: "56930606424",
  whatsappMessage:
    "Hola, quisiera consultar por las matrículas de Escuela de Párvulos Monte Sión.",

  // ==============================
  // REDES SOCIALES
  // ==============================
  facebookUrl: "https://www.facebook.com/escueladeparvulos.montesion",
  instagramUrl: "https://www.instagram.com/escuela_montesion?igsi=c2l0NWtwdTAyaWtp",

  // ==============================
  // UBICACIÓN
  // ==============================
  location: {
    placeName: "Escuela de Párvulos Monte Sión",
    addressText: "C. 2 Ote. 145, 4814297 Labranza, Temuco",
    latitude: -38.7651583,
    longitude: -72.7517001,
    mapsUrl: "https://maps.app.goo.gl/d6yqgi2vbpbjYvNU9",
    // Embed URL para el iframe del mapa
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.123456789012!2d-72.7517001!3d-38.7651583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ1JzU0LjYiUyA3MsKwNDUnMDYuMSJX!5e0!3m2!1ses!2scl!4v1234567890"
  },

  // ==============================
  // MATRÍCULAS
  // ==============================
  enrollment: {
    title: "¡Matrículas abiertas 2026 — 2027!",
    shortBadge: "Matrículas 2026–2027",
    description:
      "Cupos limitados. Conoce nuestra propuesta educativa y consulta disponibilidad de matrícula para tu hijo o hija.",
    urgency: "⚠️ Últimos cupos disponibles para Pre-Kínder y Kínder"
  },

  // ==============================
  // NIVELES (SOLO PRE-KÍNDER Y KÍNDER)
  // ==============================
  levels: [
    {
      name: "Pre-Kínder",
      age: "4 años cumplidos",
      description:
        "Un espacio donde los niños y niñas comienzan su camino escolar a través del juego, la exploración y el descubrimiento.",
      image: "assets/img/nivel-pre-kinder.jpg",
      icon: "sprout",
      availability: "Cupos disponibles"
    },
    {
      name: "Kínder",
      age: "5 años cumplidos",
      description:
        "Preparamos a los niños y niñas para su transición a la educación básica, fortaleciendo su autonomía y habilidades sociales.",
      image: "assets/img/nivel-kinder.jpg",
      icon: "leaf",
      availability: "Últimos cupos"
    }
  ],

  // ==============================
  // HORARIOS
  // ==============================
  schedule: {
    mondayToFriday: {
      morning: {
        label: "Jornada mañana",
        start: "08:30",
        end: "12:30"
      },
      afternoon: {
        label: "Jornada tarde",
        start: "13:45",
        end: "17:45"
      }
    }
  },

  // ==============================
  // VALORES
  // ==============================
  values: [
    { name: "Respeto", icon: "heart" },
    { name: "Amor", icon: "heart-hand" },
    { name: "Responsabilidad", icon: "check-shield" },
    { name: "Autonomía", icon: "sprout" },
    { name: "Empatía", icon: "hands" },
    { name: "Solidaridad", icon: "hands-heart" },
    { name: "Compañerismo", icon: "users" }
  ],

  // ==============================
  // PROPUESTA / METODOLOGÍA
  // ==============================
  methodology: [
    {
      title: "Aprendizaje mediante el juego",
      description:
        "El juego como motor natural para explorar, descubrir y desarrollar nuevas habilidades en Pre-Kínder y Kínder.",
      icon: "play"
    },
    {
      title: "Aprendizaje basado en experiencias",
      description:
        "Experiencias concretas y significativas que preparan para la educación básica.",
      icon: "compass"
    }
  ],

  // ==============================
  // PREPARACIÓN PARA LA EDUCACIÓN BÁSICA
  // ==============================
  transitionSkills: [
    { title: "Lectoescritura", description: "Primeros acercamientos a leer y escribir.", icon: "book" },
    { title: "Pensamiento matemático", description: "Nociones de número, cantidad y lógica.", icon: "shapes" },
    { title: "Motricidad fina", description: "Precisión en manos y dedos para la escritura.", icon: "hand" },
    { title: "Motricidad gruesa", description: "Coordinación y movimiento corporal.", icon: "run" },
    { title: "Autonomía", description: "Confianza para actuar por sí mismos.", icon: "sprout" },
    { title: "Hábitos y rutinas", description: "Orden y constancia en el día a día.", icon: "clock" },
    { title: "Desarrollo socioemocional", description: "Reconocer y expresar emociones.", icon: "smile" },
    { title: "Expresión y comunicación", description: "Comunicar ideas con confianza.", icon: "chat" },
    { title: "Comprensión y aprendizaje", description: "Entender y relacionar nuevos conceptos.", icon: "lightbulb" },
    { title: "Trabajo en equipo", description: "Colaborar y compartir con otros.", icon: "users" },
    { title: "Seguimiento de instrucciones", description: "Escuchar y aplicar indicaciones.", icon: "list" },
    { title: "Adaptación y transición a básica", description: "Un paso seguro hacia la educación básica.", icon: "path" }
  ],

  // ==============================
  // INSTALACIONES
  // ==============================
  facilities: [
    { name: "Salas", description: "Espacios preparados para aprender y jugar.", image: "assets/img/servicio-1.jpg" },
    { name: "Patio", description: "Áreas para el juego y el movimiento libre.", image: "assets/img/servicio-2.jpg" },
    { name: "Juegos", description: "Elementos de juego pensados para su edad.", image: "assets/img/servicio-3.jpg" }
  ],

  // ==============================
  // GALERÍA
  // ==============================
  gallery: [
    { image: "assets/img/galeria-1.jpg", alt: "Actividad en Escuela de Párvulos Monte Sión" },
    { image: "assets/img/galeria-2.jpg", alt: "Espacio de juego en Monte Sión" },
    { image: "assets/img/galeria-3.jpg", alt: "Sala de actividades de Monte Sión" },
    { image: "assets/img/galeria-4.jpg", alt: "Niños aprendiendo en Monte Sión" },
    { image: "assets/img/galeria-5.jpg", alt: "Ambiente de Escuela de Párvulos Monte Sión" },
    { image: "assets/img/galeria-6.jpg", alt: "Patio de Monte Sión" },
    { image: "assets/img/galeria-7.jpg", alt: "Actividad educativa en Monte Sión" },
    { image: "assets/img/galeria-8.jpg", alt: "Instalaciones de Monte Sión" }
  ],

  // ==============================
  // DOCUMENTOS INSTITUCIONALES
  // ==============================
  documents: [
    {
      title: "Proyecto Educativo",
      description: "Conoce nuestra propuesta pedagógica, misión, visión y los principios que guían la educación en Monte Sión.",
      pdf: "assets/docs/proyecto.pdf",
      image: "assets/img/proyecto.png",
      icon: "book-open",
      buttonText: "Descargar PDF"
    },
    {
      title: "Reglamento Interno",
      description: "Normas y procedimientos que regulan la convivencia escolar y el funcionamiento de nuestra comunidad educativa.",
      pdf: "assets/docs/reglamento.pdf",
      image: "assets/img/reglamento.png",
      icon: "file-text",
      buttonText: "Descargar PDF"
    }
  ],

  // ==============================
  // TESTIMONIOS (Carrusel automático)
  // ==============================
  testimonials: [
    {
      text: "Mi hijo llegó con timidez y ahora participa con confianza. La atención personalizada marca la diferencia.",
      author: "Carolina M.",
      relation: "Madre de Santiago (Kínder)"
    },
    {
      text: "Aprenden jugando y eso hace que cada día quieran volver. Excelente preparación para básica.",
      author: "Marcelo R.",
      relation: "Padre de Valentina (Pre-Kínder)"
    },
    {
      text: "El equipo docente es maravilloso, siempre atentos a las necesidades de cada niño.",
      author: "Laura F.",
      relation: "Madre de Mateo (Kínder)"
    },
    {
      text: "Mi hija ha desarrollado habilidades sociales increíbles. Estamos muy contentos con Monte Sión.",
      author: "José L.",
      relation: "Padre de Sofía (Pre-Kínder)"
    },
    {
      text: "La transición a básica fue mucho más fácil gracias al trabajo de preparación que hacen.",
      author: "Andrea G.",
      relation: "Madre de Tomás (ex alumno)"
    },
    {
      text: "El ambiente cálido y familiar hace que los niños se sientan en casa mientras aprenden.",
      author: "Paola S.",
      relation: "Madre de Emilia (Kínder)"
    }
  ],

  // ==============================
  // IDENTIDAD VISUAL
  // ==============================
  logo: {
    src: "assets/img/Logo.png",
    alt: "Logo Escuela de Párvulos Monte Sión"
  },

  // ==============================
  // SEO / METADATOS
  // ==============================
  seo: {
    title:
      "Escuela de Párvulos Monte Sión | Pre-Kínder y Kínder en Labranza, Temuco",
    description:
      "Escuela de Párvulos Monte Sión en Labranza, Temuco. Pre-Kínder y Kínder con cupos limitados 2026–2027. Educación a través del juego y preparación para básica.",
    canonicalUrl: "",
    ogImage: "assets/img/hero.jpg",
    favicon: "assets/img/Logo.png"
  }
};