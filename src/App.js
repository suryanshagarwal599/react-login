import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Loginc from "./components/loginc.component";
import Loginm from "./components/loginm.component";
import SignUp from "./components/signup.component";
import Home from "./components/home.component";
import ForgotPwdc from "./components/ForgotPwdc";
import ForgotPwdm from "./components/ForgotPwdm";
import CustomerHome from "./components/CustomerHome";
import ManagerHome from "./components/ManagerHome";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./components/AboutUs";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <Link className="navbar-brand" to={"/"}>Bank</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/aboutus"}>About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/loginc" component={Loginc} />
            <Route path="/loginm" component={Loginm} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotpwdc" component={ForgotPwdc} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/forgotpwdm" component={ForgotPwdm} />
            <ProtectedRoute path="/custhome" component={CustomerHome} isAuth={false} />
            <Route path="/manghome" component={ManagerHome} />

          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
