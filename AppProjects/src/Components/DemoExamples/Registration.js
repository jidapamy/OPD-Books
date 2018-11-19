import React, { Component } from "react";
import ScanButton from "./../../Static/Img/ScanButton.svg";
import ScanButton2 from "./../../Static/Img/ScanButton2.svg";
import styled from "styled-components";
import QrReader from "react-qr-reader";
import { patientField } from "../../Static/Data/Field"
import { getPatient, requestOTP, getPatientWithOTP, cancelRequestOTP, checkIdcard } from "../../Services/ManagePatientMethod";
import BGRegistra from "./../../Static/Img/BGRegistra.svg";
import { Button, Container, Grid, Image, Header, Divider, Modal, Form, Dimmer, Loader, Icon } from "semantic-ui-react";
import OTPfactor from "./OTPfactor";
import { confirmPopup, successPopup, errorPopup } from "../SweetAlert"
import { addQueueFromDB, checkPatientFromDB, addPatientFromDB, getPatientFromDB} from "../../Services/DbService";
import { ClinicProvider } from "../../Services/ClinicProvider"



const PopupQRCode = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;
const Wrapper = styled.div`
  background: url(${BGRegistra}) no-repeat center fixed;
  background-size: 100% 100%;
  height:100vh;
`;
const style = {
  h1: {
    marginTop: "2.5em",
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
    color: ClinicProvider.getClinic() == "KMUTT" ? '#FA636F' : "#31A5BA"
  }
};

class Registration extends Component {
  state = {
    openScan: false,
    openDetail: false,
    patient: {},
    employee: {},
    citizenIdSearch: '',
    loader: false,
    openOTP: false,
    requestId: "",
    mobileNumber: "",
    pin: "",

    duplicatePatient: false,
  };

  getPatient = citizenId => {
    getPatient(citizenId).then(res => {
      if (res.status) {
        checkPatientFromDB(res.data.citizenId).then(boolean => {
          console.log("checkPatient", boolean)
          this.setState({
            patient: res.data,
            openScan: false,
            openDetail: true,
            duplicatePatient: boolean
          });
        })
      }
    })
  };

  closeModal = () => this.setState({ openDetail: false, openOTP: false, citizenIdSearch: '', });
  closeOTP = () => { this.cancelRequestOTP(this.state.requestId) }
  scanQRCode = citizenId => {
    // this.setState({ openOTP: true })
    // Decrypt
    if (citizenId) {
      this.setState({ openScan: false, loader: true, citizenIdSearch: citizenId })
      checkPatientFromDB(citizenId).then(async boolean => {
        this.setState({ duplicatePatient: boolean })
        if(boolean){
           // มี >> Show patient เลย
          getPatientFromDB(citizenId).then(async data => {
            this.setState({ loader: false })
            if (data.status) {
              this.setState({
                patient: data.data,
                openScan: false,
                openDetail: true,
              });
            } else {
              errorPopup(data.message)
            }
          })
        }else{
          // ไม่มีใน db
          this.setState({ loader: false })
          if(await checkIdcard(citizenId)){
            confirmPopup("Do you want to retrieve patient information from the blockchain system ?", "No patient in the system").then(res => {
              if (res.value) {
                this.requestOTP(citizenId, null)
              }
            })
          }else{
            errorPopup("No patient in the system")
          }
        }
      })
    }
  }

  searchPatient = () => {
    this.scanQRCode(this.state.citizenIdSearch)
  }

  confirm = () => {
    let data = {
      status: 2,
      citizenId: this.state.patient.citizenId
    }
    if (!this.state.duplicatePatient) {
      // ยังไม่มีในระบบ
      confirmPopup("Will you add this patients to database.?", "No patient in the system").then(res => {
        if (res.value) {
          addPatientFromDB(this.state.patient).then(res => {
            if (res.status) {
              addQueueFromDB(data).then(res => {
                this.setState({
                  openDetail: false,
                  citizenIdSearch: '',
                  duplicatePatient: true,
                })
                if(res.status){
                  successPopup("Add Queue Success!")
                }else{
                  errorPopup(res.message)
                }
              })
            } else {
              errorPopup(res.message)
            }
          })
        }
      })
    }else{
      addQueueFromDB(data).then(res => {
        this.setState({
          openDetail: false,
          citizenIdSearch: '',
          duplicatePatient: true,
        })
        if (res.status) {
          successPopup("Add Queue Success!")
        } else {
          errorPopup(res.message)
        }
      })
    }
  }


  validateOTP = (pin) => {
    let data = {
      pin: pin,
      requestId: this.state.requestId,
      citizenId: this.state.citizenIdSearch
    }
    // this.props.setField("loader", true)
    this.setState({ loader: true, pin: pin })
    getPatientWithOTP(data).then( async res => {
      await this.setState({ loader: false, pin: '' })
      // this.props.setField("loader", false)
      if (res.status) {
        this.setState({
          openOTP: false,
          openDetail: true,
          patient: res.data,
          citizenIdSearch: '',
        })
      } else {
        console.log("validate false")
        if (res.statusCode == '17') {
          this.setState({
            openOTP: false,
            citizenIdSearch: '',
          })
        }
        errorPopup(res.message)
      }
      // this.setState({ loader: false, pin: '' })
    })
  }

  requestOTP = (citizenId, requestId = null, ) => {
    let data = {
      requestId: requestId,
      citizenId: citizenId
    }
    // this.props.setField("loader", true)
    this.setState({ loader: true })
    requestOTP(data).then(res => {
      // this.props.setField("loader", false)
      if (res.status) {
        this.setState({
          requestId: res.data.requestId,
          mobileNumber: res.data.mobileNumber,
          loader: false,
          openOTP: true,
        });
      } else {
        if (res.message.indexOf("re-deliver") != -1){
          console.log("!!re-deliver")
          this.setState({
            openOTP: false,
          })
        }
        this.setState({
          pin: "",
          loader: false 
        })
        errorPopup(res.message)
      }
    })
  }

