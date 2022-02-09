// App.tsx
import React from 'react'
import styles from "./App.module.scss"
import about from './components/sites/about';
import Cv from './components/sites/cv';
import Projects from './components/sites/projects';
import Main from './components/sites/main/main'


import {
  HashRouter as Router,
  Switch,
  Route,
} 
from 'react-router-dom';

const App: React.FC = () => {
  return (
      // Important! add your repositoryname to basename
      <Router basename='/portfolio'>
      
        {/* The navigation bar and other components you want to display on all pages come here */}
        <div className={styles.navbar}>
         <nav>
           <ul>
               <li><a href="/">HOME</a></li>
               <li><a href="/about">ABOUT</a></li>
               <li><a href="/projects">PORTFOLIO</a></li>
               <li><a href="/cv">CV</a></li>
           </ul>
         </nav>
        </div>


         <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/about"} component={about} />
          <Route exact path={"/cv"} component={Cv} />
          <Route exact path={"/projects"} component={Projects} />
         </Switch>
  
        {/* The footer and other components you want to display on all pages come here */}
  
      </Router>
   )
}

export default App





