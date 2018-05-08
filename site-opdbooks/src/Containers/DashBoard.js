import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Modal, Container, Table, Grid, Divider,Label,Card } from 'semantic-ui-react'
import styled from 'styled-components'
import QrReader from 'react-qr-reader'
import { defaultAccount, contract,web3 } from './../lib/web3';

const PopupQRCode = styled(Modal) `
position: fixed;
top: 70%;
left: 50%;
transform: translate(-50%, -50%);
width: 50%;
`

class SidebarBottomOverlay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }

  state = { 
    open: false,
    activeItem: 'home',

    //InfoPatient Part1
        registerDate: '',
        hospitalnumber: '',
        // photo: web3.toAscii(InfoPatientPart1[2]),
        idcard: '',

        //InfoPatient Part2
        dob: '',
        titlename: '',
        firstname: '',
        lastname: '',
        gender: '',

        //InfoPatient Part3
        congenitaldisease: '',
        bloodgroup: '',
        religion: '',
        nationality: '',
        country: '',

        //InfoPatient Part4
        statuspatient: '',
        occupartion: '',
        homephonenumber: '',
        mobilenumber: '',
        email: '',

        //AddressPatient
        typeofHouse: '',
        patientaddress: '',
        province: '',
        district: '',
        subDistrict: '',
        zipcode: '',

        //EmergencyContact Part1
        emerTitle: '',
        emerFirstname: '',
        emerLastname: '',
        emerRelationship: '',
        emerHomePhonenumber: '',
        emerMobileNumber: '',

        //EmergencyContact Part2
        emerTypeofHouse: '',
        emerAddress: '',
        emerProvince: '',
        emerDistrict: '',
        emerSubDistrict: '',
        emerZipcode: '',

        //PatientParent
        fatherFirstname: '',
        fatherLastname: '',
        motherFirstname: '',
        motherLastname: '',

        //PatientAllergy
        allergy: '',
        privilege: ''
  }

  getPatient = (qrCode) => {
        console.log(contract)
        const InfoPatientPart1 = contract.getInfoPatientPart1(qrCode, defaultAccount);
        
        const InfoPatientPart2 = contract.getInfoPatientPart2(qrCode, defaultAccount);
        const InfoPatientPart3 = contract.getInfoPatientPart3(qrCode, defaultAccount);
        const InfoPatientPart4 = contract.getInfoPatientPart4(qrCode, defaultAccount)

        const AddressPatient = contract.getAddressPatient(qrCode, defaultAccount);
        const PatientAllergy = contract.getPatientAllergy(qrCode, defaultAccount);

        const EmergencyContactPart1 = contract.getEmergencyContactPart1(qrCode, defaultAccount)
        const EmergencyContactPart2 = contract.getEmergencyContactPart2(qrCode, defaultAccount)

        const PatientParent = contract.getPatientParent(qrCode, defaultAccount)

        this.setState({
            //InfoPatient Part1
            registerDate: web3.toAscii(InfoPatientPart1[0]),
            hospitalnumber: web3.toAscii(InfoPatientPart1[1]),
            // photo: web3.toAscii(InfoPatientPart1[2]),
            idcard:(InfoPatientPart1[3]),

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
            patientaddress: web3.toAscii(AddressPatient[1]),
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
            emerAddress: web3.toAscii(EmergencyContactPart2[1]),
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
            privilege: web3.toAscii(PatientAllergy[1]),
        })
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
        open:false
      })
      this.getPatient(data)
    }
  }
  handleError(err) {
    console.error(err)
  }


  render() {

    const { open, size } = this.state
    const { activeItem } = this.state
    return (
      <div>
        <Menu pointing secondary color={'teal'}>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
            <Menu.Item>
              <Button color='teal' basic floated='left' onClick={this.show('mini')}><Icon name='qrcode'/>Scan QRCode</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Container >
          
            <Header as='h2' icon textAlign={'center'}>
            <Icon name='user circle outline' />
              {this.state.titlename}{this.state.firstname} {this.state.lastname}
              <Header.Subheader>
                <Label as='a' basic color='teal'>ID Card: {this.state.idcard}</Label>
            </Header.Subheader>
          </Header>

          <Segment>
            <Header as='h1' color='teal' content='Profile'/>
            <Divider></Divider>
            <Grid columns={4} relaxed>
              <Grid.Column>
                
                  <Segment basic>
                    <Header size='small' as='h4' color='teal'> Hospitalnumber</Header>{this.state.hospitalnumber}
                  </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                            <Header size='small' as='h4' color='teal'> Date of Birth</Header>{this.state.dob}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                            <Header size='small' as='h4' color='teal'> congenital Disease</Header>{this.state.congenitaldisease}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                            <Header size='small' as='h4' color='teal'> Gender</Header>{this.state.gender}
                          </Segment>
                      </Grid.Column>
                      <Grid.Column>
                          <Segment basic>
                            <Header size='small' as='h4' color='teal'> Blood Group</Header>{this.state.bloodgroup}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                            <Header size='small' as='h4' color='teal'> Religion</Header>{this.state.religion}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                            <Header size='small' as='h4' color='teal'> Nationality</Header>{this.state.nationality}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                            <Header size='small' as='h4' color='teal'> Country</Header>{this.state.country}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                  <Header size='small' as='h4' color='teal'> status</Header>{this.state.statuspatient}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                  <Header size='small' as='h4' color='teal'> Occupartion</Header>{this.state.occupartion}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                  <Header size='small' as='h4' color='teal'> Home Phone Number</Header>{this.state.homephonenumber}
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <Segment basic>
                            <Header size='small' as='h4' color='teal'> Mobile Number</Header>{this.state.mobilenumber}
                          </Segment>
                        </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
          
        <Container style={{paddingTop:'2%'}}>
          
          <Segment>
            <Header as='h1' color='teal' content='Address' />
            <Divider></Divider>
            <Grid columns={4} relaxed>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Type Of House</Header>{this.state.typeofHouse}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Address</Header>{this.state.patientaddress}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Sub-District</Header>{this.state.subDistrict}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> District</Header>{this.state.district}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Province</Header>{this.state.province}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Zipcode</Header>{this.state.zipcode}
                </Segment>
              </Grid.Column>
              
              
            </Grid>
          </Segment>
        </Container>

        <Container style={{ paddingTop: '2%' }}>
          <Segment>
            <Header as='h1' color='teal' content='Emergency Contact' />
            <Divider></Divider>
            <Grid columns={4} relaxed>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Name</Header>{this.state.emerTitle}{this.state.emerFirstname} {this.state.emerLastname}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Relationship</Header>{this.state.emerRelationship}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'>Home Phone Number</Header>{this.state.emerHomePhonenumber}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'>MobileNumber</Header>{this.state.emerMobileNumber}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Type Of House</Header>{this.state.emerTypeofHouse}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Address</Header>{this.state.emerAddress}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Sub-District</Header>{this.state.emerSubDistrict}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> District</Header>{this.state.emerDistrict}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Province</Header>{this.state.emerProvince}
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'> Zipcode</Header>{this.state.emerZipcode}
                </Segment>
              </Grid.Column>

            </Grid>
          </Segment>
        </Container>

        <Container style={{ paddingTop: '2%' }}>
          <Segment>
            <Header as='h1' color='teal' content='Allergy' />
            <Divider></Divider>
            <Grid columns={4} relaxed>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'>privilege</Header>{this.state.privilege}
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'>Allergy</Header>{this.state.allergy}
                  </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
        
        <Container style={{ paddingTop: '2%' , paddingBottom:'10%' }}>
          <Segment>
            <Header as='h1' color='teal' content='In Case Under 15 Year Old' />
            <Divider></Divider>
            <Grid columns={2} relaxed>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'>Name</Header>{this.state.fatherFirstname} {this.state.fatherLastname} 
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment basic>
                  <Header size='small' as='h4' color='teal'>Name</Header>{this.state.motherFirstname} {this.state.motherLastname} 
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>

        <PopupQRCode size={'mini'} open={open} onClose={this.close}>

          <Modal.Content >
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
            />
            <Header textAlign={'center'} size='large'>{this.state.titlename}{this.state.firstname} {this.state.lastname}</Header>
            <Container textAlign={'center'} size='medium'>Hash: {this.state.result}</Container>
            <Button floated='left' size='huge' basic color='teal' onClick={this.close} style={{ marginTop: '5%',paddingBottom: '2%' }} fluid > Close</Button>

          </Modal.Content>
        </PopupQRCode>
      </div>
    )
  }
}

export default SidebarBottomOverlay


