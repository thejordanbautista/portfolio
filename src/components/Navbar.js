import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Logo or Site Name */}
        <div className={styles.navLinks}>
          <Link href="https://www.linkedin.com/in/jordan-bautista-lazo/" className="text-xl font-bold" target="_blank">
            LinkedIn
          </Link>
           | 
          <Link href="https://github.com/thejordanbautista" className="text-xl font-bold" target="_blank">
            Github
          </Link>
           | 
          <Link href="https://docs.google.com/document/d/1vRwGQD6IE-VjJ4MbXfKq63StZ0l841JIrot1klLieUM/edit?usp=sharing" className="text-xl font-bold" target="_blank">
            Resume
          </Link>
           | 
          <Link href="https://www.linkedin.com/in/jordan-bautista-lazo/" className="text-xl font-bold" target="_blank">
            LinkedIn
          </Link>
        </div>
        {/* External Links */}
        <div className="flex space-x-6">
          {/* External link examples */}
        </div>
      </div>
    </nav>
  );
}
