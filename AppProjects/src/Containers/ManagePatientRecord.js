import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Header, Icon, Image, Form, Container, Modal, Button, Checkbox, Grid, Segment, Label, Divider } from 'semantic-ui-react'

import swal from 'sweetalert2';
import WOW from 'wowjs';
import styled from 'styled-components'
import ScrollUpButton from "react-scroll-up-button";
import moment from 'moment';

//Component
import InfoPatient from '../Components/Patients/ManagePatientProfile/InfoPatient';
import HomeAddress from '../Components/Patients/ManagePatientProfile/HomeAddress'
import EmergencyContact from '../Components/Patients/ManagePatientProfile/EmergencyContact'
import PatientParent from '../Components/Patients/ManagePatientProfile/PatientParent'
import Allergy from '../Components/Patients/ManagePatientProfile/Allergy'
import ErrorMessage from '../Components/Patients/ManagePatientProfile/ErrorMessage'
import Register from '../Components/Patients/ManagePatientProfile/Register'
import EditProfile from '../Components/Patients/ManagePatientProfile/EditProfile'


//provider
import { setErrorMsg, setErrorMsgSplice } from '../Services/Utils';
import { insertPatient, editProfile, confirmChangePassword } from "../Services/ManagePatientMethod";

//static
import BackgroundImage from './../Static/Img/BG.png'
import { patientField, groupInfoPatientField } from "../Static/Data/Field"
// import EditProfile from '../Components/Patients/ManagePatientProfile/FormEditProfile';

//css
const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`

const ContanierTop = styled(Container)`
    padding-top:4%;
`

const GridColumn = styled(Grid.Column)`
    display: flex;
    justify-content: center;
    align-items: center;
`
const SegmentForm = styled(Segment)`
    border-radius: 1rem !important;
    padding: 2rem !important;
