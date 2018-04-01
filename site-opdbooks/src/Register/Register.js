import React, { Component } from 'react';
import { Message,Form, Container, Modal, Button, Checkbox, Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import axios from './../lib/axois'
import moment from 'moment';


import InfoPateint from './InfoPateint';
import HomeAddress from './HomeAddress'
import HomeAddressOfForeigner from './HomeAddressOfForeigner'
import EmergencyContact from './EmergencyContact'
import ChildrenUnder15 from './ChildrenUnder15'
import Allergy from './Allergy'
import Footer from './Footer'

import { Link } from 'react-router-dom';


import BackgroundImage from './img/BG.png'

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
const ButtomSize = styled(Button) `
    font-size:20px;
    padding:10px;
    margin-left:10px;
`

class Register extends Component {
  state = {
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
    nationality: 'ไทย (Thai)',
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
    allergy: '',
    privilege: '',
    otherPrivilege: true,

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
  }


  componentWillMount() {
    this.setState({ provinces: provincesData.default })
  }

  setField = (field, value) => {
    this.setState({ [field]: value })
    if (field === 'emerTypeofHouse' || field === 'emerAddress' || field === 'emerZipcode') {
      this.checkStatusSameAddress();
    }
    if (field === 'cardType') {
      this.setState({ errorIdCard: { status: false, message: '' } })
    }
  }

  //Change Form depend on cardType
  checkThaiPateint = () => {
    if (this.state.cardType === 'idcard' || this.state.cardType === '') {
      return <HomeAddress
        preparedData={this.preparedData}
        provinces={this.state.provinces}
        amphurs={this.state.amphursHome}
        districts={this.state.districtsHome}

        changeProvince={this.changeProvince}
        changeAmphur={this.changeAmphur}
        changeDistrict={this.changeDistrict}
        setField={this.setField}

        typeofHouse={this.state.typeofHouse}
        address={this.state.address}
        province={this.state.province}
        district={this.state.district}
        subDistrict={this.state.subDistrict}
        zipcode={this.state.zipcode}
      />
    }
    return <HomeAddressOfForeigner
      preparedData={this.preparedData}
      provinces={this.state.provinces}
      amphurs={this.state.amphursHome}
      districts={this.state.districtsHome}

      changeProvince={this.changeProvince}
      changeAmphur={this.changeAmphur}
      changeDistrict={this.changeDistrict}
      setField={this.setField}

      typeofHouse={this.state.typeofHouse}
      address={this.state.address}
      province={this.state.province}
      district={this.state.district}
      subDistrict={this.state.subDistrict}
      zipcode={this.state.zipcode}
    />

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
      if (pateint.data){
        console.log('ผ่านจ้า')
      }else{
        const error = { status: true, message: '' };
        if(this.state.cardType === 'idcard'){
          error.message = 'เลขบัตรประชาชนนี้มีใช้แล้ว'
        }else{
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
    let age = 2018 - (+dob.substring(6));
    this.setState({ age: age })
  }

  //Address
  changeProvince = (field, value) => {
    console.log(field)
    if (field === 'emerProvince') {
      console.log('if emerProvince')
      this.checkStatusSameAddress();
      this.setState({ amphursEmer: '', districtsEmer: '', emerDistrict: '', emerSubDistrict: '', emerZipcode: '' })
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
      this.checkStatusSameAddress();
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
      this.checkStatusSameAddress();
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
  checkSameAddress = () => {
    this.setState({ amphursEmer: this.state.amphursHome, districtsEmer: this.state.districtsHome })
    const check = !this.state.statusSameAddress
    this.setState({ statusSameAddress: check })
    console.log(this.state.subDistrict + '  ' + this.state.district)
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
  checkStatusSameAddress = () => {
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
  insertPateint = async () => {
    console.log(this.state.registerDate)
    console.log('inserting')
    await axios.post('/addPateint', {
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
      allergy: this.state.allergy,
      privilege: this.state.privilege,
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

  validate = () => {
    console.log('insert')
    this.insertPateint.bind();
  }

  test = () => {
    console.log('test')
  }

  render() {
    // console.log(this.state)
    return (
      <Wrapper>
        <Container>
          <Message 
            hidden={!this.state.errorIdCard.status}
            error
            header= {this.state.cardType === 'idcard' ? 'ข้อมูลผิดพลาด' : 'Invalid'}
            content= {this.state.errorIdCard.message}
          />
          <Form onSubmit={this.insertPateint}>
            <InfoPateint
              checkIdcard={this.checkIdcard}
              setField={this.setField}
              calculateAge={this.calculateAge}
              setDateOfBirth={this.setDateOfBirth}
              test={this.test}

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
            />

            {this.checkThaiPateint()}
            <EmergencyContact
              checkSameAddress={this.checkSameAddress}
              preparedData={this.preparedData}
              provinces={this.state.provinces}
              amphurs={this.state.amphursEmer}
              districts={this.state.districtsEmer}

              changeProvince={this.changeProvince}
              changeAmphur={this.changeAmphur}
              changeDistrict={this.changeDistrict}
              setField={this.setField}

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
            />

            <ChildrenUnder15
              setField={this.setField}
              fatherFirstname={this.state.fatherFirstname}
              fatherLastname={this.state.fatherLastname}
              motherFirstname={this.state.motherFirstname}
              motherLastname={this.state.motherLastname}
            />

            <Allergy
              chooseOther={this.chooseOther}
              setField={this.setField}
              otherPrivilege={this.otherPrivilege}
              allergy={this.state.allergy}
              privilege={this.state.privilege}
            />

            <Form.Group inline>
              <Form.Field control={Checkbox}
                label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก'
                onChange={this.checkAgreement}
              />
            </Form.Group>
            <GridColumn width={16}>
              <Button disabled={!this.state.agreement} color='green'>
                <h3>CONFIRM</h3>
              </Button>
              < Link to='/'>
                <Button color='google plus'>
                  <h3>CANCEL</h3>
                </Button>
              </Link>
            </GridColumn>
            <br></br><br></br>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default Register;
