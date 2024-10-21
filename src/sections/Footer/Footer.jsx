import styles from './FooterStyles.module.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      
      <div className={styles.contact}>
        <h3>Contact Me</h3>
        <div className={styles.contactInfo}>
          <a href="mailto:ketanchaudhary130@gmail.com" className={styles.card}>
            <FaEnvelope className={styles.icon} />
            <p>ketanchaudhary130@gmail.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/ketan-chaudhary/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <FaLinkedin className={styles.icon} />
            <p>LinkedIn: ketan chaudhary</p>
          </a>
          <a
            href="https://github.com/ketanchaudhary007"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <FaGithub className={styles.icon} />
            <p>GitHub: ketanchaudhary007</p>
          </a>
        </div>
      </div>
      <p className={styles.footerText}>
        &copy; 2024 Ketan Chaudhary. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
