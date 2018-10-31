import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Header, Icon, Image, Form, Container, Modal, Button, Checkbox, Grid, Segment, Label, Divider } from 'semantic-ui-react'
import styled from 'styled-components'
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import moment from 'moment';

//Component
import InfoPatient from './InfoPatient';
import HomeAddress from './HomeAddress'
import EmergencyContact from './EmergencyContact'
import PatientParent from './PatientParent'
import Allergy from './Allergy'
import ErrorMessage from './ErrorMessage'
import VerifyField from './VerifyField'


//static

import BGcomputer from '../../../Static/Img/Wallpaper/BGcomputer.png'
import BGIPad1 from '../../../Static/Img/Wallpaper/BGIPad1.png'
import BGIPad2 from '../../../Static/Img/Wallpaper/BGIPad2.png'
import BGIPad3 from '../../../Static/Img/Wallpaper/BGIPad3.png'
import BGIPhone from '../../../Static/Img/Wallpaper/BGIPhone.png'
import BGIPhonePlus from '../../../Static/Img/Wallpaper/BGIPhonePlus.png'
import BGIPhonX from '../../../Static/Img/Wallpaper/BGIPhonX.png'

import { patientField, groupInfoPatientField } from "../../../Static/Data/Field"

//css
const Wrapper = styled.div`

@media only screen and (max-width: 1366px) and (min-width: 1024px) {
  background: url(${BGIPad3}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 1112px) and (min-width: 834px) {
  background: url(${BGIPad2}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 1024px) and (min-width: 768px) {
  background: url(${BGIPad1}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 812px) and (min-width: 315px) {
  background: url(${BGIPhonX}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 736px) and (min-width: 414px) {
  background: url(${BGIPhonePlus}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (max-width: 667px) and (min-width: 375px) {
  background: url(${BGIPhone}) no-repeat center fixed;
  background-size: 100% 100%;
}
@media only screen and (min-width: 1025px)  {
  background: url(${BGcomputer}) no-repeat center fixed;
  background-size: 100% 100%;
}

`

const ContanierTop = styled(Container)`
    padding-top:4%;
`
const ColorHeader = {
    color:'#31A5BA',
}
const ButtonRegis = {
    color:'#FFF',
    backgroundColor: '#31A5BA',
    borderRadius:20,
}

const GridColumn = styled(Grid.Column)`
    display: flex;
    justify-content: center;
    align-items: center;
`
const SegmentForm = styled(Segment)`
    border-radius: 1rem !important;
    padding: 2rem !important;
`

export default class Register extends Component {
    state = {
        requiredAllParentField: false,
        requiredAllEmerField: false,
        errorInfo: [],
        errorAddr: [],
        errorEmer: [],
        errorParent: [],
        errorAllergy: [],
        errorVerify:[],
        agreement: false,
    }

    componentWillMount = () => {
        if (this.props.state){
            if (!this.props.state.patient.registerDate){
                this.props.state.patient.registerDate = moment().format('LLLL')
            }
            if (!this.props.cardType === 'idcard'){
                this.props.state.patient.country = 'Thailand'
            }
            this.setState(this.props.state)
        }
    }

  

