import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Header, Icon, Image, Form, Container, Modal, Button, Checkbox, Grid, Segment, Label } from 'semantic-ui-react'

import swal from 'sweetalert2';
import WOW from 'wowjs';
import styled from 'styled-components'
import ScrollUpButton from "react-scroll-up-button";
import moment from 'moment';

//Model
import { Patient } from './../model/Patient';
import { ErrorField } from './../model/ErrorField';

//Component
import InfoPatient from './../components/InfoPatient';
import HomeAddress from './../components/HomeAddress'
import EmergencyContact from './../components/EmergencyContact'
import PatientParent from './../components/PatientParent'
import Allergy from './../components/Allergy'
import ErrorMessage from './../components/ErrorMessage'


//provider
import { setErrorMsg, setErrorMsgSplice } from './../service/Validate';
import { defaultAccount, contract,web3 } from './../lib/web3';
import axios from './../lib/axois'

//static
import BackgroundImage from './../static/img/BG.png'

const provincesData = require('./../static/data/Provinces')
const amphursData = require('./../static/data/Amphurs')
const districtsData = require('./../static/data/Districts')

//css
const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`

const ContanierTop = styled(Container) `
    padding-top:4%;
`


const GridColumn = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalCancel = styled(Modal) `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
`

const ModalConfirm = styled(Modal) `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
`

const ButtomSize = styled(Button) `
    font-size:20px;
    padding:10px;
    margin-left:10px;
