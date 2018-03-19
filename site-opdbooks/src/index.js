import React from 'react';
import ReactDOM from 'react-dom';
import App from './Index/app';
import Register from './Register/register';
import 'semantic-ui-css/semantic.min.css';
// import {Route, Router,Link,browserHistory} from 'react-router'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
        <IndexRoute component={App} />
        <Route path='/' component={App} />
        <Route path='/register' component={Register} />
    </Router>, document.getElementById('root'));

