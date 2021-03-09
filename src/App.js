import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch ,Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Card from "./components/Card";
import Inscrit from './components/Inscrit';
import Connect from './components/Connect';


function App() {
  return (
    <div className="App">
     
        <Navigationbar/>
        <Switch>
            <Route  exact path="/" component={Card} />
            <Route  exact path="/connection" component={Connect} />
          <Route  exact path="/inscription" component={Inscrit} />
        </Switch>
        {/* <Route component={Default} />*/}
     
      
    </div>
  );
}

export default App;
