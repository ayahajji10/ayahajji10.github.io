import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TbExternalLink, TbAward, TbStar, TbX, TbFileTypePdf, TbDownload, TbChevronLeft, TbChevronRight } from 'react-icons/tb';

import { certifications } from '../../data/certifications';
import type { Certification, CertCategory } from '../../types';

/* ─── PDF preview helpers ───────────────────────────────────── */

const pdfUrl = (cert: Certification) => `/certificates/${cert.id}.pdf`;
const thumbUrl = (cert: Certification) => `/certificates/thumbnails/${cert.id}.jpg`;

/* ─── Filter config ─────────────────────────────────────────── */

interface Filter {
  id: string;
  label: string;
  match: (c: typeof certifications[number]) => boolean;
}

const FILTERS: Filter[] = [
  { id: 'all',            label: 'Tous',                  match: () => true },
  { id: 'ai-data',        label: 'IA & Data Science',     match: (c) => c.category === 'ai' || c.category === 'data-science' },
  { id: 'web-dev',        label: 'Développement Web',     match: (c) => c.category === 'web-dev'      },
  { id: 'infrastructure', label: 'Infrastructure',        match: (c) => c.category === 'infrastructure'},
  { id: 'soft-skills',    label: 'Développement Perso',   match: (c) => c.category === 'soft-skills'  },
];

/* ─── Category accent colors ────────────────────────────────── */

const catColor: Record<CertCategory, string> = {
  'bi':             'var(--gold)',
  'ai':             'var(--purple)',
  'data-science':   'var(--purple)',
  'web-dev':        'var(--blue)',
  'infrastructure': 'var(--blue-light)',
  'soft-skills':    'hsl(142 70% 45%)',
};

