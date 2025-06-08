import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import LinkedinIcon from '../../assets/linkedin-light.svg';
import GithubIcon from '../../assets/github-light.svg';
import CV from '../../assets/cv.pdf';


function Hero(){
    return ( 
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Imagen Perfil"/>
            <img className={styles.colorMode} src={themeIcon} alt="color mode"/>
        </div>
        <div className={styles.info}>
            <h1>Jaime <br /> Negrete</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://linkedin.com/in/jaimenegreteferrerdesarrollador" target='_blank'>
                    <img src={LinkedinIcon} alt="Icono Linkedin" />
                </a>
                <a href="https://github.com" target='_blank'>
                    <img src={GithubIcon} alt="Icono Github" />
                </a>
            </span>
            <a href={CV} download>
                <button type="button">Curriculum Vitae</button>
            </a>
        </div>
    </section>
    );
}

export default Hero;