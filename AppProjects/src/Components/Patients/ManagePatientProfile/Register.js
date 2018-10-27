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


//static
import BackgroundImage from '../../../Static/Img/BG.png'
import { patientField, groupInfoPatientField } from "../../../Static/Data/Field"

//css
const Wrapper = styled.div`
  background: url(${BackgroundImage}) no-repeat center fixed;
  background-size: 100% 100%;
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