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
       <p>Tällä hetkellä opiskelen tieto ja viestintätekniikka perustutkinto ohjelmoinnin osa  joka valmistu 03.06.2023 ja iltapäivällä teen Woltin kanssa ruokatoimitus työtä.</p>
       <h1>What I have don</h1>
    </div>
    
  )
}

export default Main
