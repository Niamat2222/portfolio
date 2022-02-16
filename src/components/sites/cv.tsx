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
         <h1>PROGRAMMING LANGUAGES&#128037;
           <p>Java&#128330;, TypeScript&#128330; JavaScript&#128330; C#&#128330; Unity&#128330; React&#128330; SQL&#128330; Node Sql&#128330; HTML&#128330; CSS&#128330; ReactJs</p>
         </h1>
       </div>
       <div className={styles.activities}>
         <h1>WORK EXPERIENCE&#128037;
           <p>3/4/2019 - 3/15/2019&#128330;	Trainee Tokmanni of Myyrmäki Cleaning, Shelving, Customer Service</p>
           <p>3/15/2020 – 3/27/2020&#128330; Trainee Martinlaakson’s  S_Market Shelving, Customer Service</p>
           <p>1/10/2020 - now&#128330; Job Foodora/Wolt food delivery</p>
         </h1>
       </div>
       <div className={styles.activities}>
         <h1>TRAINING&#128037;
           <p>8 / 2017&#128330; Primary school for adults Vantaa Adult Education Center, Vantaa
              I study Finnish and the curriculum of a Finnish comprehensive school</p>
         </h1>
       </div>
       <div className={styles.activities}>
         <h1>HOBBIES&#128037;
           <p>Gym, swimming, </p>
         </h1>
       </div>
       </div>
  )
}

export default Cv
