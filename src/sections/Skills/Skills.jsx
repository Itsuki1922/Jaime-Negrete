import React from 'react';
import styles from './SkillsStyles.module.css';

import nodeIcon      from '../../assets/skills/NodeJS-Light.svg';
import phpIcon       from '../../assets/skills/PHP-Light.svg';
import mysqlIcon     from '../../assets/skills/MySQL-Light.svg';
import javaIcon      from '../../assets/skills/Java-Light.svg';
import laravelIcon     from '../../assets/skills/Laravel-Light.svg';

import reactIcon     from '../../assets/skills/React-Light.svg';
import htmlIcon      from '../../assets/skills/HTML.svg';
import cssIcon       from '../../assets/skills/CSS.svg';
import jsIcon        from '../../assets/skills/JavaScript.svg';
import sassIcon      from '../../assets/skills/Sass.svg';


import gitIcon       from '../../assets/skills/Git.svg';
import dockerIcon    from '../../assets/skills/Docker.svg';
import wordpressIcon from '../../assets/skills/Wordpress.svg';


export default function Skills() {
  const backend   = [
    { src: nodeIcon,   label: 'Node.js' },
    { src: phpIcon,    label: 'PHP' },
    { src: mysqlIcon,  label: 'MySQL' },
    { src: laravelIcon,  label: 'Laravel' },
    { src: javaIcon, label:'Java'}
  ];
  const frontend  = [
    { src: reactIcon,  label: 'React' },
    { src: htmlIcon,   label: 'HTML5' },
    { src: cssIcon,    label: 'CSS3' },
    { src: jsIcon,     label: 'JavaScript' },
    { src: sassIcon,     label: 'Sass' },

  ];
  const tools     = [
    { src: gitIcon,      label: 'Git' },
    { src: dockerIcon,   label: 'Docker' },
    { src: wordpressIcon,   label: 'Wordpress' },

  ];

  const renderBox = (items, area, title) => (
    <div key={area} className={styles.box} data-area={area}>
      <h3 className={styles.boxTitle}>{title}</h3>
      <div className={styles.imageGrid}>
        {items.map(({ src, label }) => (
          <img
            key={label}
            src={src}
            alt={label}
            title={label}
            className={styles.skillImg}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className={styles.container}>
      <h2 className='sectionTitle'>MIS HABILIDADES</h2>
      <div className={styles.bentoGrid}>
        {renderBox(backend,  'backend',  'Backend')}
        {renderBox(frontend, 'frontend', 'Frontend')}
        {renderBox(tools,    'tools',    'Herramientas')}
      </div>
    </section>
  );
}
