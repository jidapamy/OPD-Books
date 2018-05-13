import React from 'react';
import ReactDOM from 'react-dom';
import App from './Index/app';
// import Login from './Login/login';
import Login from './Containers/Login';

import Home from './BetaIndex/Home';
import ProfilePatient from './Containers/PatientProfile';
import EmployeeSegment from './Containers/EmployeeSegment';
import Register from './Containers/Register';
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' component={ProfilePatient} />
        <Route path='/EmployeeSegment' component={EmployeeSegment} />
        </div>
    </Router>,document.getElementById('root')
    );
