import React from 'react';
import ReactDOM from 'react-dom';
import App from './Index/app';
import Login from './Login/login';
import Home from './BetaIndex/Home';
import Register from './Register/Register';
import 'semantic-ui-css/semantic.min.css';
// import {Route, Router,Link,browserHistory} from 'react-router'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        </div>
    </Router>,document.getElementById('root')
    );
