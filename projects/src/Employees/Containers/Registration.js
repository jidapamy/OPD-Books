import React, { Component } from "react";
import ScanButton from "./../../Static/Img/ScanButton.png";
import { Scrollbars } from "react-custom-scrollbars";
import Queues from "./../Components/QueuesForRegistrar";
import styled from "styled-components";
import swal from "sweetalert2";
import QrReader from "react-qr-reader";
import moment from "moment";
import { addQueue } from "./../../Service/QueueMethod";
import { defaultAccount, contract, web3 } from "./../../Lib/Web3";
import NavbarHeader from "./../Components/NavHeader";

import { Patient } from "./../../Model/Patient";
import { getPatient } from "./../../Service/ManagePatientMethod";

import {
  Button,
  Container,
  Grid,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Header,
  Step,
  Table,
  List,
  Divider,
  Modal
} from "semantic-ui-react";

const PopupQRCode = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

const CryptoJS = require("crypto-js");
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
    cursor: "pointer"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  DataBlock: {
    color: "#AFB4B7"
  }
};

class Registration extends Component {
  state = {
    open: false,
    openModal: false,
    patient: {},
    employee : this.props.location.state.userLogin
  };

  getPatient = citizenId => {
    let patient = getPatient(citizenId, "string");
    this.setState({
      patient: patient,
      open: false,
      openModal: true
    });
  };

  closeModal = () => this.setState({ openModal: false });

  scanQRCode = data => {
    // Decrypt
    if (data) {
      const currentDate = moment().format("ll");
      var bytes = CryptoJS.AES.decrypt(data.toString(), "OPDQR");
      var plaintext = bytes.toString(CryptoJS.enc.Utf8);
      let res = ([] = plaintext.split("@"));
      // เช็คว่าตรงตามเงื่อนไขหรือไม่ เป็นQR ของClinicหรือไม่
      if (res[0] == "OPDBooks") {
        if (res[1] == "" + currentDate) {
          this.getPatient(res[2]);
        } else {
          swal({
            type: "error",
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 2000
          });
          this.setState({ open: false, })
        }
      } else {
        swal({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!",
          showConfirmButton: false,
          timer: 2000
        });
        this.setState({ open: false });
      }
    }
  };

  addQueueForNurse = () => {
    if (this.state.patient.citizenId) {
      addQueue( 1, this.state.patient.hospitalnumber, this.state.patient.citizenId, this.state.patient.titlename,this.state.patient.firstname,this.state.patient.lastname,true,"-");
      swal({
        type: "success",
        title: "Add Queue Success!",
        showConfirmButton: false,
        timer: 1500
      });
      this.setState({
        patient: {},
        openModal: false
      });
    } else {
      // ยังไม่มีคนไข้
    }
  };

  handleError = err => {
    console.log(err);
  };

  render() {
    const empName = this.state.employee.nameTitle + " " + this.state.employee.firstname + "  " + this.state.employee.lastname;
    return (
      <div>
        <NavbarHeader empName={empName}/>
        <Container>
          <Header as="h1" style={style.h1} textAlign="center">
            <Header.Content>
              <span style={{ fontSize: "2em", color: "#00B5AD" }}>
                OPD BOOKS
              </span>
              <Header.Subheader>Project on Blockchain</Header.Subheader>
            </Header.Content>
          </Header>
          <Image style={style.d1} rounded size="medium" src={ScanButton} onClick={() => this.setState(
                { open: true }
              )} />
          <Container>
            <Grid style={style.last} textAlign="center">
              <Queues role="Nurse" position={2} StatusQueue="N" />
              <Queues role="Doctor" position={3}StatusQueue="D" />
              <Queues role="Phamacy" position={4} StatusQueue="P" />
            </Grid>
          </Container>
        </Container>

        <PopupQRCode size={"mini"} open={this.state.open} onClose={() => {
            this.setState({ open: !this.state.open });
          }}>
          <Header textAlign={"center"} size="large">
            Scan QRCode
          </Header>
          <Modal.Content>
            <QrReader delay={this.state.delay} onError={this.handleError} onScan={this.scanQRCode} style={{ width: "100%" }} />
            <Button floated="left" size="huge" basic color="teal" onClick={() => this.setState(
                  { open: false }
                )} style={{ marginTop: "5%", marginBottom: "5%" }} fluid>
              Close
            </Button>
          </Modal.Content>
        </PopupQRCode>

        <Modal open={this.state.openModal} onClose={this.closeModal}>
          <Modal.Content>
            <Modal.Description>
              <Header as="h2" textAlign="center">
                Profile Image
              </Header>
              <Divider />

              <Scrollbars autoHide style={{ height: 700 }}>
                <Grid textAlign="center">
                  <br />
                  <Header as="h3">
                    <Header.Content>Profile</Header.Content>
                  </Header>
                  <Grid.Row>
                    <Grid.Column textAlign="center" as="h3">
                      <p>
                        Name: <span style={style.DataBlock}>
                          {this.state.patient.titlename} {this.state.patient.firstname} {this.state.patient.lastname}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row textAlign={"center"}>
                    <Grid.Column width={5}>
                      <p>
                        Hospitalnumber <br />
                        <span style={style.DataBlock}>
                          {this.state.patient.hospitalnumber}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Date of Birth<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.dob}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Congenital Disease<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.congenitaldisease}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        Gender<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.gender}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Blood Group<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.bloodgroup}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Religion<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.religion}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        Nationality<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.nationality}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Country<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.country}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Status<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.statuspatient}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        Occupartion<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.occupartion}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Home Number<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.homephonenumber}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Mobile Number<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.mobilenumber}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Divider horizontal section inverted>
                    Horizontal
                  </Divider>
                  {/* <Header as="h3">
                    <Icon name="plug" />
                    <Header.Content>Address</Header.Content>
                  </Header> */}
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        Type Of House<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.typeofHouse}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Address<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.patientaddress}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Sub-District<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.subDistrict}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        District<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.district}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Province<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.province}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Zipcode<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.zipcode}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Header as="h3">
                    <Icon name="plug" />
                    <Header.Content>Emergency Address</Header.Content>
                  </Header>
                  <Grid.Row>
                    <Grid.Column>
                      <p>
                        Name: {this.state.patient.emerTitle} {this.state.patient.emerFirstname} {this.state.patient.emerLastname}
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        Relationship<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerRelationship}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Home Number<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerHomePhonenumber}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        MobileNumber<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerMobileNumber}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        Type Of House<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerTypeofHouse}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Address<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerAddress}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Sub-District<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerSubDistrict}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p>
                        District<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerDistrict}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Province<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerProvince}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <p>
                        Zipcode<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.emerZipcode}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>

                  <Header as="h3">
                    <Icon name="plug" />
                    <Header.Content>Allergy</Header.Content>
                  </Header>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <p>
                        Privilege<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.privilege}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <p>
                        Allergy<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.allergy}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>

                  <Header as="h3">
                    <Icon name="plug" />
                    <Header.Content>
                      In Case Under 15 Year Old
                    </Header.Content>
                  </Header>
                  <Grid.Row>
                    <Grid.Column width={6}>
                      <p>
                        Father Name<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.fatherFirstname} {this.state.patient.fatherLastname}
                        </span>
                      </p>
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <p>
                        Mother Name<br />
                        <span style={style.DataBlock}>
                          {this.state.patient.motherFirstname} {this.state.patient.motherLastname}
                        </span>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Scrollbars>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="black" onClick={this.closeModal}>
              Nope
            </Button>
            <Button basic positive icon="checkmark" labelPosition="right" content="Yep, that's me" onClick={() => this.addQueueForNurse()} />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default Registration;
