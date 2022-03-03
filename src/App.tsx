// App.tsx
import React from 'react'
import styles from "./App.module.scss"
import Cv from './components/sites/cv';
import Projects from './components/sites/projects';
import Main from './components/sites/main/main'


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
        
          <h1>Sosial Media</h1>
          <a href="." className="fa fa-facebook"></a>
          <a href="." className="fa fa-twitter"></a>
          <a href="." className="fa fa-google"></a>
          <a href="." className="fa fa-linkedin"></a>
          <a href="." className="fa fa-youtube"></a>
          <a href="." className="fa fa-instagram"></a>
       </div>

  
      </Router>
   )
}

export default App





