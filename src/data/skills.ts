import type { SkillCategory, SoftSkill, LanguageEntry, Interest } from '../types';

/* ══════════════════════════════════════════════════════════════
   TECHNICAL SKILLS — Exact CV Mapping (8 Categories)
══════════════════════════════════════════════════════════════ */

export const technicalSkills: SkillCategory[] = [
  {
    id:       'sys-servers',
    category: 'Système & Serveurs',
    icon:     'code',
    color:    'var(--blue)',
    skills: [
      { name: 'Linux (Ubuntu, Kali)', level: 'intermediate' },
      { name: 'Windows Server',        level: 'intermediate' },
      { name: 'DNS / DHCP / AD',       level: 'intermediate' },
      { name: 'VMware',                level: 'intermediate' },
    ],
  },
  {
    id:       'backend-sec',
    category: 'Frameworks Backend & Sécurité',
    icon:     'code',
    color:    'var(--purple)',
    skills: [
      { name: 'Spring Boot', level: 'advanced' },
      { name: 'ASP.NET',     level: 'intermediate' },
      { name: '.NET MVC',    level: 'intermediate' },
      { name: 'Laravel',     level: 'intermediate' },
    ],
  },
  {
    id:       'frontend',
    category: 'Frontend',
    icon:     'palette',
    color:    'var(--gold)',
    skills: [
      { name: 'React',     level: 'advanced' },
      { name: 'Angular',   level: 'intermediate' },
      { name: 'Bootstrap', level: 'intermediate' },
    ],
  },
  {
    id:       'databases',
    category: 'Bases de données',
    icon:     'database',
    color:    'var(--cyan)',
    skills: [
      { name: 'MySQL',               level: 'advanced' },
      { name: 'PostgreSQL/PGVector', level: 'intermediate' },
      { name: 'Firebase',            level: 'intermediate' },
      { name: 'Oracle',              level: 'intermediate' },
    ],
  },
  {
    id:       'devops-cicd',
    category: 'DevOps & CI/CD',
    icon:     'code',
    color:    'var(--blue)',
    skills: [
      { name: 'Docker',       level: 'advanced' },
      { name: 'Git',          level: 'advanced' },
      { name: 'GitHub',       level: 'advanced' },
      { name: 'Azure DevOps', level: 'intermediate' },
      { name: 'Kubernetes',   level: 'intermediate' },
    ],
  },
  {
    id:       'modeling-methodologies',
    category: 'Modélisation & Méthodologies',
    icon:     'target',
    color:    'var(--purple)',
    skills: [
      { name: 'UML',                   level: 'intermediate' },
      { name: 'Merise',                level: 'intermediate' },
      { name: 'Principes SOLID',        level: 'intermediate' },
      { name: 'Patrons de conception', level: 'intermediate' },
      { name: 'Agile (Scrum)',         level: 'advanced' },
    ],
  },
  {
    id:       'ai',
    category: 'Intelligence Artificielle',
    icon:     'brain',
    color:    'var(--gold)',
    skills: [
      { name: 'ChatBots', level: 'intermediate' },
      { name: 'RAG',      level: 'intermediate' },
      { name: 'Agent IA', level: 'intermediate' },
      { name: 'n8n',      level: 'intermediate' },
    ],
  },
  {
    id:       'data',
    category: 'Data',
    icon:     'chart',
    color:    'var(--cyan)',
    skills: [
      { name: 'Python',       level: 'advanced' },
      { name: 'SQL',          level: 'advanced' },
      { name: 'Airbyte',      level: 'intermediate' },
      { name: 'Power BI',     level: 'intermediate' },
      { name: 'Pandas',       level: 'intermediate' },
      { name: 'scikit-learn', level: 'intermediate' },
      { name: 'NumPy',        level: 'intermediate' },
      { name: 'Matplotlib',   level: 'intermediate' },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════
   SOFT SKILLS (Unchanged)
══════════════════════════════════════════════════════════════ */

export const softSkills: SoftSkill[] = [
  { label: 'Perseverance',           icon: 'flame'   },
  { label: 'Adaptability',           icon: 'waves'   },
  { label: 'Attentive Listener',     icon: 'ear'     },
  { label: 'Active Listening',       icon: 'target'  },
  { label: 'Following Instructions', icon: 'check'   },
];

/* ══════════════════════════════════════════════════════════════
   OFFICE & TOOLS (Unchanged)
══════════════════════════════════════════════════════════════ */

export const officeSkills: SoftSkill[] = [
  { label: 'PowerPoint', icon: 'presentation' },
  { label: 'Excel',      icon: 'table'        },
  { label: 'Canva',      icon: 'palette'      },
  { label: 'Word',       icon: 'file'         },
];

/* ══════════════════════════════════════════════════════════════
   LANGUAGES — Exact levels from CV
══════════════════════════════════════════════════════════════ */

export const languages: LanguageEntry[] = [
  { language: 'Arabe',    level: 'Maternelle', flag: '🇲🇦', proficiency: 100 },
  { language: 'Français', level: 'Courant',    flag: '🇫🇷', proficiency: 85  },
  { language: 'Anglais',  level: 'Moyen',      flag: '🇬🇧', proficiency: 50  },
];

/* ══════════════════════════════════════════════════════════════
   INTERESTS (Unchanged)
══════════════════════════════════════════════════════════════ */

export const interests: Interest[] = [
  { label: 'Reading',                 icon: 'book'    },
  { label: 'Chess',                   icon: 'chess'   },
  { label: 'Fitness & Weight Training', icon: 'barbell' },
];
