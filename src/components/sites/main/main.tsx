import React from 'react';
import styles from '../main/main.module.scss';
import Banner from '../bgpic/pic';

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
      <Banner text='Welcome to my portfolio'  className={styles.pic}/>
      <div className={styles.about}>
          <h1>Hello<span> I'm Niamtullah Akbari:</span></h1>
          <p>This is my Portfolio Website</p>
          <p>Details and work experince web development.</p>
          <p>I am an IT student. I chose programming because I like coding websites and games.</p>
      </div>
    </div>
  )
}

export default Main;
