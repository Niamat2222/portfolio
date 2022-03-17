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
        <img className={styles.myimg} src={pics} alt="Niamat"/>
        niamat.akbari@outlook.com
       </div>
       <div className={styles.activities}>
         <h1>ABOUT ME&#128330;
           <p>I am studying Information and Communication Technology in Vocational Qualification.
              The planned graduation from the school is 6/3/2023. In the afternoon I work at Wolt as a food courier.</p>
           <p>I studied at the Vantaa Adult Primary School, At the adult primary school, I studied finnish language and Finnish primary school.</p>
         </h1>
         <h1>PROGRAMMING LANGUAGES&#128330;
           <p>Java, TypeScript, JavaScript, C#, Unity, React, SQL, Node Sql, HTML, CSS, ReactJs</p>
         </h1>
       </div>
       <div className={styles.activities}>
         <h1>WORK EXPERIENCE&#128330;
           <p>3/4/2019 - 3/15/2019&#128330;	Trainee Tokmanni of Myyrmäki Cleaning, Shelving, Customer Service</p>
           <p>3/15/2020 – 3/27/2020&#128330; Trainee Martinlaakson’s  S_Market Shelving, Customer Service</p>
           <p>I have worked at Eezy Oy, and Vara_apu Oy, A few times in grocery stores.</p>
           <p>In working life, I have done teamwork and sometimes I was alone.</p>
           <p>1/10/2020 - now&#128330; Job Foodora/Wolt food delivery</p>
         </h1>
       </div>
       <div className={styles.activitis}>
         <h1>HOBBIES&#128330;
           <p>Gym, swimming, </p>
         </h1>
       </div>
       </div>
  )
}

export default Cv
