import React from 'react'
import styles from './about.module.scss'
import Banner from './bgpic/pic'
type MainProps = {
  

}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={styles.container}>
      <Banner text='ABOUT ME'  className={styles.pic}/>
      <h1>What I'm doing</h1>
       <p>I am studying Information and Communication Technology in Vocational Qualification. The planned graduation from the school is 6/3/2023. In the afternoon I work at Wolt as a food courier</p>
       <h1>What I have don</h1>
       <p></p>
       <h1>what kind of am I</h1>
    </div>
    
  )
}

export default Main
