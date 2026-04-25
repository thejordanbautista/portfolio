import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import styles from './home.module.css';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ── Content ── */
const services = [
  {
    num: '01',
    title: 'Web Applications',
    desc: 'Custom Next.js & React apps built for speed, clarity, and longevity.',
    bullets: ['Next.js / React', 'TypeScript', 'Postgres / Supabase'],
  },
  {
    num: '02',
    title: 'Automation',
    desc: 'Python scripts, integrations, and workflows that quietly save hours every week.',
    bullets: ['Python / Django', 'API integrations', 'Workflow design'],
  },
  {
    num: '03',
    title: 'AI Integrations',
    desc: 'OpenAI, Claude, and custom LLM tooling wired into the products you already use.',
    bullets: ['OpenAI / Claude', 'RAG pipelines', 'Internal AI tools'],
  },
  {
    num: '04',
    title: 'Technical Consulting',
    desc: 'Architecture decisions, code reviews, and a clear plan for what to build next.',
    bullets: ['Architecture', 'Code review', 'Tech strategy'],
  },
];

const marqueeItems = [
  'Available for projects',
  'Web apps',
  'Automation',
  'AI integrations',
  'Consulting',
  'Based in LA',
  'Remote-friendly',
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
    accent: 'Pop Culture',
  },
];

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Bautista-Lazo — Software Engineer & Tech Consultant</title>
        <meta
          name="description"
          content="Software engineer and tech consultant in Los Angeles. Building web apps, automation, and AI tools for businesses that need things shipped right."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.grain} aria-hidden="true" />
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
            <motion.div variants={fadeUp} className={styles.statusRow}>
              <span className={styles.statusDot} />
              <span className={styles.statusText}>Available for new projects</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className={styles.heroTitle}>
              Software that <span className={styles.heroAccent}>ships.</span><br />
              Systems that <span className={styles.heroAccent}>scale.</span><br />
              Results you can <span className={styles.heroAccent}>measure.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className={styles.heroSub}>
              I'm Jordan — a software engineer and technical consultant in Los Angeles.
              I help teams build clean web apps, automate the boring parts of their
              business, and ship AI tooling that actually earns its keep.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.heroCta}>
              <a href="#services" className={styles.btnPrimary}>
                See What I Do
                <span className={styles.btnArrow}>→</span>
              </a>
              <a href="#contact" className={styles.btnSecondary}>Start a Project</a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.scrollHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <span className={styles.scrollLabel}>Scroll</span>
            <span className={styles.scrollLine} />
          </motion.div>
        </section>

        {/* ══════════════ MARQUEE ══════════════ */}
        <section className={styles.marqueeSection} aria-hidden="true">
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className={styles.marqueeItem}>
                  {item}
                  <span className={styles.marqueeStar}>✦</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ SERVICES ══════════════ */}
        <section className={styles.section} id="services">
          <motion.div
            className={styles.sectionInner}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp} className={styles.sectionLabel}>
              <span className={styles.sectionNum}>01</span> Services
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              What I build for clients.
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionLead}>
              Engagements range from one-off automation scripts to full web platforms.
              Below is what I do most often — but if you have something weirder, ask.
            </motion.p>

            <motion.div variants={stagger} className={styles.servicesGrid}>
              {services.map((s) => (
                <motion.div key={s.num} variants={fadeUp} className={styles.serviceCard}>
                  <span className={styles.serviceNum}>{s.num}</span>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <ul className={styles.serviceBullets}>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
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
            <motion.p variants={fadeUp} className={styles.sectionLabel}>
              <span className={styles.sectionNum}>02</span> About
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Engineer first.<br />Consultant second.
            </motion.h2>

            <div className={styles.aboutGrid}>
              <motion.div variants={fadeUp} className={styles.aboutText}>
                <p>
                  CS grad from Lehigh University, now leading technology coordination on
                  major civic projects in Los Angeles. On the side, I co-run a software
                  solutions business — websites, automation, and AI tooling for clients
                  across the country.
                </p>
                <p>
                  I build the way I think: simple, direct, and obsessed with whether the
                  thing actually works. Outside of code I'm at flea markets, digging
                  through crates, or building tiny games about Pokémon for fun.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.aboutMeta}>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>Currently</span>
                  <span className={styles.metaValue}>Tech Coordinator · LA</span>
                </div>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>Studied</span>
                  <span className={styles.metaValue}>CS · Lehigh University</span>
                </div>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>Stack</span>
                  <span className={styles.metaValue}>
                    Next.js · Python · TypeScript · Django · Postgres · OpenAI
                  </span>
                </div>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>Off the clock</span>
                  <span className={styles.metaValue}>
                    Vintage hunting · vinyl · live music · pop culture
                  </span>
                </div>
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
            <motion.p variants={fadeUp} className={styles.sectionLabel}>
              <span className={styles.sectionNum}>03</span> Projects
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Things I build for fun.
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionLead}>
              My side projects live at the intersection of software and the things I
              actually care about — music, vintage, Pokémon, pop culture. Client work is
              private; this is the personality.
            </motion.p>

            <motion.div variants={stagger} className={styles.projectGrid}>
              {projects.map((p, i) => (
                <motion.a
                  key={i}
                  href={p.demo}
                  variants={fadeUp}
                  className={styles.projectCard}
                >
                  <div className={styles.projectImageSlot}>
                    <span className={styles.projectImagePlaceholder}>
                      Visual coming soon
                    </span>
                  </div>
                  <div className={styles.projectBody}>
                    <div className={styles.projectMeta}>
                      <span className={styles.badge}>{p.badge}</span>
                      <span className={styles.accentBadge}>{p.accent}</span>
                    </div>
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardDesc}>{p.description}</p>
                    <div className={styles.cardBottom}>
                      <div className={styles.techList}>
                        {p.tech.map((t) => (
                          <span key={t} className={styles.techTag}>{t}</span>
                        ))}
                      </div>
                      <span className={styles.cardLink}>
                        Play <span className={styles.cardArrow}>→</span>
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} className={styles.moreNote}>
              More side projects in the works — vinyl tooling, concert trackers,
              and a few things I'm not ready to talk about yet.
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
            <motion.p variants={fadeUp} className={styles.sectionLabel}>
              <span className={styles.sectionNum}>04</span> Contact
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitleLg}>
              Got something to build?<br />
              <span className={styles.heroAccent}>Let's talk.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.contactSub}>
              Open to consulting work, collaborations, and interesting problems.
              Quick replies, no fluff.
            </motion.p>

            <motion.div variants={fadeUp} className={styles.contactCtaRow}>
              <a
                href="mailto:jordanbautistalazo@gmail.com"
                className={styles.btnPrimary}
              >
                Email Me
                <span className={styles.btnArrow}>→</span>
              </a>
              <div className={styles.contactLinks}>
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
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════ FOOTER ══════════════ */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerCopy}>© 2026 Jordan Bautista-Lazo</p>
            <p className={styles.footerNote}>Designed and built in Los Angeles.</p>
          </div>
        </footer>

      </main>
    </>
  );
}
