import React, { Component } from 'react';
import ScanButton from "./../../Static/Img/ScanButton.png";
import { Scrollbars } from 'react-custom-scrollbars';
import Queues from './../Components/Queues'
import styled from 'styled-components'
import swal from 'sweetalert2';
import QrReader from 'react-qr-reader'
import moment from 'moment';
import { addQueue } from "./../../Service/QueueMethod"
import { defaultAccount, contract, web3 } from './../../Lib/Web3';
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    Item,
    Label,
    Menu,
    Segment,
    Step,
    Table,
    List,
    Divider,
    Modal,
} from 'semantic-ui-react'

const PopupQRCode = styled(Modal) `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 50%;
`

const CryptoJS = require("crypto-js");
const style = {
    h1: {
        marginTop: '4em',
        marginBottom: '50px'

    },
    h2: {
        margin: '4em 0em 2em',
    },
    d1: {
        marginTop: '1em',
        marginBottom: '50px',
        cursor: 'pointer'
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    

}
class Registration extends Component {
state = {
    open: false,
    activeItem: 'home',
    openModal:false,

    //InfoPatient Part1
    registerDate: '',
    hospitalnumber: '',
    // photo: web3.toAscii(InfoPatientPart1[2]),
    citizenId: '',

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
emptyField = {
    //InfoPatient Part1
    registerDate: '',
    hospitalnumber: '',
    // photo: web3.toAscii(InfoPatientPart1[2]),
    citizenId: '',

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
        citizenId: web3.toAscii(InfoPatientPart1[2]),

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
        privilege: web3.toAscii(PatientAllergy[1]),
    })
}

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

showModal = dimmer => () => this.setState({ dimmer:'blurring', openModal: true })
closeModal = () => this.setState({ openModal: false })

handleScan = (data)=> {
    // Decrypt
    if (data) {
        const currentDate = moment().format('ll')
        var bytes = CryptoJS.AES.decrypt(data.toString(), 'OPDQR');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        let res = [] = plaintext.split("@");
        // เช็คว่าตรงตามเงื่อนไขหรือไม่ เป็นQR ของClinicหรือไม่
        if (res[0] == 'OPDBooks') {

            if (res[1] == '' + currentDate) {
                // swal({
                //     type: 'success',
                //     title: 'Your work has been saved',
                //     html:
                //     '<p>Hash: ' + bytes + '</p>',

                //     showConfirmButton: false,
                //     timer: 3000
                // })
                this.setState({ result: res[2], open: false })
                this.setState(this.emptyField,this.showModal())
                this.getPatient(res[2])
                
            } else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 2000
                })
                this.setState({ result: 'Your listing is not available in the system.', open: false })
                
                
            }

        } else {
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                showConfirmButton: false,
                timer: 2000
            })
            this.setState({ result: 'Your listing is not available in the system.', open: false })
            this.setState(this.emptyField)
        }
    }
}

// handleError(err) {
//     console.error(err)

// }

