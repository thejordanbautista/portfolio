import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import styles from './home.module.css';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ── Content ── */
const skills = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Django', 'PostgreSQL', 'REST APIs', 'OpenAI API',
  'AWS', 'Git', 'WordPress',
];

const projects = [
  {
    badge: 'Side Project',
    title: "Who's That Pokémon?",
    description:
      'A web-based Pokémon silhouette guessing game. Pulls live data from PokéAPI and keeps score across rounds.',
    tech: ['Next.js', 'React', 'PokéAPI'],
    demo: '/dev/pokedexle',
    github: 'https://github.com/thejordanbautista',
  },
];

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Bautista-Lazo</title>
        <meta name="description" content="Software engineer based in Los Angeles." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className={styles.main}>

        {/* ══════════════ HERO ══════════════ */}
        <section className={styles.hero} id="hero">
          <motion.div
            className={styles.heroContent}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={fadeUp} className={styles.heroLabel}>
              Software Engineer · Los Angeles
            </motion.p>

            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Jordan<br />Bautista‑Lazo
            </motion.h1>

            <motion.p variants={fadeUp} className={styles.heroSub}>
              I build clean software, automate complex workflows,<br className={styles.br} />
              and ship things that actually work.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.heroCta}>
              <a href="#projects" className={styles.btnPrimary}>View Work</a>
              <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <span className={styles.scrollLine} />
          </motion.div>
        </section>

        {/* ══════════════ ABOUT ══════════════ */}
        <section className={styles.section} id="about">
          <motion.div
            className={styles.sectionInner}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp} className={styles.sectionLabel}>About</motion.p>

            <div className={styles.aboutGrid}>
              <motion.div variants={fadeUp} className={styles.aboutText}>
                <p>
                  CS grad from Lehigh University. I build web apps, automation systems,
                  and anything else that turns messy processes into clean ones.
                </p>
                <p>
                  Currently working as a Technology Coordinator on major city projects
                  in Los Angeles. On the side, I co-run a software solutions business —
                  websites to automation scripts for clients across the country.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.skillsWrap}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.skillTag}>{skill}</span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════ PROJECTS ══════════════ */}
        <section className={styles.section} id="projects">
          <motion.div
            className={styles.sectionInner}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp} className={styles.sectionLabel}>Projects</motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Things I've built
            </motion.h2>

            <motion.div variants={stagger} className={styles.projectGrid}>
              {projects.map((p, i) => (
                <motion.div key={i} variants={fadeUp} className={styles.projectCard}>
                  <div className={styles.cardTop}>
                    <span className={styles.badge}>{p.badge}</span>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardDesc}>{p.description}</p>
                  </div>

                  <div className={styles.cardBottom}>
                    <div className={styles.techList}>
                      {p.tech.map((t) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                    <div className={styles.cardLinks}>
                      <a href={p.demo} className={styles.cardLink}>Play →</a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLinkMuted}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className={styles.moreNote}>
              More projects coming soon.
            </motion.p>
          </motion.div>
        </section>

        {/* ══════════════ CONTACT ══════════════ */}
        <section className={styles.section} id="contact">
          <motion.div
            className={styles.sectionInner}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp} className={styles.sectionLabel}>Contact</motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Let's connect.
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.contactSub}>
              Open to new opportunities, collaborations, and interesting problems.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.contactLinks}>
              <a href="mailto:jordanbautistalazo@gmail.com" className={styles.contactLink}>
                Email
              </a>
              <a
                href="https://linkedin.com/in/jordan-bautista-lazo/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/thejordanbautista"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                GitHub
              </a>
              <a
                href="https://docs.google.com/document/d/1vRwGQD6IE-VjJ4MbXfKq63StZ0l841JIrot1klLieUM/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Resume
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════ FOOTER ══════════════ */}
        <footer className={styles.footer}>
          <p>© 2025 Jordan Bautista-Lazo</p>
        </footer>

      </main>
    </>
  );
}