`

export default class ManagePatientRecord extends Component {
  state = {
    patient: Patient,
    errorField: ErrorField,
    currentDate: moment().format('LLLL'),
    cardType: 'idcard',
    age: '',
    requiredAllParentField: false,
    requiredAllEmerField: false,
    errorInfo: [],
    errorAddr: [],
    errorEmer: [],
    errorParent: [],
    errorAllergy: [],
    agreement: false,
    reState: ''
  }

  messageErrorRequired = [
    //info
    { field: 'dob', key: 'info' },
    { field: 'email', key: 'info' },
    { field: 'password', key: 'info' },
    { field: 'nameTitle', key: 'info' },
    { field: 'firstname', key: 'info' },
    { field: 'lastname', key: 'info' },
    { field: 'congenitalDisease', key: 'info' },
    { field: 'gender', key: 'info' },
    { field: 'bloodgroup', key: 'info' },
    { field: 'password', key: 'info' },
    { field: 'religion', key: 'info' },
    { field: 'nationality', key: 'info' },
    { field: 'country', key: 'info' },
    { field: 'status', key: 'info' },
    { field: 'mobileNumber', key: 'info' },

    //Address
    { field: 'typeofHouse', key: 'homeAddress' },
    { field: 'address', key: 'homeAddress' },
    { field: 'province', key: 'homeAddress' },
    { field: 'district', key: 'homeAddress' },
    { field: 'subDistrict', key: 'homeAddress' },
    { field: 'zipcode', key: 'homeAddress' },

    //Allergy
    { field: 'allergy', key: 'allergy' },
    { field: 'privilege', key: 'privilege' }
  ]

  messageErrorEmerField = [
    //Emer
    { field: 'emerTitle', key: 'emer' },
    { field: 'emerFirstname', key: 'emer' },
    { field: 'emerLastname', key: 'emer' },
    { field: 'emerRelationship', key: 'emer' },
    { field: 'emerMobileNumber', key: 'emer' },
    { field: 'emerTypeofHouse', key: 'emer' },
    { field: 'emerAddress', key: 'emer' },
    { field: 'emerProvince', key: 'emer' },
    { field: 'emerDistrict', key: 'emer' },
    { field: 'emerSubDistrict', key: 'emer' },
    { field: 'emerZipcode', key: 'emer' }
  ]

  messageErrorParentField = [
    // Parent
    { field: 'fatherFirstname', key: 'parent' },
    { field: 'fatherLastname', key: 'parent' },
    { field: 'motherFirstname', key: 'parent' },
    { field: 'motherLastname', key: 'parent' }
  ]

  makeData = {
    citizenId: '1234567890123',
    hospitalNumber: 'HN123',
    nameTitle: 'Miss.',
    firstname: 'Christopher',
    lastname: 'Horton',
    email: 'Christopher@hotmail.com',
    password: '1234567890!',
    gender: 'M',
    dob: '02/04/1995',
    bloodgroup: 'B',
    nationality: 'Thai',
    religion: 'Buddhism',
    status: 'Single',
    occupartion: '',
    country: 'Thai',
    congenitalDisease: 'no have',
    homePhonenumber: '',
    mobileNumber: '0829938849',
    typeofHouse: 'Apartment',
    address: '123',
    province: 'Kanchanaburi',
    district: 'Tha Muang',
    subDistrict: 'Tha Takhro',
    zipcode: '71130',
    emerTitle: '',
    emerFirstname: '',
    emerLastname: '',
    emerRelationship: '',
    emerHomePhonenumber: '',
    emerMobileNumber: '',
    emerTypeofHouse: '',
    emerAddress: '',
    emerProvince: '',
    emerDistrict: '',
    emerSubDistrict: '',
    emerZipcode: '',
    fatherFirstname: '',
    fatherLastname: '',
    motherFirstname: '',
    motherLastname: '',
    allergy: 'not have',
    privilege: 'รัฐวิสาหิจ'
  }


  setField = (field, value) => {
    this.setState({ [field]: value })
  }

  setPatientDetail = (field, value) => {
    this.state.patient[field] = value;
  }

  checkEmptyField = () => {
    var tmp = [];
    var result = this.messageErrorRequired.filter(field => this.state.patient[field.field] === '')
      .map(field => {
        this.state.errorField[field.field] = true
        if (field.key === 'info') {
          return (setErrorMsg('info', 'กรุณากรอกข้อมูลส่วนประวัติส่วนตัวให้ครบถ้วน', this.state.errorInfo))
        } else if (field.key === 'homeAddress') {
          return (setErrorMsg('homeAddress', 'กรุณากรอกข้อมูลส่วนที่อยู่ปัจจุบันให้ครบถ้วน', this.state.errorAddr))
        } else if (field.key === 'allergy') {
          return (setErrorMsg('allergy', 'กรุณากรอกข้อมูลส่วนของการแพ้ยาให้ครบถ้วน', this.state.errorAllergy))
        } else if (field.key === 'privilege') {
          return (setErrorMsg('privilege', 'กรุณากรอกข้อมูลส่วนสิทธิการรักษาให้ครบถ้วน', this.state.errorAllergy))
        }
      })
    this.setState({ reState: '' })
  }


  validate = () => {
    let statusErrInfo = false;
    let statusErrAddr = false;
    let statusErrEmer = false;
    let statusErrParent = false;
    let statusErrAllergy = false;
    let statusErrPrivilege = false;

    // required field
    // info
    var tmp = [];
    this.messageErrorRequired.filter(field => this.state.patient[field.field] === '')
      .map(field => {
        this.state.errorField[field.field] = true
        switch (field.key) {
          case 'info':
            statusErrInfo = true;
            return (setErrorMsg('info', 'กรุณากรอกข้อมูลส่วนประวัติส่วนตัวให้ครบถ้วน', this.state.errorInfo))
            break;
          case 'homeAddress':
            statusErrAddr = true;
            return (setErrorMsg('homeAddress', 'กรุณากรอกข้อมูลส่วนที่อยู่ปัจจุบันให้ครบถ้วน', this.state.errorAddr))
            break;
          case 'allergy':
            statusErrAllergy = true;
            return (setErrorMsg('allergy', 'กรุณากรอกข้อมูลส่วนของการแพ้ยาให้ครบถ้วน', this.state.errorAllergy))
            break;
          case 'privilege':
            statusErrPrivilege = true;
            return (setErrorMsg('privilege', 'กรุณากรอกข้อมูลส่วนสิทธิการรักษาให้ครบถ้วน', this.state.errorAllergy))
            break;
        }
      })

    // allergy
    if (this.state.patient.allergy === 'other') {
      statusErrAllergy = true;
      setErrorMsg('allergy', 'กรุณาระบุประวัติการแพ้', this.state.errorAllergy)
    }

    // privilege
    if (this.state.patient.privilege === 'other') {
      statusErrPrivilege = true;
      setErrorMsg('privilege', 'กรุณาระบุสิทธิ์การรักษา', this.state.errorAllergy)
    }

    if (!statusErrInfo) { setErrorMsgSplice('info', this.state.errorInfo) }
    if (!statusErrAddr) { setErrorMsgSplice('homeAddress', this.state.errorAddr) }
    if (!statusErrAllergy) { setErrorMsgSplice('allergy', this.state.errorAllergy) }
    if (!statusErrPrivilege) { setErrorMsgSplice('privilege', this.state.errorAllergy) }

    // optional field
    // emer
    if (this.state.requiredAllEmerField) {
      this.messageErrorEmerField.filter(field => (this.state.patient[field.field] === '' || this.state.patient[field.field] === undefined))
        .map(field => {
          statusErrAddr = true
          this.state.errorField[field.field] = true
          setErrorMsg('emer', 'กรุณากรอกข้อมูลส่วนข้อมูลติดต่อฉุกเฉินให้ครบถ้วน', this.state.errorEmer)
        })
      if (!statusErrAddr) {
        setErrorMsgSplice('emer', this.state.errorEmer)
      }
    }

    // parent
    if (this.state.requiredAllParentField) {
      if ((this.state.patient.motherFirstname !== '' && this.state.patient.motherLastname != '') ||
        (this.state.patient.fatherFirstname !== '' && this.state.patient.fatherLastname != '')) {
        this.messageErrorParentField.map(field => {
          this.state.errorField[field.field] = false
        })
        setErrorMsgSplice('parent', this.state.errorParent)
      } else {
        statusErrParent = true
        this.messageErrorParentField.map(field => {
          this.state.errorField[field.field] = true
        })
        setErrorMsg('parent', 'กรุณากรอกข้อมูลส่วนข้อมูลผู้ปกครองให้ครบถ้วนอย่างน้อย 1 คน', this.state.errorParent)
      }
    }
    this.setState({ reState: '' })

    if (!statusErrInfo && !statusErrAddr && !statusErrEmer && !statusErrParent && !statusErrAllergy && !statusErrPrivilege) {
      this.showPopupConfirm()
    }
  }

  insertPatient = () => {
    console.log('insertPatient')
    // const allergy = !this.state.allergy.disabled ? this.state.otherallergy : this.state.allergy.value
    // const privilege = !this.state.privilege.disabled ? this.state.otherprivilege : this.state.privilege.value
    const hn = 'HP2312';
    contract.setInfoPatientPart1(web3.fromAscii(this.state.patient.citizenId), web3.fromAscii(this.state.currentDate), web3.fromAscii(hn), web3.fromAscii(this.state.patient.password), defaultAccount)
    contract.setInfoPatientPart2(web3.fromAscii(this.state.patient.citizenId), web3.fromAscii(this.state.patient.dob), web3.fromAscii(this.state.patient.nameTitle), web3.fromAscii(this.state.patient.firstname), web3.fromAscii(this.state.patient.lastname), web3.fromAscii(this.state.patient.gender), defaultAccount);
    contract.setInfoPatientPart3(web3.fromAscii(this.state.patient.citizenId), web3.fromAscii(this.state.patient.congenitalDisease), web3.fromAscii(this.state.patient.bloodgroup), web3.fromAscii(this.state.patient.religion), web3.fromAscii(this.state.patient.nationality), web3.fromAscii(this.state.patient.country), defaultAccount);
    contract.setInfoPatientPart4(web3.fromAscii(this.state.patient.citizenId), web3.fromAscii(this.state.patient.status), web3.fromAscii(this.state.patient.occupartion === '' ? '-' : this.state.patient.occupartion), web3.fromAscii(this.state.patient.homePhonenumber === '' ? '-' : this.state.patient.homePhonenumber ), web3.fromAscii(this.state.patient.mobileNumber), web3.fromAscii(this.state.patient.email), defaultAccount);
    contract.setEmail(web3.fromAscii(this.state.patient.email), defaultAccount);

    const result = contract.getInfoPatientPart1(web3.fromAscii(this.state.patient.citizenId));
    result.map(res => {
      console.log('getInfoPatientPart1',web3.toAscii(res))
    })
    contract.setAddressPatient(web3.fromAscii(this.state.patient.citizenId), web3.fromAscii(this.state.patient.typeofHouse), this.state.patient.address, web3.fromAscii(this.state.patient.province), web3.fromAscii(this.state.patient.district), web3.fromAscii(this.state.patient.subDistrict), web3.fromAscii(this.state.patient.zipcode), defaultAccount)

    contract.setPatientAllergy(web3.fromAscii(this.state.patient.citizenId), web3.fromAscii(this.state.patient.allergy), web3.fromAscii(this.state.patient.privilege), defaultAccount);

    if (this.state.patient.emerTitle != '' || this.state.patient.emerFirstname != '' || this.state.patient.emerLastname != '') {
      contract.setEmergencyContactPart1(web3.fromAscii(this.state.patient.citizenId), web3.fromAscii(this.state.patient.emerTitle), web3.fromAscii(this.state.patient.emerFirstname), web3.fromAscii(this.state.patient.emerLastname), web3.fromAscii(this.state.patient.emerRelationship), web3.fromAscii((this.state.patient.emerHomePhonenumber === '') || (this.state.patient.emerHomePhonenumber === undefined) ? '-' : this.state.patient.emerHomePhonenumber), web3.fromAscii(this.state.patient.emerMobileNumber), defaultAccount)
      contract.setEmergencyContactPart2(web3.fromAscii(this.state.patient.citizenId), web3.fromAscii(this.state.patient.typeofHouse), this.state.patient.address, web3.fromAscii(this.state.patient.province), web3.fromAscii(this.state.patient.district), web3.fromAscii(this.state.patient.subDistrict), web3.fromAscii(this.state.patient.zipcode), defaultAccount)
    }

    if ((this.state.patient.fatherFirstname !== '' && this.state.patient.fatherLastname != '') || (this.state.patient.motherFirstname !== '' && this.state.patient.motherLastname != '') ) {
      console.log("SAVE PATIENT!!!")
      console.log("father :" + this.state.patient.fatherFirstname + ' ' + this.state.patient.fatherLastname)
      console.log("mother :" + this.state.patient.motherFirstname + ' ' + this.state.patient.motherLastname)
      
      contract.setPatientParent(this.state.patient.citizenId, web3.fromAscii(this.state.patient.fatherFirstname === '' ? '-' : this.state.patient.fatherFirstname), web3.fromAscii(this.state.patient.fatherLastname === '' ? ' ' : this.state.patient.fatherLastname ), web3.fromAscii(this.state.patient.motherFirstname === '' ? '-' : this.state.patient.fatherLastname), web3.fromAscii(this.state.patient.motherLastname === '' ? ' ' : this.state.patient.fatherLastname), defaultAccount)
    }
  }

  showPopupConfirm = async () => {
    swal({
      title: 'ยืนยันการสมัคร?',
      text: "ข้อมูลที่กรอกถูกต้องตามความเป็นจริง",
      type: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#1FCB4A',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',

    }).then((result) => {
      if (result.value) {
        this.insertPatient();
          swal(
            'สมัครเสร็จสิ้น!',
            'การสมัครเสร็จสิ้นท่านสามารถล็อคอินเข้าสู่ระบบเพื่อเริ่มใช้ได้.',
            'success',
          ).then((result) => {
            console.log(result)
            this.props.history.push('/signin')
          })
      }
    })
  }

  setFieldAndValidate = (field, value) => {
    this.setPatientDetail(field, value)
    this.state.errorField[field] = false
    this.setState({ reState: '' })
  }

  setValue = () => {
    console.log('setValue', this.makeData)
    // this.setState({ 
    //   patient: makeData
    // })
  }
  makeFieldData = () => {
    console.log('value', this.makeData)
    this.setState({
      patient: this.makeData
    })
    
  }


  render() {
    console.log(this.state)
    // console.log('idcard', web3.fromAscii('1231231231231'))
    // const errorList = this.state.errorText.map(msg => (msg.value))
    return (
      <Wrapper>
        <ContanierTop>
          <Header size='huge' color='teal' textAlign='center' >NEW PATIENT REGISTRATION FORM </Header>

          <Segment style={{ borderRadius: '20px' }} >

            <Button.Group widths='4' >
              <Button color='instagram' 
                onClick={() => this.makeFieldData()} 
                style={{ fontFamily: 'kanit' }} 
                content='กรอกข้อมูลสำเร็จ(ไม่ติ๊กที่อยู่เดียวกัน)'
                />
              <Button.Or />
              <Button color='instagram' 
                  onClick={() => this.makeFieldData()} 
                  style={{ fontFamily: 'kanit' }} 
                  content='กรอกข้อมูลสำเร็จ(ติ๊กที่อยู่เดียวกัน)'/>>
              <Button.Or />
              <Button color='instagram' 
                onClick={() => this.makeFieldData()} 
                style={{ fontFamily: 'kanit' }} 
                content='เช็คข้อมูลซ้ำ'/>>
            </Button.Group>
            
          </Segment>

          <Form>
            <InfoPatient style={{borderRadius:'20px'}}
              patient={this.state.patient}
              currentDate={this.state.currentDate}
              setPatientDetail={this.setPatientDetail}
              errorText={this.state.errorInfo}
              setField={this.setField}
              cardType={this.state.cardType}
              age={this.state.age}
              errorField={this.state.errorField}
              setFieldAndValidate={this.setFieldAndValidate}
              requiredAllParentField={this.state.requiredAllParentField}
            />
            <Segment style={{ borderRadius: '2rem' }}>
              <Label as='a' color='teal' ribbon ><h4 style={{ fontFamily: 'Kanit' }}>ที่อยู่ปัจจุบัน (โปรดระบุอย่างละเอียด) (Home Address)</h4></Label>
              <br /><br />
              <ErrorMessage
                errorText={this.state.errorAddr}
                cardType={this.state.cardType}
              />
              <HomeAddress
                field='home'
                setPatientDetail={this.setPatientDetail}
                errorField={this.state.errorField}
                setFieldAndValidate={this.setFieldAndValidate}
                patient={this.state.patient}
              />
            </Segment>
            <br></br>

            <EmergencyContact
              patient={this.state.patient}
              setPatientDetail={this.setPatientDetail}
              errorText={this.state.errorEmer}
              setField={this.setField}
              cardType={this.state.cardType}
              errorField={this.state.errorField}
              setFieldAndValidate={this.setFieldAndValidate}
              requiredAllEmerField={this.state.requiredAllEmerField}
            />

            <PatientParent
              setPatientDetail={this.setPatientDetail}
              requiredAllParentField={this.state.requiredAllParentField}
              setFieldAndValidate={this.setFieldAndValidate}
              cardType={this.state.cardType}
              errorText={this.state.errorParent}
              errorField={this.state.errorField}
            />

            <Allergy
              patient={this.state.patient}
              setPatientDetail={this.setPatientDetail}
              errorField={this.state.errorField}
              setFieldAndValidate={this.setFieldAndValidate}
              cardType={this.state.cardType}
              errorText={this.state.errorAllergy}
            />


            <Form.Group inline>
              <Form.Field control={Checkbox}
                label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก'
                onChange={() => this.setState({ agreement: !this.state.agreement })}
              />
            </Form.Group>
            <GridColumn width={16}>
              <Button disabled={!this.state.agreement}
                onClick={() => this.validate()}
                color='green'>
                <h3>CONFIRM</h3>
              </Button>
              <Link to='/'><Button color='google plus'><h3>CANCEL</h3></Button></Link>

            </GridColumn>
            <br></br><br></br>
          </Form>
        </ContanierTop>
        <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled" />
      </Wrapper>
    )
  }
}