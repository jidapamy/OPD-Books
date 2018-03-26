import React from 'react';
import ReactDOM from 'react-dom';
import App from './Index/app';
import Login from './Login/login';
import Home from './BetaIndex/Home';
import Test from './Test';

import Register from './Register/Register';
import 'semantic-ui-css/semantic.min.css';
// import {Route, Router,Link,browserHistory} from 'react-router'
import {BrowserRouter as Router,Route} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={App}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/test' component={Test} />
        </div>
    </Router>,document.getElementById('root')
    );
