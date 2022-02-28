import React from 'react'
import styles from './project.module.scss'
import Banner from './bgpic/pic'
import pics from '../../media/cartoon@.png'
import pics1 from '../../media/IC.png'
import pics2 from '../../media/CE.png'
import pics3 from '../../media/IOT.png'
type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div className={styles.container}>
      <Banner text='PROJECTS'  className={styles.pic}/>
     <p className={styles.title}> Projects are here </p>
     <div className={styles.Projects}>
       <ul>
         <a href='https://play.unity.com/u/Niamatcom/'>
          <img className={styles.GmProjects} src={pics}  alt="Dragon"/>
          <p>Click On Play.Unity</p>
         </a>
         <a href='https://www.credly.com/badges/77061c91-e3ca-4ca0-bb66-53fb50095001/public_url/'>
          <img className={styles.CiscoProjects} src={pics1}  alt="Dragon"/>
          <p>Click On My Badge</p>
         </a>
         <a href='https://www.credly.com/badges/4943d606-6063-4079-bcf5-e4e3470da663/public_url/'>
          <img className={styles.CiscoProjects} src={pics2}  alt="Dragon"/>
          <p>Click On My Badge</p>
         </a>
         <a href='https://www.credly.com/badges/78216aea-da3e-4cfd-9834-1040c7367d61/public_url/'>
          <img className={styles.CiscoProjects} src={pics3}  alt="Dragon"/>
          <p>Click On My Badge</p>
         </a>
       </ul>
     </div>
    </div>
    
  )
}

export default Projects
