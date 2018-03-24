import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react'
import styled from 'styled-components'

import InfoPateint from './InfoPateint';
import HeaderComponent from './HeaderComponent';
import HomeAddress from './HomeAddress'
import EmergencyContact from './EmergencyContact'
import ChildrenUnder15 from './ChildrenUnder15'
import Allergy from './Allergy'
import Footer from './Footer'

import BackgroundImage from './img/BG.png'


const provincesData = require('./Data/Province')
const amphursData = require('./Data/Amphur')
const districtsData = require('./Data/District')

var statusPrivilege = false;

const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
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
    registerDate: '',
    cardType: '',
    IDCard: '',
    nameTitleTH: '',
    firstnameTH: '',
    lastnameTH: '',
    nameTitleEN: '',
    firstnameEN: '',
    lastnameEN: '',
    gender: '',
    dob: '',
    age: '',
    bloodgroup: '',
    nationality: '',
    religion: '',
    status: '',
    occupation: '',
    homePhonenumber: '',
    mobileNumber: '',
    congenitalDisease: 'ไม่มี',
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
    agreement: false
  }


  setField = (field, value) => {
    this.setState({ [field]: value })
    if (field === 'emerTypeofHouse' || field === 'emerAddress' || field === 'emerZipcode') {
      this.checkStatusSameAddress();
    }
  }

  changeProvince = (field, value) => {
    console.log(field)
    if (field === 'emerProvince') {
      console.log('if emerProvince')
      this.checkStatusSameAddress();
      this.setState({ amphursEmer:'',districtsEmer:'', emerDistrict: '', emerSubDistrict: '', emerZipcode: '' })
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
      this.setState({ districtsEmer: '' ,emerSubDistrict: '', emerZipcode: '' })
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
    console.log(field)
    if (field === 'subDistrict') {
      this.setState({ zipcode: district.zipcode })
    }
    else if (field === 'emerSubDistrict') {
      this.checkStatusSameAddress();
      this.setState({ emerZipcode: district.zipcode })
    }
  }

  preparedData = (field, part) => {
    console.log('click')
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

  checkAgreement = () => {
    const agreement = !this.state.agreement
    this.setState({ agreement: agreement })
  }

  chooseOther = (field) => {
    console.log(field)
    if (field === 'privilege') {
      const choose = !this.state.otherPrivilege;
      this.setState({ otherPrivilege: choose })
    }
  }

  calculateAge = () => {
    console.log(this.state.dob)
    let dob = this.state.dob
    let age = 2018 - (+dob.substring(6));
    this.setState({ age: age })
  }


  componentWillMount() {
    this.setState({ provinces: provincesData.default })
  }


  render() {
    console.log(this.state)
    return (
      <Wrapper>
        <Container>
          <Form>
            <HeaderComponent />
            <InfoPateint
              setField={this.setField}
              calculateAge={this.calculateAge}

              registerDate={this.state.registerDate}
              cardType={this.state.cardType}
              IDCard={this.state.IDCard}
              nameTitleTH={this.state.nameTitleTH}
              firstnameTH={this.state.firstnameTH}
              lastnameTH={this.state.lastnameTH}
              nameTitleEN={this.state.nameTitleEN}
              firstnameEN={this.state.firstnameEN}
              lastnameEN={this.state.lastnameEN}
              gender={this.state.gender}
              dob={this.state.dob}
              age={this.state.age}
              bloodgroup={this.state.bloodgroup}
              nationality={this.state.nationality}
              religion={this.state.religion}
              status={this.state.status}
              occupation={this.state.occupation}
              homePhonenumber={this.state.homePhonenumber}
              mobileNumber={this.state.mobileNumber}
            />

            <HomeAddress
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

            <Footer
              checkAgreement={this.checkAgreement}
              setField={this.setField}
              agreement={this.state.agreement}
            />
            <br></br><br></br>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default Register;
