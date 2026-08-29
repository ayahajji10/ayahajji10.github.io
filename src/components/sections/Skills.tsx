import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TbBrain, TbChartBar, TbDatabase, TbCode,
  TbFlame, TbWaveSine, TbEar, TbTarget, TbCircleCheck,
  TbPresentation, TbTable, TbPalette, TbFileText,
  TbBooks, TbChess, TbBarbell,
} from 'react-icons/tb';
import type { IconType } from 'react-icons';

/* ─── Image imports ─────────────────────────────────────────── */
import pythonImg        from '../../assets/images/python_logo.png';
import mlImg            from '../../assets/images/machine_learning_logo.png';
import ragImg           from '../../assets/images/rag_logo.png';
import nlpImg           from '../../assets/images/nlp_logo.png';
import sklearnImg       from '../../assets/images/scikit_learn_logo.png';
import pandasImg        from '../../assets/images/pandas_logo.png';
import cvImg            from '../../assets/images/computer_vision_logo.png';
import powerBiImg       from '../../assets/images/power_bi_logo.png';
import excelImg         from '../../assets/images/excel_logo.png';
import pivotImg         from '../../assets/images/power_pivot_logo.png';
import daxImg           from '../../assets/images/dax_logo.png';
import dataModelImg     from '../../assets/images/data_modeling_logo.png';
import sqlImg           from '../../assets/images/sql_logo.png';
import mysqlImg         from '../../assets/images/mysql_logo.png';
import postgresImg      from '../../assets/images/postgresql_logo.png';
import sqlServerImg     from '../../assets/images/sql_server_logo.png';
import sqliteImg        from '../../assets/images/sqlite_logo.png';
import fastapiImg       from '../../assets/images/fastapi_logo.png';
import flaskImg         from '../../assets/images/flask_logo.png';
import reactImg         from '../../assets/images/react_logo.png';
import jsImg            from '../../assets/images/javascript_logo.png';
import javaImg          from '../../assets/images/java_logo.png';
import springImg        from '../../assets/images/springboot_logo.png';
import cFamilyImg       from '../../assets/images/C_family_logo.png';
import n8nImg           from '../../assets/images/n8n_logo.png';
import powerpointImg    from '../../assets/images/powerpoint_logo.png';
import canvaImg         from '../../assets/images/canva_logo.png';
import wordImg          from '../../assets/images/word_logo.png';
import tableauImg       from '../../assets/images/tableau_logo.png';
import linuxImg         from '../../assets/images/linux_logo.png';
import windowsImg       from '../../assets/images/windows_server_logo.png';
import dnsImg           from '../../assets/images/dns_dhcp_ad_logo.png';
import vmwareImg        from '../../assets/images/vmware_logo.png';
import aspImg           from '../../assets/images/asp_net_logo.png';
import aspmvcImg        from '../../assets/images/asp_net_mvc_logo.png';
import laravelImg       from '../../assets/images/laravel_logo.png';
import angularImg       from '../../assets/images/angular_logo.png';
import bootstrapImg     from '../../assets/images/bootstrap_logo.png';
import oracleImg        from '../../assets/images/oracle_logo.png';
import firebaseImg      from '../../assets/images/firebase_logo.png';
import dockerImg        from '../../assets/images/docker_logo.png';
import gitImg           from '../../assets/images/git_logo.png';
import githubImg        from '../../assets/images/github_logo.png';
import kubernetesImg    from '../../assets/images/kubernetes_logo.png';
import azuredevopsImg   from '../../assets/images/azure_devops_logo.png';
import chatbotsImg      from '../../assets/images/chatbots_logo.png';
import agentsiaImg      from '../../assets/images/agents_ia_logo.png';
import airbyteImg       from '../../assets/images/airbyte_logo.png';
import numpyImg         from '../../assets/images/numpy_logo.png';
import matplotlibImg    from '../../assets/images/matplotlib_logo.png';
import umlImg           from '../../assets/images/uml_logo.png';
import agileImg         from '../../assets/images/agile_logo.png';
import meriseImg        from '../../assets/images/merise_logo.png';
import patronsconceptionImg from '../../assets/images/patrons_conception_logo.png';
import solidImg         from '../../assets/images/solid_logo.png';

