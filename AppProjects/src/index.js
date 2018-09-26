import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./Containers/Home";
import Login from "./Containers/Login";
import ManagePatientRecord from "./Containers/Register";
import ProfilePatient from "./Containers/PatientProfile";
import apiDocument from "./Containers/Document"
import DemoExample from "./Containers/DemoExample";

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
    </div>
  </Router>,
  document.getElementById("root")
);
