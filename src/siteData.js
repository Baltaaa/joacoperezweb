// Contenido real del mockup (Claude Design). Centralizado acá para no
// desparramar copy en los componentes — igual que pide el sistema Nocturne:
// "el texto va textual, sin reescribir".

export const CONTACT = {
  whatsappNumber: '5491124807783', // +54 9 11 2480-7783
  whatsappDisplay: '+54 9 11 2480-7783',
  whatsappMessage: 'Hola Joaquín! Te escribo desde tu web, quiero contarte de dónde vengo y arrancar a entrenar.',
  instagramHandle: '@joaquinpgorostizu',
  instagramUrl: 'https://instagram.com/joaquinpgorostizu',
}

export const whatsappHref = (message = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`

export const NAV_LINKS = [
  { href: '#como-lo-veo', label: 'Cómo lo veo' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#en-movimiento', label: 'En movimiento' },
]

export const HERO = {
  kicker: 'Coach físico · Mar del Plata',
  title: ['Ganancia interna,', 'reflejo exterior.'],
  body: 'Planes uno a uno y a distancia, armados sobre tu historia, tu historial de lesiones y las ganas que traés hoy.',
  ctaPrimary: 'Escribime por WhatsApp',
  ctaSecondaryMobile: 'Ver los planes ↓',
  ctaSecondaryDesktop: 'Ver los planes',
}

export const VALUE = {
  kicker: 'Cómo lo veo',
  quote:
    'Sistemas distintos, lugares distintos, no siempre con las mismas ganas, tampoco siempre uno se ve de la forma que quiere. Pero el mantener la constancia y el saber de dónde venís, tu propia historia, historial de lesiones y demás. Convierten todo eso en una disciplina necesaria y por eso, algo hermoso de hacer. Va mucho más allá del precio que uno puede pagar, ganancia interna y reflejo exterior.',
  attribution: '— Joaquín',
  audienceKicker: 'Con quién trabajo',
  audience: [
    'Deportistas que buscan rendimiento',
    'Salud y movilidad',
    'Quien ya entrena y quiere un plan serio',
  ],
}

export const SERVICES = {
  kicker: 'Servicios',
  title: ['Cinco maneras', 'de entrenar conmigo.'],
  cta: 'Consultar disponibilidad',
  items: [
    {
      n: '01',
      title: 'Personalizado 1 a 1',
      body: 'Sesiones individuales en gimnasio, con corrección técnica serie por serie.',
    },
    {
      n: '02',
      title: 'Online / a distancia',
      body: 'Plan semanal, videos de técnica y revisión de tus registros donde estés.',
    },
    {
      n: '03',
      title: 'Preparación deportiva',
      body: 'Fuerza y acondicionamiento según tu deporte y tu calendario de competencia.',
    },
    {
      n: '04',
      title: 'Recomposición corporal',
      body: 'Progresión de fuerza y hábitos sostenibles, medida en el tiempo y no en semanas.',
    },
    {
      n: '05',
      title: 'Vuelta a la actividad',
      body: 'Retorno post lesión, coordinado con tu kinesiólogo y respetando los tiempos.',
    },
  ],
  fallback: {
    body: 'No sabés cuál te sirve — escribime y lo definimos en la primera charla.',
    cta: 'WhatsApp →',
  },
}

export const MARQUEE_WORDS = [
  'Constancia',
  'Progresión',
  'Historia',
  'Disciplina',
  'Fuerza',
  'Movilidad',
  'Resultados',
]

export const GALLERY = {
  kicker: 'En movimiento',
  title: ['Cómo se', 'entrena.'],
}

export const TESTIMONIALS = {
  kicker: 'Quiénes entrenan conmigo',
  items: [
    {
      quote:
        'Texto del testimonio: qué buscaba antes de empezar, qué cambió y en cuánto tiempo. Dos o tres oraciones.',
      name: 'Nombre',
      meta: 'deporte o edad · tiempo entrenando',
    },
    {
      quote:
        'Segundo testimonio, preferentemente de otro perfil: si el primero es deportista, este de salud y movilidad.',
      name: 'Nombre',
      meta: 'deporte o edad · tiempo entrenando',
    },
  ],
}

export const CONTACT_SECTION = {
  kicker: 'Primer paso',
  title: ['Contame de dónde', 'venís.'],
  body: 'Tu objetivo, tus lesiones si las hay y los días que podés entrenar. Con eso te digo cómo arrancaría.',
}

export const FOOTER = {
  brand: 'Joaquín Pérez Gorostizu',
  role: 'COACH FÍSICO · MAR DEL PLATA',
  where: 'Mar del Plata, Buenos Aires',
  whereDetail: 'Presencial en gimnasio · online a todo el país',
  legalLine:
    'Mar del Plata, Provincia de Buenos Aires · Sesiones presenciales en gimnasio · planes online a todo el país',
  copyright: '© 2026 Joaquín Pérez Gorostizu',
}
