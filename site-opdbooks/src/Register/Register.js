import React, { Component } from 'react';
import styled from 'styled-components'
import { Form, Container } from 'semantic-ui-react'

import InfoPateint from './InfoPateint';
import HeaderComponent from './HeaderComponent';
import HomeAddress from './HomeAddress'
import EmergencyContact from './EmergencyContact'
import ChildrenUnder15 from './ChildrenUnder15'
import Allergy from './Allergy'
import Footer from './Footer'

import BackgroundImage from './img/BG.png'

import Provinces from './Data/Province'
import Amphurs from './Data/Amphur'
import Districts from './Data/District'
// const avatarStyle = {
//   backgroundImage: "url('./img/BG.png')"
// };

const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
`

export const provinces = Provinces;
export var amphurs = Amphurs;
export var districts = Districts;

class Register extends Component {
  state = {
    //info pateint
    registerDate: '',
    cardType: '',
    IDCard: '',
    nameTitleTH : '',
    firstnameTH : '',
    lastnameTH: '',
    nameTitleEN: '',
    firstnameEN: '',
    lastnameEN: '',
    gender:'',
    dob:'',
    age:'',
    bloodgroup:'',
    nationality:'',
    religion:'',
    status:'',
    occupation:'',
    homePhonenumber:'',
    mobileNumber:'',
    // picture:'',

    // HomeAddress
    typeofHouse:'',
    address:'',
    province:'',
    district:'',
    subDistrict:'',
    zipcode:'',

    //emergencyContact
    emerTitle:'',
    emerFirstname:'',
    emerLastname:'',
    emerRelationship:'',
    emerHomePhonenumber:'',
    emerMobileNumber:'',
    emerTypeofHouse: '',
    emerAddress: '',
    emerProvince: '',
    emerDistrict: '',
    emerSubDistrict: '',
    emerZipcode: '',
    statusSameAddress:'',

    //under 15
    fatherTitle:'',
    fatherFirstname:'',
    fatherLastname:'',
    motherTitle:'',
    motherFirstname:'',
    motherLastname:'',

    //Allery
    allergy:'',
    privilege:'',

    //check agreement
    agreement:''
  }


  setField = (field, value) => {
    this.setState({ [field]: value })
  }

  changeProvince = async (field, { value }) => {
    console.log(value)
    amphurs = Amphurs
    amphurs = amphurs.filter(amphur => amphur.value.provinceID === value.id)
    await this.setField(field,value.value)
  }

  changeAmphur = async (field, { value }) => {
    districts = Districts
    districts = districts.filter(district => district.value.amphurId === value.id)
    await this.setField(field, value.value)
  }

  changeDistrict = async (field, { value }) => {
    await this.setField(field, value.value)
    await this.setState({zipcode: value.zipcode })
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
              fatherTitle={this.state.fatherTitle}
              fatherFirstname={this.state.fatherFirstname}
              fatherLastname={this.state.fatherLastname}
              motherTitle={this.state.motherTitle}
              motherFirstname={this.state.motherFirstname}
              motherLastname={this.state.motherLastname}
            />

            <Allergy 
              setField={this.setField}
              allergyfatherTitle={this.state.allergyfatherTitle}
              privilegefatherTitle={this.state.privilegefatherTitle}
            />

            <Footer
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
