import React, { Component } from "react";
import {
  Grid, Menu, Segment, Container, Header, Icon, Dropdown, Responsive, Sidebar, Visibility, Button, Modal, Dimmer, Loader
} from "semantic-ui-react";
import styled from "styled-components";
import { QRCode } from "react-qr-svg";
import FromAddressPatient from '../Components/Patients/ManagePatientProfile/FromAddressPatient';
import InfoPatientMobile from '../Components/Patients/ManagePatientProfile/Responsive/InfoPatientMobile';
import ProfilePatientMobile from '../Components/Patients/Profile/Responsive/ProfilePatientMobile';
import FromHisProfilePatient from '../Components/Patients/Profile/FromHisProfilePatient';
import MedicalPatient from '../Components/Patients/Profile/MedicalPatient';
import EditProfile from './EditProfile';
import FormEditProfile from '../Components/Patients/ManagePatientProfile/FormEditProfile'

//components
import HeaderPatient from "../Components/Patients/Profile/HeaderPatient"
//static
import BackgroundImage from "../Static/Img/BGGs.png";
import { Link } from "react-router-dom";
//service
import { getPatient } from '../Services/ManagePatientMethod'
import { getTreatmentHistoryOfPatient, getMedicalRecord } from "../Services/MedicalRecordMethod";

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
    historyTreatment: [],
    historyMsg: "",
    chooseMedicalRecord: {},
    loader: true,
    showEditPage: false,
    showEditProfile: false,
    // my
    openEditPrfile: false
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
        showEditPage={this.state.showEditPage}
      />
    } else if (this.state.menuTab == 1) {
      if (this.state.statusShowHistory == true) {
        return <FromHisProfilePatient
          patient={this.state.patient}
          historyTreatment={this.state.historyTreatment}
          historyMsg={this.state.historyMsg}
          setField={this.setField} />
      } else if (this.state.statusShowHistory == false) {
        return <span><Icon name='arrow left' size='big' onClick={this.setStateHistory} /><MedicalPatient
          chooseMedicalRecord={this.state.chooseMedicalRecord}
        /></span>
      }
    }
  }
  setField = (field, value) => {
    this.setState({ [field]: value });
  }
  goToPage = (path) => {
    this.props.history.push({
      pathname: path,
    });
  }
  showtab = (tab) => {
    if (tab == 0) {
      return <InfoPatientMobile patient={this.state.patient} />

    } else if (tab == 1) {
      return <FromAddressPatient patient={this.state.patient} />
    }
    return <InfoPatientMobile patient={this.state.patient} />
  }
  setStateHistory = () => this.setState({ statusShowHistory: true });
  stickTopMenu = () => this.setState({ menuFixed: true });
  unStickTopMenu = () => this.setState({ menuFixed: false });

  // showPage = () => {
  //   if (this.props.showEditProfile) {
  //     return <EditProfile/>
  //   }
  // }

  show = () => {
    this.setState({ open: true })
  }
  close = () => this.setState({ open: false });

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  //Connect API
  componentWillMount = async () => {
    if (!this.props.location.state) {
      this.props.history.push("/signin");
      return
    }
    this.setState(this.props.location.state)
    let citizenId = this.props.location.state.citizenId;
    getPatient(citizenId).then(patient => {
      getTreatmentHistoryOfPatient(citizenId).then(history => {
        this.setState({
          patient: patient.data,
          historyTreatment: history.data,
          historyMsg: history.message,
          loader: false
        });
      })
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  showModal = () => {
    if (this.state.patient.citizenId) {
      return <PopupQRCode size={'mini'} open={this.state.open} onClose={this.close}>
        <Modal.Content>
          <QRCode bgColor="#FFFFFF" fgColor="#000000" level="Q" value={this.state.patient.citizenId} />
          <Header textAlign={"center"} size="large">
            {this.state.patient.nametitle} {this.state.patient.firstname} {this.state.patient.lastname}
          </Header>
          <Button size="huge" basic color="teal" onClick={this.close} style={{ marginTop: "10%" }} fluid>
            Close
            </Button>
        </Modal.Content>
      </PopupQRCode>
    }
  }

  viewMedicalRecord = (history) => {
    this.setState({ loader : true })
    getMedicalRecord(+history.medicalRecordId).then(res => {
      this.setState({ 
        loader: false,
        chooseMedicalRecord: res.data,
        statusShowHistory: false
      })
    })
  }

  sortMedicalRecord = (year) => {
    this.setState({ loader: true })
    getTreatmentHistoryOfPatient(this.state.patient.citizenId,year).then(history => {
      this.setState({
        historyTreatment: history.data,
        historyMsg: history.message,
        loader: false
      });
    })
  }





  render() {
    const { sidebarOpened } = this.state;
    const { fixed } = this.state;

    console.log("chooseMedicalRecord",this.state.chooseMedicalRecord)
    return (
      <div>
        <Dimmer.Dimmable blurring dimmed={this.state.loader}>
          <Dimmer page active={this.state.loader}>
            <Loader indeterminate size='massive'>Loading</Loader>
          </Dimmer>

          <Responsive {...Responsive.onlyComputer}>

            <BG>
              {/* <EditProfile /> */}
              <Segment>
                <Menu borderless={true} size='large'>
                  <Menu.Item onClick={() => this.goToPage('/')}>
                    <Icon color="red" size="big" name="heartbeat" />
                    <span style={{ fontSize: "1.2em", color: "#00B5AD" }}>
                      OPD BOOKS
                            </span>
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Dropdown item text={this.state.patient.firstname} >
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => this.setState({ showEditProfile : true })} ><Icon name='setting'></Icon>Edit Profile</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                      <Button onClick={() => this.goToPage('/')} color='google plus'>Logout</Button>
                    </Menu.Item>
                  </Menu.Menu>
                </Menu>
                <HeaderPatient
                  patient={this.state.patient}
                  show={this.show} />
              </Segment>
              <Container>
                <Grid columns={16}>
                  {/* <Modal >
                    {this.showPage()}
                  </Modal> */}
                  <FromAddressPatient
                    patient={this.state.patient} />
                  <FromHisProfilePatient
                    patient={this.state.patient}
                    historyTreatment={this.state.historyTreatment}
                    historyMsg={this.state.historyMsg}
                    setField={this.setField} 
                    viewMedicalRecord={this.viewMedicalRecord}
                    sortMedicalRecord={this.sortMedicalRecord}
                  />
                  <MedicalPatient
                    chooseMedicalRecord={this.state.chooseMedicalRecord}
                  />
                </Grid>
              </Container>
            </BG>
            <Modal style={{ borderRadius: '2rem' }} open={this.state.showEditProfile} onClose={() => this.setState({ showEditProfile : false })}>
              {/* <EditProfile /> */}
              <Modal.Content >
                <Header as='h1'>Edit Profile นะจ๊ะ</Header>
                <FormEditProfile 
                  patient={this.state.patient}
                />

              </Modal.Content>
              <Modal.Actions style={{ border: 0 }} >
                <Button size='hug' onClick={this.close} style={{ borderRadius: '2rem' }} color='red'>
                  Cancel
                            </Button>
                <Button size='hug' style={{ borderRadius: '2rem' }} color='green'>
                  Success
                            </Button>
              </Modal.Actions>
            </Modal>
          </Responsive>

          <Responsive {...Responsive.onlyMobile}>
            <Visibility
              onBottomPassed={this.stickTopMenu}
              onBottomVisible={this.unStickTopMenu}
              once={false}
            >
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
                <Menu.Item color='teal' as='a' icon onClick={() => { this.setState({ menuTab: 0, sidebarOpened: false, showEditPage: false }) }}><Icon name='file alternate outline' /> Profile</Menu.Item>
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
        </Dimmer.Dimmable>
      </div>
    )
  }
}





