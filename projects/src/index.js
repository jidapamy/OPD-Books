import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./Home";
import Login from "./Patients/Containers/Login";
import ManagePatientRecord from "./Patients/Containers/ManagePatientRecord";
import ProfilePatient from "./Patients/Containers/PatientProfile";
import apiDocument from "./Employees/Components/apiDoc"
import EmpTest from "./Employees/Containers/EmpTest";

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
      <Route path="/empTest" component={EmpTest} />
      <Route path="/apiDoc" component={apiDocument} />
    </div>
  </Router>,
  document.getElementById("root")
);
