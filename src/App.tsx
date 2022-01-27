// App.tsx
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/clickCount';
import styles from "./App.module.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from './components/sites/main';
import Cv from './components/sites/cv';
import Projects from './components/sites/projects';
import img2 from "./media/img2.png"
const App: React.FC = () => {
  return (
      // Important! add your repositoryname to basename
      <Router basename='/portfolio'>
      
        {/* The navigation bar and other components you want to display on all pages come here */}
        <div className={styles.navbar}>
         <nav>
           <ul>
               <li><a href="main.tsx">HOME</a></li>
               <li><a href="#">ABOUT</a></li>
               <li><a href="projects.tsx">PORTFOLIO</a></li>
               <li><a href="cv.tsx">CV</a></li>
           </ul>
         </nav>
         <div className={styles.detail}>
         <h1>Welcome to <span>Dev Discover</span></h1>
         <p>This is my Portfolio Website</p>
         <p>Details and work experince web development.</p>
         </div>
         <img src={img2} alt='back' />
        </div>
        <Switch>
          {/* Changing content comes here */}
          {/* <Route exact path='/' component={MyFirstComponent} /> */}
          {/* <Route exact path='/example' component={SomeExampleComponent}/> */}
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





