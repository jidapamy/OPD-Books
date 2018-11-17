import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Message, Header, Icon, Image, Form, Container, Modal, Button, Checkbox, Grid, Segment, Label, Divider, Visibility } from 'semantic-ui-react'
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
import NavBarPatient from '../../UtilsPage/NavBarPatient'


//static
import { Wrapper } from './../../../Static/Style/QueueCss'
import BGLogoLogin from '../../../Static/Img/LogoLogin.svg'

import { patientField, groupInfoPatientField } from "../../../Static/Data/Field"

//css

const ContanierTop = styled(Container)`
    padding-top:80px;
`
const ColorHeader = {
    color: '#31A5BA',
}
const ButtonRegis = {
    color: '#FFF',
    backgroundColor: '#31A5BA',
    borderRadius: 20,
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
        // requiredAllParentField: false,
        // requiredAllEmerField: false,
        // errorInfo: [],
        // errorAddr: [],
        // errorEmer: [],
        // errorParent: [],
        // errorAllergy: [],
        // errorVerify:[],
        agreement: false,
        validateStatus: false,
        menuFixed: true 
    }

    showParent = () => {
        if (this.props.state.requiredAllParentField) {
            return <span><SegmentForm>
                <Header as='a' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.parent.label} <span style={{ color: '#db2828' }}>{this.props.state.requiredAllParentField ? '*' : ''}</span></h2></Header>
                <Divider />
                <ErrorMessage
                    cardType={this.state.cardType}
                    errorText={this.props.state.errorParent}
                />
                <PatientParent
                    errorText={this.props.state.errorParent}

                    errorField={this.props.state.errorField}
                    patient={this.props.state.patient}
                    cardType={this.props.state.cardType}

                    setPatientDetail={this.props.setPatientDetail}
                    setFieldAndValidate={this.props.setFieldAndValidate}
                />
            </SegmentForm>
                <br></br>
            </span>
        }
    }

    componentWillMount = () => {
        if (this.props.state) {
            if (!this.props.state.patient.registerDate) {
                this.props.state.patient.registerDate = moment().format('LLLL')
            }
            if (this.props.cardType === 'idcard') {
                this.props.state.patient.country = 'Thailand'
            }
            this.setState(this.props.state)
        }
    }

    render() {
        return (
            <div>
                <Visibility
                >
                    <NavBarPatient menuFixed={this.state.menuFixed} goToPage={this.props.goToPage} propsHistory={this.props.history} />
                </Visibility>
            <Wrapper>
                <ContanierTop>
                    <Header size='huge' style={ColorHeader} textAlign='center' >NEW PATIENT REGISTRATION FORM </Header>
                    <Form>
                        <SegmentForm >
                            <Header as='h2' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.info.label}</h2></Header>
                            <Divider />
                            <ErrorMessage
                                errorText={this.props.state.errorInfo}
                                cardType={this.state.cardType}
                            />
                            <InfoPatient style={{ borderRadius: '20px' }}
                                errorText={this.props.state.errorInfo}

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
                            <Header as='h2' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>Security and login</h2></Header>
                            <Divider />
                            <ErrorMessage
                                errorText={this.props.state.errorVerify}
                                cardType={this.state.cardType}
                            />
                            <VerifyField
                                errorText={this.props.state.errorVerify}

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
                                errorText={this.props.state.errorAddr}
                                cardType={this.state.cardType}
                            />
                            <HomeAddress
                                errorText={this.props.state.errorAddr}

                                field='home'
                                errorField={this.props.state.errorField}
                                patient={this.props.state.patient}

                                setPatientDetail={this.props.setPatientDetail}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                        </SegmentForm>
                        <br></br>

                        <SegmentForm>
                            <Form>
                                <Header as='a' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.emerContact.label}</h2></Header>
                                {/* <Button floated='right'>Right Floated</Button> */}
                                {/* <Form.Field
                                width={3}
                                style={{ width: '100%', backgroundColor: '#FFF', color: '#31A5BA', border: '1px solid'}}
                                control={Button}
                                onClick={() => this.editEmail()}
                                floated='right'
                            >
                                Clear &nbsp;&nbsp;<Icon name="undo" style={{ color: '#31A5BA', paddingLeft: '9px', fontSize: '15px' }} />
                            </Form.Field> */}
                            </Form>
                            <Divider />
                            <ErrorMessage
                                errorText={this.props.state.errorEmer}
                                cardType={this.state.cardType}
                            />
                            <EmergencyContact
                                errorField={this.props.state.errorField}
                                patient={this.props.state.patient}
                                errorText={this.props.state.errorEmer}
                                cardType={this.props.state.cardType}
                                requiredAllEmerField={this.props.state.requiredAllEmerField}

                                setPatientDetail={this.props.setPatientDetail}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                                setField={this.props.setField}
                            />
                        </SegmentForm>
                        <br></br>

                        {this.props.state.requiredAllParentField && <span><SegmentForm>
                            <Header as='a' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.parent.label} <span style={{ color: '#db2828' }}>{this.props.state.requiredAllParentField ? '*' : ''}</span></h2></Header>
                            <Divider />
                            <ErrorMessage
                                cardType={this.state.cardType}
                                errorText={this.props.state.errorParent}
                            />
                            <PatientParent
                                errorText={this.props.state.errorParent}

                                errorField={this.props.state.errorField}
                                patient={this.props.state.patient}
                                cardType={this.props.state.cardType}

                                setPatientDetail={this.props.setPatientDetail}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                        </SegmentForm>
                            <br></br>
                        </span>
                        }

                        <SegmentForm>
                            <Header as='a' style={ColorHeader} ribbon><h2 style={{ fontFamily: 'Kanit' }}>{groupInfoPatientField.allergyNPrivilege.label}</h2></Header>
                            <Divider />
                            <ErrorMessage
                                cardType={this.state.cardType}
                                errorText={this.props.state.errorAllergy}
                            />
                            <Allergy
                                errorText={this.props.state.errorAllergy}

                                errorField={this.props.state.errorField}
                                patient={this.props.state.patient}
                                cardType={this.props.state.cardType}

                                setPatientDetail={this.props.setPatientDetail}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                        </SegmentForm>
                        <br></br>

                        <Form.Group inline>
                            <Form.Field control={Checkbox}
                                label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก'
                                checked={this.state.agreement}
                                onChange={() => {
                                    this.setState({ agreement: !this.state.agreement })
                                }}
                                // onChange={() => {
                                //     let validate = this.props.validate()
                                //     this.setState({ agreement: validate ? !this.state.agreement : false, validateStatus: validate })
                                // }}
                            />
                        </Form.Group>
                        <GridColumn width={16}>
                            <Link to='/'>
                                <Button style={{ borderRadius: 20 }} color='google plus'><h3>CANCEL</h3></Button>
                            </Link>
                            <Button
                                disabled={!this.state.agreement}
                                onClick={() => {
                                    let validate = this.props.validate()
                                    this.setState({ validateStatus: validate })
                                }}
                                style={ButtonRegis}>
                                <h3>CONFIRM</h3>
                            </Button>

                        </GridColumn>
                        <br></br><br></br>
                    </Form>
                </ContanierTop>
                <ScrollUpButton style={{ borderRadius: 60, backgroundColor: '#31A5BA', borderColor: '#D6F2F2', color: '#FFF' }} ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled" />
            </Wrapper>
            </div>
        )
    }
}