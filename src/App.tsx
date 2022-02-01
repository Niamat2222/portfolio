// App.tsx
import React from 'react'
import ClickCount from './components/clickCount';
import styles from "./App.module.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/sites/main';
import Cv from './components/sites/cv';
import Projects from './components/sites/projects';
import img2 from "./media/img2.png"
import img1 from "./media/img1.png"
const App: React.FC = () => {
  return (
      // Important! add your repositoryname to basename
      <Router basename='/portfolio'>
      
        {/* The navigation bar and other components you want to display on all pages come here */}
        <div className={styles.navbar}>
         <nav>
           <ul>
               <li><a href=".">HOME</a></li>
               <li><a href=".">ABOUT</a></li>
               <li><a href="/projects">PORTFOLIO</a></li>
               <li><a href="/cv">CV</a></li>
           </ul>
         </nav>
         <div className={styles.detail}>
         <h1>Welcome to <span>Dev Discover</span></h1>
         <p>This is my Portfolio Website</p>
         <p>Details and work experince web development.</p>
         </div>
         <div className= "images">
         <img className={styles.img2} src={img2} alt='back' />
         <img className={styles.img1} src={img1} alt='back' />
         </div>
        </div>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/cv"} component={Cv} />
          <Route exact path={"/projects"} component={Projects} />
        </Switch>
  
        {/* The footer and other components you want to display on all pages come here */}
        <ClickCount />
  
      </Router>
   )
}

export default App





