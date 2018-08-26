import React, { Component } from "react";
import {  Grid, Menu, Segment, Container, Divider, Header, Icon, Image, Table, Label, List, 
          Button, Modal, Popup, Form, TextArea, Pagination } from "semantic-ui-react";
import styled from "styled-components";
import iconOpd from "./../../Static/Img/IconOPDs.png";
import swal from "sweetalert2";
import { QRCode } from "react-qr-svg";
import moment from "moment";
import { Scrollbars } from 'react-custom-scrollbars';
import myQR from "./../../Static/Img/myQR.png";
//static
import BackgroundImage from "./../../Static/Img/BGGs.png";

//service
import { getPatient } from './../../Service/ManagePatientMethod'

const CryptoJS = require("crypto-js");

const BG = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`
const style = {
  ImButton: {
    cursor: 'pointer'
  },
}

const PopupQRCode = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

export default class PatientProfile extends Component {
  state = {
    activeItem: "home",
    //InfoPatient Part1
    registerDate: "",
    hospitalNumber: "",
    citizenId: "",

    //InfoPatient Part2
    dob: "",
    nameTitle: "",
    firstname: "",
    lastname: "",
    gender: "",

    //InfoPatient Part3
    congenitalDisease: "",
    bloodgroup: "",
    religion: "",
    nationality: "",
    country: "",

    //InfoPatient Part4
    statuspatient: "",
    occupartion: "",
    homephonenumber: "",
    mobilenumber: "",
    email: "",

    //AddressPatient
    typeofHouse: "",
    patientaddress: "",
    province: "",
    district: "",
    subDistrict: "",
    zipcode: "",

    //EmergencyContact Part1
    emerTitle: "",
    emerFirstname: "",
    emerLastname: "",
    emerRelationship: "",
    emerHomePhonenumber: "",
    emerMobileNumber: "",

    //EmergencyContact Part2
    emerTypeofHouse: "",
    emerAddress: "",
    emerProvince: "",
    emerDistrict: "",
    emerSubDistrict: "",
    emerZipcode: "",

    //PatientParent
    fatherFirstname: "",
    fatherLastname: "",
    motherFirstname: "",
    motherLastname: "",

    //PatientAllergy
    allergy: "",
    privilege: "",

    open: false,

    QRCode: ""
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  //Connect API
  componentWillMount() {
    if (this.props.location.state.citizenId === undefined) {
      this.props.history.push("/signin");
    } else {
      let patient = getPatient(this.props.location.state.citizenId,'byte');
      this.setState(patient)
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { open, size } = this.state;
    const { activeItem } = this.state;

    const currentDate = moment().format("ll");
    // Encrypt //
    var ciphertext = CryptoJS.AES.encrypt(
      "OPDBooks@" + currentDate + "@" + `${this.state.citizenId}`,
      "OPDQR"
    );
    var QRCodes = "" + ciphertext;

    return (
      <BG>
        <PopupQRCode size={'mini'} open={open} onClose={this.close}>
          <Modal.Content>
            <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
              value={QRCodes}
            />
            <Header textAlign={"center"} size="large">
              {this.state.nameTitle} {this.state.firstname}  {this.state.lastname}
            </Header>
            <Button
              size="huge"
              basic
              color="teal"
              onClick={this.close}
              style={{ marginTop: "10%" }}
              fluid
            >
              Close
            </Button>
          </Modal.Content>
        </PopupQRCode> 

        
        
        <Segment>
          {/* <Navbar role="patient" show={this.show} /> */}
        <Container>
          <br />
          <Grid>
            <Grid.Column width={2}>
              <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' size='small' spaced='left' circular />
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h2">{this.state.nameTitle} {this.state.firstname} {this.state.lastname}</Header>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Hospital Number : </span>
                  {this.state.hospitalNumber}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Citizen ID : </span>
                  {this.state.citizenId}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row style={{ paddingTop: '4%'}}>
                  <Header.Content as='h5' floated='left'>
                    <Label as='a' color='teal'>
                      <Icon name='phone' />
                      {this.state.mobilenumber}
                    </Label>
                    <Label as='a' color='teal'>
                    <Icon name='home' />
                      {this.state.homephonenumber}
                    </Label>
                  </Header.Content>
              </Grid.Row>
            </Grid.Column>

            
            <Grid.Column width={3}>
              <Header as="h2">Infomation</Header>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Birth Day : </span>
                  {this.state.dob}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Gender : </span>
                  {this.state.gender}
                </Header.Subheader>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Blood Group : </span>{" "}
                  {this.state.bloodgroup}
                </Header.Subheader>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Status : </span>{" "}
                  {this.state.statuspatient}
                </Header.Subheader>
              </Grid.Row>
            </Grid.Column>
            
            <Grid.Column width={3}>
              <Header as="h2">
                <br />
              </Header>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Nation : </span>
                  {this.state.nationality}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Country : </span>
                  {this.state.country}
                </Header.Subheader>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Religion : </span>{" "}
                  {this.state.religion}
                </Header.Subheader>
                <Header.Subheader>
                  <span style={{ color: "#848788" }}>Occupartion : </span>{" "}
                  {this.state.occupartion}
                </Header.Subheader>
              </Grid.Row>
            </Grid.Column>

            <Grid.Column width={3}>
                
                  <Header textAlign={'center'} as="h3">
                    MY QRCODE
                </Header>
                  <Image
                  centered
                    style={style.ImButton}
                    size='tiny'
                    src={myQR}
                    onClick={this.show()}
                  />
            </Grid.Column>
          </Grid>
        </Container>
        </Segment>
       {/* <br/>
        <Divider /> */}
        <Container>
        <Grid columns={16}>
          
            <Grid.Column width={6}>
              <Segment color='yellow' attached='top'>
                <Icon color='yellow' name='pills' /> 
                  <span style={{ color: '#FFB100' }}> Allergy : </span> {this.state.allergy} <br />
                  <Icon color='yellow' name='medkit' /> 
                  <span style={{ color: '#FABD08' }}> Privilege : </span> {this.state.privilege}
              </Segment>
              {/* <Segment color='yellow' attached='top'><Icon color='yellow' name='medkit' /> <span style={{ color: '#FABD08' }}>Privilege :</span> {this.state.allergy}</Segment> */}

              <Segment.Group >
                <Segment color='teal'>
                  <h4><Icon name='child' />In Case Under15 Year Old</h4>
                  <Divider />
                  <Container>
                    <Grid>
                      <Grid.Column width={6}>
                        <Header.Subheader >
                          Father Name
                    </Header.Subheader>
                        <Header.Subheader >
                          Mother Name
                    </Header.Subheader>
                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Header.Subheader >
                          : {this.state.fatherFirstname} {this.state.fatherLastname}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.motherFirstname} {this.state.motherLastname}
                        </Header.Subheader>
                      </Grid.Column>
                    </Grid>
                  </Container>
                </Segment>
              </Segment.Group>

              <Segment.Group >
                <Segment color='teal'>
                  <h4><Icon name='home' />Address</h4>
                  <Divider />
                  <Container>
                    <Grid>
                      <Grid.Column width={6}>
                        <Header.Subheader >
                          Type Of House
                    </Header.Subheader>
                        <Header.Subheader >
                          Address
                    </Header.Subheader>
                        <Header.Subheader >
                          Sub District
                    </Header.Subheader>
                        <Header.Subheader >
                          District
                    </Header.Subheader>
                        <Header.Subheader >
                          Province
                    </Header.Subheader>
                        <Header.Subheader >
                          Zipcode
                    </Header.Subheader>

                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Header.Subheader >
                          : {this.state.typeofHouse}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.patientaddress}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.subDistrict}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.district}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.province}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.zipcode}
                        </Header.Subheader>

                      </Grid.Column>
                    </Grid>
                  </Container>

                </Segment>

              </Segment.Group>

            <Segment.Group >
              <Segment color='teal'>
                <h4><Icon name='home' />Emergency Address</h4>
                <Divider/>
                <Container>
                  <Grid>
                    <Grid.Column width={6}>
                        <Header.Subheader >
                          Name
                    </Header.Subheader>
                        <Header.Subheader >
                          Relationship
                    </Header.Subheader>
                        <Header.Subheader >
                          Home Number
                    </Header.Subheader>
                        <Header.Subheader >
                          Phon Number
                    </Header.Subheader>
                      <Header.Subheader >
                        Type Of House
                    </Header.Subheader>
                      <Header.Subheader >
                        Address
                    </Header.Subheader>
                      <Header.Subheader >
                        Sub District
                    </Header.Subheader>
                      <Header.Subheader >
                        District
                    </Header.Subheader>
                      <Header.Subheader >
                        Province
                    </Header.Subheader>
                      <Header.Subheader >
                        Zipcode
                    </Header.Subheader>

                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Header.Subheader >
                          : {this.state.emerTitle}{this.state.emerFirstname} {this.state.emerLastname}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerRelationship}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerHomePhonenumber}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerMobileNumber}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerTypeofHouse}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerAddress}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerSubDistrict}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerDistrict}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerProvince}
                      </Header.Subheader>
                      <Header.Subheader >
                        : {this.state.emerZipcode}
                      </Header.Subheader>

                    </Grid.Column>
                  </Grid>
                </Container>

              </Segment>
        </Segment.Group>
          </Grid.Column>

            <Grid.Column width={4}>
              <Segment.Group >
                <Segment color='teal'>
                  <h4><Icon name='history' />History Medical</h4>
                  <Divider />
                  <Container>
                    <Grid>
                      <Grid.Column >
                        <Scrollbars autoHide style={{ height: 600 }}>
                        <List divided relaxed>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                              <List.Description as='a'>Updated 10 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                              <List.Description as='a'>Updated 22 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                              <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                              <List.Description as='a'>Updated 34 mins ago</List.Description>
                            </List.Content>
                          </List.Item>
                        </List>
                        </Scrollbars>
                      </Grid.Column>
                    </Grid>
                  </Container>
                </Segment>
              </Segment.Group>
            </Grid.Column>

            <Grid.Column width={6}>
              <Segment.Group >
                <Segment color='teal'>
                  <h4><Icon name='home' />Emergency Address</h4>
                  <Divider />
                  <Container>
                    <Grid>
                      <Grid.Column width={6}>
                    <Header.Subheader >
                          Name
                    </Header.Subheader>
                        <Header.Subheader >
                          Relationship
                    </Header.Subheader>
                        <Header.Subheader >
                          Home Number
                    </Header.Subheader>
                        <Header.Subheader >
                          Phon Number
                    </Header.Subheader>
                        <Header.Subheader >
                          Type Of House
                    </Header.Subheader>
                        <Header.Subheader >
                          Address
                    </Header.Subheader>
                        <Header.Subheader >
                          Sub District
                    </Header.Subheader>
                        <Header.Subheader >
                          District
                    </Header.Subheader>
                        <Header.Subheader >
                          Province
                    </Header.Subheader>
                        <Header.Subheader >
                          Zipcode
                    </Header.Subheader>

                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Header.Subheader >
                          : {this.state.emerTitle}{this.state.emerFirstname} {this.state.emerLastname}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerRelationship}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerHomePhonenumber}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerMobileNumber}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerTypeofHouse}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerAddress}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerSubDistrict}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerDistrict}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerProvince}
                        </Header.Subheader>
                        <Header.Subheader >
                          : {this.state.emerZipcode}
                        </Header.Subheader>
                      </Grid.Column>
                    </Grid>
                  </Container>
                </Segment>
              </Segment.Group>
            </Grid.Column>
        </Grid>
        </Container>
      </BG>
      )
  }
}
