import type { ExperienceEntry } from '../types';

/**
 * Professional experience — displayed in the Experience section.
 * Extracted verbatim from CV.
 * Most recent first.
 */
export const experience: ExperienceEntry[] = [
  {
    id:          'cih',
    role:        'Ingénieur Concepteur Développeur Full-Stack & RPA — Stage PFE',
    company:     'CIH BANK',
    type:        'internship',
    period:      'Février 2026 – Juillet 2026',
    location:    'Casablanca, Maroc',
    description:
      'Conception et réalisation d\'une plateforme basée sur une architecture microservices cloud-native pour le traitement automatisé de documents bancaires et l\'orchestration de processus RPA.',
    responsibilities: [
      'Conception et développement d\'une architecture microservices cloud-native avec Spring Boot 3, React, Docker et Kubernetes.',
      'Création d\'un orchestrateur intelligent pour l\'assignation automatique des tâches aux robots RPA et le traitement des documents bancaires scannés (CIN, RIB, OCR).',
      'Sécurisation de la plateforme via KeyCloak (OAuth2/OIDC, JWT) en garantissant la conformité RGPD.',
      'Mise en place de pipelines CI/CD sous GitLab CI/CD (build, test, scan de sécurité).',
    ],
    technologies: [
      'Spring Boot 3',
      'React',
      'Docker',
      'Kubernetes',
      'RPA',
      'KeyCloak',
      'GitLab CI/CD',
      'OCR',
    ],
  },
  {
    id:          'leoni',
    role:        'Développeur Full-Stack — Stage Technique',
    company:     'LEONI',
    type:        'internship',
    period:      'Juillet 2025 – Septembre 2025',
    location:    'Maroc',
    description:
      'Développement d\'une application full-stack pour l\'analyse des besoins métier et la gestion du pointage ainsi que des absences des employés.',
    responsibilities: [
      'Analyse des besoins métier et modélisation fonctionnelle pour la gestion du pointage et des absences des employés.',
      'Développement de l\'API REST back-end avec Node.js et SQLite, incluant la logique métier et la gestion de la persistance.',
      'Développement de l\'interface utilisateur responsive pour le suivi et la gestion des données d\'absentéisme.',
    ],
    technologies: [
      'Node.js',
      'SQLite',
      'REST API',
      'JavaScript',
      'HTML/CSS',
    ],
  },
  {
    id:          'marsa',
    role:        'Développeur Web — Stage d\'Observation / Application',
    company:     'Marsa Maroc',
    type:        'internship',
    period:      'Juillet 2024 – Août 2024',
    location:    'Maroc',
    description:
      'Analyse fonctionnelle des opérations portuaires et développement d\'une solution backend pour la traçabilité et la gestion du suivi des conteneurs.',
    responsibilities: [
      'Analyse des besoins fonctionnels liés à l\'exploitation des terminaux portuaires et des conteneurs.',
      'Conception, normalisation et validation de la base de données relationnelle sous MySQL (schéma entité-association).',
      'Développement d\'une API REST robuste avec Django assurant le suivi des conteneurs, la gestion des entrées/sorties et la traçabilité des opérations portuaires.',
    ],
    technologies: [
      'Django',
      'Python',
      'MySQL',
      'REST API',
    ],
  },
];