  cancelRequestOTP = (requestOTP) => {
    cancelRequestOTP(requestOTP).then(res => {
      if (res.status) {
        this.setState({
          openOTP: false,
          openDetail: false,
          pin: "",
          citizenIdSearch: '',
        })
      } else {
        if (res.message.indexOf("re-deliver") != -1) {
          console.log("!!re-deliver")
          this.setState({
            openOTP: false,
          })
        }
        errorPopup(res.message)
        this.setState({ loader: false })
      }
    })
  }


  addPatient = (data) => {
    addPatientFromDB(data).then(res => {
      if (res.status) {
        successPopup("Add Patient Success!").then(res => {
          this.setState({ duplicatePatient: true, })
        })
      } else {
        errorPopup(res.message)
        this.setState({ loader: false })
      }
    })
  }

  render() {
    return (
      <Dimmer.Dimmable blurring dimmed={this.state.loader}>
        <Dimmer page active={this.state.loader}>
          <Loader size='massive' indeterminate>Loading</Loader>
        </Dimmer>
        <Wrapper>
          <Container>
            <Header as="h1" style={style.h1} textAlign="center">
              <Header.Content>
                <span style={{ fontSize: "2em", color: ClinicProvider.getClinic() == "KMUTT" ?'#FA636F': "#31A5BA" }}>
                  OPD BOOKS
              </span>
                <Header.Subheader>Medical Record on Blockchain</Header.Subheader>
              </Header.Content>
            </Header>

            <Image centered style={style.d1} rounded src={ClinicProvider.getClinic() == "KMUTT" ? ScanButton2 : ScanButton}
              onClick={() => this.setState({ openScan: true })} />
            <Form onSubmit={() => this.searchPatient()} style={{ margin: " 0% 15% ", borderRadius: '10px' }}>
              <Form.Input
                size='large'
                label='Citizen Id'
                type='text'
                icon='search'
                placeholder='x-xxxx-xxxxx-xx-x'
                onChange={(e) => this.setState({ citizenIdSearch: e.target.value })}
                value={this.state.citizenIdSearch}
                icon={<Icon name='search' circular link style={{ backgroundColor: ClinicProvider.getClinic() == "KMUTT" ? '#FA636F' : "#31A5BA" , color: '#FFF' }} onClick={() => this.searchPatient() } />}
              />
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

          <Modal open={this.state.openOTP} onClose={this.closeOTP}>
            <OTPfactor
              citizenId={this.state.citizenIdSearch}
              requestId={this.state.requestId}
              mobileNumber={this.state.mobileNumber}
              validateOTP={this.validateOTP}
              requestOTP={this.requestOTP}
              pin={this.state.pin}
              cancelRequestOTP={this.cancelRequestOTP}
              loader={this.state.loader}
            />
          </Modal>

          <Modal open={this.state.openDetail} onClose={this.closeModal}>
            <Modal.Content>
              <Modal.Description>
                <Header as="h2" textAlign="center">
                  Patient Information
                 {/* <Button floated='right'>
                    Add this patient  <Icon circular link name='user plus' style={{ backgroundColor: "#31A5BA", color: "#fff" }} />
                  </Button> */}
                  {!this.state.duplicatePatient &&
                    <Icon link name='user plus'
                      style={{ color: ClinicProvider.getClinic() == "KMUTT" ?'#FA636F': "#31A5BA" , float: 'right', fontSize: '23px' }}
                      onClick={() => this.addPatient(this.state.patient)} />
                  }
                </Header>
                <Divider />
                <Grid textAlign="center">
                  <br />
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <Header as="h3">
                        <Header.Content style={{ color: ClinicProvider.getClinic() == "KMUTT" ? '#FA636F' : "#31A5BA" }}>
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
                        <Header.Content style={{ color: ClinicProvider.getClinic() == "KMUTT" ? '#FA636F' : "#31A5BA" }}>
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
                        <Header.Content style={{ color: ClinicProvider.getClinic() == "KMUTT" ? '#FA636F' : "#31A5BA" }}>
                          EMERGENCY CONTACT
                        </Header.Content>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <p> Name: <br />
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
                        <Header.Content style={{ color: ClinicProvider.getClinic() == "KMUTT" ? '#FA636F' : "#31A5BA" }}>
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
                        <Header.Content style={{ color: ClinicProvider.getClinic() == "KMUTT" ? '#FA636F' : "#31A5BA" }}>
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
              {/* <Button onClick={this.closeModal} style={{ color: "#31A5BA !important", border: '#31A5BA 1px solid'}} >
              Cancel
            </Button>
              <Button style={{ color: "#31A5BA !important", border: '#31A5BA 1px solid' }} basic icon="checkmark" labelPosition="right" content="Add Queues" onClick={() => this.confirm()} /> */}
              <Button
                onClick={() => this.closeModal()}
                style={{ color: '#fff', backgroundColor: '#d33', }}>
                Cancel
              </Button>
              <Button
                onClick={() => this.confirm()}
                style={{ color: '#fff', backgroundColor: ClinicProvider.getClinic() == "KMUTT" ? '#4CAF50' : "#31A5BA" , }}>
                Add Queues
              </Button>
            </Modal.Actions>
          </Modal>
        </Wrapper>
      </Dimmer.Dimmable>
    )
  }
}

export default Registration;
