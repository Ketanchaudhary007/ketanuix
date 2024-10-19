import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import gmailLight from '../../assets/gmail-light.svg';
import gmailDark from '../../assets/gmail-dark.svg';
import CV from '../../assets/Ketan_Chaudhary.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const gmailIcon = theme === 'light' ? gmailLight : gmailDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Ketan Chaudhary"
          loading="lazy"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          onClick={toggleTheme}
          aria-label="Toggle color mode"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Ketan
          <br />
          Chaudhary
        </h1>
        <h2>Web Designer X Developer</h2>
        <span className={styles.socialIcons}>
          <a
            href="https://github.com/Ketanchaudhary007"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ketan's GitHub profile"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ketan-chaudhary/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ketan's LinkedIn profile"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ketan's Twitter profile"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="mailto:ketanchaudhary130@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send an email to Ketan"
          >
            <img src={gmailIcon} alt="Gmail icon" className={styles.gmailIcon} />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing and designing modern web apps.
        </p>
        <a href={CV} download>
          <button className={styles.resumeButton}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
