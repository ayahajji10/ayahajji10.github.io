import type { EducationEntry } from '../types';

/**
 * Historique de formation — affiché dans la section Parcours (Chronologie).
 * Ordre chronologique (du plus ancien au plus récent).
 *
 * Source : CV d'Aya Hajji + détail confirmé (structure EMSI partagée avec Ahmed).
 * Le programme de l'EMSI comprend un Cycle Préparatoire Intégré de 2 ans suivi d'un
 * cycle d'ingénieur spécialisé de 3 ans — cette partie de la structure est
 * partagée avec le parcours d'Ahmed. Elle n'a PAS effectué le double diplôme
 * Côte d'Azur ni le master Lyon 1 — ceux-ci étaient réservés à Ahmed et sont
 * intentionnellement omis ici.
 *
 * Remarque : Le repère de carte du Lycée Ziryab est une localisation approximative
 * (Bd Ibn Sina, Maârif, Casablanca) — il ne s'agit pas d'une adresse exacte vérifiée.
 * Remplacez par les coordonnées précises si vous les avez.
 */
export const education: EducationEntry[] = [
  {
    id:          'bac',
    institution: 'Lycée Ziryab',
    degree:      'Baccalauréat Scientifique',
    field:       'Sciences de la Vie et de la Terre (SVT)',
    period:      '2020 – 2021',
    location:    'Casablanca, Maroc',
    type:        'bac',
    highlights: [
      'Baccalauréat scientifique, option Sciences de la Vie et de la Terre',
    ],
    mapLocations: [
      { lat: 33.5730, lng: -7.6558, label: 'Lycée Ziryab — Bd Ibn Sina, Maârif, Casablanca (approx.)' },
    ],
  },
  {
    id:          'emsi-prepa',
    institution: 'EMSI — École Marocaine des Sciences de l\'Ingénieur',
    degree:      'Cycle Préparatoire Intégré',
    field:       'Mathématiques, Physique & Informatique Fondamentale',
    period:      '2021 – 2023',
    location:    'Casablanca, Maroc',
    type:        'prep',
    highlights: [
      'Cycle préparatoire intensif de 2 ans en mathématiques, physique et informatique',
    ],
    mapLocations: [
      { lat: 33.5852, lng: -7.6347, label: 'EMSI Roudani — 380 Bd Brahim Roudani' },
      { lat: 33.5875, lng: -7.6203, label: 'EMSI Maarif — 217 Bd Bir Anzarane' },
    ],
  },
  {
    id:          'emsi-engineering',
    institution: 'EMSI — École Marocaine des Sciences de l\'Ingénieur',
    degree:      'Diplôme d\'Ingénieur d\'État',
    field:       'Génie Informatique — Ingénierie Informatique et Réseaux (IIR)',
    period:      '2023 – 2026',
    location:    'Casablanca, Maroc',
    type:        'engineering',
    highlights: [
      'Cycle d\'ingénieur spécialisé de 3 ans, spécialisation Ingénierie Informatique et Réseaux (IIR)',
      'Projet de Fin d\'Études (PFE) : plateforme Full-Stack & RPA intelligente — CIH Bank',
    ],
    mapLocations: [
      { lat: 33.5852, lng: -7.6347, label: 'EMSI Roudani — 380 Bd Brahim Roudani' },
      { lat: 33.5875, lng: -7.6203, label: 'EMSI Maarif — 217 Bd Bir Anzarane' },
    ],
  },
];