import React, { Component } from "react";
import { Grid, Menu,  Segment,  Container,  Divider,  Header,  Icon,  Image,  Table,  Label,  List,  Button,  Modal,  Popup,  Form,  TextArea} from "semantic-ui-react";
import styled from "styled-components";
import iconOpd from "./../../Static/Img/IconOPDs.png";
import swal from "sweetalert2";
import { defaultAccount, contract, web3 } from "./../../Lib/Web3";
import { QRCode } from "react-qr-svg";
import Navbar from "./../Components/NavbarHome";
import moment from "moment";
//static
import BackgroundImage from "./../../Static/Img/BG.png";
const CryptoJS = require("crypto-js");

const Menus = styled(Menu)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  height: 100%;
  padding: 0;
  padding: 0;
  z: 1000;
  overflow: hidden;
  overflow: auto;
  border: 1px solid #eee;
  background: #00cacf;
`;
const GridContainer = styled(Grid.Row)`padding: 15rem;`;
const GridColumnleft = styled(Grid.Column)`
  padding-left: 1em;
  padding-right: 1em;
`;
const MenyItem = styled(Menu.Item)`font-size: 18px;`;
const GridColumnright = styled(Grid.Column)`
  padding-left: 1em;
  padding-right: 1em;
`;
const ImageSizeRow = styled(Image)`
  width: 150px;
  height: 150px;
`;

const PopupQRCode = styled(Modal)`
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

