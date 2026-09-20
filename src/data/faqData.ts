import { FaqItem } from '../types';

export const FAQ_CATEGORIES = [
  'Todas las dudas',
  'Cuerpo y Anatomía',
  'Placer y Deseo',
  'Salud e ITS',
  'Relaciones y Pareja',
  'Consentimiento y Límites',
  'Servicios de Savia'
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Cuerpo y Anatomía',
    question: '¿Es normal que un lado de mis labios genitales o testículos sea más grande que el otro?',
    answer: 'Completamente normal. La asimetría es la regla, no la excepción, en toda la anatomía humana (exactamente como los ojos, las orejas o las manos). Las vulvas vienen en infinitas formas, colores y tamaños; los labios menores pueden sobresalir ampliamente de los mayores o ser casi imperceptibles. En los testículos, es habitual y fisiológicamente saludable que uno cuelgue ligeramente más abajo que el otro para regular la temperatura corporal. Solo requeriría valoración médica si notas un bulto duro repentino o dolor agudo persistente.',
    scientificContext: 'La variación anatómica en genitales externos ha sido documentada exhaustivamente en atlas de diversidad morfológica humana (como The Great Wall of Vagina y estudios urológicos internacionales).'
  },
  {
    id: 'faq-2',
    category: 'Placer y Deseo',
    question: 'Nunca he tenido un orgasmo con penetración sola. ¿Hay algo malo en mi cuerpo?',
    answer: 'Absolutamente nada malo. De hecho, perteneces a la inmensa mayoría estadística: entre el 70% y el 80% de las mujeres y personas con vulva NO alcanzan el orgasmo mediante la penetración vaginal exclusiva, sino que requieren estimulación directa del glande o cuerpo del clítoris. El clítoris es el único órgano del cuerpo humano cuya única función biológica conocida es proporcionar placer. La idea de que el coito solo debe bastar es un mito cultural sin sustento fisiológico.',
    scientificContext: 'Estudios de resonancia magnética funcional y sexología médica confirman que la pared vaginal posterior tiene baja densidad de mecanorreceptores de placer en comparación con el complejo clitoridiano.'
  },
  {
    id: 'faq-3',
    category: 'Salud e ITS',
    question: '¿Cuál es la diferencia real entre VIH y SIDA hoy en día?',
    answer: 'El VIH (Virus de Inmunodeficiencia Humana) es el virus que puede afectar los linfocitos CD4 del sistema inmunitario. El SIDA (Síndrome de Inmunodeficiencia Adquirida) es la etapa avanzada que ocurre solo si la infección no se detecta ni trata a tiempo durante años. Gracias a la terapia antirretroviral moderna, una persona diagnosticada a tiempo con VIH toma una o dos pastillas diarias, tiene una expectativa de vida idéntica a la de cualquier otra persona y, al alcanzar una carga viral "indetectable" por 6 meses, NO transmite el virus a ninguna pareja sexual por ninguna vía (I=I: Indetectable es igual a Intransmisible).',
    scientificContext: 'Consenso global de ONUSIDA y estudios multinacionales PARTNER 1 y PARTNER 2 con más de 100.000 actos sexuales sin preservativo entre parejas serodiferentes con cero transmisiones.'
  },
  {
    id: 'faq-4',
    category: 'Placer y Deseo',
    question: 'A veces pierdo la erección en medio de un encuentro. ¿Significa que ya no me atrae mi pareja o que tengo una enfermedad?',
    answer: 'Perder una erección de manera ocasional es una experiencia universal en la vida de cualquier persona con pene. La erección es un fenómeno hemodinámico y neurológico muy sensible al cansancio laboral, la falta de sueño, el alcohol o la propia preocupación por "mantenerla". Cuando un hombre piensa con angustia "¿y si se me baja?", su cuerpo libera adrenalina, la cual contrae de inmediato los vasos sanguíneos del pene, provocando exactamente lo que temía. Normalizarlo con ternura, reírse, darse un masaje y quitar el foco de la penetración suele resolver el episodio con total naturalidad.',
    scientificContext: 'La ansiedad de desempeño es la causa diagnóstica número uno de disfunción eréctil situacional en personas menores de 50 años.'
  },
  {
    id: 'faq-5',
    category: 'Consentimiento y Límites',
    question: 'Si empecé a besar a alguien o accedí a ir a su casa, ¿tengo derecho a decir que no quiero seguir más adelante?',
    answer: 'Sí, absolutamente y en todo momento. El consentimiento es un proceso dinámico, libre y reversible. Aceptar un beso, vestirse de determinada manera, aceptar una copa o estar en una cama con alguien jamás constituye un contrato irrevocable. Si en cualquier segundo algo te incomoda, te duele, te asusta o simplemente cambias de parecer, tienes el derecho pleno a decir "quiero parar aquí", y la otra persona tiene el deber ineludible de detenerse con respeto y sin agresividad.',
    scientificContext: 'Principio ético y jurídico del consentimiento entusiasta y reversible reconocido en tratados internacionales de derechos humanos.'
  },
  {
    id: 'faq-6',
    category: 'Relaciones y Pareja',
    question: 'Llevo 6 años con mi pareja y el sexo ya no es como al inicio. ¿Se terminó el amor?',
    answer: 'No significa que el amor haya terminado; significa que la química biológica de la fase de enamoramiento inicial (infatuación) dio paso al apego consolidado. En los primeros meses, la dopamina genera deseo involuntario constante. En relaciones duraderas, el deseo suele volverse "receptivo": no surge de la nada mientras ves televisión, pero sí responde favorablemente cuando se generan momentos deliberados de intimidad, juego, afecto y desconexión de las tareas domésticas. El deseo en relaciones largas no se "encuentra", se cultiva.',
    scientificContext: 'Modelos de deseo espontáneo vs. receptivo de la Dra. Rosemary Basson y estudios del Instituto Gottman.'
  },
  {
    id: 'faq-7',
    category: 'Salud e ITS',
    question: '¿Qué hago si se rompió el preservativo durante una relación sexual de riesgo?',
    answer: 'Existen dos medidas de emergencia urgentes y muy eficaces: 1) Si hay riesgo de embarazo no deseado, la anticoncepción de emergencia (píldora del día después o DIU de cobre) es más efectiva cuanto antes se tome (preferentemente en las primeras 24-72 horas). 2) Si hay riesgo de exposición al VIH, existe la PEP (Profilaxis Postexposición), un tratamiento antirretroviral de 28 días que debe iniciarse OBLIGATORIAMENTE dentro de las primeras 72 horas en un servicio de urgencias médicas o centro de salud sexual para prevenir la infección.',
    scientificContext: 'Protocolos de atención médica de urgencia de la Organización Mundial de la Salud (OMS).'
  },
  {
    id: 'faq-8',
    category: 'Servicios de Savia',
    question: '¿Los cursos son realmente 100% gratuitos? ¿Cómo se sostiene esta plataforma?',
    answer: 'Sí, todos los cursos de educación básica y media en Savia son y serán siempre 100% gratuitos y de acceso libre para cualquier persona hispanohablante. Nos financiamos a través de aportes solidarios de nuestra comunidad (donaciones transparentes de particulares), becas de organizaciones sociales aliadas y una pequeña tarifa en las consultas privadas de telemedicina y psicología especializada para quienes pueden abonarla, lo que nos permite subsidiar la atención de quienes carecen de recursos.',
    scientificContext: 'Modelo de economía social y solidaria orientado a la equidad en salud pública y derechos humanos.'
  }
];
