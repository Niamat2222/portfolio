import React from 'react'
import styles from './cv.module.scss'
import Banner from './bgpic/pic'
type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div>
       <div className={styles.container}>
       <Banner text='CV'  className={styles.pic}/>
       </div>
    </div>
  )
}

export default Cv
