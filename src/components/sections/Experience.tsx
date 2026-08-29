import { motion } from 'framer-motion';
import { TbCalendar, TbMapPin } from 'react-icons/tb';

import { experience } from '../../data/experience';

/* ─── Company logo imports (Optional: update or clear paths as needed) ─── */
import cihLogo from '../../assets/images/logo_cih.png';
import leoniLogo from '../../assets/images/logo_leoni.png';
import marsaLogo from '../../assets/images/logo_marsa.png';

const companyLogo: Record<string, string> = {
  cih: cihLogo,
  leoni: leoniLogo,
  marsa: marsaLogo,
};

/* ─── Company accent colors ────────────────────────────────── */
const companyColor: Record<string, string> = {
  cih: 'var(--cyan)',
  leoni: 'var(--purple)',
  marsa: 'var(--gold)',
};

/* ─── Type badge config ─────────────────────────────────────── */
const typeBadge = {
  professional: { label: 'Professionnel', color: 'var(--blue)' },
  internship: { label: 'Stage', color: 'var(--gold)' },
};

/* ─── Framer Motion variants ───────────────────────────────── */
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ─── Component ────────────────────────────────────────────── */

export default function Experience() {
  return (
    <section id="experience" className="experience" aria-label="Expérience professionnelle">

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="section-eyebrow">Parcours</span>
        <h2 className="section-title">Expériences Professionnelles</h2>
        <p className="section-subtitle">
          Stages pratiques et projets d'ingénierie où j'ai appliqué l'architecture logicielle, 
          le développement Full-Stack et l'automatisation RPA pour créer des solutions performantes.
        </p>
      </motion.div>

      {/* ══════════ CARDS ══════════ */}
      <div className="experience__list">
        {experience.map((entry, i) => {
          const badge = typeBadge[entry.type];
          const accent = companyColor[entry.id] ?? 'var(--blue)';

          return (
            <motion.div
              key={entry.id}
              className="experience__card"
              style={{ '--exp-accent': accent } as React.CSSProperties}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >

              {/* ── Accent left border ── */}
              <div className="experience__card-accent" aria-hidden="true" />

              {/* ── Card body ── */}
              <div className="experience__card-body">

                {/* Top row: avatar + meta + badge */}
                <div className="experience__header">

                  {/* Company avatar — letter initial */}
                  <div className="experience__avatar" style={{ background: accent }}>
                    {entry.company[0].toUpperCase()}
                  </div>

                  {/* Role + company + period */}
                  <div className="experience__meta">
                    <h3 className="experience__role">{entry.role}</h3>

                    {/* Company name with inline logo */}
                    <p className="experience__company">
                      {companyLogo[entry.id] && (
                        <img
                          src={companyLogo[entry.id]}
                          alt=""
                          className="experience__company-logo"
                          loading="lazy"
                          aria-hidden="true"
                        />
                      )}
                      {entry.company}
                    </p>
                    <div className="experience__details">
                      <span className="experience__detail">
                        <TbCalendar size={13} aria-hidden="true" /> {entry.period}
                      </span>
                      {entry.location && (
                        <>
                          <span className="experience__dot" aria-hidden="true">·</span>
                          <span className="experience__detail">
                            <TbMapPin size={13} aria-hidden="true" /> {entry.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Type badge */}
                  <span
                    className="experience__badge"
                    style={{
                      color: badge.color,
                      borderColor: `${badge.color}40`,
                      background: `${badge.color}12`,
                    }}
                  >
                    {badge.label}
                  </span>

                </div>

                {/* Description paragraph */}
                <p className="experience__description">{entry.description}</p>

                {/* Responsibilities */}
                <ul className="experience__responsibilities">
                  {entry.responsibilities.map((r) => (
                    <li key={r} className="experience__resp-item">
                      <span className="experience__resp-dot" style={{ background: accent }} aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tech pills */}
                <div className="experience__tech">
                  {entry.technologies.map((tech) => (
                    <span key={tech} className="experience__tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}