import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbCalendar, TbBriefcase, TbSchool, TbStar, TbBrandGithub, TbExternalLink } from 'react-icons/tb';

import { projects } from '../../data/projects';
import type { ProjectEntry } from '../../types';

/* ─── Filter config ─────────────────────────────────────────── */

interface Filter {
  id: string;
  label: string;
  match: (p: ProjectEntry) => boolean;
}

const FILTERS: Filter[] = [
  { id: 'all', label: 'Tous les projets', match: () => true },
  { id: 'professional', label: 'Professionnels', match: (p) => p.type === 'professional' },
  { id: 'academic', label: 'Académiques', match: (p) => p.type === 'academic' },
  { id: 'software', label: 'Software & Web', match: (p) => p.tags.includes('software') },
  { id: 'ai', label: 'IA & Chatbot', match: (p) => p.tags.includes('ai') },
  { id: 'rpa', label: 'RPA & Automates', match: (p) => p.tags.includes('rpa') },
];

/* ─── Category badge config ─────────────────────────────────── */

const categoryMeta: Record<string, { label: string; color: string }> = {
  ai: { label: 'Intelligence Artificielle', color: 'var(--purple)' },
  rpa: { label: 'RPA & Automatisation', color: 'var(--cyan)' },
  software: { label: 'Développement Software', color: 'var(--blue)' },
};

/* ─── Framer variants ───────────────────────────────────────── */

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 24 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }
  },
  exit: {
    opacity: 0, scale: 0.93, y: 16,
    transition: { duration: 0.3, ease: 'easeIn' as any }
  },
};

/* ─── Component ────────────────────────────────────────────── */

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = useMemo(
    () => FILTERS.find((f) => f.id === activeFilter)?.match
      ? projects.filter(FILTERS.find((f) => f.id === activeFilter)!.match)
      : projects,
    [activeFilter],
  );

  return (
    <section id="projects" className="projects" aria-label="Portfolio de projets">

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="section-eyebrow">Réalisations</span>
        <h2 className="section-title">Projets</h2>
        <p className="section-subtitle">
          Un aperçu complet de mes projets professionnels en entreprise ainsi que de mes
          projets académiques développés au cours de mon cursus d'ingénieur.
        </p>
      </motion.div>

      {/* ══════════ FILTER PILLS ══════════ */}
      <motion.div
        className="projects__filters"
        role="tablist"
        aria-label="Filtrer les projets par catégorie"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            role="tab"
            aria-selected={activeFilter === f.id}
            className={`projects__filter-pill${activeFilter === f.id ? ' projects__filter-pill--active' : ''}`}
            onClick={() => setActiveFilter(f.id)}
            id={`filter-${f.id}`}
          >
            {f.label}
            <span className="projects__filter-count">
              {projects.filter(f.match).length}
            </span>
          </button>
        ))}
      </motion.div>

      {/* ══════════ GRID ══════════ */}
      <div className="projects__grid" role="tabpanel">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const cat = categoryMeta[project.category] ?? categoryMeta.software;
            return (
              <motion.article
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`project-card${project.featured ? ' project-card--featured' : ''}`}
                style={{ '--proj-color': cat.color } as React.CSSProperties}
                aria-label={project.title}
              >

                {/* ── Top bar: category + type ── */}
                <div className="project-card__topbar">
                  <span
                    className="project-card__cat-badge"
                    style={{ color: cat.color, borderColor: `${cat.color}33`, background: `${cat.color}12` }}
                  >
                    {cat.label}
                  </span>

                  <span className={`project-card__type-badge project-card__type-badge--${project.type}`}>
                    {project.type === 'professional'
                      ? <><TbBriefcase size={12} aria-hidden="true" /> Professionnel</>
                      : <><TbSchool size={12} aria-hidden="true" /> Académique</>}
                  </span>

                  {project.featured && (
                    <span className="project-card__featured-star" aria-label="Projet phare">
                      <TbStar size={15} aria-hidden="true" />
                    </span>
                  )}
                </div>

                {/* ── Company chip (professional only) ── */}
                {project.company && (
                  <div className="project-card__company">
                    @ {project.company}
                  </div>
                )}

                {/* ── Title ── */}
                <h3 className="project-card__title">{project.title}</h3>

                {/* ── Subtitle ── */}
                {project.subtitle && (
                  <p className="project-card__subtitle">{project.subtitle}</p>
                )}

                {/* ── Period ── */}
                <p className="project-card__period">
                  <TbCalendar size={13} aria-hidden="true" /> {project.period}
                </p>

                {/* ── Description ── */}
                <p className="project-card__description">{project.description}</p>

                {/* ── Tech pills ── */}
                <div className="project-card__tech">
                  {project.technologies.map((t) => (
                    <span key={t} className="project-card__tech-pill">{t}</span>
                  ))}
                </div>

                {/* ── Links ── */}
                {(project.github || project.demo) && (
                  <div className="project-card__links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link project-card__link--github"
                        aria-label={`Dépôt GitHub pour ${project.title}`}
                      >
                        <TbBrandGithub size={15} aria-hidden="true" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link project-card__link--demo"
                        aria-label={`Démo en ligne pour ${project.title}`}
                      >
                        <TbExternalLink size={14} aria-hidden="true" />
                        Démo
                      </a>
                    )}
                  </div>
                )}

              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ══════════ EMPTY STATE ══════════ */}
      {filtered.length === 0 && (
        <motion.p
          className="projects__empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Aucun projet ne correspond à ce filtre.
        </motion.p>
      )}

    </section>
  );
}