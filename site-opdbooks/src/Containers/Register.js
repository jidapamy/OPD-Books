import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Header, Icon, Image, Form, Container, Modal, Button, Checkbox, Grid } from 'semantic-ui-react'
import moment from 'moment';
import swal from 'sweetalert2';
import styled from 'styled-components'
import ScrollUpButton from "react-scroll-up-button";

//lib
import axios from './../lib/axois'

//Component - Thai
import InfoPatient from './../Components/Thai/InfoPatient';
import HomeAddress from './../Components/Thai/HomeAddress'
import EmergencyContact from './../Components/Thai/EmergencyContact'
import PatientParent from './../Components/Thai/PatientParent'
import Allergy from './../Components/Thai/Allergy'

//Component - Foreigner
import HomeAddressOfForeigner from './../Components/Foreigner/HomeAddressOfForeigner'

//public
import BackgroundImage from './../Static/img/BG.png'
import { validateTextTh, validateTextEn } from './../Static/data/Validate'
import { 
  genderData, cardTypeData, titleNameData, titleNameParentData, bloodgroupData, 
  typesOfHousingData, nationalityData, religionData, statusData, countryData } from './../Static/data/FormDatas'


const provincesData = require('./../Static/data/Provinces')
const amphursData = require('./../Static/data/Amphurs')
const districtsData = require('./../Static/data/Districts')


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
class Register extends Component {
  state = {
    // << เซ็ทปุ่มให้กดปิด ไม่ต้องรีหน้า >> 
    open: 'false',

    //data initialization
    provinces: [],
    amphursHome: [],
    districtsHome: [],
    amphursEmer: [],
    districtsEmer: [],

    //info pateint
    registerDate: moment().format('LLLL'),
    cardType: 'idcard',
    idCard: '',
    nameTitle: '',
    firstname: '',
    lastname: '',
    gender: '',
    dob: null,
    age: '',
    bloodgroup: '',
    nationality: 'ไทย (Thai)' ,
    religion: 'พุทธ (Buddhism)',
    status: '',
    occupartion: '',
    homePhonenumber: '',
    mobileNumber: '',
    country: 'ไทย',
    congenitalDisease: '',
    // picture:'',

    // HomeAddress
    typeofHouse: '',
    address: '',
    province: '',
    district: '',
    subDistrict: '',
    zipcode: '',

    //emergencyContact
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
    statusSameAddress: false,

    //under 15
    fatherFirstname: '',
    fatherLastname: '',
    motherFirstname: '',
    motherLastname: '',

    //Allery
    allergy: { disabled: true, value: '' },
    privilege: { disabled: true, value: '' },

    //check agreement
    agreement: false,

    //validate
    errorText: [],
    erroridcard: false,
    errorhomePhonenumber: false,
    errormobileNumber: false,
    erroremerHomePhonenumber: false,
    erroremerMobileNumber: false,

    //manage field
    requiredFatherFirstname: false,
    requiredFatherLastname: false,
    requiredMotherFirstname: false,
    requiredMotherLastname: false,
    requiredEmerTitle: false,
    requiredEmerFirstname: false,
    requiredEmerLastname: false,
    requiredEmerRelationship: false,
    requiredEmerMobileNumber: false,
    requiredEmerTypeofHouse: false,
    requiredEmerAddress: false,
    requiredEmerProvince: false,
    requiredEmerDistrict: false,
    requiredEmerSubDistrict: false,
    requiredEmerZipcode: false,

    //other
    otherallergy: '',
    otherprivilege: '',

    //modal
    modalOpen: false,

    //dataOther
    genderData: genderData,
    cardTypeData: cardTypeData,
    titleNameData: titleNameData,
    titleNameParentData: titleNameParentData,
    bloodgroupData: bloodgroupData,
    typesOfHousingData: typesOfHousingData,
    nationalityData: nationalityData,
    religionData: religionData,
    statusData: statusData,
    countryData: countryData,
  }

  emerOldAddress = {};


  setField = (field, value) => {
    this.setState({ [field]: value })
  }

  setGender = (value) => {
    if (value === 'นาย (Mr.)' || value === 'เด็กชาย (Master)') {
      this.setState({ nameTitle: value, gender: 'M' })
    } else {
      this.setState({ nameTitle: value, gender: 'F' })
    }
  }

