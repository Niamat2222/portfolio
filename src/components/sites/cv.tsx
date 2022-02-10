import React from 'react'
import styles from './cv.module.scss'
import Banner from './bgpic/pic'
import pics from '../../media/me.png'
type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div>
       <div className={styles.container}>
       <Banner text='CV' className={styles.pic}/>
      </div>
      <div className={styles.niamatPicFrame} >
      <img className={styles.niamatPic} src={pics}  alt="Italian mafia"></img>
       </div>
    </div>
  )
}

export default Cv
