import React, { Component } from "react";
import {
  Grid, Menu, Segment, Container, Divider, Header, Icon, Image, Table, Label, List, Dropdown, Item,
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
import TreatmentHistory from './../../Employees/Components/TreatmentHistory';
import {
  getHistoryVisitNumberPatient
} from "./../../Service/MedicalRecordMethod";

const CryptoJS = require("crypto-js");

const BG = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`
const style = {
  ImButton: {
    cursor: 'pointer'
  },
  colorsort: {
    color: "#00B5AD"
  },
  colorHis: {
    color: "#AFB4B7",
    fontSize: '12px',
  },
  colorDes: {
    color: "#808B96  ",
  },
}

const Years = [
  { key: 2012, text: '2012', value: 2012 },
  { key: 2013, text: '2012', value: 2013 },
  { key: 2014, text: '2012', value: 2014 },
  { key: 2015, text: '2012', value: 2015 },
  { key: 2012, text: '2012', value: 2012 },
  { key: 2013, text: '2012', value: 2013 },
  { key: 2014, text: '2012', value: 2014 },
  { key: 2015, text: '2012', value: 2015 },
  { key: 2012, text: '2012', value: 2012 },
  { key: 2013, text: '2012', value: 2013 },
  { key: 2014, text: '2012', value: 2014 },
  { key: 2015, text: '2012', value: 2015 },
  { key: 2012, text: '2012', value: 2012 },
  { key: 2013, text: '2012', value: 2013 },
  { key: 2014, text: '2012', value: 2014 },
  { key: 2015, text: '2012', value: 2015 },
  { key: 2012, text: '2012', value: 2012 },
  { key: 2013, text: '2012', value: 2013 },
  { key: 2014, text: '2012', value: 2014 },
  { key: 2015, text: '2012', value: 2015 },
]

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
    open: false,
    QRCode: "",
    patient:{},
    historyTreatment : []
  };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  //Connect API
  componentWillMount() {
    if (this.props.location.state.citizenId === undefined) {
      this.props.history.push("/signin");
    } else {
      let patient = getPatient(this.props.location.state.citizenId,'byte');
      this.setState({
        patient: patient,
        historyTreatment: getHistoryVisitNumberPatient(patient.citizenId)
      });
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { open, size } = this.state;
    const { activeItem } = this.state;

    const currentDate = moment().format("ll");
    // Encrypt //
    var ciphertext = CryptoJS.AES.encrypt(
      "OPDBooks@" + currentDate + "@" + `${this.state.patient.citizenId}`,
      "OPDQR"
    );
    var QRCodes = "" + ciphertext;

    return <BG>
        <PopupQRCode size={"mini"} open={open} onClose={this.close}>
          <Modal.Content>
            <QRCode bgColor="#FFFFFF" fgColor="#000000" level="Q" value={QRCodes} />
            <Header textAlign={"center"} size="large">
              {this.state.patient.nameTitle} {this.state.patient.firstname} {this.state.patient.lastname}
            </Header>
            <Button size="huge" basic color="teal" onClick={this.close} style={{ marginTop: "10%" }} fluid>
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
                <Image src="https://react.semantic-ui.com/images/avatar/small/lindsay.png" size="small" spaced="left" circular />
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as="h2">
                  {this.state.patient.nameTitle} {this.state.patient.firstname} {this.state.patient.lastname}
                </Header>
                <Grid.Row>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>
                      Hospital Number :{" "}
                    </span>
                    {this.state.patient.hospitalNumber}
                  </Header.Subheader>
                </Grid.Row>
                <Grid.Row>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>Citizen ID : </span>
                    {this.state.patient.citizenId}
                  </Header.Subheader>
                </Grid.Row>
                <Grid.Row style={{ paddingTop: "4%" }}>
                  <Header.Content as="h5" floated="left">
                    <Label as="a" color="teal">
                      <Icon name="phone" />
                      {this.state.patient.mobileNumber}
                    </Label>
                    <Label as="a" color="teal">
                      <Icon name="home" />
                      {this.state.patient.homePhoneNumber}
                    </Label>
                  </Header.Content>
                </Grid.Row>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header as="h2">Infomation</Header>
                <Grid.Row>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>Birth Day : </span>
                    {this.state.patient.dob}
                  </Header.Subheader>
                </Grid.Row>
                <Grid.Row>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>Gender : </span>
                    {this.state.patient.gender}
                  </Header.Subheader>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>
                      Blood Group :{" "}
                    </span> {this.state.patient.bloodgroup}
                  </Header.Subheader>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>
                      Status :{" "}
                    </span> {this.state.patient.status}
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
                    {this.state.patient.nationality}
                  </Header.Subheader>
                </Grid.Row>
                <Grid.Row>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>Country : </span>
                    {this.state.patient.country}
                  </Header.Subheader>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>
                      Religion :{" "}
                    </span> {this.state.patient.religion}
                  </Header.Subheader>
                  <Header.Subheader>
                    <span style={{ color: "#848788" }}>
                      Occupartion :{" "}
                    </span> {this.state.patient.occupartion}
                  </Header.Subheader>
                </Grid.Row>
              </Grid.Column>

              <Grid.Column width={3}>
                <Header textAlign={"center"} as="h3">
                  MY QRCODE
                </Header>
                <Image centered style={style.ImButton} size="tiny" src={myQR} onClick={this.show()} />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
        {/* <br/>
        <Divider /> */}
        <Container>
          <Grid columns={16}>
            <Grid.Column width={6}>
              <Segment color="yellow" attached="top">
                <Icon color="yellow" name="pills" />
                <span style={{ color: "#FFB100" }}>
                  {" "}
                  Allergy :{" "}
                </span> {this.state.patient.allergy} <br />
                <Icon color="yellow" name="medkit" />
                <span style={{ color: "#FABD08" }}>
                  {" "}
                  Privilege :{" "}
                </span> {this.state.patient.privilege}
              </Segment>
              {/* <Segment color='yellow' attached='top'><Icon color='yellow' name='medkit' /> <span style={{ color: '#FABD08' }}>Privilege :</span> {this.state.allergy}</Segment> */}

              <Segment.Group>
                <Segment>
                  <h4>
                    <Icon name="child" />In Case Under15 Year Old
                  </h4>
                  <Divider />
                  <Container>
                    <Grid>
                      <Grid.Column width={6}>
                        <Header.Subheader>Father Name</Header.Subheader>
                        <Header.Subheader>Mother Name</Header.Subheader>
                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Header.Subheader>
                          : {this.state.patient.fatherFirstname} {this.state.patient.fatherLastname}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.motherFirstname} {this.state.patient.motherLastname}
                        </Header.Subheader>
                      </Grid.Column>
                    </Grid>
                  </Container>
                </Segment>
              </Segment.Group>

              <Segment.Group>
                <Segment color="teal">
                  <h4>
                    <Icon name="home" />Address
                  </h4>
                  <Divider />
                  <Container>
                    <Grid>
                      <Grid.Column width={6}>
                        <Header.Subheader>Type Of House</Header.Subheader>
                        <Header.Subheader>Address</Header.Subheader>
                        <Header.Subheader>Sub District</Header.Subheader>
                        <Header.Subheader>District</Header.Subheader>
                        <Header.Subheader>Province</Header.Subheader>
                        <Header.Subheader>Zipcode</Header.Subheader>
                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Header.Subheader>
                          : {this.state.patient.typeofHouse}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.address}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.subDistrict}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.district}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.province}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.zipcode}
                        </Header.Subheader>
                      </Grid.Column>
                    </Grid>
                  </Container>
                </Segment>
              </Segment.Group>

              <Segment.Group>
                <Segment color="teal">
                  <h4>
                    <Icon name="home" />Emergency Address
                  </h4>
                  <Divider />
                  <Container>
                    <Grid>
                      <Grid.Column width={6}>
                        <Header.Subheader>Name</Header.Subheader>
                        <Header.Subheader>Relationship</Header.Subheader>
                        <Header.Subheader>Home Number</Header.Subheader>
                        <Header.Subheader>Phon Number</Header.Subheader>
                        <Header.Subheader>Type Of House</Header.Subheader>
                        <Header.Subheader>Address</Header.Subheader>
                        <Header.Subheader>Sub District</Header.Subheader>
                        <Header.Subheader>District</Header.Subheader>
                        <Header.Subheader>Province</Header.Subheader>
                        <Header.Subheader>Zipcode</Header.Subheader>
                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Header.Subheader>
                          : {this.state.patient.emerTitle}
                          {this.state.patient.emerFirstname} {this.state.patient.emerLastname}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerRelationship}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerHomePhonenumber}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerMobileNumber}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerTypeofHouse}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerAddress}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerSubDistrict}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerDistrict}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerProvince}
                        </Header.Subheader>
                        <Header.Subheader>
                          : {this.state.patient.emerZipcode}
                        </Header.Subheader>
                      </Grid.Column>
                    </Grid>
                  </Container>
                </Segment>
              </Segment.Group>
            </Grid.Column>

            <Grid.Column width={4}>
              <Segment.Group>
                <Segment color="teal">
                  <List divided relaxed>
                    <List.Item>
                      <List.Content floated="right">
                        <List.Description as="a">
                          <span style={style.colorsort}>
                            <Icon name="calendar alternate outline" size="small" />
                          </span> <Dropdown scrolling compact searchInput={{ type: "number" }} options={Years} placeholder="Years" />
                        </List.Description>
                      </List.Content>
                      <p>
                        <Icon name="history" />Medical History
                      </p>
                    </List.Item>
                  </List>

                  <Divider />
                  <Container>
                    <Grid>
                      <Grid.Column>
                        <Scrollbars autoHide style={{ height: 614 }}>
                          <TreatmentHistory historyTreatment={this.state.historyTreatment} />
                          {/* <List divided relaxed>
                          <List.Item>
                              <List.Content> 
                                  <List.Content floated='right'>
                                      <List.Description as='a' >
                                    <Icon name='calendar alternate outline' size='small' />
                                      <span style={style.colorHis}>11/07/2013</span>
                                      </List.Description>
                                  </List.Content>
                                <List.Header as='a'>Treatment</List.Header>
                                <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                                <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content>
                              <List.Content floated='right'>
                                <List.Description as='a' >
                                  <Icon name='calendar alternate outline' size='small' />
                                  <span style={style.colorHis}>11/07/2013</span>
                                </List.Description>
                              </List.Content>
                              <List.Header as='a'>Treatment</List.Header>
                              <List.Description><span style={style.colorDes}>Dr.Sandra Cookkie</span></List.Description>
                              <List.Description><span style={style.colorDes}>Smallresh Clinic</span></List.Description>
                            </List.Content>
                          </List.Item>
                        </List>*/}
                        </Scrollbars>
                      </Grid.Column>
                    </Grid>
                  </Container>
                </Segment>
              </Segment.Group>
            </Grid.Column>

            <Grid.Column width={6}>
              <Segment.Group>
                <Segment color="teal">
                  <h4>
                    <Icon name="clipboard outline" />Medical Record
                  </h4>
                  <Divider />
                  <Scrollbars autoHide style={{ height: 614 }}>
                    <Container>
                      <Grid>
                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>HT</Header.Subheader>
                            <Header.Subheader>BW</Header.Subheader>
                            <Header.Subheader>BMI</Header.Subheader>
                          </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>100</Header.Subheader>
                            <Header.Subheader>134</Header.Subheader>
                            <Header.Subheader>34</Header.Subheader>
                          </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>cm.</Header.Subheader>
                            <Header.Subheader>kg.</Header.Subheader>
                            <Header.Subheader />
                          </Grid.Row>
                        </Grid.Column>
                        {/* ====== */}
                        <Grid.Column width={1}>
                          <Grid.Row />
                        </Grid.Column>
                        {/* ======= */}
                        {/* ===== */}
                        <Grid.Column width={1}>
                          <Grid.Row />
                        </Grid.Column>
                        {/* ===== */}
                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>HT</Header.Subheader>
                            <Header.Subheader>BW</Header.Subheader>
                            <Header.Subheader>BMI</Header.Subheader>
                          </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>100</Header.Subheader>
                            <Header.Subheader>134</Header.Subheader>
                            <Header.Subheader>34</Header.Subheader>
                          </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>cm.</Header.Subheader>
                            <Header.Subheader>kg.</Header.Subheader>
                            <Header.Subheader />
                          </Grid.Row>
                        </Grid.Column>

                        {/* ===== */}
                        <Grid.Column width={1}>
                          <Grid.Row />
                        </Grid.Column>
                        {/* ===== */}
                        {/* ===== */}
                        <Grid.Column width={1}>
                          <Grid.Row />
                        </Grid.Column>
                        {/* ===== */}

                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>HT</Header.Subheader>
                            <Header.Subheader>BW</Header.Subheader>
                            <Header.Subheader>BMI</Header.Subheader>
                          </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>100</Header.Subheader>
                            <Header.Subheader>134</Header.Subheader>
                            <Header.Subheader>34</Header.Subheader>
                          </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={1}>
                          <Grid.Row>
                            <Header.Subheader>cm.</Header.Subheader>
                            <Header.Subheader>kg.</Header.Subheader>
                            <Header.Subheader />
                          </Grid.Row>
                        </Grid.Column>
                      </Grid>
                      <br />

                      <Form>
                        <Form.TextArea label="Chief Plaint" placeholder="Tell us more about you..." />
                      </Form>
                      <br />

                      <p style={{ textAlign: "right" }}>
                        Miss.Sunisaya Maremnakron
                      </p>

                      <Divider />
                      <br />
                      <Form>
                        <Form.TextArea label="Present Illness" placeholder="Tell us more about you..." />
                      </Form>
                      <br />
                      <Form>
                        <Form.TextArea label="Physical Exam" placeholder="Tell us more about you..." />
                      </Form>
                      <br />
                      <Form>
                        <Form.TextArea label="Investigation" placeholder="Tell us more about you..." />
                      </Form>
                      <br />
                      <Form>
                        <Form.TextArea label="Dianosis / impression" placeholder="Tell us more about you..." />
                      </Form>
                      <br />
                      <Form>
                        <Form.TextArea label="Treatment" placeholder="Tell us more about you..." />
                      </Form>
                      <br />
                      <Form>
                        <Form.TextArea label="Recommendation and Plan " placeholder="Tell us more about you..." />
                      </Form>
                      <br />
                      <Grid width={16}>
                        <Grid.Column width={8}>
                          <Icon name="calendar alternate outline" />F/D Date
                          <p>Aug 8 , 2018</p>
                        </Grid.Column>

                        <Grid.Column width={8}>
                          <Icon name="user md" />Docter Name
                          <p>Dr Montgomery Delarosa</p>
                        </Grid.Column>
                      </Grid>
                    </Container>
                  </Scrollbars>
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
        </Container>
      </BG>;
  }
}
