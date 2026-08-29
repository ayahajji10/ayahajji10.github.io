import { motion } from 'framer-motion';
import { MdArrowForward, MdFileDownload } from 'react-icons/md';
import { 
  TbMapPin, 
  TbSchool, 
  TbBuildingBank 
} from 'react-icons/tb';

import { personal } from '../../data/personal';
import profileImg from '../../assets/images/profile.png';

/* ─── Domain color mapping ─────────────────────────────────── */

const titleDomains = [
  {
    text: 'Full-Stack Development',
    color: 'var(--blue)',
    dotColor: 'var(--blue)',
  },
  {
    text: 'Cloud & DevOps',
    color: '#14B8A6',
    dotColor: '#14B8A6',
  },
  {
    text: 'Intelligent Systems & AI',
    color: 'var(--purple)',
    dotColor: 'var(--purple)',
  },
] as const;

/* ─── Highlight Cards Icon Config (No Frame/Background) ────── */

const infoCardIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  'BASED IN': {
    icon: <TbMapPin size={22} />,
    color: '#E11D48', // Vibrant Rose Pin
  },
  "CYCLE D'INGÉNIEUR": {
    icon: <TbSchool size={22} />,
    color: '#8B5CF6', // Academic Purple Cap
  },
  'SPECIALIZATION': {
    icon: <TbBuildingBank size={22} />,
    color: '#334155', // Slate University Building
  },
};

/* ─── Framer Motion variants ───────────────────────────────── */

const leftVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren:   0.15,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 28 },
  show:   {
    opacity: 1,
    y:       0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const photoVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.94 },
  show:   {
    opacity: 1,
    x:       0,
    scale:   1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay: 0.25 },
  },
};

/* ─── Component ────────────────────────────────────────────── */

export default function Hero() {
  const hasPhoto = Boolean(profileImg);

  return (
    <section className="hero" aria-label="Introduction">

      {/* ── Animated background orbs ── */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />

      {/* ════════════ LEFT: text content ════════════ */}
      <motion.div
        className="hero__left"
        variants={leftVariants}
        initial="hidden"
        animate="show"
      >

        {/* Availability badge */}
        <motion.div className="hero__badge" variants={itemUp}>
          <span className="hero__badge-dot" aria-hidden="true" />
          {personal.availabilityStatus}
        </motion.div>

        {/* Name */}
        <motion.h1 className="hero__name" variants={itemUp}>
          {personal.firstName}
          <br />
          <span className="hero__name-accent">{personal.lastName}</span>
        </motion.h1>

        {/* Domain strip — each domain its own color */}
        <motion.div className="hero__domains" variants={itemUp}>
          {titleDomains.map((d) => (
            <div
              key={d.text}
              className="hero__domain"
              style={{ color: d.color }}
            >
              <span
                className="hero__domain-dot"
                style={{ background: d.dotColor }}
                aria-hidden="true"
              />
              {d.text}
            </div>
          ))}
        </motion.div>

        {/* Vision tagline */}
        <motion.p className="hero__tagline" variants={itemUp}>
          {personal.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div className="hero__ctas" variants={itemUp}>
          <a
            href="#projects"
            className="hero__cta-primary"
            id="hero-view-projects"
          >
            Voir les projets
            <MdArrowForward size={18} aria-hidden="true" />
          </a>
          <a
            href={personal.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            download="Aya_Hajji_CV.pdf"
            className="hero__cta-secondary"
            id="hero-download-cv"
          >
            <MdFileDownload size={18} aria-hidden="true" />
            Télécharger CV
          </a>
        </motion.div>

        {/* Quick-info cards */}
        <motion.div className="hero__info" variants={itemUp}>
          {personal.heroHighlights.map((card) => {
            const iconConfig = infoCardIcons[card.label.toUpperCase()] || {
              icon: <TbMapPin size={22} />,
              color: 'var(--blue)',
            };

            return (
              <div key={card.label} className="hero__info-card">
                <span 
                  className="hero__info-icon flex items-center justify-center shrink-0"
                  style={{ 
                    color: iconConfig.color,
                    background: 'transparent',
                    backgroundColor: 'transparent',
                    padding: 0,
                  }}
                  aria-hidden="true"
                >
                  {iconConfig.icon}
                </span>
                <div>
                  <span className="hero__info-label">{card.label}</span>
                  <span className="hero__info-value">{card.value}</span>
                </div>
              </div>
            );
          })}
        </motion.div>

      </motion.div>

      {/* ════════════ RIGHT: profile photo ════════════ */}
      <motion.div
        className="hero__right"
        variants={photoVariants}
        initial="hidden"
        animate="show"
      >
        {/* Subtle floating motion on the whole photo block */}
        <motion.div
          className="hero__photo-wrapper"
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration:   6,
            repeat:     Infinity,
            ease:       'easeInOut',
            repeatType: 'loop',
          }}
        >
          {/* Glow halo behind the frame */}
          <div className="hero__photo-glow" aria-hidden="true" />

          {/* Photo frame */}
          <div className="hero__photo-frame">
            {hasPhoto ? (
              <img
                src={profileImg}
                alt={`${personal.fullName} — portrait`}
                loading="eager"
                decoding="async"
              />
            ) : (
              /* Placeholder shown until a real photo is added */
              <div className="hero__photo-placeholder" aria-hidden="true">
                <div className="hero__photo-initials">
                  {personal.initials}
                </div>
                <p className="hero__photo-placeholder-text">
                  Add your photo to<br />
                  <code>src/assets/images/</code><br />
                  and set <code>personal.profileImage</code>
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
