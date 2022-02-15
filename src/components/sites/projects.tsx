import React from 'react'
import styles from './project.module.scss'
import Banner from './bgpic/pic'
import pics from '../../media/cartoon@.png'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <Banner text='PROJECTS'  className={styles.pic}/>
     <p className={styles.title}> Projects are here </p>
     <div className={styles.Projects}>
       <ul>
         <a href='https://play.unity.com/u/Niamatcom/'><img className={styles.GmProjects} src={pics}  alt="Dragon"></img></a>
       </ul>
     </div>
    </div>
    
  )
}

export default Projects
