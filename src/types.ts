export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  summary: string;
  content: string[];
  reflectionQuestion: string;
  keyTakeaway: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Introductorio' | 'Intermedio' | 'Profundo';
  duration: string;
  lessonsCount: number;
  description: string;
  highlight: string;
  badge: 'Curso gratuito';
  targetAudience: string;
  lessons: CourseLesson[];
}

export interface Professional {
  id: string;
  name: string;
  specialty: 'Psicología' | 'Sexología' | 'Terapia de pareja' | 'Salud sexual' | 'Trabajo social';
  roleTitle: string;
  credentials: string;
  experienceYears: number;
  photo: string;
  modality: 'Teleconsulta' | 'Teleconsulta y mixta';
  languages: string[];
  description: string;
  detailedBio: string;
  focusAreas: string[];
  approach: string;
  availabilityNote: string;
  feeInfo: string;
}

export interface CommunityProject {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  goalAmount: number;
  raisedAmount: number;
  beneficiariesCount: string;
  status: 'En curso' | 'Próximo ciclo' | 'Completado';
}

export interface DonationTier {
  amount: number;
  title: string;
  impactDescription: string;
  details: string;
  recommended?: boolean;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
  takeaways: string[];
  references: string[];
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  scientificContext?: string;
  relatedTopic?: string;
}
