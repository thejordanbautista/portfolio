import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeadshotImg from '../images/HSFHeadshot.jpg';
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
const focuses = [
  {
    num: '01',
    title: 'Web Applications',
    desc: 'Modern web apps built with Next.js, React, and TypeScript. Performance, accessibility, and clarity from the first commit.',
    bullets: ['Next.js / React', 'TypeScript', 'Postgres'],
  },
  {
    num: '02',
    title: 'Automation',
    desc: 'Python and workflow tooling that turns manual processes into background tasks. The boring stuff disappears.',
    bullets: ['Python / Django', 'API integrations', 'Workflows'],
  },
  {
    num: '03',
    title: 'AI Integrations',
    desc: 'Working with OpenAI and Claude to build practical AI features into real products — not demos, products.',
    bullets: ['OpenAI / Claude', 'RAG', 'Prompt design'],
  },
  {
    num: '04',
    title: 'APIs & Backends',
    desc: 'Designing REST APIs and the systems behind them. Comfortable across the stack and the deploy pipeline.',
    bullets: ['Django / Node', 'REST APIs', 'AWS'],
  },
];

const marqueeItems = [
  'Software Engineer',
  'Los Angeles',
  'Next.js',
  'Python',
  'AI',
  'TypeScript',
  'Always Building',
  'Music',
  'Vintage',
];

const projects = [
  {
    badge: 'Side Project',
    title: "Who's That Pokémon?",
    description:
      'A web-based Pokémon silhouette guessing game. Pulls live data from PokéAPI and keeps score across rounds.',
    tech: ['Next.js', 'React', 'PokéAPI'],
    demo: '/dev/pokedexle',
    accent: 'Pop Culture',
  },
];

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Head>
        <title>Jordan Bautista-Lazo — Software Engineer</title>
        <meta
          name="description"
          content="Personal site of Jordan Bautista-Lazo, a software engineer based in Los Angeles."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.grain} aria-hidden="true" />
      <Navbar />

      <main className={styles.main}>

        {/* ══════════════ HERO ══════════════ */}
        <section className={styles.hero} id="hero">
          <motion.div
            className={styles.heroGrid}
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <div className={styles.heroText}>
              <motion.div variants={fadeUp} className={styles.statusRow}>
                <span className={styles.statusDot} />
                <span className={styles.statusText}>Based in Los Angeles</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className={styles.heroTitle}>
                Hi, I'm <span className={styles.heroAccent}>Jordan.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className={styles.heroRole}>
                Software Engineer
              </motion.p>

              <motion.p variants={fadeUp} className={styles.heroBio}>
                I build clean web applications, automate the boring parts of work,
                and occasionally make games about Pokémon. Currently coordinating
                technology on major civic projects across Los Angeles.
              </motion.p>

              <motion.div variants={fadeUp} className={styles.heroCta}>
                <a href="#contact" className={styles.btnPrimary}>
                  Get in Touch
                  <span className={styles.btnArrow}>→</span>
                </a>
                <a href="#projects" className={styles.btnSecondary}>See Projects</a>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className={styles.heroPhoto}>
              <Image
                src={HeadshotImg}
                alt="Jordan Bautista-Lazo"
                fill
                priority
                sizes="(max-width: 820px) 320px, 38vw"
                className={styles.heroPhotoImg}
              />
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

        {/* ══════════════ FOCUS / WHAT I DO ══════════════ */}
        <section className={styles.section} id="services">
          <motion.div
            className={styles.sectionInner}
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.p variants={fadeUp} className={styles.sectionLabel}>
              <span className={styles.sectionNum}>01</span> What I Do
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Where I focus.
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionLead}>
              I build software end-to-end and gravitate toward problems that mix
              engineering with creative thinking. These are the areas I spend most
              of my time in.
            </motion.p>

            <motion.div variants={stagger} className={styles.servicesGrid}>
              {focuses.map((s) => (
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
              A bit more<br />about me.
            </motion.h2>

            <div className={styles.aboutGrid}>
              <motion.div variants={fadeUp} className={styles.aboutText}>
                <p>
                  CS grad from Lehigh University. Currently coordinating technology
                  on major civic projects in Los Angeles, working at the intersection
                  of software, infrastructure, and community impact.
                </p>
                <p>
                  I build the way I think: simple, direct, and obsessed with whether
                  the thing actually works. Outside of the day job I'm digging for
                  vintage tees, exploring LA's music scene, or building small projects
                  for the fun of it.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.aboutMeta}>
                <div className={styles.metaBlock}>
                  <span className={styles.metaLabel}>Currently</span>
                  <span className={styles.metaValue}>Tech Coordinator · Los Angeles</span>
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
              My side projects live at the intersection of software and the things
              I actually care about — music, vintage, Pokémon, pop culture. This is
              where the personality lives.
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
              Let's <span className={styles.heroAccent}>connect.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.contactSub}>
              Always open to a good conversation — opportunities, collaborations,
              or just to talk shop.
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
            <p className={styles.footerNote}>Built in Los Angeles.</p>
          </div>
        </footer>

      </main>
    </>
  );
}
