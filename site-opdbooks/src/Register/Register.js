import React, { Component } from 'react';
import { Form, Container ,Modal ,Header ,Icon,Button, Checkbox, Grid, Image} from 'semantic-ui-react'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment';

import InfoPateint from './InfoPateint';
import HomeAddress from './HomeAddress'
import HomeAddressOfForeign from './HomeAddressOfForeign'
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
    cardType: '',
    idCard: '',
    nameTitleTH: '',
    firstnameTH: '',
    lastnameTH: '',
    nameTitleEN: '',
    firstnameEN: '',
    lastnameEN: '',
    gender: '',
    dob: null,
    age: '',
    bloodgroup: '',
    nationality: '',
    religion: '',
    status: '',
    occupartion: '',
    homePhonenumber: '',
    mobileNumber: '',
    country:'',
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
    console.log('agree')
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
    console.log('calculateAge : ' +this.state.dob)
    let dob = '' + this.state.dob
    console.log(dob)
    let age = 2018 - (+dob.substring(6));
    this.setState({ age: age })
  }

  //Connect API
  insertPateint = async () => {
    console.log(this.state.registerDate)
    console.log('inserting')
    await axios.post('http://localhost:3003/addPateint', {
      registerDate: this.state.registerDate,
      idCard: this.state.idCard,
      nameTitleTH: this.state.nameTitleTH,
      firstnameTH: this.state.firstnameTH,
      lastnameTH: this.state.lastnameTH,
      nameTitleEN: this.state.nameTitleEN,
      firstnameEN: this.state.firstnameEN,
      lastnameEN: this.state.lastnameEN,
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

  componentWillMount() {
    this.setState({ provinces: provincesData.default })
  }

  checkThaiPateint = () => {
    if(this.state.idCard==='idcard'){
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
    return  <HomeAddressOfForeign
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

  validate = () =>{
    console.log('insert')
    this.insertPateint.bind();
  }

  setDateOfBirth= async (value)=>{
    await this.setState({ dob: value.format('DD/MM/YYYY')})
    this.calculateAge();    
  }

  test = () => {
    console.log('test')
  }

  // << เซ็ทปุ่มให้กดปิด ไม่ต้องรีหน้า >> 
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
// <<<<<<<<------------->>>>>>>>

  render() {
    // if(this.state.dob !== null)
console.log(this.state)
    // console.log(moment('02-05-1997', 'MM-DD-YYYY'))
    // console.log((moment().utc('12-04-2012', "DD-MM-YYYY").valueOf()).format('DD-MM-YYYY'))
    return (
      <Wrapper>
        <Container>
          <Form onSubmit={this.insertPateint}>
            <InfoPateint
              setField={this.setField}
              calculateAge={this.calculateAge}
              setDateOfBirth={this.setDateOfBirth}
              test={this.test}

              registerDate={this.state.registerDate}
              cardType={this.state.cardType}
              idCard={this.state.idCard}
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
              occupartion={this.state.occupartion}
              homePhonenumber={this.state.homePhonenumber}
              mobileNumber={this.state.mobileNumber}
              country={this.state.country}
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

            {/* <HomeAddressOfForeign
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
              /> */}

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

            {/* <Footer
              checkAgreement={this.checkAgreement}
              setField={this.setField}
              agreement={this.state.agreement}
            /> */}
{/* <ModalConfirm  trigger={<Button onClick={this.handleClose} disabled={!this.state.agreement} color='green'><h3>CANCEL</h3></Button>}   */}

            <Form.Group inline>
              <Form.Field control={Checkbox}
                label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก'
                onChange={this.checkAgreement}
              />
            </Form.Group>
            <GridColumn width={16}>
              < Link to='/'>
                <Button color='google plus'>
                  <h3>CANCEL</h3>
                </Button>
              </Link>
              <ModalConfirm   trigger={<Button disabled={!this.state.agreement} onClick={this.handleOpen} color='green'><h3>CONFIRM</h3></Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'  closeIcon>
                  <Header icon='check' content='ยืนยันการสมัคร' />
                  <Modal.Content>
                    <p>คุณแน่ใจแล้วหรือไม่ว่าข้อมูลที่คุณกรอกตรงตามความเป็นความจริง?</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='red' onClick={this.handleClose} inverted>
                      <Icon name='remove' /> No
                    </Button>
                   < Link to='/'> <Button color='green' inverted>
                       <Icon name='checkmark' /> Yes
                    </Button>
                    </Link>
                  </Modal.Actions>
              </ModalConfirm>
              {/* <Button disabled={!this.state.agreement} color='green'>
                <h3>CONFIRM</h3>
              </Button> */}
              
            </GridColumn>


          {/* <Modal size={'mini'} open={true} onClose={this.close}>
          <Modal.Header>
            Delete Your Account
          </Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Yes' />
          </Modal.Actions>
        </Modal> */}
            <br></br><br></br>
          </Form>
        </Container>
      </Wrapper>
    );
  }
}

export default Register;