const Wrapper = styled(Grid)`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`;
export default class PatientProfile extends Component {
  state = {
    activeItem: "home",
    //InfoPatient Part1
    registerDate: "",
    hospitalnumber: "",
    // photo: web3.toAscii(InfoPatientPart1[2]),
    citizenId: "",

    //InfoPatient Part2
    dob: "",
    titlename: "",
    firstname: "",
    lastname: "",
    gender: "",

    //InfoPatient Part3
    congenitaldisease: "",
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
    console.log(this.props.location.state.citizenId);
    if (this.props.location.state.citizenId === undefined) {
      this.props.history.push("/signin");
    } else {
      const InfoPatientPart1 = contract.getInfoPatientPart1(this.props.location.state.citizenId,defaultAccount);
      const InfoPatientPart2 = contract.getInfoPatientPart2(this.props.location.state.citizenId, defaultAccount);
      const InfoPatientPart3 = contract.getInfoPatientPart3(this.props.location.state.citizenId,defaultAccount);
      const InfoPatientPart4 = contract.getInfoPatientPart4(this.props.location.state.citizenId,defaultAccount);

      const AddressPatient = contract.getAddressPatient(this.props.location.state.citizenId,defaultAccount);
      const PatientAllergy = contract.getPatientAllergy(this.props.location.state.citizenId,defaultAccount);

      const EmergencyContactPart1 = contract.getEmergencyContactPart1(this.props.location.state.citizenId, defaultAccount);
      const EmergencyContactPart2 = contract.getEmergencyContactPart2(this.props.location.state.citizenId,defaultAccount);

      const PatientParent = contract.getPatientParent(this.props.location.state.citizenId,defaultAccount);

      this.setState({
        //InfoPatient Part1
        registerDate: web3.toAscii(InfoPatientPart1[0]),
        hospitalnumber: web3.toAscii(InfoPatientPart1[1]),
        // photo: web3.toAscii(InfoPatientPart1[2]),
        citizenId: web3.toAscii(InfoPatientPart1[2]),
        QRCode: web3.toAscii(InfoPatientPart1[2]),

        //InfoPatient Part2
        dob: web3.toAscii(InfoPatientPart2[0]),
        titlename: web3.toAscii(InfoPatientPart2[1]),
        firstname: web3.toAscii(InfoPatientPart2[2]),
        lastname: web3.toAscii(InfoPatientPart2[3]),
        gender: web3.toAscii(InfoPatientPart2[4]),

        //InfoPatient Part3
        congenitaldisease: web3.toAscii(InfoPatientPart3[0]),
        bloodgroup: web3.toAscii(InfoPatientPart3[1]),
        religion: web3.toAscii(InfoPatientPart3[2]),
        nationality: web3.toAscii(InfoPatientPart3[3]),
        country: web3.toAscii(InfoPatientPart3[4]),

        //InfoPatient Part4
        statuspatient: web3.toAscii(InfoPatientPart4[0]),
        occupartion: web3.toAscii(InfoPatientPart4[1]),
        homephonenumber: web3.toAscii(InfoPatientPart4[2]),
        mobilenumber: web3.toAscii(InfoPatientPart4[3]),
        email: web3.toAscii(InfoPatientPart4[4]),

        //AddressPatient
        typeofHouse: web3.toAscii(AddressPatient[0]),
        patientaddress: AddressPatient[1],
        province: web3.toAscii(AddressPatient[2]),
        district: web3.toAscii(AddressPatient[3]),
        subDistrict: web3.toAscii(AddressPatient[4]),
        zipcode: web3.toAscii(AddressPatient[5]),

        //EmergencyContact Part1
        emerTitle: web3.toAscii(EmergencyContactPart1[0]),
        emerFirstname: web3.toAscii(EmergencyContactPart1[1]),
        emerLastname: web3.toAscii(EmergencyContactPart1[2]),
        emerRelationship: web3.toAscii(EmergencyContactPart1[3]),
        emerHomePhonenumber: web3.toAscii(EmergencyContactPart1[4]),
        emerMobileNumber: web3.toAscii(EmergencyContactPart1[5]),

        //EmergencyContact Part2
        emerTypeofHouse: web3.toAscii(EmergencyContactPart2[0]),
        emerAddress: EmergencyContactPart2[1],
        emerProvince: web3.toAscii(EmergencyContactPart2[2]),
        emerDistrict: web3.toAscii(EmergencyContactPart2[3]),
        emerSubDistrict: web3.toAscii(EmergencyContactPart2[4]),
        emerZipcode: web3.toAscii(EmergencyContactPart2[5]),

        //PatientParent
        fatherFirstname: web3.toAscii(PatientParent[0]),
        fatherLastname: web3.toAscii(PatientParent[1]),
        motherFirstname: web3.toAscii(PatientParent[2]),
        motherLastname: web3.toAscii(PatientParent[3]),

        //PatientAllergy
        allergy: web3.toAscii(PatientAllergy[0]),
        privilege: web3.toAscii(PatientAllergy[1])
      });
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { open, size } = this.state;
    const { activeItem } = this.state

    const currentDate = moment().format("ll");
    // Encrypt //
    var ciphertext = CryptoJS.AES.encrypt(
      "OPDBooks@" + currentDate + "@" + `${this.state.citizenId}`,
      "OPDQR"
    );
    var QRCodes = "" + ciphertext;

<<<<<<< HEAD
    return <Segment.Group style={{ border: "0px" }}>
        <Navbar role="patient" show={this.show} />
        <Segment style={{ backgroundColor: "#00b5ad1a" }}>
          <Header as="h2" icon textAlign="center">
            <Icon name="user" circular />
            <Header.Content>
              {this.state.titlename}
              {this.state.firstname} {this.state.lastname}
            </Header.Content>

            <Header.Content>
              <PopupQRCode size={'mini'} open={open} onClose={this.close}>
                                <Modal.Content>
                                    <QRCode
                                        bgColor="#FFFFFF"
                                        fgColor="#000000"
                                        level="Q"
                                        value={QRCodes}
                                    />
                                    <Header textAlign={'center'} size='large'>{this.state.titlename}{this.state.firstname} {this.state.lastname}</Header>
                                    <Button size='huge' basic color='teal' onClick={this.close} style={{ marginTop: '10%' }} fluid > Close</Button>
                                </Modal.Content>
                            </PopupQRCode>
            </Header.Content>
          </Header>
          <Container>
            <Grid columns="equal" stackable>
              <Grid.Row textAlign="center">
                <Grid.Column>
                  <GridColumnleft>
                    <Segment.Group style={{ borderRadius: "2rem" }}>
                      <Segment color="teal" style={{ borderRadius: "2rem" }}>
                        <Header as="h3" textAlign="center" icon="address book outline" content="Profile" />
                        <Divider />
                        <Grid columns={3}>
                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>
                                  Host No.
                                </Header.Subheader>
                                {this.state.hospitalnumber}
                              </Header>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>
                                  ID Card.
                                </Header.Subheader>
                                {this.state.citizenId}
                              </Header>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>Name</Header.Subheader>
                                {this.state.titlename} {this.state.firstname} {this.state.lastname}
                              </Header>
                            </Segment>
                          </Grid.Column>
                        </Grid>

                        <Grid columns={3}>
                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>
                                  Date of Birth
                                </Header.Subheader>
                                {this.state.dob}
                              </Header>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>Gender</Header.Subheader>
                                {this.state.gender}
                              </Header>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>
                                  Blood Group
                                </Header.Subheader>
                                {this.state.bloodgroup}
                              </Header>
                            </Segment>
                          </Grid.Column>
                        </Grid>

                        <Grid columns={3}>
                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>
                                  Congenital Disease
                                </Header.Subheader>
                                {this.state.congenitaldisease}
                              </Header>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>
                                  Occupation
                                </Header.Subheader>
                                {this.state.occupartion}
                              </Header>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>Status</Header.Subheader>
                                {this.state.statuspatient}
                              </Header>
                            </Segment>
                          </Grid.Column>
                        </Grid>

                        <Grid columns={3}>
                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>
                                  Religion
                                </Header.Subheader>
                                {this.state.religion}
                              </Header>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>
                                  Nationality
                                </Header.Subheader>
                                {this.state.nationality}
                              </Header>
                            </Segment>
                          </Grid.Column>

                          <Grid.Column>
                            <Segment basic>
                              <Header as="h2" icon>
                                <Header.Subheader>Country</Header.Subheader>
                                {this.state.country}
                              </Header>
                            </Segment>
                          </Grid.Column>
                        </Grid>
                      </Segment>
                    </Segment.Group>
                  </GridColumnleft>
                </Grid.Column>
              </Grid.Row>
=======
    return (
      <div>
        <PopupQRCode size={'mini'} open={open} onClose={this.close}>
          <Modal.Content>
            <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="Q"
              value={QRCodes}
            />
            <Header textAlign={'center'} size='large'>{this.state.titlename}{this.state.firstname} {this.state.lastname}</Header>
            <Button size='huge' basic color='teal' onClick={this.close} style={{ marginTop: '10%' }} fluid > Close</Button>
          </Modal.Content>
        </PopupQRCode> */}
>>>>>>> b502d4f1a24901aa01daa12bfe20abc52609e8c6

        <Navbar role="patient" show={this.show} />
        <br></br>
        <Container>
          <br />
            <Grid>
              
            <Grid.Column width={2}>
              
              <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' spaced='left' circular />
                
            </Grid.Column>

            <Grid.Column width={4}>
                
                  <Header as='h2' floated='left'>
                    {this.state.titlename}.
                    {this.state.firstname} {this.state.lastname}
                  </Header>
                  <br/>
                <Grid.Row>
                      <Header.Subheader  >                    
                  <span style={{ color: '#848788' }}>Hospital Number : </span>{this.state.hospitalnumber}
                      </Header.Subheader>
                  </Grid.Row>
                  <Grid.Row>
                      <Header.Subheader >
                  <span style={{ color: '#848788' }}>Citizen ID : </span>{this.state.citizenId}
                      </Header.Subheader>
                    </Grid.Row>
                    <Grid.Row>
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

            <Grid.Column width={1}>
              <Divider vertical>Or</Divider>
            </Grid.Column>

            <Grid.Column width={3}>

              <Header as='h2'>
                Infomation
              </Header>
              <Grid.Row>
                <Header.Subheader  >
                  <span style={{ color: '#848788' }}>Birth Day :  </span>{this.state.dob}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row>
                <Header.Subheader >
                  <span style={{ color:'#848788'}}>Gender : </span>{this.state.gender} 
                </Header.Subheader>
                <Header.Subheader >
                  <span style={{ color: '#848788' }}>Blood Group :  </span> {this.state.bloodgroup}
                </Header.Subheader>
                <Header.Subheader >
                  <span style={{ color: '#848788' }}>Status :  </span> {this.state.statuspatient}
                </Header.Subheader>
              </Grid.Row>
             
            </Grid.Column>

            <Grid.Column width={3}>

              <Header as='h2'>
                <br/>
              </Header>
              <Grid.Row>
                <Header.Subheader  >
                  <span style={{ color: '#848788' }}>Nation :  </span>{this.state.nationality}
                </Header.Subheader>
              </Grid.Row>
              <Grid.Row>
                <Header.Subheader >
                  <span style={{ color: '#848788' }}>Country : </span>{this.state.country}
                </Header.Subheader>
                <Header.Subheader >
                  <span style={{ color: '#848788' }}>Religion :  </span> {this.state.religion}
                </Header.Subheader>
                <Header.Subheader >
                  <span style={{ color: '#848788' }}>Occupartion :  </span> {this.state.occupartion}
                </Header.Subheader>
              </Grid.Row>

            </Grid.Column>

            <Grid.Column width={3}>

              <Button color='teal' 
                      basic 
                      floated='left' 
                      onClick={this.show()}
                      >
                      <Icon name='qrcode' />
                      {this.props.role === 'emp' ? 'Scan QRCode' : 'Show QRCode'}
              </Button>

            </Grid.Column>

           </Grid>
          

        </Container>
       <br/>
        <Divider />
        <Container>
        <Grid columns={1}>
          <Grid.Column>
            <Segment attached='top'>Segment 1</Segment>
            <Segment attached>Segment 2</Segment>
            <Segment attached>Segment 3</Segment>
            <Segment attached='bottom'>Segment 4</Segment>

            <Segment.Group>
              
              <Segment>
                <p>Top</p>
              </Segment>
              <Segment.Group>
                <Segment>
                  <p>Nested Top</p>
                </Segment>
                <Segment>
                  <p>Nested Middle</p>
                </Segment>
                <Segment>
                  <p>Nested Bottom</p>
                </Segment>
              </Segment.Group>
              <Segment>
                <p>Middle</p>
              </Segment>
              <Segment.Group horizontal>
                <Segment>
                  <p>Top</p>
                </Segment>
                <Segment>
                  <p>Middle</p>
                </Segment>
                <Segment>
                  <p>Bottom</p>
                </Segment>
              </Segment.Group>
              <Segment>
                <p>Bottom</p>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
        
        </Container>

        
      </div>
      )
  }
}
