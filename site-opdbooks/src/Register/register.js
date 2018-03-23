import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react'

import InfoPateint from './InfoPateint';
import HeaderComponent from './HeaderComponent';
import HomeAddress from './HomeAddress'
import EmergencyContact from './EmergencyContact'
import ChildrenUnder15 from './ChildrenUnder15'
import Allergy from './Allergy'
import Footer from './Footer'

const avatarStyle = {
  backgroundImage: "url('./img/BG.png')"
};

class Register extends Component {
  render() {
    return (
      <div style={avatarStyle}>
        <Container>
          <Form>
            <HeaderComponent />
            <InfoPateint />
            <HomeAddress />
            <EmergencyContact />
            <ChildrenUnder15 />
            <Allergy />
            <Footer />
            <br></br><br></br>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Register;
