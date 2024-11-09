// components/Footer.js
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Bautista-Lazo</p>
    </footer>
  );
};

export default Footer;
