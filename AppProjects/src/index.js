import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./Containers/Home";
import RegisterAPI from "./Containers/RegisterAPI";
import Login from "./Containers/Login";
import OTPfactor from "./Components/DemoExamples/OTPfactor";
import ManagePatientRecord from "./Containers/ManagePatientRecord";
import FormEditProfile from "./Components/Patients/ManagePatientProfile/FormEditProfile";
import ProfilePatient from "./Containers/PatientProfile";
import apiDocument from "./Containers/Document"
import ErrorNotFound from "./Components/Errors/ErrorNotFound";
import ErrorTimeOut from "./Components/Errors/ErrorTimeOut";
import ForgotPassword from "./Components/Patients/ManagePatientProfile/ForgotPassword";
import FooterOnMobile from "./Components/ApiDocuments/FooterOnMobile"

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
      <Route path="/RegisterAPI" component={RegisterAPI} />
      <Route path="/FormEditProfile" component={FormEditProfile} />
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={ManagePatientRecord} />
      <Route path="/profile" component={ProfilePatient} />

      {/* vender */}
      {/* <Route path="/demoExample" component={DemoExample} /> */}
      <Route path="/apiDocument" component={apiDocument} />
      <Route path="/OTPfactor" component={OTPfactor} />
      <Route path="/ErrorNotFound" component={ErrorNotFound} />
      <Route path="/ErrorTimeOut" component={ErrorTimeOut} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/footerMobile" component={FooterOnMobile} />
    </div>
  </Router>,
  document.getElementById("root")
);
