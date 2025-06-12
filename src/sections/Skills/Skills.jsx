import React from "react";
import styles from "../Skills/SkillsStyles.module.css";

function skills(){
    return(
        <section id="skills" className={styles.skillsContainer}>
            <h2 className="sectionTitle">Skills</h2> 
            <div>
                <h3>Front-End</h3>
            </div>
            <div>
                <h3>Back-end</h3>
            </div>
            <div>
                <h3>Herramientas</h3>
            </div>
        </section>
        
    );
}

export default skills;