addQueueForNurse = () => {
    if (this.state.citizenId) {
        addQueue(1, this.state.hospitalnumber, this.state.citizenId, this.state.titlename, this.state.firstname, this.state.lastname, true, "-");
        alert("Add Queue Success")
        this.setState({

            //InfoPatient Part1
            registerDate: '',
            hospitalnumber: '',
            // photo: web3.toAscii(InfoPatientPart1[2]),
            citizenId: '',

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
        })
    } else {
        // ยังไม่มีคนไข้
    }
}



    render() {
        const { openModal, dimmer } = this.state
        return (
            <div >
                <Container >
                    <Header as='h1' style={style.h1} textAlign='center'>
                        <Header.Content>
                            <span style={{ fontSize: '2em', color: '#00B5AD' }}>OPD BOOKS</span>
                            <Header.Subheader >Project on Blockchain</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Image
                        style={style.d1}
                        
                        rounded
                        size='medium'
                        src={ScanButton}
                        onClick={() => this.setState({ open:true })}
                    />
                    <Container>
                        <Grid style={style.last} textAlign='center'>
                            < Queues position="Nurse" StatusQueue="N" />
                            < Queues position="Doctor" StatusQueue="D"/>
                            < Queues position="Phamacy" StatusQueue="P"/>
                        </Grid>
                    </Container>
                </Container>
                <PopupQRCode
                    size={'mini'}
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: !this.state.open, result: '' })
                    }} >
                    <Header textAlign={'center'} size='large'>Scan QRCode</Header>
                    <Modal.Content >
                        <QrReader
                            delay={this.state.delay}
                            onError={this.handleError}
                            onScan={this.handleScan}
                            style={{ width: '100%' }}
                        />
                        {/* <Header textAlign={'center'} size='large'>{this.state.titlename}{this.state.firstname} {this.state.lastname}</Header> */}
                        {/* <Container textAlign={'center'} size='medium'>Hash: {this.state.result}</Container> */}
                        <Button floated='left' size='huge' basic color='teal' onClick={() => this.setState({ open:false })} style={{ marginTop: '5%', marginBottom: '5%' }} fluid > Close</Button>

                    </Modal.Content>
                </PopupQRCode>






                <Modal dimmer={dimmer} open={openModal} onClose={this.closeModal}>
                    <Modal.Content >
                        <Modal.Description>
                        <Header as='h2'textAlign='center'>Profile Image</Header>
                        <Divider/>
                            
                             <Scrollbars
                            autoHide
                            style={{ height: 700 }}>
                            <Grid textAlign='center'>
                                <br></br>
                                <Header as='h3'>
                                        <Icon name='plug' />
                                        <Header.Content >Profile</Header.Content>
                                </Header>
                                <Grid.Row >
                                    
                                    <Grid.Column textAlign='center' >
                                        <p>Name: {this.state.dob}</p>
                                    </Grid.Column>
                                    
                                    
                                </Grid.Row>
                                <Grid.Row >
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Hospitalnumber: {this.state.hospitalnumber}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Date of Birth: {this.state.dob}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Congenital Disease: {this.state.congenitaldisease}</p>
                                    </Grid.Column>
                                    
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Gender: {this.state.gender}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Blood Group: {this.state.bloodgroup}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Religion: {this.state.religion}</p>
                                    </Grid.Column>
                                    
                                </Grid.Row>
                                <Grid.Row >
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Nationality: {this.state.nationality}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Country: {this.state.country}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Status: {this.state.statuspatient}</p>
                                    </Grid.Column>
                                    
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Occupartion: {this.state.occupartion}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Home  Number: {this.state.homephonenumber}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Mobile Number: {this.state.mobilenumber}</p>
                                    </Grid.Column>
                                    
                                </Grid.Row>

                                
                                <Header as='h3'>
                                        <Icon name='plug' />
                                        <Header.Content >Address</Header.Content>
                                </Header>
                                <Grid.Row>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Type Of House: {this.state.typeofHouse}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Address: {this.state.patientaddress}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Sub-District: {this.state.subDistrict}</p>
                                    </Grid.Column>
                                    
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>District: {this.state.district}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Province: {this.state.province}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Zipcode: {this.state.zipcode}</p>
                                    </Grid.Column>
                                    
                                </Grid.Row>
                                <Header as='h3'>
                                        <Icon name='plug' />
                                        <Header.Content >Emergency Address</Header.Content>
                                </Header>
                                <Grid.Row>
                                    <Grid.Column >
                                        <p>Name: {this.state.emerTitle}{this.state.emerFirstname} {this.state.emerLastname}</p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Relationship: {this.state.emerRelationship}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Home Number: {this.state.emerHomePhonenumber}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>MobileNumber: {this.state.emerMobileNumber}</p>
                                    </Grid.Column>
                                
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Type Of House: {this.state.emerTypeofHouse}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Address: {this.state.emerAddress}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Sub-District: {this.state.emerSubDistrict}</p>
                                    </Grid.Column>
                                    
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>District: {this.state.emerDistrict}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Province: {this.state.emerProvince}</p>
                                    </Grid.Column>
                                    <Grid.Column textAlign='left' width={5}>
                                        <p>Zipcode: {this.state.emerZipcode}</p>
                                    </Grid.Column>
                                    
                                    
                                </Grid.Row>

                                <Header as='h3'>
                                        <Icon name='plug' />
                                        <Header.Content >Allergy</Header.Content>
                                </Header>
                                <Grid.Row>
                                    <Grid.Column   width={6}>
                                        <p>Privilege: {this.state.privilege}</p>
                                    </Grid.Column>
                                    <Grid.Column  width={6}>
                                        <p>Allergy: {this.state.allergy}</p>
                                    </Grid.Column>
                                </Grid.Row>

                                <Header as='h3'>
                                        <Icon name='plug' />
                                        <Header.Content >In Case Under 15 Year Old</Header.Content>
                                </Header>
                                <Grid.Row>
                                    <Grid.Column   width={6}>
                                        <p>Father Name: {this.state.fatherFirstname} {this.state.fatherLastname} </p>
                                    </Grid.Column>
                                    <Grid.Column  width={6}>
                                        <p>Mother Name: {this.state.motherFirstname} {this.state.motherLastname} </p>
                                    </Grid.Column>
                                </Grid.Row>

                            </Grid>
                             </Scrollbars>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='black' onClick={this.closeModal}>
                        Nope
                        </Button>
                        <Button
                        basic
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content="Yep, that's me"
                        onClick={this.closeModal}
                        />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default Registration;