    render() {
        return (
            <Wrapper>
                <ContanierTop>
                    <Header size='huge' style={ColorHeader} textAlign='center' >NEW PATIENT REGISTRATION FORM </Header>
                    <Form>
                        <SegmentForm >
                            <Header as='h2' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.info.label}</h2></Header>
                            <Divider />
                            <ErrorMessage
                                errorText={this.state.errorInfo}
                                cardType={this.state.cardType}
                            />
                            <InfoPatient style={{ borderRadius: '20px' }}
                                errorText={this.state.errorInfo}

                                patient={this.props.state.patient}
                                age={this.props.state.age}
                                cardType={this.props.state.cardType}
                                errorField={this.props.state.errorField}
                                requiredAllParentField={this.props.state.requiredAllParentField}

                                editStatus={this.props.editStatus}
                                setPatientDetail={this.props.setPatientDetail}
                                setField={this.props.setField}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                                
                            />
                        </SegmentForm>
                        <br></br>
                        <SegmentForm >
                            <Header as='h2' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>Contract Patient</h2></Header>
                            <Divider />
                            <ErrorMessage
                                errorText={this.state.errorVerify}
                                cardType={this.state.cardType}
                            />
                            <VerifyField
                                errorText={this.state.errorVerify}

                                patient={this.props.state.patient}
                                errorField={this.props.state.errorField}
                                
                                setPatientDetail={this.props.setPatientDetail}
                                setField={this.props.setField}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                        </SegmentForm>
                        <br></br>
                        <SegmentForm>
                            <Header as='a' style={ColorHeader} ribbon ><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.address.label}</h2></Header>
                            <Divider />
                            <ErrorMessage
                                errorText={this.state.errorAddr}
                                cardType={this.state.cardType}
                            />
                            <HomeAddress
                                field='home'
                                errorField={this.props.state.errorField}
                                patient={this.props.state.patient}

                                setPatientDetail={this.props.setPatientDetail}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                        </SegmentForm>
                        <br></br>

                       <SegmentForm>
                            <Header as='a' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.emerContact.label}</h2></Header>
                            <Divider />
                            <ErrorMessage
                                errorText={this.state.errorEmer}
                                cardType={this.state.cardType}
                            />
                            <EmergencyContact
                                errorField={this.props.state.errorField}
                                patient={this.props.state.patient}
                                errorText={this.state.errorEmer}
                                cardType={this.props.state.cardType}
                                requiredAllEmerField={this.props.state.requiredAllEmerField}

                                setPatientDetail={this.props.setPatientDetail}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                                setField={this.props.setField}
                            />
                        </SegmentForm>
                        <br></br>

                       <SegmentForm>
                            <Header as='a' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.parent.label} <span style={{ color: 'red' }}>{this.props.requiredAllParentField ? '*' : ''}</span></h2></Header>
                            <Divider />
                            <ErrorMessage
                                cardType={this.state.cardType}
                                errorText={this.state.errorParent}
                            />
                            <PatientParent
                                errorField={this.props.state.errorField}
                                patient={this.props.state.patient}
                                errorText={this.state.errorEmer}
                                cardType={this.props.state.cardType}

                                setPatientDetail={this.props.setPatientDetail}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                        </SegmentForm>
                        <br></br>

                         <SegmentForm>
                            <Header as='a' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.allergyNPrivilege.label}</h2></Header>
                            <Divider />
                            <ErrorMessage
                                cardType={this.state.cardType}
                                errorText={this.state.errorAllergy}
                            />
                            <Allergy
                                errorField={this.props.state.errorField}
                                patient={this.props.state.patient}
                                errorText={this.state.errorEmer}
                                cardType={this.props.state.cardType}

                                setPatientDetail={this.props.setPatientDetail}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                        </SegmentForm>
                        <br></br>

                        <Form.Group inline>
                            <Form.Field control={Checkbox}
                                label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก'
                                onChange={() => this.setState({ agreement: !this.state.agreement })}
                            />
                        </Form.Group>
                        <GridColumn width={16}>
                            
                            <Button 
                                disabled={!this.state.agreement}
                                onClick={() => this.props.validate()}
                                style={ButtonRegis}>
                                <h3>CONFIRM</h3>
                            </Button>

                            <Link to='/'>
                                <Button style={{ borderRadius: 20}}color='google plus'><h3>CANCEL</h3></Button>
                            </Link>

                        </GridColumn>
                        <br></br><br></br>
                    </Form>
                </ContanierTop>
                <ScrollUpButton style={{ borderRadius: 60, backgroundColor:'#31A5BA',borderColor:'#D6F2F2',color:'#FFF'}} ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled" />
            </Wrapper> 
        )
    }
}