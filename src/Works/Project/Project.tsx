import React from 'react';
import stylesContainer from "../common/styles/Container.module.css"
import styles from "./Project.module.css"

type ProjectPropsType = {
    name: string
    description: string
}
const Project = (props: ProjectPropsType) => {
    return (

        <div>
            <div className={styles.mainBlockskills}>



                <div className={styles.project}>
                    <div></div>
                    <div className={styles.view}>View</div>
                    <div className={styles.description}>
                    <h5>{props.name}</h5>
                    <span>{props.description}</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project;