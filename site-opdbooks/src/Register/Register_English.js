import React, { Component } from 'react';
import { Message, Header, Icon, Image, Form, Container, Modal, Button, Checkbox, Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import axios from './../lib/axois'
import moment from 'moment';
import ScrollUpButton from "react-scroll-up-button";
import InfoPateint from './InfoPateint';
import HomeAddress from './HomeAddress'
import HomeAddressOfForeigner from './HomeAddressOfForeigner'
import EmergencyContact from './EmergencyContact'
import ChildrenUnder15 from './ChildrenUnder15'
import Allergy from './Allergy'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import BackgroundImage from './img/BG.png'

import swal from 'sweetalert2';

const provincesData = require('./Data/Province')
const amphursData = require('./Data/Amphur')
const districtsData = require('./Data/District')


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
class Register_English extends Component {

  state = {
    
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
    nationality: { disabled: true, value: 'Thai' },
    religion: { disabled: true, value: 'Buddhism'},
    status: '',
    occupartion: '',
    homePhonenumber: '',
    mobileNumber: '',
    country: 'Thailand',
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
    allergy: { disabled: true, value: ''},
    privilege: { disabled: true, value: ''},

    //check agreement
    agreement: false,

    //validate
    errorIdCard: { status: false, message: '' },
    errorNameTitle: { status: false, message: '' },
    errorFirstname: { status: false, message: '' },
    errorLastname: { status: false, message: '' },
    errorGender: { status: false, message: '' },
    errorDob: { status: false, message: '' },
    errorAge: { status: false, message: '' },
    errorBloodgroup: { status: false, message: '' },
    errorNationality: { status: false, message: '' },
    errorReligion: { status: false, message: '' },
    errorStatus: { status: false, message: '' },
    errorMobileNumber: { status: false, message: '' },
    errorCountry: { status: false, message: '' },
    errorCongenitalDisease: { status: false, message: '' },

    //other
    othernameTitle: '',
    othernationality: '',
    otherreligion: '',
    otherallergy: '',
    otherprivilege: '',

    //modal
    modalOpen:false
  }

  componentWillMount() {
    this.setState({ provinces: provincesData.default })
  }

  setField = (field, value) => {
    console.log(field +' / '+value)
    this.setState({ [field]: value })
    if (field === 'emerTypeofHouse' || field === 'emerAddress' || field === 'emerZipcode') {
      this.();
    }
    if (field === 'cardType') {
      this.setState({ errorIdCard: { status: false, message: '' } })
      this.changeCardtype()
    }
    if (field === 'nameTitle'){
      if (value === 'Mr.' || value === 'Master'){
        this.setState({gender : 'M'})
      }else{
        this.setState({ gender: 'F' })
      }
    }

    // other
    if (field === 'nameTitle' || field === 'nationality' || field === 'religion' || field === 'allergy' || field === 'privilege'){
      if (value === 'other') {
        this.setState({ [field]: { disabled: false, value: value } })
      } else {
        console.log('else .. ' + 'other'+field)
        this.setState({ [field]: { disabled: true, value: value }, ['other' + field]: '' })
      }
    }
  }

  enableOtherField = (field) => {
    this.setState({ [field] : { disabled: false, value: '' } })
  }

  setFieldOther=(field , value)=>{
    this.setState({ field: { disabled: false, value: value } })
  }

  changeCardtype = async () => {
    console.log(this.state.cardType)
    if (this.state.cardType !== 'idcard'){
      await this.setState({nationality: 'Thai',religion: 'Buddhism',country: 'Thailand'})
    }else{
      await this.setState({nationality: '',religion: '',country: ''})
    }
  }



  //Change Form depend on cardType
  checkThaiPateint = () => {
    if (this.state.cardType === 'idcard' || this.state.cardType === '') {
      return <HomeAddress
        provinces={this.state.provinces}
        amphurs={this.state.amphursHome}
        districts={this.state.districtsHome}

        preparedData={this.preparedData}
        changeProvince={this.changeProvince}
        changeAmphur={this.changeAmphur}
        changeDistrict={this.changeDistrict}
        setField={this.setField}

        zipcode={this.state.zipcode}
      />
    }else{
      return <HomeAddressOfForeigner
        setField={this.setField}
      />
    }

  }


  validateSyntaxIdcard = () => {
    const error = { status: false, message: '' };
    this.setState({ errorIdCard: error })
    if (this.state.cardType === 'idcard' && this.state.idCard.length === 13 && this.state.idCard.match(/^[0-9]+$/) ||
      this.state.cardType === 'passport' && this.state.idCard.length === 9 && this.state.idCard.match(/^[a-zA-Z]{2}[0-9]{7}$/)) {
      return true;
    } else {
      if (this.state.cardType === 'idcard') {
        if (this.state.idCard.length !== 13) {
          error.status = true;
          error.message += '//ID Card number exactly 13 characters!  ';
        }
        if (!this.state.idCard.match(/^[0-9]+$/)) {
          error.status = true;
          error.message += '//ID Card number must be numeric only.  ';
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

        console.log(error)
        this.setState({ errorIdCard: error })
        return false;
      }
    }
  }

  checkIdcard = async (e) => {
    console.log('checkIdcard')
    if (this.validateSyntaxIdcard()) {
      console.log('idCard :' + this.state.idCard)
      const pateint = await axios.get(`/checkIDCard/${this.state.idCard}`)
      console.log(pateint.data)
      if (pateint.data) {
        console.log('ผ่านจ้า')
      } else {
        const error = { status: true, message: '' };
        if (this.state.cardType === 'idcard') {
          error.message = 'ID Card number is already in the system.'
        } else {
          error.message = 'The passport number is duplicated'
        }
        this.setState({ errorIdCard: error })
      }
    }
  }

  //DateOfBirth
  setDateOfBirth = async (value) => {
    await this.setState({ dob: value.format('DD/MM/YYYY') })
    this.calculateAge();
  }
  calculateAge = () => {
    console.log('calculateAge : ' + this.state.dob)
    let dob = '' + this.state.dob
    console.log(dob)
    let year = ((+(moment().format('YYYY'))) - (+dob.substring(6)));
    let month = (+(moment().format('MM'))) - (+dob.substring(3,5));
    let tmp = year+" Years"
    if(year === 0){
      month = month
      tmp = year + " Years "+month + " Month"
    }
    this.setState({ age: tmp})
  }

  //Address
  changeProvince = (field, value) => {
    console.log(field)
    if (field === 'emerProvince') {
      console.log('if emerProvince')
      this.changeStatusSameAddress();
      this.setState({ amphursEmer: [], districtsEmer: [], emerDistrict: [], emerSubDistrict: [], emerZipcode: '' })
      const province = value.options.filter(option => option.value === value.value)[0]
      const amphurs = this.state.amphursEmer.filter(amphur => amphur.provinceid === province.key)
      this.setState({ amphursEmer: amphurs })
      this.setField(field, province.value)
    } else {
      this.setState({ district: '', subDistrict: '', zipcode: '' })
      const province = value.options.filter(option => option.value === value.value)[0]
      const amphurs = this.state.amphursHome.filter(amphur => amphur.provinceid === province.key)
      console.log(amphurs)
      this.setState({ amphursHome: amphurs })
      this.setField(field, province.value)
    }
  }
  changeAmphur = (field, value) => {
    console.log(field)
    if (field === 'emerDistrict') {
      this.changeStatusSameAddress();
      this.setState({ districtsEmer: '', emerSubDistrict: '', emerZipcode: '' })
      const amphur = value.options.filter(option => option.value === value.value)[0]
      const districts = this.state.districtsEmer.filter(district => district.amphurid === amphur.key)
      this.setState({ districtsEmer: districts })
      this.setField(field, amphur.value)
    } else {
      this.setState({ subDistrict: '', zipcode: '' })
      const amphur = value.options.filter(option => option.value === value.value)[0]
      const districts = this.state.districtsHome.filter(district => district.amphurid === amphur.key)
      this.setState({ districtsHome: districts })
      this.setField(field, amphur.value)
    }
  }
  changeDistrict = (field, value) => {
    const district = value.options.filter(option => option.value === value.value)[0]
    this.setField(field, district.value)
    if (field === 'subDistrict') {
      this.setState({ zipcode: district.zipcode })
    }
    else if (field === 'emerSubDistrict') {
      this.changeStatusSameAddress();
      this.setState({ emerZipcode: district.zipcode })
    }
  }
  preparedData = (field, part) => {
    if (part === "Home") {
      if (field === 'a')
        this.setState({ amphursHome: amphursData.default })
      else if (field === 'd')
        this.setState({ districtsHome: districtsData.default })
    } else {
      if (field === 'a')
        this.setState({ amphursEmer: amphursData.default })
      else if (field === 'd')
        this.setState({ districtsEmer: districtsData.default })
    }
  }
  chooseSameAddress = () => {
    console.log('chooseSameAddress')
    this.setState({ amphursEmer: this.state.amphursHome, districtsEmer: this.state.districtsHome })
    const check = !this.state.statusSameAddress
    this.setState({ statusSameAddress: check })
    console.log(check)
    if (check) {
      this.setState({
        emerAddress: this.state.address,
        emerDistrict: this.state.district,
        emerProvince: this.state.province,
        emerSubDistrict: this.state.subDistrict,
        emerTypeofHouse: this.state.typeofHouse,
        emerZipcode: this.state.zipcode,
      });
    }
  }
  changeStatusSameAddress = () => {
    if (this.state.statusSameAddress) {
      this.setState({ statusSameAddress: false })
    }
  }


  //Footer
  checkAgreement = () => {
    console.log('agree')
    const agreement = !this.state.agreement
    this.setState({ agreement: agreement })
  }

  //Connect API
  insertPatient = async () => {
    console.log(this.state.registerDate)
    console.log('inserting')
    const nationality = !this.state.nationality.disabled ?  this.state.othernationality : this.state.nationality.value
    const religion = !this.state.religion.disabled ? this.state.otherreligion : this.state.religion.value
    const allergy = !this.state.allergy.disabled ? this.state.otherallergy : this.state.allergy.value
    const privilege = !this.state.privilege.disabled ? this.state.otherprivilege : this.state.privilege.value


    await axios.post('/addPateint', {
      registerDate: this.state.registerDate,
      idCard: this.state.idCard,
      nameTitle: this.state.nameTitle,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      gender: this.state.gender,
      dob: this.state.dob,
      bloodgroup: this.state.bloodgroup,
      nationality: nationality,
      religion: religion,
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
  }

  // chooseOther = (field) => {
  //   console.log(field)
  //   if (field === 'privilege') {
  //     const choose = !this.state.otherPrivilege;
  //     this.setState({ otherPrivilege: choose })
  //   }
  // }


  RunPopUp = async () => {
    swal({
      title: 'Confirm Registration?',
      text: "I confirm that the information given in this form is true.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1FCB4A',
      cancelButtonColor: '#d33',
      confirmButtonText: 'CONFIRM!'
    }).then((result) => {
      if (result.value) {
        swal(
          'Registration Complete!',
          'You already registration complete, try to log-in into the system to get started.',
          'success',
          this.props.history.push('/home')
        )
      }
    })
  }



  validate = () => {
    console.log('validate')
    console.log(this.state.modalOpen)

    // required field
    if (this.state.idCard !== '' && this.state.nameTitle !== '' && this.state.firstname !== '' && 
        this.state.lastname !== '' && this.state.gender !== '' && this.state.dob !== null &&
        this.state.bloodgroup !== '' && this.state.nationality !== '' && this.state.religion !== '' && 
        this.state.status !== '' && this.state.mobileNumber !== '' && this.state.country !== '' && 
        this.state.congenitalDisease !== '' && this.state.typeofHouse !== '' && this.state.address !== '' && 
        this.state.province !== '' && this.state.district !== '' && this.state.subDistrict !== '' &&
        this.state.zipcode !== '' && this.state.allergy !== '' && this.state.privilege !== ''){
        this.setState({ modalOpen: true })
      }
  }

  // << เซ็ทปุ่มให้กดปิด ไม่ต้องรีหน้า >> 
  // handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  // <<<<<<<<------------->>>>>>>>

  render() {
    
    console.log(this.state)
    return (
      
      <Wrapper>
        <Container>
          <Message
            hidden={!this.state.errorIdCard.status}
            error
            header={this.state.cardType === 'idcard' ? 'Invalid-data' : 'Invalid'}
            content={this.state.errorIdCard.message}
          />
          <Form onSubmit={this.insertPatient}>
            <InfoPateint
              checkIdcard={this.checkIdcard}
              setField={this.setField}
              calculateAge={this.calculateAge}
              setDateOfBirth={this.setDateOfBirth}

              errorIdCard={this.state.errorIdCard}

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
              
              othernameTitle={this.state.othernameTitle}
              othernationality={this.state.othernationality}
              otherreligion={this.state.otherreligion}
            />

            {this.checkThaiPateint()}
            <EmergencyContact
              provinces={this.state.provinces}
              amphurs={this.state.amphursEmer}
              districts={this.state.districtsEmer}

              chooseSameAddress={this.chooseSameAddress}
              preparedData={this.preparedData}
              changeProvince={this.changeProvince}
              changeAmphur={this.changeAmphur}
              changeDistrict={this.changeDistrict}
              setField={this.setField}

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
            />

            <ChildrenUnder15
              setField={this.setField}
              fatherFirstname={this.state.fatherFirstname}
              fatherLastname={this.state.fatherLastname}
              motherFirstname={this.state.motherFirstname}
              motherLastname={this.state.motherLastname}
            />

            <Allergy
              setField={this.setField}
              allergy={this.state.allergy}
              privilege={this.state.privilege}
              otherallergy={this.state.otherallergy}
              otherprivilege={this.state.otherprivilege}
            />

            <Form.Group inline>
              <Form.Field control={Checkbox}
                label='I hereby certify that all the statements made in this application for register are true and correct. If any of the information are incorrect or do not match the truth and may cause damage to myself or any other person ,I agree to responsible for any damages and allow to publish my information in the affiliate system of the clinic.'
                onChange={this.checkAgreement}
              />
            </Form.Group>
            <GridColumn width={16}>
              < Link to='/'>
                <Button color='google plus'>
                  <h3>CANCEL</h3>
                </Button>
              </Link>
                
              <Button disabled={!this.state.agreement} onClick={() => this.RunPopUp()} color='green'><h3>CONFIRM</h3></Button>
                         
            </GridColumn>
            <br></br><br></br>
          </Form>
        </Container>
        <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled"/>
      </Wrapper>
      
    );
  }
}

export default Register_English;