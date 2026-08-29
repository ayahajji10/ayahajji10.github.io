import type { ProjectEntry } from '../types';

/**
 * All projects — displayed in the Projects section.
 *
 * Sources:
 *  - Professional projects: Stage PFE (CIH BANK), Stage Technique (LEONI), Stage Observation/Application (Marsa Maroc)
 *  - Academic projects: Campus Connecté, Quiz Permis, Chatbot Scolaire, Coffee Shop
 */
export const projects: ProjectEntry[] = [

  /* ═══════════════════════════════════════════════
     PROFESSIONAL PROJECTS
  ═══════════════════════════════════════════════ */

  {
    id:          'cih-pfe',
    title:       'Plateforme Microservices & Orchestrateur RPA',
    subtitle:    'Stage PFE — CIH BANK',
    category:    'rpa',
    tags:        ['rpa', 'software', 'professional'],
    type:        'professional',
    period:      'Février 2026 – Juillet 2026',
    company:     'CIH BANK',
    description:
      'Conception d\'une architecture microservices cloud-native avec Spring Boot 3, React, Docker et Kubernetes. Réalisation d\'un orchestrateur intelligent assignant automatiquement les tâches aux robots RPA et traitant les documents bancaires scannés (CIN, RIB, OCR), sécurisé via KeyCloak (OAuth2/OIDC) et déployé via GitLab CI/CD.',
    technologies: ['Spring Boot 3', 'React', 'Docker', 'Kubernetes', 'RPA', 'KeyCloak', 'GitLab CI/CD', 'OCR'],
    featured:    true,
  },
  {
    id:          'leoni-gestion',
    title:       'Gestion du Pointage et des Absences',
    subtitle:    'Stage Technique — LEONI',
    category:    'software',
    tags:        ['software', 'professional'],
    type:        'professional',
    period:      'Juillet 2025 – Septembre 2025',
    company:     'LEONI',
    description:
      'Analyse des besoins métier et modélisation fonctionnelle pour le suivi des employés. Développement d\'une API REST sous Node.js avec SQLite, ainsi que d\'une interface utilisateur dédiée à la consultation et la gestion de l\'absentéisme.',
    technologies: ['Node.js', 'SQLite', 'REST API', 'JavaScript', 'HTML/CSS'],
    featured:    true,
  },
  {
    id:          'marsa-conteneurs',
    title:       'Système de Suivi des Conteneurs Portuaires',
    subtitle:    'Stage d\'Observation/Application — Marsa Maroc',
    category:    'software',
    tags:        ['software', 'professional'],
    type:        'professional',
    period:      'Juillet 2024 – Août 2024',
    company:     'Marsa Maroc',
    description:
      'Analyse des besoins et de l\'exploitation des terminaux portuaires. Conception de la base de données relationnelle sous MySQL et développement d\'une API REST robuste avec Django assurant le suivi et la traçabilité des opérations portuaires.',
    technologies: ['Django', 'Python', 'MySQL', 'REST API'],
    featured:    false,
  },

  /* ═══════════════════════════════════════════════
     ACADEMIC PROJECTS
  ═══════════════════════════════════════════════ */

  {
    id:          'campus-connecte',
    title:       'Campus Connecté',
    subtitle:    'Architecture Microservices pour Clubs et Notifications',
    category:    'software',
    tags:        ['software', 'academic'],
    type:        'academic',
    period:      '2025',
    description:
      'Conception et développement d\'une architecture microservices complète pour la gestion centralisée des clubs universitaires et le système de notifications en temps réel.',
    technologies: ['Spring Boot', 'React', 'Docker'],
    featured:    true,
  },
  {
    id:          'chatbot-scolaire',
    title:       'Chatbot Scolaire',
    subtitle:    'Plateforme d\'Orientation des Élèves',
    category:    'ai',
    tags:        ['ai', 'academic'],
    type:        'academic',
    period:      '2024',
    description:
      'Développement d\'une plateforme web intégrant un agent conversationnel (Chatbot/Agent IA) pour accompagner et guider les élèves dans leur orientation scolaire.',
    technologies: ['Python', 'ChatBot', 'IA'],
    featured:    false,
  },
  {
    id:          'quiz-permis',
    title:       'Quiz Permis',
    subtitle:    'Simulation et Entraînement au Permis de Conduire',
    category:    'software',
    tags:        ['software', 'academic'],
    type:        'academic',
    period:      '2024',
    description:
      'Application web de simulation interactive pour s\'entraîner et passer des tests à l\'examen du permis de conduire.',
    technologies: ['Java', 'Web'],
    featured:    false,
  },
  {
    id:          'coffee-shop',
    title:       'Coffee Shop',
    subtitle:    'Gestion et Commande en Ligne',
    category:    'software',
    tags:        ['software', 'academic'],
    type:        'academic',
    period:      '2024',
    description:
      'Site web dynamique permettant la gestion du catalogue, des stocks et la prise de commandes en ligne pour un café.',
    technologies: ['Python', 'Django'],
    featured:    false,
  },
];