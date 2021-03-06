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
      field.field == 'password' && !this.state.patient.password.match(pattern.password.pattern) ||
      field.field == 'email' && !this.state.patient.email.match(pattern.email.pattern)
    ) {
      this.state.errorField[field.field] = true;
      return field
    }
  }

  validate = () => {
    const keys = Object.keys(this.allField)
    let tmp = []
    keys.map(key => {
      if (key == 'parent' && !this.state.requiredAllParentField ||
        key == 'emer' && !this.state.requiredAllEmerField) {
        return
      }
      if (key == 'parent') {
        if (this.state.patient.motherFirstname && this.state.patient.motherLastname
          || this.state.patient.fatherFirstname && this.state.patient.fatherLastname) {
          return
        }
      }
      tmp = [...tmp, ...this.allField[key].filter(field => this.filterReturn(field))]
    })
    if (tmp.length > 0) {
      // errorPopup("Please fill in all information.", "Incomplete")
      return false
    } else if (this.state.errorInfo.length > 0 || this.state.errorAddr.length > 0 || this.state.errorEmer.length > 0 ||
      this.state.errorParent.length > 0 || this.state.errorAllergy.length > 0 || this.state.errorVerify.length > 0) {
      errorPopup("Please fill in the information correctly.")
      return false
    }
    this.showPopupConfirm()
    return true
  }

  showPopupConfirm = async () => {
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
    let patient = { ...this.state.patient }
    let statusChange = false;
    if (dataForOTP) {
      this.state.patient.newMobileNumber = this.state.patient.newMobileNumber.trim()
      if (this.state.patient.newMobileNumber && this.state.patient.newMobileNumber != this.props.patient.mobileNumber) {
        patient.mobileNumber = this.state.patient.newMobileNumber
        patient.editInfoPart4 = true;
        statusChange = true
        this.submitValidateOTP(patient, { group, ...dataForOTP })
        return
      }
    }

    if (this.allField[group]) {
      let tmp = this.allField[group].filter(field => {
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

        if ((this.state.patient[field.field] && field.required ||
          !field.required || group == 'emer' && this.state.patient[field.field] != '-' && field.required
        ) && this.state.patient[field.field] != this.props.patient[field.field]) {
          patient[field.field] = this.state.patient[field.field]
          patient[field.key] = true;
          statusChange = true
        } else if (field.required && !this.state.patient[field.field] ||
          group == 'emer' && this.state.patient[field.field] == '-' && field.required) {
          this.state.errorField[field.field] = true;
          return field
        }
      })
      this.setState({ errorField: this.state.errorField })
      if (tmp.length > 0) {
        return false
      } else if (this.state.errorInfo.length > 0 || this.state.errorAddr.length > 0 || this.state.errorEmer.length > 0 ||
        this.state.errorParent.length > 0 || this.state.errorAllergy.length > 0 || this.state.errorVerify.length > 0) {
        errorPopup("Please fill in the information correctly.")
        return false
      }
      if (statusChange) {
        this.showPopupConfirmEdit(patient, group);
      }
      return true
    }
  }

  processMethod = async (group, patient) => {
    if (group === 'changePassword') {
      return await confirmChangePassword(patient)
    } else {
      return await editProfile(patient)
    }
  }

  showPopupConfirmEdit = (patient, group) => {
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
                  this.allField[group].map(field => {
                    this.props.patient[field.field] = this.state.patient[field.field]
                    if (!this.props.patient[field.field]) {
                      this.props.patient[field.field] = '-'
                    }
                  })
                  if (res.data.transaction) {
                    successTXPopup('You can check your profile on the profile page.', res.data.transaction).then(res => {
                      if (res) {
                        this.props.setField("patient", this.props.patient)
                        this.setState({ editSuccess: group })
                      }
                    })
                  } else {
                    successPopup('You can check your profile on the profile page.').then(res => {
                      if (res) {
                        this.props.setField("patient", this.props.patient)
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
                  this.props.setField("patient", patient)
                  this.setState({ editSuccess: "sendOTP" })
                }
                errorPopup(res.message, 'OTP Password incorrect!')
              }
            })
          }
        })
      }
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

  goToPage = (path) => {
    this.props.history.push({
      pathname: path,
    });
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
          validateEdit={this.validateEdit}
          setLoader={this.props.setLoader}
        />
      )
    }
    return (
      <Register
        goToPage={this.goToPage}
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