  //Field that has other
  chooseOther = (field, value) => {
    if (value === 'other') {
      this.setState({ [field]: { disabled: false, value: value } })
    } else {
      this.setState({ [field]: { disabled: true, value: value }, ['other' + field]: '' })
    }
  }

  //Idcard
  changeCardType = async (value) => {
    if (value === 'idcard') {
      //Thai
      await this.setState({
        cardType: value,
        erroridcard: false,
        nationality: 'ไทย (Thai)',
        religion: 'พุทธ (Buddhism)',
        country: 'ไทย'
      })
    } else {
      //Foreigner
      await this.setState({
        cardType: value,
        erroridcard: false,
        nationality: '',
        religion: '',
        country: ''
      })
    }
    this.checkIdcard()

  }

  checkIdcard = async (e) => {
    if (this.validateSyntaxIdcard()) {
      const pateint = await axios.get(`/checkIDCard/${this.state.idCard}`)
      if (!pateint.data) {
        const error = { status: true, message: '' };
        if (this.state.cardType === 'idcard') {
          error.message = 'เลขบัตรประชาชนนี้มีใช้แล้ว'
        } else {
          error.message = 'The passport number is duplicated'
        }
        this.setErrorMsg('erroridcard', error.message)
      }
    }
  }

  validateSyntaxIdcard = () => {
    console.log('validateSyntaxIdcard')
    const error = { status: false, message: '' }
    if (this.state.cardType === 'idcard' && this.state.idCard.length === 13 && this.state.idCard.match(/^[0-9]+$/) ||
      this.state.cardType === 'passport' && this.state.idCard.length === 9 && this.state.idCard.match(/^[a-zA-Z]{2}[0-9]{7}$/)) {
      this.setErrorMsgSplice('erroridcard')
      return true;
    }
    if (this.state.cardType === 'idcard') {
      if (this.state.idCard.length !== 13) {
        error.status = true;
        error.message += '//รหัสประชาชนต้องมี 13 หลัก!  ';
      }
      if (!this.state.idCard.match(/^[0-9]+$/)) {
        error.status = true;
        error.message += '//รหัสประชาชนต้องเป็นตัวเลขเท่านั้น  ';
      }
    } else {
      if (this.state.idCard.length !== 9) {
        error.status = true;
        error.message += '//Passport number exactly 9 characters.  ';
      }
      if (!this.state.idCard.match(/^[a-zA-Z]{2}[0-9]{7}$/)) {
        error.status = true;
        error.message += '//Passport number pattern missing.  ';
      }
    }
    console.log(error.message)
    this.setErrorMsg('erroridcard', error.message)
    return false;
  }

  validateSyntaxPhoneNumber = (field, value) => {
    const arr = this.state.errorText;
    const error = { status: false, message: '' }
    const typeTH = field.substr(0, 4) === 'emer' ? ' (กรณีฉุกเฉิน) ' : ''
    const typeEN = field.substr(0, 4) === 'emer' ? ' (In case of emergency contact) ' : ''


    if (value.length > 0) {
      if (field === 'emerMobileNumber' || field === 'mobileNumber') {
        if ((!value.match(/^[0][0-9]{2}?[-]?[0-9]{3}?[-]?[0-9]{4}$/)) && this.state.cardType === 'idcard') {
          error.status = true;
          error.message += '//เบอร์โทรศัพท์' + typeTH + 'ไม่ถูกต้อง ex. 08xxxxxxxx หรือ 08x-xxx-xxxx ';
        } else if ((!value.match(/^[(]?[\+][0-9]{2}?[)]?[0-9]{9}$/)) && this.state.cardType === 'passport') {
          error.status = true;
          error.message += '//Moblie Number' + typeEN + ' incorrect ex. (+66)xxxxxxxxx or +66xxxxxxxxx  ';
        }
      } else {
        if ((!value.match(/^[0][0-9]?[-]?[0-9]{3}?[-]?[0-9]{4}$/)) && this.state.cardType === 'idcard') {
          error.status = true;
          error.message += '//เบอร์โทรศัพท์บ้าน' + typeTH + 'ไม่ถูกต้อง ex. 0xxxxxxxx หรือ 0x-xxx-xxxx ';
          this.setState({ errorHomePhoneNumber: error })
        } else if ((!value.match(/^[(]?[\+][0-9]{2}?[)]?[0-9]{9}$/)) && this.state.cardType === 'passport') {
          error.status = true;
          error.message += '//Home Phone Number' + typeEN + ' incorrect ex. (+66)xxxxxxxx or +66xxxxxxxx  ';
        }
      }
    }
    if (error.status) {
      this.setErrorMsg('error' + field, error.message)
    } else {
      this.setErrorMsgSplice('error' + field)
    }
  }

