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


function Hero(){
    const {theme , toggleTheme} = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon ;
    const GithubIcon= theme === 'light' ? githubLigth : githubDark ;      
    const LinkedinIcon = theme === 'light' ? linkedinLigth : linkedinDark ;



    return ( 
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Imagen Perfil"/>
            <img className={styles.colorMode} src={themeIcon} alt="color mode" onClick={toggleTheme}/>  
        </div>
        <div className={styles.name}>
            <h1>Jaime Negrete</h1>
            <h2>Frontend Developer</h2>
        </div>
        <div className={styles.description}>
            <p>Desarrollador web junior , aqui podreis ver mis proyectos y experiencia</p>
            <div className={styles.button}>
                <span>
                    <a href="https://linkedin.com/in/jaimenegreteferrerdesarrollador" target='_blank'>
                        <img src={LinkedinIcon} alt="Icono Linkedin" />
                    </a>
                    <a href="https://github.com" target='_blank'>
                        <img src={GithubIcon} alt="Icono Github" />
                    </a>
                </span>
                <a href={CV} download>
                    <button type="button">Curriculum</button>
                </a>
            </div>
        </div>
        
    </section>
    );
}

export default Hero;