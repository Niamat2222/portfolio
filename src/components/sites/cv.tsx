import React from 'react'
import styles from './cv.module.scss'
import Banner from './bgpic/pic'
type CvProps = {

}

const Cv: React.FC<CvProps> = () => {
  return (
    <div>
       <div className={styles.container}>
       <Banner text='CV' className={styles.pic}/>
      </div>
      <div className='images'>
        <img src='me.png' alt='me.png'></img> 
       </div>
    </div>
  )
}

export default Cv
