import type { NavLink } from '../types';

/**
 * Liens de navigation pour la Navbar.
 * Chaque ancre doit correspondre à l'attribut `id` de la section correspondante.
 * Pour ajouter/supprimer/renommer un élément de navigation, modifiez uniquement ce fichier.
 */
export const navLinks: NavLink[] = [
  { label: 'À propos',        anchor: '#about' },
  { label: 'Parcours',        anchor: '#journey' },
  { label: 'Expérience',      anchor: '#experience' },
  { label: 'Projets',         anchor: '#projects' },
  { label: 'Compétences',     anchor: '#skills' },
  { label: 'Certifications', anchor: '#certifications' },
  { label: 'Contact',        anchor: '#contact' },
];