/* ─── Skill → image map ─────────────────────────────────────── */
const SKILL_IMAGE: Record<string, string> = {
  'Python':                pythonImg,
  'Machine Learning':      mlImg,
  'RAG':                   ragImg,
  'NLP':                   nlpImg,
  'scikit-learn':          sklearnImg,
  'Pandas':                pandasImg,
  'Computer Vision':       cvImg,
  'Power BI':              powerBiImg,
  'Excel':                 excelImg,
  'Power Pivot':           pivotImg,
  'DAX':                   daxImg,
  'Data Modeling':         dataModelImg,
  'SQL':                   sqlImg,
  'MySQL':                 mysqlImg,
  'PostgreSQL/PGVector':   postgresImg,
  'SQL Server':            sqlServerImg,
  'SQLite':                sqliteImg,
  'FastAPI':               fastapiImg,
  'Flask':                 flaskImg,
  'React':                 reactImg,
  'JavaScript':            jsImg,
  'Java':                  javaImg,
  'Spring Boot':           springImg,
  'C#':                    cFamilyImg,
  'n8n':                   n8nImg,
  'PowerPoint':            powerpointImg,
  'Canva':                 canvaImg,
  'Word':                  wordImg,
  'Tableau':               tableauImg,
  'Linux (Ubuntu, Kali)':  linuxImg,
  'Windows Server':        windowsImg,
  'DNS / DHCP / AD':       dnsImg,
  'VMware':                vmwareImg,
  'ASP.NET':               aspImg,
  '.NET MVC':              aspmvcImg,
  'Laravel':               laravelImg,
  'Angular':               angularImg,
  'Bootstrap':             bootstrapImg,
  'Firebase':              firebaseImg,
  'Oracle':                oracleImg,
  'Docker':                dockerImg,
  'Git':                   gitImg,
  'GitHub':                githubImg,
  'Kubernetes':            kubernetesImg,
  'Azure DevOps':          azuredevopsImg,
  'ChatBots':              chatbotsImg,
  'Agent IA':              agentsiaImg,
  'Airbyte':               airbyteImg,
  'NumPy':                 numpyImg,
  'Matplotlib':            matplotlibImg,
  'UML':                   umlImg,
  'Agile (Scrum)':         agileImg,
  'Merise':                meriseImg,
  'Patrons de conception': patronsconceptionImg,
  'Principes SOLID':       solidImg,
};

/* ─── Icon lookup map ───────────────────────────────────────── */
const ICON_MAP: Record<string, IconType> = {
  brain:        TbBrain,
  chart:        TbChartBar,
  database:     TbDatabase,
  code:         TbCode,
  flame:        TbFlame,
  waves:        TbWaveSine,
  ear:          TbEar,
  target:       TbTarget,
  check:        TbCircleCheck,
  presentation: TbPresentation,
  table:        TbTable,
  palette:      TbPalette,
  file:         TbFileText,
  book:         TbBooks,
  chess:        TbChess,
  barbell:      TbBarbell,
};

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const Comp = ICON_MAP[name];
  if (!Comp) return null;
  return <Comp size={size} aria-hidden="true" />;
}

import {
  technicalSkills, softSkills, officeSkills, languages, interests,
} from '../../data/skills';
import type { SkillLevel } from '../../types';

/* ─── Tab config ────────────────────────────────────────────── */
const TABS = ['Technique', 'Compétences relationnelles', 'Langues'] as const;
type Tab = typeof TABS[number];

/* ─── Level helpers ─────────────────────────────────────────── */
const levelDots: Record<SkillLevel, number> = {
  beginner: 1, intermediate: 2, advanced: 3,
};

const levelLabel: Record<SkillLevel, string> = {
  beginner: 'Débutant', intermediate: 'Intermédiaire', advanced: 'Avancé',
};

const levelColor: Record<SkillLevel, string> = {
  beginner:     'var(--text-muted)',
  intermediate: 'var(--text-secondary)',
  advanced:     'var(--domain-color, var(--blue))',
};

