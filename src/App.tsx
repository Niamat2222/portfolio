// App.tsx
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';
import SomeExampleComponent from './components/example/someExampleComponent';
import ClickCount from './components/clickCount';
import styles from "App.module.scss"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App: React.FC = () => {
  return (
      // Important! add your repositoryname to basename
      <Router basename='/YourRepoNameHere'>
      
        {/* The navigation bar and other components you want to display on all pages come here */}
        <div className={styles.navbar}>
          <Link to='/'>Front page</Link>
          <Link to='example'>Look my example component</Link>
        </div>
  
        <Switch>
          {/* Changing content comes here */}
          <Route exact path='/' component={MyFirstComponent} />
          <Route exact path='/example' component={SomeExampleComponent}/>
        </Switch>
  
        {/* The footer and other components you want to display on all pages come here */}
        <ClickCount />
  
      </Router>
   )
}

export default App





