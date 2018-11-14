import React, { Component } from 'react';
import { Container, Grid, Segment, } from 'semantic-ui-react'

import swal from 'sweetalert2';
import styled from 'styled-components'
import moment from 'moment';

//Component
import Register from '../Components/Patients/ManagePatientProfile/Register'
import EditProfile from '../Components/Patients/ManagePatientProfile/EditProfile'

//provider
import { setErrorMsg, setErrorMsgSplice } from '../Services/Utils';
import { insertPatient, editProfile, confirmChangePassword, validateOTP } from "../Services/ManagePatientMethod";
import { confirmPopup, successPopup, successTXPopup, errorPopup } from "../Components/SweetAlert"
import { pattern } from '../Static/Data/Field';



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
    errorVerify: [],
    agreement: false,
    reState: '',
    editSuccess: '',
    // changeMobile : false,
  }

  allField = {
    info: [
      { field: 'citizenId', key: 'non', required: true, validateKey: 'info' },
      { field: 'dob', key: 'non', required: true, validateKey: 'info' },
      // { field: 'email', key: 'info' },
      // { field: 'password', key: 'info' },
      { field: 'nametitle', key: 'editInfoPart2', required: true, validateKey: 'info' },
      { field: 'firstname', key: 'editInfoPart2', required: true, validateKey: 'info' },
      { field: 'lastname', key: 'editInfoPart2', required: true, validateKey: 'info' },
      { field: 'congenitalDisease', key: 'editInfoPart3', required: true, validateKey: 'info' },
      { field: 'gender', key: 'non', required: true, validateKey: 'info' },
      { field: 'bloodgroup', key: 'non', required: true, validateKey: 'info' },
      // { field: 'password', key: 'info' },
      { field: 'religion', key: 'editInfoPart3', required: true, validateKey: 'info' },
      { field: 'nationality', key: 'editInfoPart3', required: true, validateKey: 'info' },
      { field: 'country', key: 'editInfoPart3', required: true, validateKey: 'info' },
      { field: 'status', key: 'editInfoPart4', required: true, validateKey: 'info' },
      // { field: 'mobileNumber', key: 'editInfoPart4', required: true },
      { field: 'occupartion', key: 'editInfoPart4', required: false, validateKey: null },
      { field: 'homePhonenumber', key: 'editInfoPart4', required: false, validateKey: null },
    ],
    address: [
      //Address
      { field: 'typeofHouse', key: 'editAddress', required: true, validateKey: 'homeAddress' },
      { field: 'address', key: 'editAddress', required: true, validateKey: 'homeAddress' },
      { field: 'province', key: 'editAddress', required: true, validateKey: 'homeAddress' },
      { field: 'district', key: 'editAddress', required: true, validateKey: 'homeAddress' },
      { field: 'subDistrict', key: 'editAddress', required: true, validateKey: 'homeAddress' },
      { field: 'zipcode', key: 'editAddress', required: true, validateKey: 'homeAddress' },
    ],
    emer: [
      //Emer
      { field: 'emerTitle', key: 'editEmerContact1', required: true, validateKey: 'emer' },
      { field: 'emerFirstname', key: 'editEmerContact1', required: true, validateKey: 'emer' },
      { field: 'emerLastname', key: 'editEmerContact1', required: true, validateKey: 'emer' },
      { field: 'emerRelationship', key: 'editEmerContact1', required: true, validateKey: 'emer' },
      { field: 'emerMobileNumber', key: 'editEmerContact1', required: true, validateKey: 'emer' },
      { field: 'emerHomePhonenumber', key: 'editEmerContact1', required: false, validateKey: null },
      { field: 'emerTypeofHouse', key: 'editEmerContact2', required: true, validateKey: 'emer' },
      { field: 'emerAddress', key: 'editEmerContact2', required: true, validateKey: 'emer' },
      { field: 'emerProvince', key: 'editEmerContact2', required: true, validateKey: 'emer' },
      { field: 'emerDistrict', key: 'editEmerContact2', required: true, validateKey: 'emer' },
      { field: 'emerSubDistrict', key: 'editEmerContact2', required: true, validateKey: 'emer' },
      { field: 'emerZipcode', key: 'editEmerContact2', required: true, validateKey: 'emer' },
    ],
    parent: [
      //parent
      { field: 'fatherFirstname', key: 'parent', required: true, validateKey: 'parent' },
      { field: 'fatherLastname', key: 'parent', required: true, validateKey: 'parent' },
      { field: 'motherFirstname', key: 'parent', required: true, validateKey: 'parent' },
      { field: 'motherLastname', key: 'parent', required: true, validateKey: 'parent' },
    ],
    allergy: [
      //Allergy
      { field: 'allergy', key: 'editAllergy', required: true, validateKey: 'allergy' },
      { field: 'privilege', key: 'editAllergy', required: true, validateKey: 'privilege' }
    ],
    changeEmail: [
      { field: 'email', key: 'editEmail', required: true },
    ],
    changePassword: [
      { field: 'password', key: 'editPassword', required: true },
    ],
    changeMobileNumber: [
      { field: 'mobileNumber', key: 'editInfoPart4', required: true },
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

  filterReturn = (field) => {
    this.state.patient[field.field] = typeof this.state.patient[field.field] == 'string' ? this.state.patient[field.field].trim() : this.state.patient[field.field]
    if (field.required && !this.state.patient[field.field] ||
      field.field == 'allergy' && this.state.patient.allergy === 'other' ||
      field.field == 'privilege' && this.state.patient.allergy === 'other' || 
      field.field == 'password' && this.state.patient.password.match(pattern.password.pattern) ||
      field.field == 'email' && this.state.patient.email.match(pattern.email.pattern)
      // field.field == 'mobileNumber' && this.state.patient.mobileNumber.match(pattern.mobileNumber.pattern) ||
      // field.field == 'homePhonenumber' && this.state.patient.homePhonenumber.match(pattern.homePhonenumber.pattern) ||
      // field.field == 'emerMobileNumber' && this.state.patient.emerMobileNumber.match(pattern.emerMobileNumber.pattern)
      // field.field == 'homePhonenumber' && this.state.patient.homePhonenumber.match(pattern.homePhonenumber.pattern) ||
      ) {
      this.state.errorField[field.field] = true;
      return field
    }
  }

  validate = () => {
    console.log("validate!!", this.state.patient)
    const keys = Object.keys(this.allField)
    let tmp = []
    keys.map(key => {
      if (key == 'parent' && !this.state.requiredAllParentField ||
        key == 'emer' && !this.state.requiredAllEmerField) {
        return
      }
      if (key == 'parent') {
        if (this.state.patient.motherFirstname && this.state.patient.motherLastname 
          ||  this.state.patient.fatherFirstname && this.state.patient.fatherLastname ) {
          return
        }
      }
      tmp = [...tmp, ...this.allField[key].filter(field => this.filterReturn(field))]
    })
    console.log('errorField', this.state.errorField)
    console.log('tmp', tmp)
    if (tmp.length > 0) {
      errorPopup("Please fill in all information.", "Incomplete")
      return false
    } else if (this.state.errorInfo.length > 0 || this.state.errorAddr.length > 0 || this.state.errorEmer.length > 0 ||
          this.state.errorParent.length > 0 || this.state.errorAllergy.length > 0 || this.state.errorVerify.length > 0 ){
      errorPopup("Please fill in the information correctly.")
      return false
    }
    this.showPopupConfirm()
    return true
  }

  // validate = () => {
  //   console.log("validate!!",this.state.patient)
  //   let statusErrInfo = false;
  //   let statusErrAddr = false;
  //   let statusErrEmer = false;
  //   let statusErrParent = false;
  //   let statusErrAllergy = false;
  //   let statusErrPrivilege = false;

  //   // required field
  //   // info
  //   var tmp = [];
  //   this.messageErrorRequired.filter(field => this.state.patient[field.field] === '')
  //     .map(field => {
  //       this.state.errorField[field.field] = true
  //       switch (field.key) {
  //         case 'info':
  //           statusErrInfo = true;
  //           return (setErrorMsg('info', 'กรุณากรอกข้อมูลส่วนประวัติส่วนตัวให้ครบถ้วน', this.state.errorInfo))
  //         case 'homeAddress':
  //           statusErrAddr = true;
  //           return (setErrorMsg('homeAddress', 'กรุณากรอกข้อมูลส่วนที่อยู่ปัจจุบันให้ครบถ้วน', this.state.errorAddr))
  //         case 'allergy':
  //           statusErrAllergy = true;
  //           return (setErrorMsg('allergy', 'กรุณากรอกข้อมูลส่วนของการแพ้ยาให้ครบถ้วน', this.state.errorAllergy))
  //         case 'privilege':
  //           statusErrPrivilege = true;
  //           return (setErrorMsg('privilege', 'กรุณากรอกข้อมูลส่วนสิทธิการรักษาให้ครบถ้วน', this.state.errorAllergy))
  //       }
  //     })

  //   // allergy
  //   if (this.state.patient.allergy === 'other') {
  //     statusErrAllergy = true;
  //     setErrorMsg('allergy', 'กรุณาระบุประวัติการแพ้', this.state.errorAllergy)
  //   }

  //   // privilege
  //   if (this.state.patient.privilege === 'other') {
  //     statusErrPrivilege = true;
  //     setErrorMsg('privilege', 'กรุณาระบุสิทธิ์การรักษา', this.state.errorAllergy)
  //   }

  //   if (!statusErrInfo) { setErrorMsgSplice('info', this.state.errorInfo) }
  //   if (!statusErrAddr) { setErrorMsgSplice('homeAddress', this.state.errorAddr) }
  //   if (!statusErrAllergy) { setErrorMsgSplice('allergy', this.state.errorAllergy) }
  //   if (!statusErrPrivilege) { setErrorMsgSplice('privilege', this.state.errorAllergy) }

  //   // optional field
  //   // emer
  //   if (this.state.requiredAllEmerField) {
  //     this.messageErrorEmerField.filter(field => (this.state.patient[field.field] === '' || this.state.patient[field.field] === undefined))
  //       .map(field => {
  //         statusErrAddr = true
  //         this.state.errorField[field.field] = true
  //         setErrorMsg('emer', 'กรุณากรอกข้อมูลส่วนข้อมูลติดต่อฉุกเฉินให้ครบถ้วน', this.state.errorEmer)
  //       })
  //     if (!statusErrAddr) {
  //       setErrorMsgSplice('emer', this.state.errorEmer)
  //     }
  //   }

  //   // parent
  //   if (this.state.requiredAllParentField) {
  //     if ((this.state.patient.motherFirstname !== '' && this.state.patient.motherLastname != '') ||
  //       (this.state.patient.fatherFirstname !== '' && this.state.patient.fatherLastname != '')) {
  //       this.messageErrorParentField.map(field => {
  //         this.state.errorField[field.field] = false
  //       })
  //       setErrorMsgSplice('parent', this.state.errorParent)
  //     } else {
  //       statusErrParent = true
  //       this.messageErrorParentField.map(field => {
  //         this.state.errorField[field.field] = true
  //       })
  //       setErrorMsg('parent', 'กรุณากรอกข้อมูลส่วนข้อมูลผู้ปกครองให้ครบถ้วนอย่างน้อย 1 คน', this.state.errorParent)
  //     }
  //   }
  //   this.setState({ reState: '' })

  //   if (!statusErrInfo && !statusErrAddr && !statusErrEmer && !statusErrParent && !statusErrAllergy && !statusErrPrivilege) {
  //     this.showPopupConfirm()
  //   }
  // }

  showPopupConfirm = async () => {
    console.log("showPopupConfirm",this.state.patient)
    confirmPopup().then(async res => {
      if (res.value) {
        swal({
          title: 'System is saving data.',
          html: 'Please do not close this popup.!',
          onOpen: () => {
            swal.showLoading()
            insertPatient(this.state.patient).then(async res => {
              if (res) {
                swal.disableLoading()
                if (res.status) {
                  if (res.data.transaction) {
                    successTXPopup('You have successfully logged into the system to get started.', res.data.transaction).then(res => {
                      this.props.history.push('/signin')
                    })
                  } else {
                    successPopup('You have successfully logged into the system to get started.').then(res => {
                      this.props.history.push('/signin')
                    })
                  }

                }
              }
            })
          }
        })
      }
    })
  }

  validateEdit = async (group, dataForOTP = null) => {
    console.log("patient", this.state.patient)
    console.log("props", this.props.patient)
    let patient = { ...this.state.patient }
    let statusChange = false;
    if (dataForOTP) {
      console.log("newMobileNumber", this.state.patient, this.props.patient)
      if (this.state.patient.newMobileNumber && this.state.patient.newMobileNumber != this.props.patient.mobileNumber) {
        patient.mobileNumber = this.state.patient.newMobileNumber
        patient.editInfoPart4 = true;
        statusChange = true
        this.submitValidateOTP(patient, { group, ...dataForOTP })
        return
      }
    }

    if (this.allField[group]) {
      this.allField[group].map(field => {
        if (field.field == 'email') {
          if (this.state.patient.email != this.props.patient.newEmail) {
            patient[field.key] = true;
            patient.newEmail = this.state.patient.newEmail
            this.state.patient.email = this.state.patient.newEmail
            statusChange = true
            return
          }
        }
        if (field.field == 'password') {
          patient[field.key] = true;
          statusChange = true
          return
        }
        if (this.state.patient[field.field] && this.state.patient[field.field] != this.props.patient[field.field]) {
          console.log("change", field.field)
          patient[field.field] = this.state.patient[field.field]
          patient[field.key] = true;
          statusChange = true
          return
        }
      })
    }
    if (statusChange) {
      this.showPopupConfirmEdit(patient, group);
    }






    // let patient = { ...this.props.patient }
    // let statusChange = false;
    // console.log("--Before--")
    // console.log(this.props.patient, this.state.patient)
    // console.log("---------")
    // let arr = [];
    // if (dataForOTP) {
    //   console.log("newMobileNumber", this.state.patient, this.props.patient)
    //   if (this.state.patient.newMobileNumber && this.state.patient.newMobileNumber != this.props.patient.mobileNumber) {
    //     patient.mobileNumber = this.state.patient.mobileNumber
    //     // this.state.patient.editInfoPart4 = true;
    //     patient.editInfoPart4 = true;
    //     console.log("patient", patient, this.props.patient, this.state.patient)
    //     statusChange = true
    //     this.submitValidateOTP(patient, { ...{ group: group }, ...dataForOTP })
    //     return
    //   }
    // }
    // if (this.allField[group]) {
    //   this.allField[group].map(field => {
    //     debugger
    //     // if (this.state.patient[field.field] != '-' && group === 'emer' ){
    //     if (this.state.patient[field.field] && this.state.patient[field.field] != '') {
    //       if (this.state.patient[field.field] != this.props.patient[field.field]) {
    //         console.log("change", field.field)
    //         patient[field.field] = this.state.patient[field.field]
    //         // this.state.patient[field.key] = true;
    //         patient[field.key] = true;
    //         console.log("patient", patient, this.props.patient, this.state.patient)
    //         statusChange = true
    //         return
    //       }
    //       if (field.field == 'email') {
    //         if (this.state.patient.email != this.props.patient.newEmail) {
    //           // this.state.patient[field.key] = true;
    //           // patient.email = this.state.patient.newEmail
    //           patient[field.key] = true;
    //           patient.newEmail = this.state.patient.newEmail
    //           this.state.patient.email = this.state.patient.newEmail
    //           statusChange = true
    //           return
    //         }
    //       }
    //     } else {
    //       if (field.field == 'password') {
    //         // this.state.patient[field.key] = true;
    //         patient[field.key] = true;
    //         statusChange = true
    //         return
    //       }
    //       if (field.required) {
    //         arr.push(field.field)
    //       }
    //     }
    //     // }
    //     // else {
    //     //   if (field.required) {
    //     //     arr.push(field.field)
    //     //   }
    //     // }
    //   })
    //   if (statusChange) {
    //     console.log("--After--")
    //     console.log(patient, this.state.patient)
    //     console.log("---------")
    //     let message = ""

    //     if (arr.length > 0) {
    //       if (arr.length == 1) {
    //         message = arr[0] + " is required!"
    //       } else if (arr.length > 1) {
    //         arr.map((text, i) => {
    //           if (i === arr.length - 1) {
    //             message += text + " are required!";
    //             return
    //           }
    //           message += text + ", ";
    //         })
    //       }
    //       // errorPopup(message,"Invalid!")
    //       return
    //     }
    //     this.showPopupConfirmEdit(patient, group);
    //     return
    //   } else {
    //     return
    //   }
    // }
    // return
  }

  processMethod = async (group, patient) => {
    if (group === 'changePassword') {
      return await confirmChangePassword(patient)
    } else {
      return await editProfile(patient)
    }
  }

  showPopupConfirmEdit = (patient, group) => {
    console.log("showPopupConfirmEdit PATIENT : ", patient)
    confirmPopup("You won't be able to revert this!").then(result => {
      if (result.value) {
        swal({
          title: 'System is saving data.',
          html: 'Please do not close this popup.!',
          onOpen: () => {
            swal.showLoading()
            this.processMethod(group, patient).then(res => {
              if (res) {
                swal.disableLoading()
                if (res.status) {
                  if (res.data.transaction) {
                    successTXPopup('You can check your profile on the profile page.', res.data.transaction).then(res => {
                      if (res) {
                        this.props.setField("patient", { ...this.state.patient })
                        this.setState({ editSuccess: group })
                      }
                    })
                  } else {
                    successPopup('You can check your profile on the profile page.').then(res => {
                      if (res) {
                        this.props.setField("patient", { ...this.state.patient })
                        this.setState({ editSuccess: group })
                      }
                    })
                  }
                } else {
                  errorPopup(res.message)
                  this.setState({ editSuccess: null })
                }
              }
            })
          }
        })
      }
    })
  }

  submitValidateOTP = (patient, data) => {
    // data = pin, requestId, citizenId, group
    console.log('submitValidateOTP', patient, data, this.state.patient)
    confirmPopup("You won't be able to revert this!").then(result => {
      if (result.value) {
        swal({
          title: 'System is saving data.',
          html: 'Please do not close this popup.!',
          onOpen: () => {
            swal.showLoading()
            validateOTP(data).then(res => {
              if (res.status) {
                this.state.patient.mobileNumber = this.state.patient.newMobileNumber
                this.processMethod(data.group, patient).then(res => {
                  // if (res) {
                  swal.disableLoading()
                  if (res.status) {
                    if (res.data.transaction) {
                      successTXPopup('You can check your profile on the profile page.', res.data.transaction).then(res => {
                        if (res) {
                          patient.mobileNumber = this.state.patient.newMobileNumber;
                          this.props.setField("patient", patient)
                          this.setState({ editSuccess: data.group })
                        }
                      })
                    } else {
                      successPopup('You can check your profile on the profile page.').then(res => {
                        if (res) {
                          patient.mobileNumber = this.state.patient.newMobileNumber;
                          this.props.setField("patient", patient)
                          this.setState({ editSuccess: data.group })
                        }
                      })
                    }

                  } else {
                    errorPopup(res.message)
                  }
                  // }
                })
              } else {
                if (res.statusCode == '17') {
                  // ผิดเกิด 3 ครั้ง
                  // patient.mobileNumber = this.props.patient.mobileNumber;
                  console.log("3 times patient", patient)
                  this.props.setField("patient", patient)
                  this.setState({ editSuccess: "sendOTP" })
                }
                errorPopup(res.message, 'OTP Password incorrect!')
              }
            })
          }
        })
      }

      // validateOTP(data).then(res => {
      //   console.log('validateOTP')
      //   if (res.status) {
      //     swal({
      //       title: 'System is saving data.',
      //       html: 'Please do not close this popup.!',
      //       onOpen: () => {
      //         swal.showLoading()
      //         this.processMethod(data.group).then(res => {
      //           if (res) {
      //             swal.disableLoading()
      //             if (res.status) {
      //               successPopup('You can check your profile on the profile page.').then(res => {
      //                 if (res) {
      //                   this.props.setField("patient", patient)
      //                   this.setState({ editSuccess: data.group })
      //                 }
      //               })
      //             } else {
      //               errorPopup(res.message)
      //             }
      //           }
      //         })
      //       }
      //     })
      //   } else {
      //     if (res.statusCode == '17') {
      //       // ผิดเกิด 3 ครั้ง
      //       this.setState({ editSuccess: data.group })
      //     }
      //     errorPopup(res.message, 'OTP Password incorrect!')
      //   }
      // })
    })
  }

  setFieldAndValidate = (field, value) => {
    this.setPatientDetail(field, value)
    this.state.errorField[field] = false
    this.setState({ reState: '', editSuccess: null })
  }

  componentDidMount = () => {
    if (this.props.patient) {
      this.setState({
        patient: { ...this.props.patient },
      });
    }
  }


  render() {
    if (this.props.editStatus) {
      // let patient = { ...this.state.patient }
      // if (patient.emerTitle == '-') {
      //   this.allField.emer.map(field => {
      //     patient[field.field] = ''
      //   })
      // }
      // if (patient.fatherFirstname == '-' && patient.fatherLastname == '-' || patient.motherFirstname == '-' && patient.motherLastname == '-'){
      //   this.allField.parent.map(field => {
      //     patient[field.field] = ''
      //   })
      // }
      // let state = {...this.state }
      // state.patient = patient;
      return (
        <EditProfile
          state={{ ...this.state }}
          setPatientDetail={this.setPatientDetail}
          setField={this.setField}
          cardType={this.state.cardType}
          setFieldAndValidate={this.setFieldAndValidate}
          editStatus={true}
          validateEdit={this.validateEdit}
          setLoader={this.props.setLoader}
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