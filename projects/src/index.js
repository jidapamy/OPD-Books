import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Patient/Containers/Home';
import ManagePatientRecord from './Patient/Containers/ManagePatientRecord';
import Login from './Patient/Containers/Login';
import ProfilePatient from './Patient/Containers/PatientProfile';
import EmployeeSegment from './Employee/Containers/EmployeeSegment';
import PatientTreatment from "./Employee/Containers/PatientTreatment";
import EmpLogin from "./Employee/Containers/EmpLogin";

import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={ManagePatientRecord} />
      <Route path="/profile" component={ProfilePatient} />
      <Route path="/employeeSegment" component={EmployeeSegment} />

      <Route path="/patientTreatment" component={PatientTreatment} />
      <Route path="/signinForEmployee" component={EmpLogin} />
    </div>
  </Router>,
  document.getElementById("root")
);