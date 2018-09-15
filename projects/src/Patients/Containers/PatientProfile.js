import React, { Component } from "react";
import {
  Grid, Menu, Segment, Container, Divider, Header, Icon, Image, Table, Label, List, Dropdown, Item, Responsive, Sidebar, Visibility, Statistic,
          Button, Modal, Popup, Form, TextArea, Pagination } from "semantic-ui-react";
import styled from "styled-components";
import iconOpd from "./../../Static/Img/IconOPDs.png";
import swal from "sweetalert2";
import { QRCode } from "react-qr-svg";
import moment from "moment";
import { Scrollbars } from 'react-custom-scrollbars';
import FromAddressPatient from './../Components/FromAddressPatient';
import FromHisProfilePatient from './../Components/FromHisProfilePatient';
import MedicalPatient from './../Components/medicalPatient';
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
  colorNavMobile:{
      color:"#62E6C5",
  },
  colorFontMobile: {
    color: "##FFFFFF"
  },
}



const PopupQRCode = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;

const SegmentMobile = styled(Segment)`
  backgroundColor: "#62E6C5";
`;

const fixedMenuStyle = {
  backgroundColor: "#62E6C5",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "4em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease",
  backgroundColor: "#62E6C5"
};


export default class PatientProfile extends Component {



  state = {
    activeItem: "home",
    activeItemMenu: "home",
    menuFixed: false,
    overlayFixed: false,

    open: false,
    QRCode: "",
    patient:{},
    historyTreatment : []
  };

