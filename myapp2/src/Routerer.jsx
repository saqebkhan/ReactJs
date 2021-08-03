import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import LoginForm from "./IDCADS/LoginForm";
import EMIcalculator from "./EMIcalculator";
import Employeelist from "./IDCADS/EmployeeList"
import "./Router/Routerer.css"
// import Piano from "./Piano"

export const Routerer=()=> {
  return (
    <Router>
      <div>
        <nav>
        
          
            <Link className="anchors" to="/">LoginForm</Link>
          
          
            <Link className="anchors" to="/EMIcalculator">calcultor</Link>
         
            <Link className="anchors" to="/Employeelist">Employeelist</Link>
          
          {/* <li>
            <Link to="/Piano">Piano</Link>
          </li> */}
        </nav>


     
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/EMIcalculator">
            <EMIcalculator />
          </Route>
          <Route path="/Employeelist">
            <Employeelist />
          </Route>
          
              {/* <Route path="/Piano">
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}


export default Routerer;
