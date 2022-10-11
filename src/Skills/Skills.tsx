import React from 'react';
import stylesContainer from "../common/styles/Container.module.css"
import styles from "./Skills.module.css"
import Skill from "./Skill/Skill";
import logoJS from "./../assets/img/logo-javascript.svg"
import logoHTML from "./../assets/img/html-1.svg"
import logoCSS from "./../assets/img/css-3.svg"
import logoReact from "./../assets/img/react-2.svg"
import logoTS from "./../assets/img/typescript.svg"
import logoRedux from "./../assets/img/redux.svg"



const Skills = () => {

    return (
        <div className={styles.mainBlockskills}>
            <div className={`${stylesContainer.container} ${styles.skillContainer}`}>
                <div className={styles.descriptionSkillsBlock}>
                    <div>
                        <h1>Skills</h1>
                    </div>
                    <div className={styles.descriptionSkillsBlockdiv}>
                        <p>Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the
                            drana risus tincidunt convallis velit orci congue tortor eu dignissim ipsum suam non odio.
                            Pellenta esuntion miss the imperdiet metus ornare.
                        </p>
                    </div>
                </div>

                <div className={styles.skill}>
                    <Skill title={"HTML"} description={""} img={logoHTML}/>
                    <Skill title={"CSS"} description={""} img={logoCSS}/>
                    <Skill title={"JavaScript"} description={""} img={logoJS}/>
                    <Skill title={"TypeScript"} description={""} img={logoTS}/>
                    <Skill title={"React"} description={""} img={logoReact}/>
                    <Skill title={"Redux"} description={""} img={logoRedux}/>


                </div>

            </div>
        </div>
    );
};

export default Skills;