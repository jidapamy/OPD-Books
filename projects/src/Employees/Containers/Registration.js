import React, { Component } from "react";
import ScanButton from "./../../Static/Img/ScanButton.png";
import styled from "styled-components";
import swal from "sweetalert2";
import QrReader from "react-qr-reader";
import { addQueue, removeQueues } from "./../../Service/QueueMethod";
import { Dimmer, Loader } from "semantic-ui-react";
import { patientField } from "../../Static/Data/Field"

import { getPatient } from "./../../Service/ManagePatientMethod";

import { Button, Container, Grid, Image, Header,Divider,Modal,Form } from "semantic-ui-react";

const PopupQRCode = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

const style = {
  h1: {
    marginTop: "3em",
    marginBottom: "50px"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  d1: {
    marginTop: "1em",
    marginBottom: "50px",
    cursor: "pointer",
    width: "290px"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  DataBlock: {
    color: "#AFB4B7"
  },
  colorHeader: {
    color: "#00B5AD"
  }
};

class Registration extends Component {
  state = {
    openScan: false,
    openDetail: false,
    patient: {},
    employee: {},
    citizenIdSearch: '',
    loader: false
  };

  getPatient = citizenId => {
    let patient = getPatient(citizenId);
    this.setState({
      patient: patient,
      openScan: false,
      openDetail: true
    });
  };

  closeModal = () => this.setState({ openDetail: false });

  scanQRCode = citizenId => {
    // Decrypt
    console.log(citizenId)
    if (citizenId) {
      this.props.setField("loader",true)
      this.setState({
        openScan: false,
      })
      getPatient(citizenId).then(res => {
        this.props.setField("loader", false)
        if (res.status) {
          this.setState({
            patient: res.data,
            openDetail: true
          });
        } else {
          swal({
            type: "error",
            // title: "Oops...",
            text: res.message,
            showConfirmButton: false,
            timer: 2000
          });
        }
      })
    }
  }

  searchPatient = () => {
    this.scanQRCode(this.state.citizenIdSearch)
  }

  confirm = () => {
    this.setState({ 
      openDetail: false,
      
     })
    this.props.sendToNurse(this.state.patient)
  }
  handleError = err => {
    console.log(err);
  };

  render() {
    return  <div>
        <Container>
          <Header as="h1" style={style.h1} textAlign="center">
            <Header.Content>
              <span style={{ fontSize: "2em", color: "#00B5AD" }}>
                OPD BOOKS
              </span>
              <Header.Subheader>Project on Blockchain</Header.Subheader>
            </Header.Content>
          </Header>

          <Image centered style={style.d1} rounded src={ScanButton}
            onClick={() => this.setState({ openScan: true })} />
          <Form onSubmit={() => this.searchPatient()} style={{ margin:" 0% 15% "}}>
            <Form.Input label='Citizen Id' type='text' action={{ icon: 'search' }} placeholder='Search...' onChange={(e) => this.setState({ citizenIdSearch: e.target.value })}/>
          </Form>
        </Container>

        <PopupQRCode
          size={"mini"}
          open={this.state.openScan}
          onClose={() => { this.setState({ openScan: !this.state.openScan }) }}>
          <Header textAlign="center" size="large">Scan QR Code</Header>
          <Modal.Content>
            <QrReader delay={this.state.delay} onError={this.handleError} onScan={this.scanQRCode} style={{ width: "100%" }} />
            <Button
              floated="left" size="huge"
              basic color="teal"
              onClick={() => this.setState({ openScan: false })}
              style={{ marginTop: "5%", marginBottom: "5%" }} fluid>
              Close
          </Button>
          </Modal.Content>
        </PopupQRCode>

        <Modal open={this.state.openDetail} onClose={this.closeModal}>
          <Modal.Content>
            <Modal.Description>
              <Header as="h2" textAlign="center">
                Patient Information
            </Header>
              <Divider />
                <Grid textAlign="center">
                  <br />
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Header as="h3">
                        <Header.Content style={style.colorHeader}>
                          PROFILE PATIENT
                        </Header.Content>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column textAlign="center" as="h3">
                      <p> Name: <span style={style.DataBlock}> 
                      {this.state.patient[patientField.nametitle.variable]}{" "}{this.state.patient[patientField.firstname.variable]}{"  "}{this.state.patient[patientField.lastname.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign={"center"}>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.citizenId.label} <br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.citizenId.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                      {patientField.dob.label} <br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.dob.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.congenitalDisease.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.congenitalDisease.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.gender.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.gender.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                      {patientField.bloodgroup.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.bloodgroup.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.religion.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.religion.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.nationality.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.nationality.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.country.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.country.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.status.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.status.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.occupartion.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.occupartion.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.homePhonenumber.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.homePhonenumber.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.mobileNumber.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.mobileNumber.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>

                  <Divider section inverted />

                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Header as="h3">
                        <Header.Content style={style.colorHeader}>
                          PATIENT ADDRESS
                        </Header.Content>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.typeofHouse.label} <br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.typeofHouse.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.address.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.address.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.subDistrict.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.subDistrict.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.district.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.district.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.province.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.province.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                      {patientField.zipcode.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.zipcode.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>

                  <Divider section inverted />

                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Header as="h3">
                        <Header.Content style={style.colorHeader}>
                          EMERGENCY CONTACT
                        </Header.Content>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p> Name: <br/>
                        <span style={style.DataBlock}> 
                        {this.state.patient[patientField.emerTitle.variable]} {this.state.patient[patientField.emerFirstname.variable]} {this.state.patient[patientField.emerLastname.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                      {patientField.emerRelationship.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.emerRelationship.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.emerHomePhonenumber.label}<br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.emerHomePhonenumber.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.emerMobileNumber.label}<br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.emerMobileNumber.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.emerTypeofHouse.label}<br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.emerTypeofHouse.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                      {patientField.emerAddress.label}<br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.emerAddress.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.emerSubDistrict.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.emerSubDistrict.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.emerDistrict.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.emerDistrict.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.emerProvince.label}<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.emerProvince.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.emerZipcode.label}<br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.emerZipcode.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5} />
                    <Grid.Column width={5} />
                  </Grid.Row>

                  <Divider section inverted />

                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Header as="h3">
                        <Header.Content style={style.colorHeader}>
                          ALLERGY / PRIVILEGE
                        </Header.Content>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        {patientField.privilege.label}<br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.privilege.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                      {patientField.allergy.label}<br />
                        <span style={style.DataBlock}>
                          {this.state.patient[patientField.allergy.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5} />
                  </Grid.Row>

                  <Divider section inverted />

                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Header as="h3">
                        <Header.Content style={style.colorHeader}>
                          IN CASE UNDER 15 YEAR OLD
                        </Header.Content>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        Father's Name<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.fatherFirstname.variable]} {this.state.patient[patientField.fatherLastname.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Mother's Name<br />
                        <span style={style.DataBlock}>
                        {this.state.patient[patientField.motherFirstname.variable]} {this.state.patient[patientField.motherFirstname.variable]}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5} />
                  </Grid.Row>
                </Grid>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="black" onClick={this.closeModal}>
              Nope
            </Button>
            <Button basic positive icon="checkmark" labelPosition="right" content="Yep, that's me" onClick={() => this.confirm()} />
          </Modal.Actions>
        </Modal>
    </div>
  }
}

export default Registration;
