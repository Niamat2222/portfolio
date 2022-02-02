// App.tsx
import React from 'react'
import ClickCount from './components/clickCount';
import styles from "./App.module.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import about from './components/sites/about';
import Cv from './components/sites/cv';
import Projects from './components/sites/projects';
import Banner from '../src//components/sites/bgpic/pic'

const App: React.FC = () => {
  return (
      // Important! add your repositoryname to basename
      <Router basename='/portfolio'>
      
        {/* The navigation bar and other components you want to display on all pages come here */}
        <div className={styles.navbar}>
         <nav>
           <ul>
               <li><a href=".">HOME</a></li>
               <li><a href="/about">ABOUT</a></li>
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
         {/*<img className={styles.img3} src={img3} alt='back' />*/}
         <Banner text=''  className={styles.pic}/>
         </div>
         <div className={styles.about}>
          <h1>Hello<span> I'm Niamtullah Akbari:</span></h1>
          <p>I am an IT student and in the afternoon I work with Foodora and Wolt in food delivery.
            In the IT industry, I have complained about programming because I like coding to make websits and games.</p>
         </div>
         </div>
         <Switch>
          <Route exact path={"/"} component={about} />
          <Route exact path={"/cv"} component={Cv} />
          <Route exact path={"/projects"} component={Projects} />
         </Switch>
  
        {/* The footer and other components you want to display on all pages come here */}
        <ClickCount />
  
      </Router>
   )
}

export default App





