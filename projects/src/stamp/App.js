import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import Queue from './queue.js'
import Nurse from './nurse.js'
import Doctor from './doctor.js'
import Pharmacy from './pharmacy.js'

class App extends Component {
  render() {
    return (


      <div className="App">
        <Header/>
        {/* <Queue/> */} // 
        {/* <Doctor/> */}
        {/* <Nurse/> */}
        <Pharmacy/>
        
        
      </div>
      
    );
  }
}

export default App;
