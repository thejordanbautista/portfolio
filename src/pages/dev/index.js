import Head from 'next/head';
import Link from 'next/link';
import styles from './dev.module.css';

const apps = [
  {
    slug: 'pokedexle',
    name: 'Pokédexle',
    description: "Who's That Pokémon? Guess the hidden Pokémon using type, generation, and Pokédex number hints. Gen I & II, 5 guesses.",
    tags: ['Game', 'React', 'Pokémon'],
    icon: '🎮',
    color: '#cc0000',
  },
];

export default function Dev() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Dev Projects — Jordan Bautista-Lazo</title>
        <meta name="description" content="Web apps built by Jordan Bautista-Lazo" />
      </Head>

      <main className={styles.container}>

        {/* ── Back nav ── */}
        <div className={styles.backRow}>
          <a href="/" className={styles.backLink}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/130/130882.png"
              alt=""
              className={styles.backIcon}
            />
            Back to home
          </a>
        </div>

        {/* ── Header ── */}
        <section className={styles.header}>
          <h1 className={styles.title}>Dev Projects</h1>
          <p className={styles.subtitle}>
            A collection of web apps and side projects I've built for fun.
          </p>
        </section>

        {/* ── App grid ── */}
        <section className={styles.grid}>
          {apps.map((app) => (
            <Link key={app.slug} href={`/dev/${app.slug}`} className={styles.card}>
              <div className={styles.cardIcon} style={{ background: app.color }}>
                <span>{app.icon}</span>
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{app.name}</h2>
                <p className={styles.cardDesc}>{app.description}</p>
                <div className={styles.tagRow}>
                  {app.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardArrow}>→</div>
            </Link>
          ))}

          {/* Placeholder "coming soon" card */}
          <div className={`${styles.card} ${styles.soon}`}>
            <div className={styles.cardIcon} style={{ background: '#334' }}>
              <span>🔧</span>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>More coming soon</h2>
              <p className={styles.cardDesc}>Next project is in progress…</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
