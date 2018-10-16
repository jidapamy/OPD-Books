import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./Containers/Home";
import Login from "./Containers/Login";
import OTPfactor from "./Containers/OTPfactor";
import ManagePatientRecord from "./Containers/Register";
import ProfilePatient from "./Containers/PatientProfile";
import apiDocument from "./Containers/Document"
import DemoExample from "./Containers/DemoExample";
import ErrorNotFound from "./Components/Errors/ErrorNotFound";
import ErrorTimeOut from "./Components/Errors/ErrorTimeOut";

import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0,0)
  return null
}

ReactDOM.render(
  <Router>
    <div>
      <Route component={scrollToTop} />
      <Route exact path="/" component={Home} />
      {/* patient */}
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={ManagePatientRecord} />
      <Route path="/profile" component={ProfilePatient} />

      {/* vender */}
      {/* <Route path="/demoExample" component={DemoExample} /> */}
      <Route path="/apiDocument" component={apiDocument} />
      <Route path="/OTPfactor" component={OTPfactor} />
      <Route path="/ErrorNotFound" component={ErrorNotFound} />
      <Route path="/ErrorTimeOut" component={ErrorTimeOut} />
    </div>
  </Router>,
  document.getElementById("root")
);
