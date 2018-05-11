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
import { setErrorMsg, setErrorMsgSplice } from './../components/Validate';
// import { defaultAccount, contract } from './../lib/web3';
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

  insertPatient = async () => {
    console.log('insertPatient')
    const allergy = !this.state.allergy.disabled ? this.state.otherallergy : this.state.allergy.value
    const privilege = !this.state.privilege.disabled ? this.state.otherprivilege : this.state.privilege.value
    const hn = 'HP2312';
    contract.setInfoPatientPart1(this.state.idCard, this.state.registerDate, hn, defaultAccount)
    contract.setInfoPatientPart2(this.state.idCard, this.state.dob, this.state.nameTitle, this.state.firstname, this.state.lastname, this.state.gender, defaultAccount);
    contract.setInfoPatientPart3(this.state.idCard, this.state.congenitalDisease, this.state.bloodgroup, this.state.religion, this.state.nationality, this.state.country, defaultAccount);
    contract.setInfoPatientPart4(this.state.idCard, this.state.status, this.state.occupartion, this.state.homePhonenumber, this.state.mobileNumber, defaultAccount)

    //blockchain
    // contract.setAddressPatient(this.state.idCard, this.state.typeofHouse, this.state.address, this.state.province, this.state.district, this.state.subDistrict, this.state.zipcode, defaultAccount)

    // contract.setPatientAllergy(this.state.idCard, allergy, privilege, defaultAccount);

    // if (this.state.emerTitle != '' || this.state.emerFirstname != '' || this.state.emerLastname != '') {
    //   contract.setEmergencyContactPart1(this.state.idCard, this.state.emerTitle, this.state.emerFirstname, this.state.emerLastname, this.state.emerRelationship, this.state.emerHomePhonenumber, this.state.emerMobileNumber, defaultAccount)
    //   contract.setEmergencyContactPart2(this.state.idCard, this.state.typeofHouse, this.state.address, this.state.province, this.state.district, this.state.subDistrict, this.state.zipcode, defaultAccount)
    // }

    // if (this.state.age < 15) {
    //   contract.setPatientParent(this.state.idCard, this.state.fatherFirstname, this.state.fatherLastname, this.state.motherFirstname, this.state.motherLastname, defaultAccount)
    // }

    //db
    // const result = await axios.post('/addPateint', {
    //                                   registerDate: this.state.registerDate,
    //                                   idCard: this.state.idCard,
    //                                   nameTitle: this.state.nameTitle,
    //                                   firstname: this.state.firstname,
    //                                   lastname: this.state.lastname,
    //                                   gender: this.state.gender,
    //                                   dob: this.state.dob,
    //                                   bloodgroup: this.state.bloodgroup,
    //                                   nationality: this.state.nationality,
    //                                   religion: this.state.religion,
    //                                   status: this.state.status,
    //                                   occupartion: this.state.occupartion,
    //                                   homePhonenumber: this.state.homePhonenumber,
    //                                   mobileNumber: this.state.mobileNumber,
    //                                   congenitalDisease: this.state.congenitalDisease,
    //                                   typeofHouse: this.state.typeofHouse,
    //                                   address: this.state.address,
    //                                   province: this.state.province,
    //                                   district: this.state.district,
    //                                   subDistrict: this.state.subDistrict,
    //                                   zipcode: this.state.zipcode,
    //                                   emerTitle: this.state.emerTitle,
    //                                   emerFirstname: this.state.emerFirstname,
    //                                   emerLastname: this.state.emerLastname,
    //                                   emerRelationship: this.state.emerRelationship,
    //                                   emerHomePhonenumber: this.state.emerHomePhonenumber,
    //                                   emerMobileNumber: this.state.emerMobileNumber,
    //                                   emerTypeofHouse: this.state.emerTypeofHouse,
    //                                   emerAddress: this.state.emerAddress,
    //                                   emerProvince: this.state.emerProvince,
    //                                   emerDistrict: this.state.emerDistrict,
    //                                   emerSubDistrict: this.state.emerSubDistrict,
    //                                   emerZipcode: this.state.emerZipcode,
    //                                   statusSameAddress: this.state.statusSameAddress,
    //                                   fatherFirstname: this.state.fatherFirstname,
    //                                   fatherLastname: this.state.fatherLastname,
    //                                   motherFirstname: this.state.motherFirstname,
    //                                   motherLastname: this.state.motherLastname,
    //                                   allergy: allergy,
    //                                   privilege: privilege,
    //                                 })
    return result;
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
        if (this.insertPatient()) {
          swal(
            'สมัครเสร็จสิ้น!',
            'การสมัครเสร็จสิ้นท่านสามารถล็อคอินเข้าสู่ระบบเพื่อเริ่มใช้ได้.',
            'success',
            this.props.history.push('/login')
          )
        }
      }
    })
  }

  setFieldAndValidate = (field, value) => {
    this.setPatientDetail(field, value)
    this.state.errorField[field] = false
    this.setState({ reState: '' })
  }


  render() {
    console.log(this.state)
    // const errorList = this.state.errorText.map(msg => (msg.value))
    return (
      <Wrapper>
        <Container>
          <Form>
            <InfoPatient
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
            <Segment>
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
        </Container>
        <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled" />
      </Wrapper>
    )
  }
}