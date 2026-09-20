import { CommunityProject, DonationTier } from '../types';

export const COMMUNITY_PROJECTS: CommunityProject[] = [
  {
    id: 'talleres-educativos-barriales',
    title: 'Talleres de Educación Sexual en Barrios y Escuelas Comunitarias',
    category: 'Educación Comunitaria',
    location: 'Zonas urbanas y rurales de Colombia, México y Argentina',
    description: 'Llevamos facilitadores de salud y educadores con metodologías lúdicas a secundarias y centros comunitarios donde no existe educación sexual integral.',
    impactMetrics: [
      { label: 'Jóvenes alcanzados', value: '4.850+' },
      { label: 'Talleres realizados', value: '142' },
      { label: 'Instituciones aliadas', value: '38' }
    ],
    goalAmount: 45000000,
    raisedAmount: 37200000,
    beneficiariesCount: '4.850 jóvenes y docentes',
    status: 'En curso'
  },
  {
    id: 'fondo-acceso-profesional',
    title: 'Fondo Solidario de Acompañamiento Terapéutico',
    category: 'Acceso a Profesionales',
    location: 'Latinoamérica (Teleconsulta 100% subvencionada)',
    description: 'Subsidia sesiones de psicología, sexología clínica y terapia de pareja para personas en situación de precariedad económica o desempleo.',
    impactMetrics: [
      { label: 'Horas de terapia donadas', value: '1.240 hrs' },
      { label: 'Personas atendidas', value: '310' },
      { label: 'Satisfacción reportada', value: '98%' }
    ],
    goalAmount: 35000000,
    raisedAmount: 29800000,
    beneficiariesCount: '310 personas en acompañamiento',
    status: 'En curso'
  },
  {
    id: 'prevencion-comunitaria-its',
    title: 'Campañas de Prevención de ITS y Acceso a Pruebas Rápidas',
    category: 'Prevención y Salud',
    location: 'Centros comunitarios y casas de juventud',
    description: 'Distribución gratuita de métodos de barrera de calidad, folletería educativa sin tabúes y jornadas de testeo rápido de VIH y Sífilis con consejería cálida.',
    impactMetrics: [
      { label: 'Pruebas aplicadas', value: '3.600' },
      { label: 'Barreras distribuidas', value: '65.000' },
      { label: 'Casos vinculados a salud', value: '100%' }
    ],
    goalAmount: 28000000,
    raisedAmount: 24500000,
    beneficiariesCount: '6.200 personas informadas',
    status: 'En curso'
  },
  {
    id: 'investigacion-y-divulgacion',
    title: 'Observatorio de Salud Sexual y Guías de Libre Acceso',
    category: 'Investigación y Divulgación',
    location: 'Acceso digital abierto para toda Iberoamérica',
    description: 'Producción de manuales descargables, infografías pedagógicas y estudios sobre barreras de acceso a la salud sexual en comunidades hispanohablantes.',
    impactMetrics: [
      { label: 'Descargas de guías', value: '120.000+' },
      { label: 'Artículos científicos', value: '14' },
      { label: 'Materiales en lenguas originarias', value: '3' }
    ],
    goalAmount: 20000000,
    raisedAmount: 18400000,
    beneficiariesCount: 'Toda la comunidad digital',
    status: 'En curso'
  }
];

export const DONATION_TIERS: DonationTier[] = [
  {
    amount: 10000,
    title: '$10.000 COP',
    impactDescription: 'Contribuye al acceso a materiales educativos.',
    details: 'Permite imprimir y digitalizar cuadernillos anatómicos y guías ilustradas para 4 jóvenes en escuelas públicas sin conexión a internet.'
  },
  {
    amount: 30000,
    title: '$30.000 COP',
    impactDescription: 'Apoya actividades educativas comunitarias.',
    details: 'Cubre el material pedagógico, preservativos y refrigerios para un taller presencial de 15 personas sobre consentimiento y prevención.',
    recommended: true
  },
  {
    amount: 50000,
    title: '$50.000 COP',
    impactDescription: 'Ayuda a financiar acompañamiento profesional.',
    details: 'Subsidia el 50% de una consulta de telepsicología o sexología clínica para una persona en situación de vulnerabilidad o desempleo.'
  },
  {
    amount: 100000,
    title: '$100.000+ COP',
    impactDescription: 'Contribuye a programas comunitarios de mayor alcance.',
    details: 'Financia jornadas integrales de salud sexual comunitaria, testeo rápido con consejería y seguimiento a casos de violencia o discriminación.'
  }
];

export const TRANSPARENCY_STATS = [
  {
    percentage: '65%',
    category: 'Programas Comunitarios y Atención Directa',
    description: 'Subsidios de teleconsultas, talleres barriales, pruebas rápidas y materiales impresos.'
  },
  {
    percentage: '20%',
    category: 'Investigación, Creación y Actualización de Cursos',
    description: 'Revisión por comités médicos, diseño pedagógico y producción de contenidos de libre acceso.'
  },
  {
    percentage: '15%',
    category: 'Sostenibilidad Tecnológica y Operación',
    description: 'Servidores seguros de teleconsulta confidencial, soporte a usuarios y auditorías independientes.'
  }
];
