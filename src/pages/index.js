import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HeadshotImg from '../images/jordan-headshot.jpg';
import GradImg from '../images/jordan-grad.jpg';
import FleaMarketImg from '../images/jordan-fleamarket.jpg';
import DragoniteImg from '../images/dragonite.png';
import RouteMap from '../components/RouteMap';
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

/* ── Sections config (drives the bottom nav) ── */
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

/* ── Content ── */
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
  const [active, setActive] = useState(0);

  const goTo = useCallback((index) => {
    setActive(Math.max(0, Math.min(sections.length - 1, index)));
  }, []);

  // Lock page scroll — sections are full-screen panels, not a scrolling flow.
  // Restored on unmount so /dev pages scroll normally.
  useEffect(() => {
    const html = document.documentElement;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    return () => {
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };
  }, []);

  // Arrow-key navigation between sections (desktop convenience).
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        goTo(active + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        goTo(active - 1);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [active, goTo]);

  const slideClass = (index) =>
    `${styles.slide} ${active === index ? styles.slideActive : ''}`;

  // Horizontal swipe between sections (mobile). Only fires on a
  // predominantly horizontal drag, so vertical scrolling inside an
  // overflowing panel is never hijacked.
  const touchStart = useRef({ x: 0, y: 0 });

  function handleTouchStart(e) {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function handleTouchEnd(e) {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    const THRESHOLD = 50;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
      if (dx < 0) goTo(active + 1);
      else goTo(active - 1);
    }
  }

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

      <main
        className={styles.main}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* ══════════════ HOME ══════════════ */}
        <section className={slideClass(0)} aria-hidden={active !== 0}>
          <motion.div
            className={styles.heroGrid}
            variants={stagger}
            initial="hidden"
            animate={active === 0 ? 'show' : 'hidden'}
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
                GIS Developer · Technical Consultant
              </motion.p>

              <motion.p variants={fadeUp} className={styles.heroBio}>
                I turn technical problems into working systems — GIS
                platforms, web apps, and the automation behind them. My
                background spans engineering, civic infrastructure, and
                business, so I can scope what a client needs and build it
                myself.
              </motion.p>

              <motion.div variants={fadeUp} className={styles.heroCta}>
                <button type="button" onClick={() => goTo(3)} className={styles.btnPrimary}>
                  Get in Touch
                  <span className={styles.btnArrow}>→</span>
                </button>
                <button type="button" onClick={() => goTo(2)} className={styles.btnSecondary}>
                  See Projects
                </button>
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

        {/* ══════════════ ABOUT ══════════════ */}
        <section className={slideClass(1)} aria-hidden={active !== 1}>
          <motion.div
            className={styles.sectionInner}
            variants={stagger}
            initial="hidden"
            animate={active === 1 ? 'show' : 'hidden'}
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
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className={styles.aboutRouteMap}>
                <RouteMap />
                <p className={styles.aboutRouteCaption}>
                  Portland, OR → Bethlehem, PA → Los Angeles, CA
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════ PROJECTS ══════════════ */}
        <section className={slideClass(2)} aria-hidden={active !== 2}>
          <motion.div
            className={styles.sectionInner}
            variants={stagger}
            initial="hidden"
            animate={active === 2 ? 'show' : 'hidden'}
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
                    {p.image && (
                      <div
                        className={`${styles.projectImageSlot} ${p.pixel ? styles.projectImagePixel : ''}`}
                      >
                        <Image
                          src={p.image}
                          alt={p.imageAlt}
                          className={p.pixel ? styles.pixelArt : styles.projectImageEl}
                          width={p.pixel ? 220 : undefined}
                          height={p.pixel ? 220 : undefined}
                          sizes="(max-width: 760px) 90vw, 360px"
                        />
                      </div>
                    )}
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
        <section className={slideClass(3)} aria-hidden={active !== 3}>
          <motion.div
            className={styles.sectionInner}
            variants={stagger}
            initial="hidden"
            animate={active === 3 ? 'show' : 'hidden'}
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

            <p className={styles.footerCopy}>© 2026 Jordan Bautista-Lazo · Built in Los Angeles.</p>
          </motion.div>
        </section>

      </main>

      {/* ══════════════ BOTTOM SECTION NAV ══════════════ */}
      <nav className={styles.sectionNav} aria-label="Section navigation">
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`${styles.navDot} ${active === i ? styles.navDotActive : ''}`}
            onClick={() => goTo(i)}
            aria-current={active === i ? 'true' : undefined}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </>
  );
}
