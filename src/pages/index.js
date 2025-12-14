import Head from 'next/head';
import styles from './home.module.css';
import Image from 'next/image';
import LocationImage from '../images/location.png';
import DegreeImage from '../images/lehigh-university-logo.png';
import morethanjordans from '../images/morethanjordans.jpg'


export default function Home() {
    return (
    <div className={styles.page}>
    <Head>
    <title>Jordan Bautista-Lazo</title>
    <meta name="description" content="Personal homepage" />
    </Head>
    
    
    <main className={styles.container}>
    {/* TWO COLUMN: Bio (left) + Photo (right) */}
    <div className={styles.twoCol}>
      <div className={styles.textCol}>
        <h1 className={`${styles.title} ${styles.typewriter}`}>Hey, I'm <span className={styles.name}>Jordan Bautista-Lazo</span></h1>
        <p className={styles.lead}>
        I love automating systems, selling cool things, and live music. Whenever any of the three link up, I'm all for it.<br></br><br></br>
        Something like an app that helps me automate my Depop sales and trade them for concert tickets. PrizePicks will be on it in a week...
        </p>
      </div>
      
      
      <div className={styles.photoFrame}>
        <Image
        src="https://freight.cargo.site/w/900/q/75/i/O2668570368040557918646081908398/IMG3038-R01-021.jpg"
        alt="Portrait"
        width={350}
        height={300}
        className={styles.photoInner}
        priority
        />
      </div>

    </div>


    <section className={styles.infoGrid}>

{/* TOP 3 TALL RECTANGLES */}
<div className={styles.topBox}>
  <h4 className={styles.infoTitle}>Location</h4>
  <p className={styles.infoValue}>Portland, OR ✈ Los Angeles, CA</p>

  <img 
    src= {LocationImage.src}

    alt="Location" 
    className={styles.infoImage}
  />
</div>

<div className={styles.topBox}>
  <h4 className={styles.infoTitle}>Degree</h4>
  <p className={styles.infoValue}>B.S. Computer Science & Engineering</p>

  <img 
    src={DegreeImage.src} 
    alt="Degree" 
    className={styles.infoImageDegree}
  />
</div>

<div className={styles.topBox}>
  <h4 className={styles.infoTitle}>Passion Project</h4>
  <p className={styles.infoValue}>More Than Jordans: Cultural Archive</p>

  <img 
    src={morethanjordans.src}
    alt="Passion Project" 
    className={styles.infoImage}
  />
</div>


{/* BOTTOM FULL-WIDTH SHORT RECTANGLE
<div className={styles.bottomBox}>
  <div className={styles.funFactsGrid}>
    <div className={styles.fact}>Very prideful of my vintage record collection</div>
    <div className={styles.fact}>I automated my Spotify playlists</div>
    <div className={styles.fact}>I prefer mental math over calculators</div>
    <div className={styles.fact}>You can always catch me with a pocket-size camera</div>
  </div>
</div>

*/}
</section>

  
  <div className={styles.buttonWrap}>
    <a href="/projects" className={styles.workButton}><img src="https://cdn-icons-png.flaticon.com/512/1250/1250696.png" className={styles.buttonIcon}></img>My Work</a>
  </div>
  </main>
  </div>
  );
  }