import React, { Component } from 'react';
import { Grid, Menu, Segment, Container, Divider, Header, Icon, Image, Table, Label, List,Button, Modal, Popup } from 'semantic-ui-react'
import styled from 'styled-components'
import iconOpd from '../Static/img/IconOPDs.png';
import swal from 'sweetalert2';
import Dashboard from './DashBoard'
import { defaultAccount, contract,web3 } from './../lib/web3';
import { QRCode } from 'react-qr-svg';
const Menus = styled(Menu) `
   
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    height:100%;
    padding - left: 0;
    padding - right: 0;
    z - index: 1000;
    overflow - x: hidden;
    overflow - y: auto;
    border - right: 1px solid #eee;
    background: #00CACF;
`
const GridContainer = styled(Grid.Row) `
    padding - left: 15rem;
`
const GridColumnleft = styled(Grid.Column) `
   padding-left:1em; 
   padding-right:1em; 
`
const MenyItem = styled(Menu.Item) `
   font-size:18px; 
`
const GridColumnright = styled(Grid.Column) `
   padding-left:1em;
   padding-right:1em;  
`
const ImageSizeRow = styled(Image) `
     width:150px;
     height:150px;
     
`

const PopupQRCode = styled(Modal) `
position: fixed;
top: 70%;
left: 50%;
transform: translate(-50%, -50%);
width: 50%;
`

export default class PatientRecord extends Component {


