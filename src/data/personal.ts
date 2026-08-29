import type { PersonalInfo } from '../types';

/**
 * Données d'identité personnelle principales.
 * Utilisé par : Navbar (logo), Hero, Footer.
 * Mis à jour une fois — reflété partout.
 *
 * REMARQUE : profileImage — une fois que vous avez une vraie photo, déposez-la dans
 *       src/assets/images/profile.jpg et mettez à jour le chemin ci-dessous.
 */
export const personal: PersonalInfo = {
  firstName:          'Aya',
  lastName:           'Hajji',
  fullName:           'Aya Hajji',
  initials:           'AH',
  navSubtitle:        'Full-Stack · Données · IA',
  title:              'Ingénierie Full-Stack · RPA & Automatisation · Données & IA',
  tagline:            'conception de systèmes full-stack sécurisés et automatisés (microservices bancaires, orchestration RPA, agents conversationnels IA)',
  availabilityStatus: 'Disponible pour de nouvelles opportunités',
  profileImage:       '', // TODO : définissez le chemin de votre photo une fois ajoutée à src/assets/images/
  cvFile:             '/resume.pdf', // servi depuis public/cv.pdf

  heroHighlights: [
    { icon: '📍', label: 'Basée à',            value: 'Casablanca, Maroc'             },
    { icon: '🎓', label: 'Cycle d\'Ingénieur',         value: 'EMSI Casablanca' },
    { icon: '🏛', label: 'Spécialisation', value: 'Ingénierie Informatique et Réseaux (IIR) Master MIAGE'           },
  ],
};