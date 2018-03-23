import React, { Component } from 'react';
import Segment1 from './segment1';
import Segment2 from './segment2';
const avatarStyle = {
  backgroundImage: "url('./img/BG.png')"
};

class Register extends Component {
  render() {
    return (
      <div style={avatarStyle}>
        <Segment1 />
        <Segment2 />
      </div>
    );
  }
}

export default Register;
