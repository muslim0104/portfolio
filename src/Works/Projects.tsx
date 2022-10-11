import React from 'react';
import stylesContainer from "../common/styles/Container.module.css"
import styles from "./Projects.module.scss"
import Project from "./Project/Project";
import todolistImg from  './../assets/img/todo.jpg'
import background from './../assets/img/background.jpg'


const Projects = () => {


    const  imgStyle={
        backgroundImage:`url(${background})`,
        backgroundAttachment:"fixed",
        filter: `grayscale(100%)`

    }
    return (
        <div className={styles.mainBlockworks} style={imgStyle}>
            <div className={`${stylesContainer.container} ${styles.changeContainerworks}`}>

                <div className={styles.textBlock}>
                    <div>
                <h1>My works</h1>
                    </div>
                    <div>
                    <p> This is my works and more...</p>
                    </div>
                </div>
                <div className={styles.project}>
                <Project name={"Social Network"} description={"This is my first project"} img={""}/>
                <Project name={"Todo-List"} description={"This is my second project"} img={"" }/>
                </div>
            </div>
        </div>
    );
};

export default Projects;