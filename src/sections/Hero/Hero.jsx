// Hero.jsx
import React, { useRef, useEffect } from 'react';
import { gsap, Power1 } from 'gsap';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLigth from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLigth from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const GithubIcon = theme === 'light' ? githubLigth : githubDark;
  const LinkedinIcon = theme === 'light' ? linkedinLigth : linkedinDark;

  // referencias para GSAP
  const arrowRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Flecha que rebota
    gsap.to(arrowRef.current, {
      y: 12,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      duration: 0.8,
    });
    // Anillo pulsante
    gsap.to(ringRef.current, {
      scale: 1.4,
      opacity: 0,
      repeat: -1,
      ease: Power1.easeOut,
      duration: 1.2,
      transformOrigin: '50% 50%',
    });
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Imagen Perfil" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.name}>
        <h1>Jaime Negrete</h1>
        <h2>Frontend Developer</h2>
      </div>

      <div className={styles.description}>
        <p>
          Desarrollador web junior, aquí podréis ver mis proyectos y
          experiencia
        </p>
        <div className={styles.button}>
          <span>
            <a
              href="https://linkedin.com/in/jaimenegreteferrerdesarrollador"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="Icono Linkedin" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src={GithubIcon} alt="Icono Github" />
            </a>
          </span>
          <a href={CV} download>
            <button type="button">Currículum</button>
          </a>
        </div>
      </div>

      <a
        href="#experience"
        className={styles.scrollDown}
        aria-label="Ir a Experiencia"
      >
        <div ref={ringRef} className={styles.pulseRing} />
        <svg
          ref={arrowRef}
          className={styles.downArrow}
          width="42"
          height="42"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M12 16L6 10H18L12 16Z" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
