import React, { Component } from "react";
import {
  Grid, Menu, Segment, Container, Header, Icon, Image, Label, Responsive, Sidebar, Visibility, Button, Modal
} from "semantic-ui-react";
import styled from "styled-components";
import { QRCode } from "react-qr-svg";
import moment from "moment";
import FromAddressPatient from './../Components/FromAddressPatient';
import InfoPatientMobile from './../Components/InfoPatientMobile';
import ProfilePatientMobile from './../Components/ProfilePatientMobile';
import FromHistoryPatientMobile from './../Components/FromHistoryPatientMobile';
import FromAddressPatientMobile from './../Components/FromAddressPatientMobile';
import FormMedicalPatientMobile from './../Components/FormMedicalPatientMobile';
import FromHisProfilePatient from './../Components/FromHisProfilePatient';
import MedicalPatient from './../Components/medicalPatient';
import myQR from "./../../Static/Img/myQR.png";
//static
import BackgroundImage from "./../../Static/Img/BGGs.png";
import { Link } from "react-router-dom";
//service
import { getPatient } from './../../Service/ManagePatientMethod'
import { getHistoryVisitNumberPatient } from "./../../Service/MedicalRecordMethod";

const CryptoJS = require("crypto-js");

const BG = styled.div`
  background: url('${BackgroundImage}') no-repeat center fixed;
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
  colorNavMobile: {
    color: "#62E6C5",
  },
  colorFontMobile: {
    color: "##FFFFFF"
  },

}

// const BGMobiles = styled(Segment)`
//   background: url('${BGMobile}') !important;
//   background-size: 100% 100%;
// `
const BGMobiles = styled(Segment)`
  background: url('https://i.pinimg.com/236x/d9/0d/cf/d90dcf52b2d215d82fdbd54d0f5754b5.jpg') !important;
  background-size: 100% 100%;
`
const Information = styled(Segment)`
  border:0 !important;
  border-color:'#FFFFFF' !important;
  -webkit-box-shadow:0 1px 2px 0 rgba(255, 255, 255, 10)!important ;
`

const PopupQRCode = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
`;


const Boderhide = styled(Menu)`
  border:0;
`;

const fixedMenuStyle = {
  backgroundColor: "#FFFFFF",
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
    statusShowHistory: true,
    avtiveMenuTab: false,
    sidebarOpened: false,
    menuTab: 0,
    statusTab: false,
    tab: 0,
    activeItem: "home",
    activeItemMenu: "home",
    menuFixed: false,
    overlayFixed: false,

    open: false,
    QRCode: "",
    patient: {},
    historyTreatment: []
  };


  menuTab = () => {
    if (this.state.menuTab == 0) {
      return <ProfilePatientMobile
        show={this.show}
        showModal={this.showModal}
        open={this.state.open}
        patient={this.state.patient}
        tab={this.state.tab}
        showtab={this.showtab}
        setField={this.setField}
      />
    } else if (this.state.menuTab == 1) {

      if (this.state.statusShowHistory == true) {
        return <FromHistoryPatientMobile setField={this.setField} />
      } else if (this.state.statusShowHistory == false) {
        return <FormMedicalPatientMobile setField={this.setField} />
      }

    }
  }
  setField = (field, value) => {
    this.setState({ [field]: value });
  }

  showtab = (tab) => {
    if (tab == 0) {
      return <InfoPatientMobile patient={this.state.patient} />

    } else if (tab == 1) {
      return <FromAddressPatientMobile patient={this.state.patient} />
    }
    return <InfoPatientMobile patient={this.state.patient} />
  }


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
      let patient = getPatient(this.props.location.state.citizenId, 'byte');
      this.setState({
        patient: patient,
        historyTreatment: getHistoryVisitNumberPatient(patient.citizenId)
      });
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  showModal = () => {
    const currentDate = moment().format("ll");
    // Encrypt //
    var ciphertext = CryptoJS.AES.encrypt(
      "OPDBooks@" + currentDate + "@" + `${this.state.patient.citizenId}`,
      "OPDQR"
    );
    var QRCodes = "" + ciphertext;
    return <PopupQRCode size={'mini'} open={this.state.open} onClose={this.close}>
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
  }
  render() {
    const { open, size } = this.state;
    const { activeItem } = this.state;
    const { sidebarOpened } = this.state;
    const { fixed } = this.state;

    // const currentDate = moment().format("ll");
    // // Encrypt //
    // var ciphertext = CryptoJS.AES.encrypt(
    //   "OPDBooks@" + currentDate + "@" + `${this.state.patient.citizenId}`,
    //   "OPDQR"
    // );
    // var QRCodes = "" + ciphertext;





    return (

      <div>
        <Responsive {...Responsive.onlyComputer}>

          <BG>
            {this.showModal()}

            {/* ____ ___  ___  ____  __  __/ /_  ____ ______
          / __ `__ \/ _ \/ __ \/ / / / __ \/ __ `/ ___/
         / / / / / /  __/ / / / /_/ / /_/ / /_/ / /    
        /_/ /_/ /_/\___/_/ /_/\__,_/_.___/\__,_/_/      */}

            <Segment>
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
                <FromAddressPatient patient={this.state.patient} />
                <FromHisProfilePatient patient={this.state.patient} />
                <MedicalPatient patient={this.state.patient} />
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

            {/* rgba(0,181,173,10) */}
            <Menu
              style={{ borderColor: 'rgba(255,255,255,10)', paddingTop: 2 }}

              fixed={fixed ? 'top' : null}

              pointing={!fixed}
              secondary={!fixed}
              size='large'
              secondary={!this.state.menuFixed}
              fixed={this.state.menuFixed && "top"}
            >

              <Boderhide style={style.colorNavMobile} pointing secondary size='mini' >

                <Menu.Item style={{ borderColor: 'rgba(255,255,255,10)' }} onClick={() => this.handleToggle()}>
                  <Icon size="big" name='bars' style={{ color: 'black' }} />
                </Menu.Item>
                <Menu.Item style={{ borderColor: 'rgba(255,255,255,10)' }} position='right'>
                  <Icon size="big" name="heartbeat" style={{ color: 'black' }} />
                  <span style={{ fontSize: "2em", color: 'black' }}>
                    OPD BOOKS
                          </span>
                </Menu.Item>
              </Boderhide>
            </Menu>
          </Visibility>
          <Sidebar.Pushable style={{ backgroundColor: 'white' }}>

            <Sidebar as={Menu} animation='uncover' vertical visible={sidebarOpened}>
              <Menu.Item color='teal' as='a' icon onClick={() => { this.setState({ menuTab: 0, sidebarOpened: false }) }}><Icon name='file alternate outline' /> Profile</Menu.Item>

              <Menu.Item as='a' onClick={() => { this.setState({ menuTab: 1, sidebarOpened: false, statusShowHistory: true }) }}><Icon name='history' /> History</Menu.Item>

              <Link to="/" ><Menu.Item as='a'  ><Icon name='log out' /> Logout</Menu.Item></Link>
            </Sidebar>
            <Sidebar.Pusher
              dimmed={sidebarOpened}
              onClick={this.handlePusherClick}
              style={{ minHeight: '550px' }}
            >
              {this.menuTab()}
            </Sidebar.Pusher>

          </Sidebar.Pushable>

        </Responsive>
      </div>
    )
  }
}





