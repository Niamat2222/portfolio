import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.container}>
        <ul>
            <li>
                <Link to='/'>
                Home
                </Link>
            </li>

            <li>
                <Link to='/about'>
                ABOUT
                </Link>
            </li>

            <li>
                <Link to='/projects'>
                PROJECTS
                </Link>
            </li>
            
            <li>
                <Link to='/cv'>
                CV
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
