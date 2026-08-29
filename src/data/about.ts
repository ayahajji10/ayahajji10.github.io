import { FaCompass, FaFire, FaGraduationCap, FaCog, FaBalanceScale, FaBullseye, FaHandshake, FaHourglassHalf, FaPray, FaLaptop, FaTools, FaRocket, FaRobot } from 'react-icons/fa';
import { GiLion, GiBiceps, GiBrain } from 'react-icons/gi';

import type { AboutContent } from '../types';

/**
 * Contenu de la section À propos.
 * Modifiez les paragraphes, les principes, les étapes de la vision et les statistiques ici.
 * Le composant lit tout à partir de ce fichier — aucune modification de code nécessaire.
 */
export const about: AboutContent = {

  /* ── Paragraphes narratifs ────────────────────────────────────── */
  paragraphs: [
    "Je suis une ingénieure full-stack, fraîchement diplômée de l'EMSI Casablanca, spécialisée en Génie Informatique et Réseaux. Plutôt que de me limiter à un seul domaine, j'ai choisi de développer une polyvalence intentionnelle — en passant des systèmes de logistique portuaire chez Marsa Maroc, aux outils industriels de gestion des effectifs chez LEONI, jusqu'aux microservices bancaires sécurisés et à l'orchestration RPA chez CIH Bank. Chaque expérience m'a poussée à mener un projet de bout en bout : backend, frontend, données et la sécurité qui rassemble le tout.",
    "Je pense qu'une bonne ingénierie allie rigueur et curiosité à parts égales. C'est pourquoi j'associe des bases solides — architecture propre, bases de données, authentification, DevOps — à une attirance constante vers les technologies d'avenir : agents IA, RAG, automatisation des flux de travail avec n8n. Je préfère comprendre un système en profondeur plutôt que d'en survoler la surface, et j'apporte cette même discipline dans ma façon d'apprendre.",
  ],

  /* ── Cadre de réalisation ───────────────────────────────────── */
  achievementFramework: [
    {
      icon:        FaCompass,
      iconColor:   '#E8590C', // correspond à 🧭 boussole — aiguille orange/rouge
      label:       'Valeurs fondamentales',
      description: 'La base — des principes qui ne changent jamais quel que soit le contexte',
    },
    {
      icon:        FaFire,
      iconColor:   '#FF6B35', // correspond à 🔥 feu — flamme orange
      label:       'Volonté',
      description: 'Détermination et discipline inébranlables vers l\'objectif',
    },
    {
      icon:        FaGraduationCap,
      iconColor:   '#F4B740', // correspond à 🎓 coiffe de diplômé — pompon doré
      label:       'Qualifications',
      description: 'Connaissances structurées, diplômes et compétences éprouvées',
    },
    {
      icon:        FaCog,
      iconColor:   '#8A94A6', // correspond à ⚙️ engrenage — gris acier
      label:       'Moyens',
      description: 'Les bons outils, méthodes, ressources et environnement',
    },
  ],

  /* ── Principes fondamentaux ─────────────────────────────────────────── */
  principles: [
    {
      icon:        FaBalanceScale,
      iconColor:   '#B08D57', // correspond à ⚖️ balance — or/brun
      label:       'Maîtrise émotionnelle',
      description: 'Pas de colère, pas de panique — maintenir une clarté sous n\'importe quelle pression',
    },
    {
      icon:        GiLion,
      iconColor:   '#C67C2E', // correspond à 🦁 tête de lion — crinière ambre/marron
      label:       'Courage & Conviction',
      description: 'Penser avec audace, assumer ses décisions et affronter les défis de face',
    },
    {
      icon:        FaBullseye,
      iconColor:   '#E63946', // correspond à 🎯 cible — anneaux rouges
      label:       'Focus méthodique',
      description: 'Précision calme et méthodique dans tout ce que j\'entreprends',
    },
    {
      icon:        FaHandshake,
      iconColor:   '#F0A202', // correspond à 🤝 poignée de main — ton ambre/or
      label:       'Responsabilité',
      description: 'Pleine propriété de mon travail et responsabilité de son impact',
    },
    {
      icon:        FaHourglassHalf,
      iconColor:   '#D4A574', // correspond à ⏳ sablier — sable brun
      label:       'Patience',
      description: 'Vision à long terme plutôt que bruit à court terme — faire confiance au processus',
    },
    {
      icon:        FaPray,
      iconColor:   '#F4A93B', // correspond à 🙏 mains jointes — ton ambre/or
      label:       'Gratitude',
      description: 'Garder les pieds sur terre, apprécier les progrès et apprendre de chaque expérience',
    },
    {
      icon:        GiBiceps,
      iconColor:   '#FFC93C', // correspond à 💪 bicep contracté — jaune doré
      label:       'Autodiscipline',
      description: 'Excellence physique, mentale et professionnelle — amélioration continue de soi',
    },
    {
      icon:        GiBrain,
      iconColor:   '#EC4899', // correspond à 🧠 cerveau — rose
      label:       'Clarté mentale',
      description: 'Pensée claire, communication articulée et prise de décision précise',
    },
  ],

  /* ── Feuille de route de vision à long terme ────────────────── */
  vision: [
    {
      label:  'Baccalauréat Scientifique',
      sub:    'Sciences de la Vie et de la Terre — Lycée Ziryab',
      status: 'done',
      icon:   FaGraduationCap,
      year:   '2020 – 2021',
    },
    {
      label:  'Diplôme d\'Ingénieur',
      sub:    'Génie Informatique, spéc. Ingénierie Informatique et Réseaux — EMSI Casablanca',
      status: 'done',
      icon:   FaLaptop,
      year:   '2021 – 2026',
    },
    {
      label:  'Expérience de terrain',
      sub:    'Développement Web (Marsa Maroc) → Full-Stack (LEONI) → Full-Stack & RPA (CIH Bank)',
      status: 'done',
      icon:   FaTools,
      year:   '2024 – 2026',
    },
    {
      label:  'Ingénieure Full-Stack',
      sub:    'Ouverte à de nouvelles opportunités à temps plein',
      status: 'current',
      icon:   FaRocket,
      year:   '2026',
    },
    {
      label:  'Expertise IA & Automatisation',
      sub:    'Aller plus loin avec les agents, le RAG et les systèmes de flux de travail intelligents',
      status: 'future',
      icon:   FaRobot,
      year:   '2026+',
    },
    {
      label:  'Systèmes sécurisés et intelligents à grande échelle',
      sub:    'Une ingénierie robuste, automatisée et véritablement utile',
      status: 'goal',
      icon:   FaBullseye,
      year:   'L\'Objectif',
    },
  ],

  /* ── Bandeau de statistiques ─────────────────────────────────────────────── */
  stats: [
    { value: '7+',  label: 'Projets'        },
    { value: '30+', label: 'Certifications' },
    { value: '3',   label: 'Stages'         },
    { value: '3',   label: 'Secteurs'       },
  ],
};