/* ─── Framer variants ───────────────────────────────────────── */

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const gridVariants = {
  show: { transition: { staggerChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } },
  exit:   { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

/* ─── Component ────────────────────────────────────────────── */

const PAGE_SIZE = 8;

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewCert, setPreviewCert] = useState<Certification | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const filterFn = FILTERS.find((f) => f.id === activeFilter)?.match ?? (() => true);
    return certifications.filter(filterFn);
  }, [activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  // Reset to page 1 whenever the filter changes
  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  // Clamp page if it would end up out of range (e.g. filtered list shrinks)
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const paged = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const goToPage = (n: number) => {
    const clamped = Math.min(Math.max(1, n), totalPages);
    setPage(clamped);
    document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Close preview on Escape, lock scroll while open
  useEffect(() => {
    if (!previewCert) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPreviewCert(null);
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [previewCert]);

  return (
    <section id="certifications" className="certifications" aria-label="Certifications et diplômes">

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="section-eyebrow">Diplômes & Attestations</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          {certifications.length} certifications vérifiées en IA, Data Science,
          Développement Web, Infrastructure et Soft Skills — toutes délivrées via Coursera.
        </p>
      </motion.div>

      {/* ══════════ FILTER PILLS ══════════ */}
      <motion.div
        className="certs__filters"
        role="tablist"
        aria-label="Filtrer les certifications par catégorie"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {FILTERS.map((f) => {
          const count = certifications.filter(f.match).length;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={activeFilter === f.id}
              id={`cert-filter-${f.id}`}
              className={`certs__filter-pill${activeFilter === f.id ? ' certs__filter-pill--active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
              <span className="certs__filter-count">{count}</span>
            </button>
          );
        })}
      </motion.div>

      {/* ══════════ RESULTS COUNT ══════════ */}
      <p className="certs__results-label" aria-live="polite">
        Affichage de <strong>{filtered.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)}</strong> sur{' '}
        <strong>{filtered.length}</strong> certification{filtered.length > 1 ? 's' : ''}
      </p>

      {/* ══════════ GRID ══════════ */}
      <motion.div
        className="certs__grid"
        role="tabpanel"
        variants={gridVariants}
        initial="show"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {paged.map((cert) => {
            const color = catColor[cert.category];
            return (
              <motion.article
                key={cert.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`cert-card${cert.featured ? ' cert-card--featured' : ''}`}
                style={{ '--cert-color': color } as React.CSSProperties}
                aria-label={cert.title}
              >
                {/* Left accent bar */}
                <span className="cert-card__bar" aria-hidden="true" />

                {/* Content */}
                <div className="cert-card__body">
                  {/* Top row: icon + featured star */}
                  <div className="cert-card__top">
                    <span className="cert-card__icon" aria-hidden="true">
                      <TbAward size={16} />
                    </span>
                    {cert.featured && (
                      <span className="cert-card__star" aria-label="En vedette">
                        <TbStar size={13} />
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="cert-card__title">{cert.title}</h3>

                  {/* Provider */}
                  <p className="cert-card__provider">{cert.provider}</p>

                  {/* Actions */}
                  <div className="cert-card__actions">
                    {cert.hasPdfPreview && (
                      <button
                        type="button"
                        className="cert-card__verify cert-card__preview-btn"
                        onClick={() => setPreviewCert(cert)}
                      >
                        Aperçu <TbFileTypePdf size={12} aria-hidden="true" />
                      </button>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-card__verify"
                        aria-label={`Vérifier le certificat : ${cert.title}`}
                      >
                        Vérifier <TbExternalLink size={12} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Thumbnail preview */}
                {cert.hasPdfPreview && (
                  <button
                    type="button"
                    className="cert-card__thumb"
                    onClick={() => setPreviewCert(cert)}
                    aria-label={`Aperçu du certificat : ${cert.title}`}
                  >
                    <img
                      src={thumbUrl(cert)}
                      alt=""
                      loading="lazy"
                      className="cert-card__thumb-img"
                    />
                    <span className="cert-card__thumb-overlay">
                      <TbFileTypePdf size={18} /> Aperçu
                    </span>
                  </button>
                )}
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ══════════ PAGINATION ══════════ */}
      {totalPages > 1 && (
        <nav className="certs__pager" aria-label="Pagination des certifications">
          <button
            type="button"
            className="certs__pager-btn"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            aria-label="Page précédente"
          >
            <TbChevronLeft size={16} />
          </button>

          <div className="certs__pager-pages">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={`certs__pager-page${n === page ? ' certs__pager-page--active' : ''}`}
                onClick={() => goToPage(n)}
                aria-current={n === page ? 'page' : undefined}
                aria-label={`Aller à la page ${n}`}
              >
                {n}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="certs__pager-btn"
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            aria-label="Page suivante"
          >
            <TbChevronRight size={16} />
          </button>
        </nav>
      )}

      {/* ══════════ PDF PREVIEW MODAL ══════════ */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            className="cert-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setPreviewCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Aperçu du certificat : ${previewCert.title}`}
          >
            <motion.div
              className="cert-modal"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="cert-modal__close"
                onClick={() => setPreviewCert(null)}
                aria-label="Fermer l'aperçu"
              >
                <TbX size={18} />
              </button>

              <img
                src={thumbUrl(previewCert)}
                alt={`Aperçu du certificat ${previewCert.title}`}
                className="cert-modal__img"
              />

              <div className="cert-modal__footer">
                <div className="cert-modal__info">
                  <h3>{previewCert.title}</h3>
                  <p>{previewCert.provider}</p>
                </div>
                <div className="cert-modal__actions">
                  <a
                    href={pdfUrl(previewCert)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-modal__btn cert-modal__btn--primary"
                  >
                    Ouvrir le PDF <TbFileTypePdf size={14} />
                  </a>
                  <a
                    href={pdfUrl(previewCert)}
                    download
                    className="cert-modal__btn"
                  >
                    Télécharger <TbDownload size={14} />
                  </a>
                  {previewCert.credentialUrl && (
                    <a
                      href={previewCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-modal__btn"
                    >
                      Vérifier <TbExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}