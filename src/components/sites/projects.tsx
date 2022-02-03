import React from 'react'
import styles from './project.module.scss'
import Banner from './bgpic/pic'

type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <Banner text='PROJECTS'  className={styles.pic}/>
     <p className={styles.title}> Projects are here </p>
    </div>
  )
}

export default Projects
