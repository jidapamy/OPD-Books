import React from 'react';
import ReactDOM from 'react-dom';
import App from './Index/app';
import Login from './Login/login';
import Home from './BetaIndex/Home';
import BetaRegis from './BetaRegis/BetaRegister';
import Test from './Test';
import Basic from './Register/img/Upload';
// import Register from './Register/Register';
import Register2 from './Containers/Register';
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={Home}/>
        {/* <Route path='/register' component={Register}/> */}
        <Route path='/login' component={Login} />
        {/* <Route path='/home' component={Home} /> */}
        {/* <Route path='/test' component={Test} /> */}
        {/* <Route path='/img' component={Basic} /> */}
        {/* <Route path='/betaregister' component={BetaRegis} /> */}
        
        <Route path='/register' component={Register2} />
        </div>
    </Router>,document.getElementById('root')
    );
