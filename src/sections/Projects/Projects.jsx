import React from 'react';
import styles from './ProjectsStyle.module.css'; 

import oddnessImg from '../../assets/Oddness.png';

const projects = [
  {
    title: 'App Deportiva',
    description:
      'Consiste en una app de gestión de dietas y rutinas deportivas que une a entrenadores y usuarios',
    img: oddnessImg,
    link: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Proyectos</h2>
      <div className={styles.masonry}>
        {projects.map(p => (
          <a
            key={p.link}
            href={p.link}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imgWrap}>
              <img src={p.img} alt={p.title} className={styles.img} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
