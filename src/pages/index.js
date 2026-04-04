import Head from 'next/head';
import Image from 'next/image';
import styles from './home.module.css';

import LocationImage from '../images/location.png';
import DegreeImage from '../images/Lehigh-University-logo.png';
import morethanjordans from '../images/morethanjordans.jpg';

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Jordan Bautista-Lazo</title>
        <meta name="description" content="Personal homepage" />
      </Head>

      <main className={styles.container}>
        {/* ================= HERO SECTION (FULL SCREEN) ================= */}
        <section className={styles.heroSection}>
          <div className={styles.threeCol}>
            {/* LEFT COLUMN — ICON NAV */}
            <div className={styles.iconColumn}>
              <a href="/projects" aria-label="Projects">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1250/1250696.png"
                  className={styles.navIcon}
                  alt=""
                />
              </a>
              <a href="/shop" aria-label="Shop">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"
                  className={styles.navIcon}
                  alt=""
                />
              </a>
              <a href="http://linkedin.com/in/jordan-bautista-lazo/" aria-label="LinkedIn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
                  className={styles.navIcon}
                  alt=""
                />
              </a>
              <a href="https://github.com/thejordanbautista" aria-label="LinkedIn">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                  className={styles.navIcon}
                  alt=""
                />
              </a>
              <a href="mailto:jordanbautistalazo@gmail.com" aria-label="Contact">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  className={styles.navIcon}
                  alt=""
                />
              </a>
            </div>

            {/* CENTER COLUMN — TEXT */}
            <div className={styles.textCol}>
              <h1 className={`${styles.title} ${styles.typewriter}`}>
                Hey, I'm <span className={styles.name}>Jordan Bautista-Lazo</span>
              </h1>
              <p className={styles.lead}>
                I love automating systems, selling cool things, and live music. Whenever
                any of the three link up, I'm all for it.
                <br />
                <br />
                Something like an app that helps me automate my Depop sales and trade them
                for concert tickets. PrizePicks will be on it in a week...
              </p>
            </div>

            {/* RIGHT COLUMN — PORTRAIT */}
            <div className={styles.photoFrame}>
              <Image
                src="https://freight.cargo.site/w/900/q/75/i/O2668570368040557918646081908398/IMG3038-R01-021.jpg"
                alt="Portrait of Jordan Bautista-Lazo"
                width={350}
                height={300}
                className={styles.photoInner}
                priority
              />
            </div>
          </div>
        </section>

        {/* ================= INFO SECTION (3 CARDS) ================= */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>
            {/* Location */}
            <div className={styles.topBox}>
              <h4 className={styles.infoTitle}>Background</h4>
              <p className={styles.infoValue}>Home: Portland, OR ✈ Los Angeles, CA</p>
              <p className={styles.infoValue}>Heritage: Mexican &amp; Native American</p>
              <p className={styles.infoValue}>Hermanos: 1 Younger brother in elementary school</p>
              <p className={styles.infoValue}>Height: 6'6 when I stand on business</p>
              <img
                src={LocationImage.src}
                alt="Location"
                className={styles.infoImage}
              />
            </div>

            {/* Degree */}
            <div className={styles.topBox}>
              <h4 className={styles.infoTitle}>Degree</h4>
              <p className={styles.infoValue}>B.S. Computer Science &amp; Engineering</p>

              <img
                src={DegreeImage.src}
                alt="Degree"
                className={styles.infoImageDegree}
              />
              <p className={styles.infoValue}>I spent some time in Waco, TX before transferring to my alma mater in Bethlehem, PA. During my time at university, I was involved in an entrepreneurship "Student Idea Accelerator", participated in a web development internship, and joined my fraternity playing a role in the national executive board as a web developer and minister of information for the alumni association.</p>
            </div>

            {/* Passion Project */}
            <div className={styles.topBox}>
              <h4 className={styles.infoTitle}>Passion Project</h4>
              <p className={styles.infoValue}>More Than Jordans: Cultural Archive</p>

              <img
                src={morethanjordans.src}
                alt="Passion Project"
                className={styles.infoImage}
              />
              <p className={styles.infoValue}>I started selling sneakers in FB groups and OfferUp at a young age, eventually moving to StockX as my interest in fashion grew. For the past two years, I've run More Than Jordans from my bedroom, selling online and at local flea markets. I'm driven by nostalgia, curating pieces of history and tracking down my childhood grails before everyone else does.</p>
            </div>
          </div>

          <div className={styles.buttonWrap}>
            <a href="/projects" className={styles.workButton}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1250/1250696.png"
                className={styles.buttonIcon}
                alt=""
              />
              My Work
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
