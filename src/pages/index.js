import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeadshotImg from '../images/jordan-headshot.jpg';
import GradImg from '../images/jordan-grad.jpg';
import FleaMarketImg from '../images/jordan-fleamarket.jpg';
import DragoniteImg from '../images/dragonite.png';
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
    title: 'Engineering',
    desc: 'Full-stack web apps, APIs, and automation — built end-to-end, from database to deployed product.',
    bullets: ['Next.js / React', 'Python / Django', 'AWS / Docker'],
  },
  {
    title: 'GIS & Civic Tech',
    desc: 'Mapping platforms that turn public engagement and urban planning into something people actually use.',
    bullets: ['Mapbox', 'Supabase', 'Cloudflare'],
  },
  {
    title: 'AI & Automation',
    desc: 'Practical AI systems and workflow automation that save real hours — not demos.',
    bullets: ['Claude / GPT', 'Workflow automation', 'Knowledge systems'],
  },
  {
    title: 'Marketing & Growth',
    desc: 'Landing pages, social presence, and content systems that turn a project into something people follow.',
    bullets: ['Launch pages', 'Content tooling', 'Brand systems'],
  },
];

const projects = [
  {
    badge: 'Work Project',
    title: 'Arellano Insight',
    description:
      "A GIS-based public engagement platform I designed and built as part of my role at Arellano Associates. Lets project teams launch configurable interactive maps with custom study areas, categorized public comments, and survey questions for community input.",
    tech: ['TypeScript', 'Mapbox', 'Supabase', 'Cloudflare'],
    demo: null,
    accent: 'Civic Tech',
    image: null,
    linkLabel: null,
  },
  {
    badge: 'Personal Project',
    title: 'MixDro',
    description:
      "A music social platform where artists and fans share the music that actually inspires them — not the algorithm's picks. Built an MVP with SwiftUI/MVVM for iOS, Spotify-connected playback, real-time comments, and a FastAPI backend, plus creator tooling including a rapid Instagram graphic generator.",
    tech: ['SwiftUI', 'FastAPI', 'Spotify API'],
    demo: 'https://mixdro.com/',
    accent: 'Music',
    image: null,
    linkLabel: 'Join Waitlist',
  },
  {
    badge: 'Side Project',
    title: 'More Than Jordans — Inventory System',
    description:
      'A POS and inventory management system built for my own vintage resell business, tracking stock, pricing, and event prep across LA flea markets.',
    tech: ['React Native', 'Firebase'],
    demo: null,
    accent: 'Vintage Resell',
    image: FleaMarketImg,
    imageAlt: 'Running More Than Jordans at LA flea markets',
    linkLabel: null,
  },
  {
    badge: 'Side Project',
    title: "Who's That Pokémon?",
    description:
      'A web-based Pokémon silhouette guessing game. Pulls live data from PokéAPI and keeps score across rounds.',
    tech: ['Next.js', 'React', 'PokéAPI'],
    demo: '/dev/pokedexle',
    accent: 'Pop Culture',
    image: DragoniteImg,
    imageAlt: 'Dragonite pixel sprite',
    pixel: true,
    linkLabel: 'Play',
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
                I build clean web applications, GIS mapping platforms, and
                automation that quietly gets out of the way — plus the
                occasional game about Pokémon. Currently coordinating
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
              What I Do
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Where I focus.
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionLead}>
              I move across the stack — and past it. Engineering, GIS, AI, and
              the marketing muscle to actually launch what I build.
            </motion.p>

            <motion.div variants={stagger} className={styles.servicesGrid}>
              {focuses.map((s) => (
                <motion.div key={s.title} variants={fadeUp} className={styles.serviceCard}>
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
              About
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              A bit more<br />about me.
            </motion.h2>

            <div className={styles.aboutGrid}>
              <motion.div variants={fadeUp} className={styles.aboutPhoto}>
                <Image
                  src={GradImg}
                  alt="Jordan Bautista-Lazo, Lehigh University graduation"
                  fill
                  sizes="(max-width: 760px) 90vw, 40vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                />
              </motion.div>

              <motion.div variants={fadeUp} className={styles.aboutContent}>
                <div className={styles.aboutText}>
                  <p>
                    CS grad from Lehigh University, currently coordinating technology
                    on civic projects in Los Angeles — including designing and building
                    an internal GIS platform for public engagement.
                  </p>
                  <p>
                    I'm drawn to problems that cross disciplines: building the product,
                    mapping the data, and getting the word out. Always looking for the
                    next thing to grow into, technically and professionally.
                  </p>
                </div>

                <div className={styles.aboutMeta}>
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
                      Next.js · Python · TypeScript · Django · Mapbox · AWS
                    </span>
                  </div>
                  <div className={styles.metaBlock}>
                    <span className={styles.metaLabel}>Also into</span>
                    <span className={styles.metaValue}>
                      Music · mapping · civic tech · side projects
                    </span>
                  </div>
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
              Projects
            </motion.p>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              What I've been building.
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionLead}>
              Work and side projects, side by side — mapping, music, business
              tooling, and the occasional game.
            </motion.p>

            <motion.div variants={stagger} className={styles.projectGrid}>
              {projects.map((p, i) => {
                const isExternal = p.demo && p.demo.startsWith('http');
                const CardTag = p.demo ? motion.a : motion.div;
                const linkProps = p.demo
                  ? { href: p.demo, ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
                  : {};
                return (
                  <CardTag
                    key={i}
                    variants={fadeUp}
                    className={styles.projectCard}
                    {...linkProps}
                  >
                    <div
                      className={`${styles.projectImageSlot} ${p.pixel ? styles.projectImagePixel : ''}`}
                    >
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          className={p.pixel ? styles.pixelArt : styles.projectImageEl}
                          width={p.pixel ? 220 : undefined}
                          height={p.pixel ? 220 : undefined}
                          sizes="(max-width: 760px) 90vw, 360px"
                        />
                      ) : (
                        <span className={styles.projectImagePlaceholder}>
                          Visual coming soon
                        </span>
                      )}
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
                        {p.linkLabel && (
                          <span className={styles.cardLink}>
                            {p.linkLabel} <span className={styles.cardArrow}>→</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </CardTag>
                );
              })}
            </motion.div>
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
              Contact
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
