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
        
          <h1>Social Media</h1>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <a href="https://www.facebook.com/niamat.akbari.7/" target={"_blank"} rel="noreferrer" className="fa fa-facebook">facebook</a>
          <a href="https://twitter.com/Niamat61381883" target={"_blank"} rel="noreferrer" className="fa fa-twitter">twitter</a>
          <a href="http://127.0.0.1/wordpress/" target={"_blank"} rel="noreferrer" className="fa fa-wordpress">wordpress</a>
          <a href="https://github.com/Niamat2222" target={"_blank"} rel="noreferrer" className="fa fa-Github">Github</a>
          <a href="." target={"_blank"} rel="noreferrer" className="fa fa-youtube">youtube</a>
          <a href="." target={"_blank"} rel="noreferrer" className="fa fa-instagram">instagram</a>

          <div className={styles.email}>
           <a href="https://www.facebook.com/niamat.akbari.7/" target={"_blank"} rel="noreferrer">	&#128231;</a>
           <a href="+358406821300">&#9742;&#65039;</a>
          </div>
       </div>

  
      </Router>
   )
}

export default App





