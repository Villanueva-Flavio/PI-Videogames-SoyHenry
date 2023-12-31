import './App.css';
import {Switch, Route} from "react-router-dom"
import landing from './components/Landing/landingpage';
import Form from './components/Form/form';
import NotFound from "./components/NotFound/notfound"
import home from "./components/Home/home"
import details from "./components/Details/details"

function App() {
  return (
   <Switch>
    <Route exact path ="/" component={landing}/>
    <Route  path ="/form" component={Form}/>
    <Route  path ="/home" component={home}/>
    <Route  path ="/details/:id" component={details}/>
    <Route  path ="*" component={NotFound}/>
    <Route  path ="/" component={landing}/>
   </Switch>
  );
}

export default App;