  setErrorMsg = (key, value) => {
    console.log('setErrorMsg')
    const arr = this.state.errorText;
    let duplicated = false;
    if (arr.length !== 0) {
      for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i].key === key) {
          arr[i].value = value
          duplicated = true;
          break;
        } else {
          duplicated = false
        }
      }
    }

    if (!duplicated || arr.length === 0) {
      arr.push({ key: key, value: value })
    }

    console.log(arr)
    this.setState({ [key]: true, errorText: arr })
  }

  setErrorMsgSplice = (key) => {
    console.log('setErrorMsgSplice' + '// KEY ' + key)
    const arr = this.state.errorText;
    let indexSplice = -1;
    if (arr.length !== 0) {
      for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i].key === key) {
          console.log(arr[i])
          indexSplice = i
          break;
        }
      }
    }

    if (indexSplice > -1) {
      arr.splice(indexSplice, 1);
    }
    this.setState({ [key]: false, errorText: arr })
  }

  //DateOfBirth
  setDateOfBirth = async (value) => {
    await this.setState({ dob: value.format('DD/MM/YYYY') })
    this.calculateAge();
  }

  calculateAge = () => {
    let dob = '' + this.state.dob
    let year = ((+(moment().format('YYYY'))) - (+dob.substring(6)));
    let month = (+(moment().format('MM'))) - (+dob.substring(3, 5));
    let tmp = year + " ปี"
    if (year === 0) {
      month = month
      tmp = year + " ปี " + month + " เดือน"
    }
    if (year < 15) {
      this.setState({
        age: tmp,
        requiredFatherFirstname: true,
        requiredFatherLastname: true,
        requiredMotherFirstname: true,
        requiredMotherLastname: true,
      })
    } else {
      this.setState({
        age: tmp,
        requiredFatherFirstname: false,
        requiredFatherLastname: false,
        requiredMotherFirstname: false,
        requiredMotherLastname: false,
      })
    }
  }

  emergencyField = () => {
    if (this.state.emerTitle === '' && this.state.emerFirstname === '' && this.state.emerLastname === '' &&
      this.state.emerRelationship === '' && this.state.emerHomePhonenumber === '' && this.state.emerMobileNumber === '' &&
      this.state.emerTypeofHouse === '' && this.state.emerAddress === '' && this.state.emerProvince === '' &&
      this.state.emerDistrict === '' && this.state.emerSubDistrict === '' && this.state.emerZipcode === ''
    ) {
      this.setState({
        requiredEmerTitle: false,
        requiredEmerFirstname: false,
        requiredEmerLastname: false,
        requiredEmerRelationship: false,
        requiredEmerMobileNumber: false,
        requiredEmerTypeofHouse: false,
        requiredEmerAddress: false,
        requiredEmerProvince: false,
        requiredEmerDistrict: false,
        requiredEmerSubDistrict: false,
        requiredEmerZipcode: false,
      })
    } else if (this.state.emerTitle !== '' || this.state.emerFirstname !== '' || this.state.emerLastname !== '' ||
      this.state.emerRelationship !== '' || this.state.emerHomePhonenumber !== '' || this.state.emerMobileNumber !== '' ||
      this.state.emerTypeofHouse !== '' || this.state.emerAddress !== '' || this.state.emerProvince !== '' ||
      this.state.emerDistrict !== '' || this.state.emerSubDistrict !== '' || this.state.emerZipcode !== ''
    ) {
      this.setState({
        requiredEmerTitle: true,
        requiredEmerFirstname: true,
        requiredEmerLastname: true,
        requiredEmerRelationship: true,
        requiredEmerMobileNumber: true,
        requiredEmerTypeofHouse: true,
        requiredEmerAddress: true,
        requiredEmerProvince: true,
        requiredEmerDistrict: true,
        requiredEmerSubDistrict: true,
        requiredEmerZipcode: true,
      })
    } else {
      console.log('else')
    }
  }

  clearField = () => {
    this.setState({
      requiredEmerTitle: false,
      requiredEmerFirstname: false,
      requiredEmerLastname: false,
      requiredEmerRelationship: false,
      requiredEmerMobileNumber: false,
      requiredEmerTypeofHouse: false,
      requiredEmerAddress: false,
      requiredEmerProvince: false,
      requiredEmerDistrict: false,
      requiredEmerSubDistrict: false,
      requiredEmerZipcode: false,
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
    })
  }


  //Address
  changeProvince = (field, value) => {
    const province = value.options.filter(option => option.value === value.value)[0]
    const amphurs = amphursData.default[province.key]
    if (field === 'emerProvince') {
      this.checkStatusSameAddress();
      this.emergencyField();
      this.setState({
        emerDistrict: '',
        emerSubDistrict: '',
        emerZipcode: '',
        amphursEmer: amphurs,
        [field]: province.value
      })
    } else {
      this.setState({
        district: '',
        subDistrict: '',
        zipcode: '',
        amphursHome: amphurs,
        [field]: province.value
      })
    }
  }

  changeAmphur = (field, value) => {
    const amphur = value.options.filter(option =>  option.value === value.value)[0]
    const districts = districtsData.default[amphur.key]
    if (field === 'emerDistrict') {
      this.checkStatusSameAddress();
      this.emergencyField();
      this.setState({
        emerSubDistrict: '',
        emerZipcode: '',
        districtsEmer: districts,
        [field]: amphur.value
      })
    } else {
      this.setState({
        subDistrict: '',
        zipcode: '',
        districtsHome: districts,
        [field]: amphur.value
      })
    }
  }

  changeDistrict = (field, value) => {
    const district = value.options.filter(option => option.value === value.value)[0]
    this.setField(field, district.value)
    if (field === 'subDistrict') {
      this.setState({ zipcode: district.zipcode })
    }
    else if (field === 'emerSubDistrict') {
      this.emergencyField();
      this.checkStatusSameAddress();
      this.setState({ emerZipcode: district.zipcode })
    }
  }

  checkSameAddress = () => {
    const check = !this.state.statusSameAddress
    if (check) {
      this.emerOldAddress = {
        emerAddress: this.state.emerAddress,
        emerDistrict: this.state.emerDistrict,
        emerProvince: this.state.emerProvince,
        emerSubDistrict: this.state.emerSubDistrict,
        emerTypeofHouse: this.state.emerTypeofHouse,
        emerZipcode: this.state.emerZipcode,
        amphursEmer: this.state.amphursEmer,
        districtsEmer: this.state.districtsEmer,
        statusSameAddress: !check
      }
      console.log(this.emerOldAddress)
      this.setState({
        amphursEmer: this.state.amphursHome,
        districtsEmer: this.state.districtsHome,
        statusSameAddress: check,
        emerAddress: this.state.address,
        emerDistrict: this.state.district,
        emerProvince: this.state.province,
        emerSubDistrict: this.state.subDistrict,
        emerTypeofHouse: this.state.typeofHouse,
        emerZipcode: this.state.zipcode,
      });
    } else {
      this.setState(this.emerOldAddress)
    }
  }

  checkStatusSameAddress = () => {
    if (this.state.statusSameAddress) {
      this.setState({ statusSameAddress: false })
    }
  }

  showPopupConfirm = async () => {
    swal({
      title: 'ยืนยันการสมัคร?',
      text: "ข้อมูลที่กรอกถูกต้องตามความเป็นจริง",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1FCB4A',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancel',
      confirmButtonText: 'CONFIRM!'
    }).then((result) => {
      if (result.value) {
        if(this.insertPateint()){
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

  validate = () => {
    console.log('validate')
    // required field
    if (this.state.idCard !== '' && this.state.nameTitle !== '' && this.state.firstname !== '' &&
      this.state.lastname !== '' && this.state.gender !== '' && this.state.dob !== null &&
      this.state.bloodgroup !== '' && this.state.nationality !== '' && this.state.religion !== '' &&
      this.state.status !== '' && this.state.mobileNumber !== '' && this.state.country !== '' &&
      this.state.congenitalDisease !== '' && this.state.typeofHouse !== '' && this.state.address !== '' &&
      this.state.province !== '' && this.state.district !== '' && this.state.subDistrict !== '' &&
      this.state.zipcode !== '' && this.state.allergy !== '' && this.state.privilege !== '') {
      this.showPopupConfirm()
    }
  }

  //Connect API
  insertPateint = async () => {
    console.log(this.state.registerDate)
    console.log('inserting')
    // const nationality = !this.state.nationality.disabled ? this.state.othernationality : this.state.nationality.value
    // const religion = !this.state.religion.disabled ? this.state.otherreligion : this.state.religion.value
    const allergy = !this.state.allergy.disabled ? this.state.otherallergy : this.state.allergy.value
    const privilege = !this.state.privilege.disabled ? this.state.otherprivilege : this.state.privilege.value

    const result = await axios.post('/addPateint', {
                                      registerDate: this.state.registerDate,
                                      idCard: this.state.idCard,
                                      nameTitle: this.state.nameTitle,
                                      firstname: this.state.firstname,
                                      lastname: this.state.lastname,
                                      gender: this.state.gender,
                                      dob: this.state.dob,
                                      bloodgroup: this.state.bloodgroup,
                                      nationality: this.state.nationality,
                                      religion: this.state.religion,
                                      status: this.state.status,
                                      occupartion: this.state.occupartion,
                                      homePhonenumber: this.state.homePhonenumber,
                                      mobileNumber: this.state.mobileNumber,
                                      congenitalDisease: this.state.congenitalDisease,
                                      typeofHouse: this.state.typeofHouse,
                                      address: this.state.address,
                                      province: this.state.province,
                                      district: this.state.district,
                                      subDistrict: this.state.subDistrict,
                                      zipcode: this.state.zipcode,
                                      emerTitle: this.state.emerTitle,
                                      emerFirstname: this.state.emerFirstname,
                                      emerLastname: this.state.emerLastname,
                                      emerRelationship: this.state.emerRelationship,
                                      emerHomePhonenumber: this.state.emerHomePhonenumber,
                                      emerMobileNumber: this.state.emerMobileNumber,
                                      emerTypeofHouse: this.state.emerTypeofHouse,
                                      emerAddress: this.state.emerAddress,
                                      emerProvince: this.state.emerProvince,
                                      emerDistrict: this.state.emerDistrict,
                                      emerSubDistrict: this.state.emerSubDistrict,
                                      emerZipcode: this.state.emerZipcode,
                                      statusSameAddress: this.state.statusSameAddress,
                                      fatherFirstname: this.state.fatherFirstname,
                                      fatherLastname: this.state.fatherLastname,
                                      motherFirstname: this.state.motherFirstname,
                                      motherLastname: this.state.motherLastname,
                                      allergy: allergy,
                                      privilege: privilege,
                                    })
    console.log('Success!!!')
    return result;
  }

  componentWillMount() {
    this.setState({ provinces: provincesData.default })
  }


  render() {
    console.log(this.state)
    const errorList = this.state.errorText.map(msg => (msg.value))
    return (
      <Wrapper>
        <Container>
          <Message
            hidden={this.state.errorText.length === 0}
            error
            header={this.state.cardType === 'idcard' ? 'ข้อมูลผิดพลาด' : 'Invalid'}
            list={errorList}
          />

          <Form onSubmit={this.insertPateint}>
            <InfoPatient
              //Validate
              erroridcard={this.state.erroridcard}
              errorhomePhonenumber={this.state.errorhomePhonenumber}
              errormobileNumber={this.state.errormobileNumber}
              //Method
              validateSyntaxPhoneNumber={this.validateSyntaxPhoneNumber}
              chooseOther={this.chooseOther}
              setGender={this.setGender}
              changeCardType={this.changeCardType}
              checkIdcard={this.checkIdcard}
              setField={this.setField}
              calculateAge={this.calculateAge}
              setDateOfBirth={this.setDateOfBirth}
              //Attribute
              registerDate={this.state.registerDate}
              cardType={this.state.cardType}
              idCard={this.state.idCard}
              nameTitle={this.state.nameTitle}
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              gender={this.state.gender}
              dob={this.state.dob}
              age={this.state.age}
              bloodgroup={this.state.bloodgroup}
              nationality={this.state.nationality}
              religion={this.state.religion}
              status={this.state.status}
              occupartion={this.state.occupartion}
              homePhonenumber={this.state.homePhonenumber}
              mobileNumber={this.state.mobileNumber}
              country={this.state.country}
              congenitalDisease={this.state.congenitalDisease}
              //data
              genderData={this.state.genderData}
              cardTypeData={this.state.cardTypeData}
              titleNameData={this.state.titleNameData}
              titleNameParentData={this.state.titleNameParentData}
              bloodgroupData={this.state.bloodgroupData}
              typesOfHousingData={this.state.typesOfHousingData}
              nationalityData={this.state.nationalityData}
              religionData={this.state.religionData}
              statusData={this.state.statusData}
              countryData={this.state.countryData}
            />

            <HomeAddress
              provinces={this.state.provinces}
              amphurs={this.state.amphursHome}
              districts={this.state.districtsHome}

              changeProvince={this.changeProvince}
              changeAmphur={this.changeAmphur}
              changeDistrict={this.changeDistrict}
              setField={this.setField}

              province={this.state.province}
              district={this.state.district}
              subDistrict={this.state.subDistrict}
              zipcode={this.state.zipcode}
            />

            <EmergencyContact
              //validate
              erroremerHomePhonenumber={this.state.erroremerHomePhonenumber}
              erroremerMobileNumber={this.state.erroremerMobileNumber}

              //data
              provinces={this.state.provinces}
              amphurs={this.state.amphursEmer}
              districts={this.state.districtsEmer}

              //method
              validateSyntaxPhoneNumber={this.validateSyntaxPhoneNumber}
              clearField={this.clearField}
              emergencyField={this.emergencyField}
              checkStatusSameAddress={this.checkStatusSameAddress}
              checkSameAddress={this.checkSameAddress}
              changeProvince={this.changeProvince}
              changeAmphur={this.changeAmphur}
              changeDistrict={this.changeDistrict}
              setField={this.setField}

              //attribute
              emerTitle={this.state.emerTitle}
              emerFirstname={this.state.emerFirstname}
              emerLastname={this.state.emerLastname}
              emerRelationship={this.state.emerRelationship}
              emerHomePhonenumber={this.state.emerHomePhonenumber}
              emerMobileNumber={this.state.emerMobileNumber}
              emerTypeofHouse={this.state.emerTypeofHouse}
              emerAddress={this.state.emerAddress}
              emerProvince={this.state.emerProvince}
              emerDistrict={this.state.emerDistrict}
              emerSubDistrict={this.state.emerSubDistrict}
              emerZipcode={this.state.emerZipcode}
              statusSameAddress={this.state.statusSameAddress}

              //required
              requiredEmerTitle={this.state.requiredEmerTitle}
              requiredEmerFirstname={this.state.requiredEmerFirstname}
              requiredEmerLastname={this.state.requiredEmerLastname}
              requiredEmerRelationship={this.state.requiredEmerRelationship}
              requiredEmerMobileNumber={this.state.requiredEmerMobileNumber}
              requiredEmerTypeofHouse={this.state.requiredEmerTypeofHouse}
              requiredEmerAddress={this.state.requiredEmerAddress}
              requiredEmerProvince={this.state.requiredEmerProvince}
              requiredEmerDistrict={this.state.requiredEmerDistrict}
              requiredEmerSubDistrict={this.state.requiredEmerSubDistrict}
              requiredEmerZipcode={this.state.requiredEmerZipcode}
            />


            <PatientParent
              //Method
              setField={this.setField}
              //Mange Field
              requiredFatherFirstname={this.state.requiredFatherFirstname}
              requiredFatherLastname={this.state.requiredFatherLastname}
              requiredMotherFirstname={this.state.requiredMotherFirstname}
              requiredMotherLastname={this.state.requiredMotherLastname}
              //Attribute
              fatherFirstname={this.state.fatherFirstname}
              fatherLastname={this.state.fatherLastname}
              motherFirstname={this.state.motherFirstname}
              motherLastname={this.state.motherLastname}
            />

            <Allergy
              chooseOther={this.chooseOther}
              setField={this.setField}
              allergy={this.state.allergy}
              privilege={this.state.privilege}
              otherallergy={this.state.otherallergy}
              otherprivilege={this.state.otherprivilege}
            />

            <Form.Group inline>
              <Form.Field control={Checkbox}
                label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก'
                onChange={() => this.setState({ agreement: !this.state.agreement })}
              />
            </Form.Group>
            <GridColumn width={16}>
              <Link to='/'><Button color='google plus'><h3>CANCEL</h3></Button></Link>
              <Button disabled={!this.state.agreement}
                onClick={() => this.validate()}
                color='green'>
                <h3>CONFIRM</h3>
              </Button>

            </GridColumn>
            <br></br><br></br>
          </Form>
        </Container>
        <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled" />
      </Wrapper>

    );
  }
}

export default Register;
