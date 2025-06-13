import React , {useState} from 'react'
import styles from './ExperienceStyles.module.css';

const experiences = [
  {
    id: 1,
    period: '03/2025 – 06/2025',
    role: 'Desarrollo Web',
    company: 'BitMarketing',
    location: 'Alicante, España',
    description: 'Desarrollo y maquetacion de paginas webs con wordpress o paginas desde 0',
    skills: ['JavaScript', 'Laravel', 'PHP', 'Wordpress', 'Git', 'HTML/CSS'],
  },
  {
    id: 2,
    period: '03/2019 – 06/2019',
    role: 'Mantenimiento de Sistemas y redes',
    company: 'Ledse',
    location: 'Alicante, España',
    description: 'Mantenimiento de los equipos y las redes de la empresa, gestion de la web',
    skills: ['Prestashop'],
  }
];
export default function Experience() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = id => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className={styles.experienceContainer}>
      <h2 className='sectionTitle'>Experiencia Laboral</h2>

      <div className={styles.timeline}>
        {experiences.map(exp => {
          const isOpen = exp.id === openId;
          return (
            <div key={exp.id} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
              <div className={styles.header} onClick={() => toggleItem(exp.id)}>
                
                <h3 className={styles.title}>
                  {exp.role} @ {exp.company}
                </h3>
                <span className={styles.period}>{exp.period}</span>
                <button className={styles.toggle} aria-label={isOpen ? 'Cerrar' : 'Abrir'}>
                  {isOpen ? '–' : '+'}
                </button>
              </div>

              {isOpen && (
                <div className={styles.content}>
                  <div className={styles.location}>{exp.location}</div>
                  <p className={styles.desc}>{exp.description}</p>
                  <ul className={styles.skills}>
                    {exp.skills.map(skill => (
                      <li key={skill} className={styles.skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}