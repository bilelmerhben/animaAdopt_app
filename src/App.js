import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch ,Route } from "react-router-dom";
import Layerone from "./components/Layerone";
import Login from './components/Login';
import Admin from './components/Admin';
import Home from './components/Home';
import SignUp from './components/Signup';
import Profile from './components/Profile';
import UserPage from './components/UserPage';
import ProjectManagerPage from './components/ProjectManagerPage';
import AdminPage from './components/AdminPage';
import Adopter from './components/Adopter';
import Logout from './components/Logout';
import Animal from './components/Animal';
import Abondon from './components/Abondon';
import Association from './components/Association';
import Infomation from './components/info';
function App() {
  return (
    <div className="App">
     
        <Switch>
       
            <Route   path="/" exact={true} component={Layerone} />
            <Route   path="/" exact={true} component={Home} />
            <Route   path='/profile' exact={true} component={Profile}/>
            <Route   path='/user' exact={true} component={UserPage}/>
            <Route   path='/pm' exact={true} component={ProjectManagerPage}/> 
            <Route   path='/admin' exact={true} component={AdminPage}/>
            <Route   path="/signup"  exact={true} component={SignUp} />
            <Route   path="/signin" exact={true} component={Login} />
            <Route   path="/admin" exact={true} component={Admin} />
            <Route   path="/logout" exact={true} component={Logout} />
            <Route   path="/logout" exact={true} component={Logout} />
            <Route   path="/association" exact={true} component={Association} />
            <Route   path="/abandon" exact={true} component={Abondon} />
            <Route   path="/save" exact={true} component={Animal} />
            <Route   path="/info" exact={true} component={Infomation} />
            <Route   path="/adopt" exact={true} component={Adopter} />
           
        </Switch>
        
       
        {/* <Route component={Default} />*/}
       {/* {<SecondLayer />} */}
    </div>
  );
}

export default App;