    state = { 
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
        privilege: '',

        open: false ,

        QRCode:'1670433847213'

    }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    //Connect API
    componentWillMount() {
        console.log(contract)
        // const InfoPatientPart1 = contract.getInfoPatientPart1("1670433847213", defaultAccount);
        // const InfoPatientPart2 = contract.getInfoPatientPart2("1670433847213", defaultAccount);
        // const InfoPatientPart3 = contract.getInfoPatientPart3("1670433847213", defaultAccount);
        // const InfoPatientPart4 = contract.getInfoPatientPart4("1670433847213", defaultAccount);

        // const AddressPatient = contract.getAddressPatient("1670433847213", defaultAccount);
        // const PatientAllergy = contract.getPatientAllergy("1670433847213", defaultAccount);

        // const EmergencyContactPart1 = contract.getEmergencyContactPart1("1670433847213", defaultAccount)
        // const EmergencyContactPart2 = contract.getEmergencyContactPart2("1670433847213", defaultAccount)

        // const PatientParent = contract.getPatientParent("1670433847213", defaultAccount)
        const InfoPatientPart1 = contract.getInfoPatientPart1(this.props.location.state.citizenId, defaultAccount);
        
        const InfoPatientPart2 = contract.getInfoPatientPart2(this.props.location.state.citizenId, defaultAccount);
        const InfoPatientPart3 = contract.getInfoPatientPart3(this.props.location.state.citizenId, defaultAccount);
        const InfoPatientPart4 = contract.getInfoPatientPart4(this.props.location.state.citizenId, defaultAccount)

        const AddressPatient = contract.getAddressPatient(this.props.location.state.citizenId, defaultAccount);
        console.log(web3.toAscii(AddressPatient[1]))
        const PatientAllergy = contract.getPatientAllergy(this.props.location.state.citizenId, defaultAccount);

        const EmergencyContactPart1 = contract.getEmergencyContactPart1(this.props.location.state.citizenId, defaultAccount)
        const EmergencyContactPart2 = contract.getEmergencyContactPart2(this.props.location.state.citizenId, defaultAccount)

        const PatientParent = contract.getPatientParent(this.props.location.state.citizenId, defaultAccount)
        
        
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

       

    render() {
        const { open, size } = this.state
        const { activeItem } = this.state
        var  QRCodes  = `${this.state.QRCode}`

        return (
            <Segment.Group style={{ border: '0px' }}>




                <Segment style={{ paddingLeft: '15em' }} >

                    <Menus color={'teal'} secondary inverted vertical >
                        <Menu.Item>
                            <img src={iconOpd} style={{ paddingBottom: '1em', paddingTop: '1em' }} />
                        </Menu.Item>
                        <MenyItem name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                        {/* <MenyItem name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                        <MenyItem name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} /> */}
                        <MenyItem name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />
                    </Menus>

                    <Header as='h2' >
                        <Icon name='user circle outline' style={{ paddingLeft: '1.5em' }} />
                        <Header.Content >
                            Profile Patient 

                             <Button color='teal' basic floated='right' onClick={this.show('mini')}><Icon name='qrcode' />My QRCode</Button>
                            
                             <PopupQRCode size={'mini'} open={open} onClose={this.close}>
                                
                                <Modal.Content >
                                    <QRCode
                                        bgColor="#FFFFFF"
                                        fgColor="#000000"
                                        level="Q"
                                        style={{ width: '80%' , marginLeft: '10%'
                                        , paddingTop: 20
                                         }}
                                        value={QRCodes}
                                    />
                                    <Header textAlign={'center'} size='large'>{this.state.titlename}{this.state.firstname} {this.state.lastname}</Header>
                                    <Container textAlign={'center'} size='medium'>Hash: {this.state.QRCode}</Container>

                                    <Button size='huge' basic color='teal' onClick={this.close} style={{ marginTop: '10%' }} fluid > Close</Button>
                                    
                                </Modal.Content>
                            </PopupQRCode>

                           


                            {/* <Button color='teal' basic floated='right' onClick={() => this.showQRCode()}><Icon name='qrcode' />My QRCode</Button> */}
                        </Header.Content>
                        
                        <Divider />
                    </Header>


                    <Grid columns='equal' stackable >

                        <Grid.Row textAlign='center'>
                            
                            <Grid.Column  >
                                <GridColumnleft>
                                    <Segment.Group>
                                        
                                        <Segment >
                                            <Header as='h3' textAlign='center' icon='address book outline' content='Profile' />
                                            <Divider></Divider>
                                            <Grid columns={3} >
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Host No.
                                                            </Header.Subheader>
                                                            {this.state.hospitalnumber}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                ID Card.
                                                            </Header.Subheader>
                                                            {this.state.idcard}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>
                                                
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Name
                                                            </Header.Subheader>
                                                            {this.state.titlename}{this.state.firstname} {this.state.lastname}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                
                                            </Grid>

                                            <Grid columns={3} >
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Date of Brith
                                                            </Header.Subheader>
                                                            {this.state.dob}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Gender
                                                            </Header.Subheader>
                                                            {this.state.gender}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Blood Group
                                                            </Header.Subheader>
                                                            {this.state.bloodgroup}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>
                                            </Grid>

                                            <Grid columns={3} >
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Congenital Disease
                                                            </Header.Subheader>
                                                            {this.state.congenitaldisease}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Occupartion
                                                            </Header.Subheader>
                                                            {this.state.occupartion}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Status
                                                            </Header.Subheader>
                                                            {this.state.statuspatient}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>
                                            </Grid>


                                            <Grid columns={3} >
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Religion
                                                            </Header.Subheader>
                                                            {this.state.religion}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Nationality
                                                            </Header.Subheader>
                                                            {this.state.nationality}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Country
                                                            </Header.Subheader>
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

                        <Grid.Row textAlign='center'>
                            <Grid.Column  >
                                <GridColumnleft>
                                    <Segment.Group>
                                        <Segment >
                                            <Header as='h3' textAlign='center' icon='first aid' content='History Or Drung Allergy' />
                                            <Divider></Divider>
                                            <Grid columns={3} >
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                privilege
                                                            </Header.Subheader>
                                                            {this.state.privilege}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Allergy
                                                            </Header.Subheader>
                                                            {this.state.allergy}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>
                                            </Grid>
                                        </Segment>
                                    </Segment.Group>
                                </GridColumnleft>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row textAlign='center'>

                            <Grid.Column  >
                                <GridColumnleft>
                                    <Segment.Group>
                                        <Segment >
                                            <Header as='h3' textAlign='center' icon='volume control phone' content='Contact' />
                                            <Divider></Divider>
                                            <Grid columns={3} >
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Email
                                                            </Header.Subheader>
                                                            {this.state.email}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Home PhoneNumber
                                                            </Header.Subheader>
                                                            {this.state.homephonenumber}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Mobile Number
                                                            </Header.Subheader>
                                                            {this.state.mobilenumber}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>
                                            </Grid>

                                           
                                        </Segment>
                                    </Segment.Group>
                                </GridColumnleft>
                            </Grid.Column>
                        </Grid.Row>


                        <Grid.Row textAlign='center'>

                            <Grid.Column  >
                                <GridColumnleft>
                                    <Segment.Group>
                                        <Segment >
                                            <Header as='h3' textAlign='center' icon='home' content='Address' />
                                            <Divider></Divider>
                                            <Grid columns={3} >
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                TypeofHouse
                                                            </Header.Subheader>
                                                            {this.state.typeofHouse}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                    <Header as='h2' icon>
                                                        <Header.Subheader>
                                                            Address
                                                            </Header.Subheader>
                                                        {this.state.patientaddress}
                                                    </Header>
                                                </Segment>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Sub District
                                                            </Header.Subheader>
                                                            {this.state.subDistrict}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                District
                                                            </Header.Subheader>
                                                            {this.state.district}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                province
                                                            </Header.Subheader>
                                                            {this.state.province}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Postal Code
                                                            </Header.Subheader>
                                                            {this.state.zipcode}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>
                                            </Grid>

                                        </Segment>
                                    </Segment.Group>
                                </GridColumnleft>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row textAlign='center'>

                            <Grid.Column  >
                                <GridColumnleft>
                                    <Segment.Group>
                                        <Segment >
                                            <Header as='h3' textAlign='center' icon='heartbeat' content='Contact First And Last Name In Case Of Emergency' />
                                            <Divider></Divider>
                                            <Grid columns={3} >
                                                <Grid.Column >
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Name
                                                            </Header.Subheader>
                                                            {this.state.emerTitle}{this.state.emerFirstname} {this.state.emerLastname}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Home PhoneNumber
                                                            </Header.Subheader>
                                                            {this.state.emerHomePhonenumber}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Mobile Number
                                                            </Header.Subheader>
                                                            {this.state.emerMobileNumber}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                District
                                                            </Header.Subheader>
                                                            {this.state.district}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Relationship
                                                            </Header.Subheader>
                                                            {this.state.emerRelationship}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Type Of House
                                                            </Header.Subheader>
                                                            {this.state.emerTypeofHouse}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>


                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Address
                                                            </Header.Subheader>
                                                            {this.state.emerAddress}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Sub District
                                                            </Header.Subheader>
                                                            {this.state.emerSubDistrict}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Province
                                                            </Header.Subheader>
                                                            {this.state.emerProvince}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Postal Code
                                                            </Header.Subheader>
                                                            {this.state.emerZipcode}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>
                                            </Grid>

                                        </Segment>
                                    </Segment.Group>
                                </GridColumnleft>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row textAlign='center'>
                            <Grid.Column  >
                                <GridColumnleft>
                                    <Segment.Group>
                                        <Segment >
                                            <Header as='h3' textAlign='center' icon='child' content='In Case Under 15 Year Old' />
                                            <Divider></Divider>
                                            <Grid columns={3} >
                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Father Name
                                                            </Header.Subheader>
                                                            {this.state.fatherFirstname}{this.state.fatherLastname}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>

                                                <Grid.Column>
                                                    <Segment basic>
                                                        <Header as='h2' icon>
                                                            <Header.Subheader>
                                                                Mother Name
                                                            </Header.Subheader>
                                                            {this.state.motherFirstname}{this.state.motherLastname}
                                                        </Header>
                                                    </Segment>
                                                </Grid.Column>
                                            </Grid>


                                        </Segment>
                                    </Segment.Group>
                                </GridColumnleft>
                            </Grid.Column>
                        </Grid.Row>


                    </Grid>

                </Segment>
            </Segment.Group>

        )
    }
}

