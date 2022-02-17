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
       <div className={styles.activities}>
         <h1>ABOUT ME
           <p>I am studying Information and Communication Technology in Vocational Qualification.
              The planned graduation from the school is 6/3/2023. In the afternoon I work at Wolt as a food courier</p>
           
           <p>I studied at the Vantaa Adult Primary School,
              during the primary school I did an internship twice and everyone lasted for 2 weeks, I have also worked at Eezy and Varapu a few times in grocery stores.</p>
           
           <p>In working life, I have done teamwork and sometimes I was alone.</p>
           
           <p>I am hardworking, brisk and friendly I like to work in a team and alone.</p>
         </h1>
       </div>
       <div className={styles.activities}>
         <h1>PROGRAMMING LANGUAGES
           <p>Java, TypeScript, JavaScript, C#, Unity, React, SQL, Node Sql, HTML, CSS, ReactJs</p>
         </h1>
       </div>
       <div className={styles.activities}>
         <h1>WORK EXPERIENCE
           <p>3/4/2019 - 3/15/2019	Trainee Tokmanni of Myyrmäki Cleaning, Shelving, Customer Service</p>
           <p>3/15/2020 – 3/27/2020 Trainee Martinlaakson’s  S_Market Shelving, Customer Service</p>
           <p>1/10/2020 - now Job Foodora/Wolt food delivery</p>
         </h1>
       </div>
       <div className={styles.activities}>
         <h1>TRAINING
           <p>8 / 2017 Primary school for adults Vantaa Adult Education Center, Vantaa
              I study Finnish and the curriculum of a Finnish comprehensive school</p>
         </h1>
       </div>
       <div className={styles.activities}>
         <h1>HOBBIES
           <p>Gym, swimming, </p>
         </h1>
       </div>
       </div>
  )
}

export default Cv
