import React from 'react'
import styles from './pic.module.scss'

type PicProps = {
    text: string
    className: string


}

const Pic: React.FC<PicProps> = ({text, className}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>{text}</h2>
    </div>
  )
}

export default Pic
