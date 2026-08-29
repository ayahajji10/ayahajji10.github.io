import { motion } from 'framer-motion';
import {
  TbBrandLinkedin, TbBrandGithub, TbMail,
  TbMapPin, TbArrowRight, TbPhone,
} from 'react-icons/tb';

import { contact } from '../../data/contact';

/* ─── Card config ───────────────────────────────────────────── */

interface ContactCard {
  id:       string;
  icon:     React.ReactNode;
  label:    string;
  value:    string;
  href:     string;
  cta:      string;
  color:    string;
  gradient: string;
}

const cards: ContactCard[] = [
  {
    id:       'linkedin',
    icon:     <TbBrandLinkedin size={26} />,
    label:    'LinkedIn',
    value:    'aya-hajji',
    href:     contact.linkedin,
    cta:      'Se connecter',
    color:    '#0A66C2',
    gradient: 'linear-gradient(135deg, rgba(10,102,194,0.15) 0%, rgba(10,102,194,0.04) 100%)',
  },
  {
    id:       'github',
    icon:     <TbBrandGithub size={26} />,
    label:    'GitHub',
    value:    'ayahajji10',
    href:     contact.github,
    cta:      'Voir le profil',
    color:    '#181717',
    gradient: 'linear-gradient(135deg, rgba(24,23,23,0.12) 0%, rgba(24,23,23,0.03) 100%)',
  },
  {
    id:       'email-main',
    icon:     <TbMail size={26} />,
    label:    'E-mail principal',
    value:    contact.email,
    href:     `mailto:${contact.email}`,
    cta:      'Envoyer un e-mail',
    color:    'hsl(262 80% 70%)',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(139,92,246,0.04) 100%)',
  },
  {
    id:       'phone',
    icon:     <TbPhone size={26} />,
    label:    'Téléphone / WhatsApp',
    value:    contact.phone || '+212 6 12 42 07 71',
    href:     `tel:${(contact.phone || '+212612420771').replace(/\s+/g, '')}`,
    cta:      'Appeler / Envoyer un message',
    color:    '#25D366',
    gradient: 'linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.04) 100%)',
  },
];

/* ─── Framer variants ───────────────────────────────────────── */

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show:   (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ─── Component ────────────────────────────────────────────── */

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Contact et liens sociaux">

      {/* ══════════ AVAILABILITY BADGE ══════════ */}
      <motion.div
        className="contact__status"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="contact__status-dot" aria-hidden="true" />
        <span className="contact__status-text">
          {contact.availabilityDetail}
        </span>
      </motion.div>

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="section-title">Prenons contact</h2>
        <p className="section-subtitle">
          Que vous ayez un projet, une opportunité ou simplement l'envie de dire bonjour —
          je serais ravie d'échanger avec vous.
        </p>
      </motion.div>

      {/* ══════════ LOCATION ══════════ */}
      <motion.div
        className="contact__location"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <TbMapPin size={16} aria-hidden="true" />
        <span>{contact.location}</span>
      </motion.div>

      {/* ══════════ CONTACT CARDS ══════════ */}
      <div className="contact__grid">
        {cards.map((card, i) => (
          <motion.a
            key={card.id}
            href={card.href}
            target={card.href.startsWith('mailto') || card.href.startsWith('tel') ? undefined : '_blank'}
            rel={card.href.startsWith('mailto') || card.href.startsWith('tel') ? undefined : 'noopener noreferrer'}
            className="contact-card"
            style={{
              '--card-color':    card.color,
              '--card-gradient': card.gradient,
            } as React.CSSProperties}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            aria-label={`${card.label} : ${card.value}`}
          >
            {/* Background gradient fill */}
            <span className="contact-card__bg" aria-hidden="true" />

            {/* Icon */}
            <span className="contact-card__icon" aria-hidden="true">
              {card.icon}
            </span>

            {/* Text */}
            <div className="contact-card__text">
              <p className="contact-card__label">{card.label}</p>
              <p className="contact-card__value">{card.value}</p>
            </div>

            {/* CTA */}
            <span className="contact-card__cta">
              {card.cta} <TbArrowRight size={14} aria-hidden="true" />
            </span>
          </motion.a>
        ))}
      </div>

    </section>
  );
}