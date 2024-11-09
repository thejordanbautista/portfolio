import styles from './contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h1>Contact Me</h1>
      <p>
        Email: <a href="mailto:jordanbautistalazo@gmail.com">jordanbautistalazo@gmail.com</a>
      </p>
      <p>
        LinkedIn:{' '}
        <a
          href="https://www.linkedin.com/in/jordan-bautista-lazo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jordan Bautista-Lazo
        </a>
      </p>
      {/* Optionally include a contact form here */}
    </section>
  );
};

export default Contact;