/* ─── Framer variants ───────────────────────────────────────── */
const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ─── Component ────────────────────────────────────────────── */
export default function Skills() {
  const [activeTab, setActiveTab] = useState<Tab>('Technique');

  return (
    <section id="skills" className="skills" aria-label="Compétences et expertises">

      {/* ══════════ SECTION HEADER ══════════ */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-eyebrow">Boîte à outils</span>
        <h2 className="section-title">Compétences & Expertises</h2>
        <p className="section-subtitle">
          Expertise technique en IA, Business Intelligence, Ingénierie des données
          et Développement logiciel — complétée par la maîtrise des langues et des compétences relationnelles.
        </p>
      </motion.div>

      {/* ══════════ TAB BAR ══════════ */}
      <motion.div
        className="skills__tabs"
        role="tablist"
        aria-label="Catégories de compétences"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={`skills__tab${activeTab === tab ? ' skills__tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && (
              <motion.span className="skills__tab-underline" layoutId="skills-tab-underline" />
            )}
          </button>
        ))}
      </motion.div>

      {/* ══════════ TAB PANELS ══════════ */}
      <div className="skills__panel-container">
        <AnimatePresence mode="wait">

          {/* ─── TECHNICAL ─── */}
          {activeTab === 'Technique' && (
            <motion.div
              key="technical"
              className="skills__technical"
              variants={stagger}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {technicalSkills.map((domain) => (
                <motion.div
                  key={domain.id}
                  className="skills__domain-card"
                  style={{ '--domain-color': domain.color } as React.CSSProperties}
                  variants={itemFade}
                >
                  {/* Domain header */}
                  <div className="skills__domain-header">
                    <span className="skills__domain-icon">
                      <Icon name={domain.icon} size={20} />
                    </span>
                    <h3 className="skills__domain-title">{domain.category}</h3>
                  </div>

                  {/* Skill items — logo + info */}
                  <div className="skills__skill-list">
                    {domain.skills.map((skill) => {
                      const img = SKILL_IMAGE[skill.name];
                      return (
                        <div
                          key={skill.name}
                          className="skill-item"
                          aria-label={`${skill.name} — ${levelLabel[skill.level]}`}
                        >
                          {/* Logo */}
                          <div className="skill-item__logo-wrap">
                            {img ? (
                              <img
                                src={img}
                                alt={skill.name}
                                className="skill-item__logo"
                                loading="lazy"
                              />
                            ) : (
                              <span className="skill-item__logo-fallback">
                                <Icon name="code" size={20} />
                              </span>
                            )}
                          </div>

                          {/* Info */}
                          <div className="skill-item__info">
                            <p className="skill-item__name">{skill.name}</p>
                            <div className="skill-item__level">
                              <span
                                className="skill-item__dots"
                                aria-hidden="true"
                                style={{ '--lvl-color': levelColor[skill.level] } as React.CSSProperties}
                              >
                                {Array.from({ length: 3 }).map((_, i) => (
                                  <span
                                    key={i}
                                    className={`skill-item__dot${i < levelDots[skill.level] ? ' skill-item__dot--filled' : ''}`}
                                  />
                                ))}
                              </span>
                              <span className="skill-item__level-label">
                                {levelLabel[skill.level]}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ─── SOFT SKILLS ─── */}
          {activeTab === 'Compétences relationnelles' && (
            <motion.div
              key="soft"
              className="skills__soft"
              variants={stagger}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              <div className="skills__soft-group">
                <h3 className="skills__soft-group-label">Compétences interpersonnelles</h3>
                <div className="skills__soft-grid">
                  {softSkills.map((s) => (
                    <motion.div key={s.label} className="skills__soft-card" variants={itemFade}>
                      <span className="skills__soft-icon"><Icon name={s.icon} size={20} /></span>
                      <span className="skills__soft-label">{s.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="skills__soft-group">
                <h3 className="skills__soft-group-label">Bureautique & Outils</h3>
                <div className="skills__skill-list skills__office-list">
                  {officeSkills.map((s) => {
                    const img = SKILL_IMAGE[s.label];
                    return (
                      <motion.div
                        key={s.label}
                        className="skill-item"
                        style={{ '--domain-color': 'var(--text-muted)' } as React.CSSProperties}
                        variants={itemFade}
                      >
                        <div className="skill-item__logo-wrap">
                          {img ? (
                            <img
                              src={img}
                              alt={s.label}
                              className="skill-item__logo"
                              loading="lazy"
                            />
                          ) : (
                            <span className="skill-item__logo-fallback">
                              <Icon name={s.icon} size={20} />
                            </span>
                          )}
                        </div>
                        <div className="skill-item__info">
                          <p className="skill-item__name">{s.label}</p>
                          <p className="skill-item__level-label" style={{ fontSize: '11px' }}>
                            Outil bureautique
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="skills__soft-group">
                <h3 className="skills__soft-group-label">Centres d'intérêt</h3>
                <div className="skills__soft-grid">
                  {interests.map((i) => (
                    <motion.div key={i.label} className="skills__soft-card" variants={itemFade}>
                      <span className="skills__soft-icon"><Icon name={i.icon} size={20} /></span>
                      <span className="skills__soft-label">{i.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* ─── LANGUAGES ─── */}
          {activeTab === 'Langues' && (
            <motion.div
              key="languages"
              className="skills__languages"
              variants={stagger}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {languages.map((lang) => (
                <motion.div key={lang.language} className="skills__lang-row" variants={itemFade}>
                  <div className="skills__lang-identity">
                    <span className="skills__lang-flag">{lang.flag}</span>
                    <div>
                      <p className="skills__lang-name">{lang.language}</p>
                      <p className="skills__lang-level">{lang.level}</p>
                    </div>
                  </div>
                  <div className="skills__lang-bar-wrap" aria-label={`Niveau de maîtrise : ${lang.proficiency}%`}>
                    <div className="skills__lang-bar-track">
                      <motion.div
                        className="skills__lang-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${lang.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                    <span className="skills__lang-pct">{lang.proficiency}%</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
}