  stickTopMenu = () => this.setState({ menuFixed: true });
  unStickTopMenu = () => this.setState({ menuFixed: false });

  
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })


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
    const { sidebarOpened } = this.state;
    const { fixed } = this.state;

    const currentDate = moment().format("ll");
    // Encrypt //
    var ciphertext = CryptoJS.AES.encrypt(
      "OPDBooks@" + currentDate + "@" + `${this.state.patient.citizenId}`,
      "OPDQR"
    );
    var QRCodes = "" + ciphertext;
    
    

    

    return (
      
      <div>
        <Responsive {...Responsive.onlyComputer}>
      
      <BG>
        <PopupQRCode size={'mini'} open={open} onClose={this.close}>
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

       {/* ____ ___  ___  ____  __  __/ /_  ____ ______
          / __ `__ \/ _ \/ __ \/ / / / __ \/ __ `/ ___/
         / / / / / /  __/ / / / /_/ / /_/ / /_/ / /    
        /_/ /_/ /_/\___/_/ /_/\__,_/_.___/\__,_/_/      */}
        
                 <Segment>
           {/* <Navbar role="patient" show={this.show} /> */}
           <Container>
             <br />
             <Grid>
               <Grid.Column width={2}>
                 <Image src="https:react.semantic-ui.com/images/avatar/small/lindsay.png" size="small" spaced="left" circular />
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
                       {this.state.patient.homePhonenumber}
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

        {/* /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  /_____/  */}
                                                               
        <Container>
          <Grid columns={16}>
                <FromAddressPatient patient={this.state.patient}/>
                <FromHisProfilePatient patient={this.state} />
                <MedicalPatient patient={this.state} />
          </Grid>
        </Container>
      </BG>
      </Responsive>



   {/*
 /$$$$$$$                                                              /$$                            /$$      /$$           /$$       /$$ /$$
| $$__  $$                                                            |__/                           | $$$    /$$$          | $$      |__/| $$
| $$  \ $$  /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$  /$$$$$$$   /$$$$$$$ /$$ /$$    /$$  /$$$$$$       | $$$$  /$$$$  /$$$$$$ | $$$$$$$  /$$| $$  /$$$$$$
| $$$$$$$/ /$$__  $$ /$$_____/ /$$__  $$ /$$__  $$| $$__  $$ /$$_____/| $$|  $$  /$$/ /$$__  $$      | $$ $$/$$ $$ /$$__  $$| $$__  $$| $$| $$ /$$__  $$
| $$__  $$| $$$$$$$$|  $$$$$$ | $$  \ $$| $$  \ $$| $$  \ $$|  $$$$$$ | $$ \  $$/$$/ | $$$$$$$$      | $$  $$$| $$| $$  \ $$| $$  \ $$| $$| $$| $$$$$$$$
| $$  \ $$| $$_____/ \____  $$| $$  | $$| $$  | $$| $$  | $$ \____  $$| $$  \  $$$/  | $$_____/      | $$\  $ | $$| $$  | $$| $$  | $$| $$| $$| $$_____/
| $$  | $$|  $$$$$$$ /$$$$$$$/| $$$$$$$/|  $$$$$$/| $$  | $$ /$$$$$$$/| $$   \  $/   |  $$$$$$$      | $$ \/  | $$|  $$$$$$/| $$$$$$$/| $$| $$|  $$$$$$$
|__/  |__/ \_______/|_______/ | $$____/  \______/ |__/  |__/|_______/ |__/    \_/     \_______/      |__/     |__/ \______/ |_______/ |__/|__/ \_______/
                              | $$
                              | $$
                              |__/                                                                                                                      
 */}
                                                       
        <Responsive {...Responsive.onlyMobile}>
          
          <Visibility
            onBottomPassed={this.stickTopMenu}
            onBottomVisible={this.unStickTopMenu}
            once={false}
          >
            
            <Menu
                    color='teal'
                    fixed={fixed ? 'top' : null}
                    inverted={!fixed}
                    pointing={!fixed}
                    secondary={!fixed}
                    size='large'
                    secondary={!this.state.menuFixed}
                    fixed={this.state.menuFixed && "top"}
            >
            
                <Menu  style={style.colorNavMobile} pointing secondary size='small' >
                  <Menu.Item  onClick={() => this.handleToggle()}>
                    <Icon size="big" name='sidebar' />
                  </Menu.Item>
                  <Menu.Item  position='right'>
                    <Icon size="big" name="heartbeat" />
                    <span style={{ fontSize: "2em" }}>
                      OPD BOOKS
                          </span>
                  </Menu.Item>
                </Menu>
            </Menu>
            

            
          </Visibility>

          <Sidebar.Pushable style={{ backgroundColor: 'white' }}>
            <Sidebar as={Menu} color='teal' animation='uncover' inverted vertical visible={sidebarOpened}>
              <Menu.Item as='a' active icon>
                <Icon name='file alternate outline' /> Profile
              </Menu.Item>
              <Menu.Item as='a'><Icon name='qrcode' /> QR code</Menu.Item>
              <Menu.Item as='a'><Icon name='history' /> History</Menu.Item>

              <Menu.Item as='a'><Icon name='log out' /> Logout</Menu.Item>
            </Sidebar>
          

            <Sidebar.Pusher
              dimmed={sidebarOpened}
              onClick={this.handlePusherClick}
              style={{ minHeight: '100vh' }}
            >
             
              <SegmentMobile
              inverted
              style={{ backgroundColor: '#99FFFF' }}
              textAlign='center'
              style={{ minHeight: 250, padding: '1em' }}
              vertical
            >
                <br />
                <Image bordered={true} src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='small' circular centered />
                <Statistic color='teal' inverted size='mini'>
                  <Statistic.Value >{this.state.nameTitle} {this.state.firstname} {this.state.lastname}</Statistic.Value>
                  <Statistic.Label>HN 123423</Statistic.Label>
                </Statistic>
                
              </SegmentMobile>     
              <br />
                <Container >
                
                  <Grid divided='vertically' >
                    <Grid.Row columns={2}>
                
                      
                      <Grid.Column>
                        <h5>Hospital No.</h5>
                        <p></p>
                      </Grid.Column>
                      <Grid.Column>
                      <h4>Citizen ID</h4>
                      <p></p>
                      </Grid.Column>
                      <Grid.Column>
                        <h4>Birthday</h4>
                        <p></p>
                      </Grid.Column>
                      <Grid.Column>
                        <h4>Gender</h4>
                        <p>sdasdasdasdasdsadas</p>
                      </Grid.Column>
                      <Grid.Column>
                        <h4>Blood Group</h4>
                        <p>sdasdasdasdasdsadas</p>
                      </Grid.Column>
                      <Grid.Column>
                        <h4>Status</h4>
                        <p>sdasdasdasdasdsadas</p>
                      </Grid.Column>
                      <Grid.Column>
                        <h4>Nation</h4>
                        <p>sdasdasdasdasdsadas</p>
                      </Grid.Column>
                      <Grid.Column>
                        <h4>Country</h4>
                        <p>sdasdasdasdasdsadas</p>
                      </Grid.Column>
                      <Grid.Column>
                        <h4>Religion</h4>
                        <p>sdasdasdasdasdsadas</p>
                      </Grid.Column>
                      <Grid.Column>
                        <h4>Occupartion</h4>
                        <p>sdasdasdasdasdsadas</p>
                      </Grid.Column>
                     
                    </Grid.Row>
                  </Grid>
                 
                    
              </Container >

              


              
               </Sidebar.Pusher>
          </Sidebar.Pushable>

        </Responsive>
      </div>
      )
  }
}





