import './App.css';
import { Route, Switch } from "react-router-dom";
import LandingPage from '../src/components/LandingPage/LandingPage'
/* import Home from './components/Home/Home';
import Details from './components/Details/Details';
import  CreateActivity from './components/CreateActivity/CreateActivity';
import Error404 from './components/Error404/Error404';
import NavBar from './components/NavBar/NavBar';
 */
function App() {
  return (
    <div className="App">
       <Switch> 
    
       {/* <Route path={'/'} > <NavBar/></Route> */}
       <Route exact path={'/'} component ={LandingPage}/>  
     {/*  <Route  path={'/home'} component={Home}/>
      <Route  path={"/countries/:id"} component={Details} />
      <Route path={"/activities"} component={CreateActivity} />
     <Route path='*' component={Error404} />  */}
       </Switch> 
      
    </div> 
  );
}

export default App;
