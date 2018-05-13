import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home';
import ManagePatientRecord from './containers/ManagePatientRecord';
import Login from './containers/Login';
import ProfilePatient from './containers/PatientProfile';
import EmployeeSegment from './containers/EmployeeSegment';
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={Login} />
            <Route path='/signup' component={ManagePatientRecord} />
            <Route path='/profile' component={ProfilePatient} />
            <Route path='/EmployeeSegment' component={EmployeeSegment} />
        </div>
    </Router>, document.getElementById('root')
);
