import React from 'react';
import styles from "./Skill.module.css"
type SkillPropsType={
    title:string
    description:string
    img:string
}
const Skill = (props:SkillPropsType) => {

    let imgStyle={
        backgroundImage:`url(${props.img})`
    }

    return (
        <div className={styles.mainBlock}>
            <div className={styles.secondBlock}>

         <div className={styles.titleBlock}>
             <div className={styles.imgBlock} style={imgStyle}></div>
             <h5>{props.title}</h5>
         </div>
            <div>
                <p>{props.description}</p>



            </div>
            </div>



        </div>

    );
};

export default Skill;