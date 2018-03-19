import React, { Component } from 'react';
import Segment1 from './segment1';
import Segment2 from './segment2';
import Segment3 from './segment3';
import Segment4 from './segment4';
import 'semantic-ui-css/semantic.min.css';

class Register extends Component {
  render() {
    return (
      <div>
        <Segment1 />
        <Segment2 />
        <Segment3 />
        <Segment4 />
        <br/>
        <br/>
      </div>





    );
  }
}

export default Register;
