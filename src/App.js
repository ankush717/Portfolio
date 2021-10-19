import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

import Error from './Components/Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';


function App() {
  return (
    <>

 <NavBar/>

    <Switch>

      <Route exact path ="/" component={Home} ></Route>
      <Route exact path ="/About" component={About} ></Route>
      <Route exact path ="/Resume" component={Resume} ></Route>
      <Route exact path ="/Projects" component={Projects} ></Route>

      <Route component={Error} ></Route>

    </Switch>

    </>
  );
}

export default App;
