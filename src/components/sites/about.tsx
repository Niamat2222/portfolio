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
       <h1>What I have done</h1>
       <p>I studied at the Vantaa Adult Primary School, during the primary school I did an internship twice and everyone lasted for 2 weeks, I have also worked at Eezy and Varapu a few times in grocery stores.</p>
       <p>In working life, I have done teamwork and sometimes I was alone.</p>
       <h1>what kind of am I</h1>
       <p>I am hardworking, brisk and friendly I like to work in a team and alone.</p>
    </div>
    
  )
}

export default Main
