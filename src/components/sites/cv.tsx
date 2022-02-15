import React from 'react'
import styles from './cv.module.scss'
import Banner from './bgpic/pic'
import pics from '../../media/myimg.png'
type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div>
       <div className={styles.container}>
       <Banner text='CV' className={styles.pic}/>
       </div>
       <div className={styles.mycv}>
       <img className={styles.myimg} src={pics}  alt="Niamat"/>
       </div>
       <p className={styles.cvtitle}> MY CV </p>
       </div>
  )
}

export default Cv
