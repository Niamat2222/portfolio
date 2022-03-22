// App.tsx
import React from 'react'
import styles from "./App.module.scss"
import Cv from './components/sites/cv';
import Projects from './components/sites/projects';
import Main from './components/sites/main/main'

/* "Social Media"*/
import { BsFacebook, BsGithub, BsWordpress, BsTwitter } from "react-icons/bs"


import {
  HashRouter as Router,
  Switch,
  Route,
} 
from 'react-router-dom';
import Navbar from './components/navbar/navbar';

const App: React.FC = () => {
  return (
      <Router>
        <div className={styles.bodystyle} />
        <Navbar />

         <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/cv"} component={Cv} />
          <Route exact path={"/projects"} component={Projects} />
         </Switch>
  
        {/* The footer and other components you want to display on all pages come here */}
        
        <div className={styles.footer}>
        
          <h1>Social Media</h1>
          <a 
            href="https://www.facebook.com/niamat.akbari.7/"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsFacebook size={25} color="#fff"/>
            facebook
          </a>

          <a
            href="https://twitter.com/Niamat61381883"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsTwitter size={25} color="#fff" />
            twitter
          </a>

          <a
            href="https://www.linkedin.com/in/niamat-akbari-764511235/"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsWordpress size={25} color="#fff"/>
            Linked
          </a>

          <a
            href="https://github.com/Niamat2222"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsGithub size={25} color="#fff"/>
            Github
          </a>
       </div>


  
      </Router>
   )
}

export default App