`

export default class ManagePatientRecord extends Component {
  state = {
    patient: {},
    errorField: {},
    registerDate: moment().format('LLLL'),
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
    reState: '',
    editSuccess:''
  }

  allField = {
    info: [
      // { field: 'dob', key: 'info' },
      // { field: 'email', key: 'info' },
      // { field: 'password', key: 'info' },
      { field: 'nametitle', key: 'editInfoPart2', required: true },
      { field: 'firstname', key: 'editInfoPart2', required: true },
      { field: 'lastname', key: 'editInfoPart2', required: true },
      { field: 'congenitalDisease', key: 'editInfoPart3', required: true },
      // { field: 'gender', key: 'info' },
      // { field: 'bloodgroup', key: 'info' },
      // { field: 'password', key: 'info' },
      { field: 'religion', key: 'editInfoPart3', required: true },
      { field: 'nationality', key: 'editInfoPart3', required: true },
      { field: 'country', key: 'editInfoPart3', required: true },
      { field: 'status', key: 'editInfoPart4', required: true },
      { field: 'mobileNumber', key: 'editInfoPart4', required: true },
      { field: 'occupartion', key: 'editInfoPart4', required: false },
      { field: 'homePhonenumber', key: 'editInfoPart4', required: false },
    ],
    address: [
      //Address
      { field: 'typeofHouse', key: 'editAddress', required: true },
      { field: 'address', key: 'editAddress', required: true },
      { field: 'province', key: 'editAddress', required: true },
      { field: 'district', key: 'editAddress', required: true },
      { field: 'subDistrict', key: 'editAddress', required: true },
      { field: 'zipcode', key: 'editAddress', required: true },
    ],
    emer: [
      //Emer
      { field: 'emerTitle', key: 'editEmerContact1', required: true },
      { field: 'emerFirstname', key: 'editEmerContact1', required: true },
      { field: 'emerLastname', key: 'editEmerContact1', required: true },
      { field: 'emerRelationship', key: 'editEmerContact1', required: true },
      { field: 'emerMobileNumber', key: 'editEmerContact1', required: true },
      { field: 'emerHomePhonenumber', key: 'editEmerContact1', required: false },
      { field: 'emerTypeofHouse', key: 'editEmerContact2', required: true },
      { field: 'emerAddress', key: 'editEmerContact2', required: true },
      { field: 'emerProvince', key: 'editEmerContact2', required: true },
      { field: 'emerDistrict', key: 'editEmerContact2', required: true },
      { field: 'emerSubDistrict', key: 'editEmerContact2', required: true },
      { field: 'emerZipcode', key: 'editEmerContact2', required: true },
    ],
    parent: [
      //parent
      { field: 'fatherFirstname', key: 'parent', required: true },
      { field: 'fatherLastname', key: 'parent', required: true },
      { field: 'motherFirstname', key: 'parent', required: true },
      { field: 'motherLastname', key: 'parent', required: true },
    ],
    allergy: [
      //Allergy
      { field: 'allergy', key: 'editAllergy', required: true },
      { field: 'privilege', key: 'editAllergy', required: true }
    ],
    changeEmail: [
      { field: 'email', key: 'editEmail', required: true },
    ],
    changePassword: [
      { field: 'password', key: 'editPassword', required: true },
    ]
  }


  messageErrorRequired = [
    //info
    { field: 'dob', key: 'info' },
    { field: 'email', key: 'info' },
    { field: 'password', key: 'info' },
    { field: 'nametitle', key: 'info' },
    { field: 'firstname', key: 'info' },
    { field: 'lastname', key: 'info' },
    { field: 'congenitalDisease', key: 'info' },
    { field: 'gender', key: 'info' },
    { field: 'bloodgroup', key: 'info' },
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

  // checkEmptyField = () => {
  //   var tmp = [];
  //   var result = this.messageErrorRequired.filter(field => this.state.patient[field.field] === '')
  //     .map(field => {
  //       this.state.errorField[field.field] = true
  //       if (field.key === 'info') {
  //         return (setErrorMsg('info', 'กรุณากรอกข้อมูลส่วนประวัติส่วนตัวให้ครบถ้วน', this.state.errorInfo))
  //       } else if (field.key === 'homeAddress') {
  //         return (setErrorMsg('homeAddress', 'กรุณากรอกข้อมูลส่วนที่อยู่ปัจจุบันให้ครบถ้วน', this.state.errorAddr))
  //       } else if (field.key === 'allergy') {
  //         return (setErrorMsg('allergy', 'กรุณากรอกข้อมูลส่วนของการแพ้ยาให้ครบถ้วน', this.state.errorAllergy))
  //       } else if (field.key === 'privilege') {
  //         return (setErrorMsg('privilege', 'กรุณากรอกข้อมูลส่วนสิทธิการรักษาให้ครบถ้วน', this.state.errorAllergy))
  //       }
  //     })
  //   this.setState({ reState: '' })
  // }


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
          case 'homeAddress':
            statusErrAddr = true;
            return (setErrorMsg('homeAddress', 'กรุณากรอกข้อมูลส่วนที่อยู่ปัจจุบันให้ครบถ้วน', this.state.errorAddr))
          case 'allergy':
            statusErrAllergy = true;
            return (setErrorMsg('allergy', 'กรุณากรอกข้อมูลส่วนของการแพ้ยาให้ครบถ้วน', this.state.errorAllergy))
          case 'privilege':
            statusErrPrivilege = true;
            return (setErrorMsg('privilege', 'กรุณากรอกข้อมูลส่วนสิทธิการรักษาให้ครบถ้วน', this.state.errorAllergy))
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

  showPopupConfirm = async () => {
    swal({
      title: 'Are you sure?',
      text: "Please check that your information is correct and true.",
      type: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#1FCB4A',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.value) {
        swal({
          title: 'System is saving data.',
          html: 'Please do not close this popup.!',
          onOpen: () => {
            swal.showLoading()
            insertPatient(this.state.patient).then(res => {
              if (res) {
                swal.disableLoading()
                if (res.status) {
                  swal(
                    'Successful!',
                    'You have successfully logged into the system to get started..',
                    'success',
                  ).then((result) => {
                    this.props.history.push('/signin')
                  })
                }
              }
            })
          }
        })
      }
    })
  }

  validateEdit = async (group) => {
    this.setState({ editSuccess: '' })
    let patient = { ...this.props.patient}
    let arr = [];
    if (this.allField[group]){
      this.allField[group].map(field => {
        if (this.state.patient[field.field]) {
          if (this.state.patient[field.field] != this.props.patient[field.field]) {
            patient[field.field] = this.state.patient[field.field]
            this.state.patient[field.key] = true;
            return
          }
          if (field.field == 'email') {
            if (this.state.patient.email != this.props.patient.newEmail) {
              this.state.patient[field.key] = true;
              patient.email = this.state.patient.newEmail
              return
            }
          }
        } else {
          if (field.field == 'password') {
            this.state.patient[field.key] = true;
            return
          }
          if (field.required) {
            arr.push(field.field)
          }
        }
      })

      let message = ""
      if (arr.length > 0) {
        if (arr.length == 1) {
          message = arr[0] + " is required!"
        } else if (arr.length > 1) {
          arr.map((text, i) => {
            if (i === arr.length - 1) {
              message += text + " are required!";
              return
            }
            message += text + ", ";
          })
          alert(message)
        }
        return false
      }
      return this.showPopupConfirmEdit(patient, group);
    }
    return false
  }

  processMethod = async(group) => {
    if(group === 'changePassword'){
      return await confirmChangePassword(this.state.patient)
    }else{
      return await editProfile(this.state.patient)
    }
  }

  showPopupConfirmEdit = (patient, group) => {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#1FCB4A',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        swal({
          title: 'System is saving data.',
          html: 'Please do not close this popup.!',
          onOpen: () => {
            swal.showLoading()
            this.processMethod(group).then(res => {
              if (res) {
                swal.disableLoading()
                if (res.status) {
                  swal(
                    'Successful!',
                    'You can check your profile on the profile page.',
                    'success',
                  ).then(res => {
                    if(res){
                      this.props.setField("patient", patient)
                      this.setState({ editSuccess: group })
                      return true
                    }
                    return false
                  })
                }else{
                  swal({
                    type: "error",
                    text: res.message,
                    showConfirmButton: false,
                    showCloseButton: true,
                  });
                  // this.setState({ editSuccess: group })
                }
              }
              return false
            })
          }
        })
      }
      return false
    })
  }

  setFieldAndValidate = (field, value) => {
    this.setPatientDetail(field, value)
    this.state.errorField[field] = false
    this.setState({ reState: '' })
  }


  // componentWillReceiveProps = (nextProps) => {
  //   console.log("componentWillReceiveProps", nextProps)
  //   if (nextProps.patient){
  //     this.setState({ 
  //       patient: nextProps.patient,
  //     });
  //   }
  // }

  componentDidMount = () => {
    if (this.props.patient) {
      this.setState({
        patient: { ...this.props.patient },
      });
    }
  }


  render() {
    if (this.props.editStatus) {
      return (
        <EditProfile
          state={this.state}
          setPatientDetail={this.setPatientDetail}
          setField={this.setField}
          cardType={this.state.cardType}
          setFieldAndValidate={this.setFieldAndValidate}
          editStatus={true}
          // showPopupConfirmEdit={this.showPopupConfirmEdit}
          validateEdit={this.validateEdit}
        />
      )
    }
    return (
      <Register
        state={this.state}
        setPatientDetail={this.setPatientDetail}
        setField={this.setField}
        cardType={this.state.cardType}
        setFieldAndValidate={this.setFieldAndValidate}
        editStatus={false}
        validate={this.validate}
      />
    )
  }
}