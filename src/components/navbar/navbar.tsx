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
        <div className={styles.contacts}>
            <ul>
            Sosial Media
            <ul className="nav">
                    <li className="nav-item"><a href="" className="nav-link pl-0"><i className="fa fa-facebook fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
                </ul>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
