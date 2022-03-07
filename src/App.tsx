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
          <a href="https://www.facebook.com/niamat.akbari.7/" target={"_blank"} rel="noreferrer" className="facebook">facebook</a>
          <a href="https://twitter.com/Niamat61381883" target={"_blank"} rel="noreferrer" className="twitter">twitter</a>
          <a href="http://127.0.0.1/wordpress/" target={"_blank"} rel="noreferrer" className="wordpress">google</a>
          <a href="https://github.com/Niamat2222" target={"_blank"} rel="noreferrer" className="Github">linkedin</a>
          <a href="." target={"_blank"} rel="noreferrer" className="youtube">youtube</a>
          <a href="." target={"_blank"} rel="noreferrer" className="instagram">instagram</a>
       </div>

  
      </Router>
   )
}

export default App





