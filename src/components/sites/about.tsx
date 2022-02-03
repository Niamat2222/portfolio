import React from 'react'
import styles from './about.module.scss'
import Banner from './bgpic/pic'
type MainProps = {
  

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <Banner text='ABOUT ME'  className={styles.pic}/>
       <p>I am an IT student. I chose programming because I like coding websites and games.</p>
    </div>
    
  )
}

export default Main
