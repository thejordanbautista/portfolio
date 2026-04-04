import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLinks}>
        <a href="https://www.linkedin.com/in/jordan-bautista-lazo/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
            width="28" height="28"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/thejordanbautista" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
            width="28" height="28"
            alt="GitHub"
          />
        </a>
        <a href="https://docs.google.com/document/d/1vRwGQD6IE-VjJ4MbXfKq63StZ0l841JIrot1klLieUM/edit?usp=sharing" aria-label="Resume" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5404/5404040.png"
            width="28" height="28"
            alt="Resume"
          />
        </a>
      </div>
    </nav>
  );
}
