import Head from 'next/head';
import styles from './home.module.css';
import Navbar from '../components/Navbar';
import Bio from '../components/Bio';

export default function Home() {
  return (
    <>
      <Head >
        <title>Jordan Bautista-Lazo Portfolio</title>
        <meta name="description" content="Portfolio of Jordan Bautista-Lazo" />
      </Head>
      <div>
        <main>
          
          <Bio />
          <section className={styles.home}>
            <h1>Project Experience</h1>
          </section>
        </main>
      </div>
    </>
  );
}
