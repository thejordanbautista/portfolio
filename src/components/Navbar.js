import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Logo or Site Name */}
        <div className={styles.navLinks}>
          <a href="https://www.linkedin.com/in/jordan-bautista-lazo/" className="text-xl font-bold" target="_blank">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
            width="40" height="40"
            ></img>
          </a>
          <a href="https://github.com/thejordanbautista" className="text-xl font-bold" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            width="40" height="40"></img>
          </a>
          <a href="https://docs.google.com/document/d/1vRwGQD6IE-VjJ4MbXfKq63StZ0l841JIrot1klLieUM/edit?usp=sharing" className="text-xl font-bold" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/5404/5404040.png"
            width="40" height="40"></img>
          </a>
          <a href="https://www.linkedin.com/in/jordan-bautista-lazo/" className="text-xl font-bold" target="_blank">
            <img src=""></img>
          </a>
        </div>
        {/* External Links */}
        <div className="flex space-x-6">
          {/* External link examples */}
        </div>
      </div>
    </nav>
  );
}
