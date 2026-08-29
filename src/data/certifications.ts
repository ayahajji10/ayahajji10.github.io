import type { Certification } from '../types';

/**
 * Aya Hajji — Certifications Data
 * All 20 certificates sourced from certifs_aya/.
 * PDFs & thumbnails live in public/certificates/{id}.pdf and public/certificates/thumbnails/{id}.jpg
 */
export const certifications: Certification[] = [

  /* ══════════════════════════════════════
     SOFT SKILLS & DÉVELOPPEMENT PERSO
  ══════════════════════════════════════ */
  {
    id: 'psm1',
    title: 'Scrum Master (PSM I) Certification Preparation',
    provider: 'Coursera',
    category: 'soft-skills',
    featured: true,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/8B0W029KWEMW',
  },
  {
    id: 'soft-skills-pro',
    title: 'People & Soft Skills: Essential for Professional Success',
    provider: 'Coursera',
    category: 'soft-skills',
    featured: true,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/M7VVPVD6EJM9',
  },
  {
    id: 'job-interview',
    title: 'The Art of the Job Interview',
    provider: 'Coursera',
    category: 'soft-skills',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/4D32EK40JWDZ',
  },
  {
    id: 'recherche-doc',
    title: 'La recherche documentaire',
    provider: 'Coursera',
    category: 'soft-skills',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/8KUXMCGBUF3M',
  },

  /* ══════════════════════════════════════
     IA & DATA SCIENCE
  ══════════════════════════════════════ */
  {
    id: 'ml-python',
    title: 'Machine Learning with Python',
    provider: 'Coursera',
    category: 'ai',
    featured: true,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/6TZYC3ZL6HTY',
  },
  {
    id: 'prog-everybody',
    title: 'Programming for Everybody (Getting Started with Python)',
    provider: 'Coursera',
    category: 'data-science',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/4NUKWHZ9Q4AZ',
  },

  /* ══════════════════════════════════════
     INFRASTRUCTURE & CLOUD
  ══════════════════════════════════════ */
  {
    id: 'docker-k8s',
    title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
    provider: 'Coursera',
    category: 'infrastructure',
    featured: true,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/2G7QDECM6AGD',
  },
  {
    id: 'azure-compute',
    title: 'Compute Resources in Azure',
    provider: 'Coursera',
    category: 'infrastructure',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/KGV8W2T6JO9P',
  },
  {
    id: 'azure-storage',
    title: 'Storage in Azure',
    provider: 'Coursera',
    category: 'infrastructure',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/ZYT8YAW0LMVI',
  },
  {
    id: 'azure-identities',
    title: 'Manage Identities and Governance in Azure',
    provider: 'Coursera',
    category: 'infrastructure',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/D0DZQKJ2OTBZ',
  },
  {
    id: 'azure-networks',
    title: 'Virtual Networks in Azure',
    provider: 'Coursera',
    category: 'infrastructure',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/HTAMR7WM575N',
  },
  {
    id: 'cpp-oop',
    title: 'Introduction à la programmation orientée objet (en C++)',
    provider: 'Coursera',
    category: 'infrastructure',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/XDTHF3GUF689',
  },
  {
    id: 'unix',
    title: 'The Unix Workbench',
    provider: 'Coursera',
    category: 'infrastructure',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/GZ9RWR97BEW5',
  },
  {
    id: 'arduino',
    title: 'The Arduino Platform and C Programming',
    provider: 'Coursera',
    category: 'infrastructure',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/GXLQ48ZACXAN',
  },

  /* ══════════════════════════════════════
     DÉVELOPPEMENT WEB
  ══════════════════════════════════════ */
  {
    id: 'react-basics',
    title: 'React Basics',
    provider: 'Coursera',
    category: 'web-dev',
    featured: true,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/L7MTX2GG3VEB',
  },
  {
    id: 'java-oop',
    title: 'Introduction to Java and Object-Oriented Programming',
    provider: 'Coursera',
    category: 'web-dev',
    featured: true,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/K3PMOZSHDTP7',
  },
  {
    id: 'software-eng',
    title: 'Software Engineering: Software Design and Project Management',
    provider: 'Coursera',
    category: 'web-dev',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/9TC4NBS8NCSU',
  },
  {
    id: 'html5',
    title: 'Introduction to HTML5',
    provider: 'Coursera',
    category: 'web-dev',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/Y5PYCABTTWBS',
  },
  {
    id: 'javascript',
    title: 'Interactivity with JavaScript',
    provider: 'Coursera',
    category: 'web-dev',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/5BN25B7PCCD7',
  },
  {
    id: 'html-css-js',
    title: 'HTML, CSS, and Javascript for Web Developers',
    provider: 'Coursera',
    category: 'web-dev',
    featured: false,
    hasPdfPreview: true,
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/UW82VQFYYNGX',
  },

];