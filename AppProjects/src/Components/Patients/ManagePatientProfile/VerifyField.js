import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react'
import { patientField, groupInfoPatientField, pattern } from "../../../Static/Data/Field"
import { confirmPopup, successPopup, errorPopup } from "../../SweetAlert"
import { requestOTP, cancelRequestOTP, validateOTP } from "../../../Services/ManagePatientMethod";
import { sendVerifyEmail } from "../../../Services/AuthenticationMethod";
import { checkPassword, checkEmail } from '../../../Services/ManagePatientMethod'
import { generateVerificationCode } from '../../../Services/Utils'
import ReactPhoneInput from 'react-phone-input-2';
import Password from './Password'
import styled from "styled-components";
import swal from 'sweetalert2';

// const PhoneCountry = styled(ReactPhoneInput)`
//     padding-left: 45px !important;
// `
const LabelField = styled.label`
    display: block;
    margin: 0 0 .28571429rem 0;
    color: rgba(0, 0, 0, .87);
    font-size: .92857143em;
    font-weight: 700;
    text-transform: none;
`

const style = {
    verifiedButton: {
        width: '100%',
        backgroundColor: '#FFF',
        color: '#31A5BA',
        fontSize: '12px',
        border: '1px #31A5BA solid',
        height: '38px'
    },
    validateButton: {
        width: '100%',
        backgroundColor: '#393d3e',
        color: '#FFF',
        height: '38px',
        fontSize: '12px',
    },
    successButton: {
        width: '100%',
        backgroundColor: '#FFF',
        color: '#4CAF50',
        fontSize: '12px',
        border: '1px #4CAF50 solid',
        height: '38px'
    },
    cancelButton: {
        width: '100%',
        backgroundColor: '#FFF',
        color: '#ba3131',
        fontSize: '12px',
        border: '1px #ba3131 solid',
        height: '38px'
    }

}

export default class VerifyField extends Component {
    state = {
        email: '',
        sendEmail: false,
        genVerificationCode: '',
        userVerificationCode: '',

        mobileNumber: '',
        otp: '',
        requestId: '',
        mobileNumberbind: '',
        sendOTP: false,
        successOTP: false
    }

    showButtonVerified = (text, onClick) => {
        return <Form.Field
            width={4}
            style={style.verifiedButton}
            control={Button}
            onClick={() => onClick()}
        >
            {text} &nbsp;&nbsp;
        </Form.Field>
    }

    showButtonSuccess = (onClick) => {
        return <Form.Field
            width={4}
            style={style.successButton}
            control={Button}
            onClick={() => onClick()}
        >
            Successful &nbsp;
            <Icon name="check circle" style={{ color: '#4CAF50', paddingLeft: '9px', fontSize: '15px' }} />
        </Form.Field>
    }

    showButtonValidate = (text, onClick, disabled) => {
        return <Form.Field
            width={4}
            style={style.validateButton}
            control={Button}
            onClick={() => onClick()}
            disabled={disabled}
        >
            {text} &nbsp;&nbsp;
        </Form.Field>
    }

    requestOTP = (requestId = null) => {
        if (this.state.mobileNumber) {
            let data = {
                requestId: requestId,
                // citizenId: this.props.patient.citizenId,
                mobileNumber: this.state.mobileNumber
            }
            swal({
                title: 'The system is sending OTP Password to your mobile phone',
                html: 'Please do not close this popup.!',
                onOpen: () => {
                    swal.showLoading()
                    requestOTP(data).then(res => {
                        swal.close()
                        if (res.status) {
                            this.setState({
                                requestId: res.data.requestId,
                                mobileNumberbind: res.data.mobileNumber,
                                sendOTP: true,
                                mobileNumber: data.mobileNumber
                            });
                        } else {
                            if (res.message.indexOf("re-deliver") != -1) {
                                this.setState({
                                    otp: "",
                                    sendOTP: false,
                                    mobileNumber: ''
                                })
                            }
                            errorPopup(res.message)
                        }
                    })
                },
            })
        }
    }

    cancelRequestOTP = (requestOTP) => {
        swal({
            title: 'The system is cenceling your request OTP',
            html: 'Please do not close this popup.!',
            onOpen: () => {
                swal.showLoading()
                cancelRequestOTP(requestOTP).then(res => {
                    swal.close()
                    if (res.status || res.statusCode == '6' || res.statusCode == '19') {
                        this.setState({
                            otp: "",
                            sendOTP: false,
                            mobileNumber: ''
                        })
                    } else {
                        if (res.message.indexOf("re-deliver") != -1) {
                            this.setState({
                                otp: "",
                                sendOTP: false,
                                mobileNumber: ''
                            })
                        }
                        errorPopup(res.message)
                    }
                })
            }
        })
    }

    submitValidateOTP = () => {
        let data = {
            pin: this.state.otp,
            requestId: this.state.requestId,
            citizenId: this.props.patient.citizenId
        }
        swal({
            title: 'System is saving data.',
            html: 'Please do not close this popup.!',
            onOpen: () => {
                swal.showLoading()
                validateOTP(data).then(res => {
                    swal.close()
                    if (res.status) {
                        this.setState({
                            successOTP: true,
                            sendOTP: false,
                            otp: ''
                        })
                        this.props.setFieldAndValidate('mobileNumber', this.state.mobileNumber)
                    } else {
                        if (res.statusCode == '17') {
                            // ผิดเกิด 3 ครั้ง
                            // patient.mobileNumber = this.props.patient.mobileNumber;
                            this.setState({
                                sendOTP: false,
                                otp: ''
                            })
                        }
                        errorPopup(res.message, 'OTP Password incorrect!')
                    }
                })
            }
        })
    }

    requestVerifyEmail = async() => {
        if (this.state.email) {
            if (this.state.email.match(pattern.email)){
                 if (!await checkEmail(this.state.email)) {
                let data = {
                    patient: this.props.patient,
                    email: this.state.email,
                    genVerificationCode: generateVerificationCode()
                }
                swal({
                    title: 'The system is sending verification code to your new email address.',
                    html: 'Please do not close this popup.!',
                    onOpen: () => {
                        swal.showLoading()
                        sendVerifyEmail(data).then(res => {
                            swal.close()
                            if (res.status) {
                                this.setState({
                                    sendEmail: true,
                                    genVerificationCode: data.genVerificationCode
                                })
                            } else {
                                errorPopup(res.message)
                            }
                        })
                    }
                })
            } else {
                errorPopup('This E-mail is already exists in the system. Please re-enter your new email', 'Email Duplicated!').then(res => {
                    this.setState({ errorDupEmail: true })
                })
            }
            }else{
                errorPopup(pattern.email.label).then(res => {
                    this.setState({ errorDupEmail: true })
                })
            }
        }
    }

    submitEmail = async () => {
        swal({
            title: 'System is saving data.',
            html: 'Please do not close this popup.!',
            onOpen: () => {
                swal.showLoading()
                setTimeout(() => {
                    swal.close()
                    if (this.state.genVerificationCode === this.state.userVerificationCode) {
                        this.setState({
                            sendEmail: false,
                            successEmail: true,
                            userVerificationCode: '',
                            generateVerificationCode: ''
                        })
                        this.props.setFieldAndValidate('email', this.state.email)
                    } else {
                        errorPopup('Verification code was incorrect').then(res => {
                            this.setState({ userVerifiedCode: '' })
                        })
                    }
                }, 150);
            }
        })
    }



    render() {
        return (
            <div>
                {/* <p style={{ color: '#277e8e', fontSize: '12px' }}> * {groupInfoPatientField.descriptionParent.label} </p> */}
                {this.state.sendOTP &&
                    <p style={{ color: '#277e8e', fontSize: '12px', marginBottom: '5px' }}>
                        The system has sent OTP Password to your mobile phone : <span style={{ color: "#000" }}>{this.state.mobileNumberbind}</span> <br />
                        Reference Code : <span style={{ color: "#000" }}>{this.state.requestId}</span><br />
                        *If you want to change your mobile phone, please push <span style={{ color: '#ba3131', fontSize: '15px', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => this.cancelRequestOTP(this.state.requestId)} > Cancel </span>
                    </p>
                }
                <Form.Group widths="equal">
                    <Password
                        setPatientDetail={this.props.setPatientDetail}
                        errorText={this.props.errorText}
                        setField={this.props.setField}
                        setFieldAndValidate={this.props.setFieldAndValidate}
                        errorField={this.props.errorField}
                    />
                </Form.Group>

                <Form>
                    <LabelField style={{ color: this.props.errorField.mobileNumber ? '#9f3a38' : '' }}>{patientField.mobileNumber.label}<span style={{ margin: '-.2em 0 0 .2em', color: "#db2828" }}>* </span></LabelField>
                    <Form.Group widths={2}>
                        <Form.Field required readOnly={this.state.sendOTP}>
                            <ReactPhoneInput
                                disabled={this.state.sendOTP || this.state.successOTP}
                                // readOnly={this.state.sendOTP}
                                inputStyle={{ paddingLeft: 50, height: '38px', background: this.props.errorField.mobileNumber ? '#fff6f6' : '', borderColor: this.props.errorField.mobileNumber ? '#e0b4b4' : '' }}
                                defaultCountry={'th'} onChange={(e) => this.setState({ mobileNumber: e })}
                                value={this.state.mobileNumber}

                                onChange={(e) => { 
                                    this.props.setFieldAndValidate('mobileNumber', '')
                                    this.setState({ mobileNumber: e }) 
                                }}
                                inputExtraProps={{
                                    required: true,
                                }}
                            />
                        </Form.Field>
                        {!this.state.sendOTP && !this.state.successOTP && this.showButtonVerified('Request OTP', this.requestOTP)}
                        {this.state.sendOTP && this.showButtonVerified('Request again', () => this.requestOTP(this.state.requestId))}
                        {this.state.successOTP && this.showButtonSuccess()}

                        <Form.Input
                            disabled={!this.state.sendOTP}
                            placeholder='OTP Password'
                            onChange={e => this.setState({ otp: e.target.value })}
                            type='password'
                            value={this.state.otp}
                        />
                        {this.showButtonValidate('Validation', this.submitValidateOTP, !this.state.sendOTP)}
                    </Form.Group>
                </Form>

                <Form>
                    <LabelField style={{ color: this.props.errorField.email ? '#9f3a38' : '' }}>{patientField.email.label}<span style={{ margin: '-.2em 0 0 .2em', color: "#db2828" }}>* </span></LabelField>
                    <Form.Group widths={2}>
                        <Form.Field required>
                            <Form.Input
                                placeholder={patientField.email.label} vb
                                onChange={e => {
                                    this.props.setFieldAndValidate('email', '')
                                    this.setState({ email: e.target.value })}
                                }
                                required
                                // type='email'
                                value={this.state.email}
                                readOnly={this.state.sendEmail}
                                error={this.props.errorField.email}
                            />
                        </Form.Field>
                        {/* {this.showButtonVerified('Verification', this.editEmail)} */}
                        {!this.state.sendEmail && !this.state.successEmail && this.showButtonVerified('Verification', this.requestVerifyEmail)}
                        {this.state.sendEmail && <Form.Field
                            width={4}
                            style={style.cancelButton}
                            control={Button}
                            onClick={() => this.setState({
                                sendEmail: false,
                                generateVerificationCode: '',
                                userVerificationCode: ''
                            })}
                        >
                            Cancel &nbsp;&nbsp;<Icon name="cancel" style={{ color: '#ba3131', paddingLeft: '9px', fontSize: '15px' }} />
                        </Form.Field>}
                        {this.state.successEmail && this.showButtonSuccess()}

                        <Form.Input
                            disabled={!this.state.sendEmail}
                            placeholder="Verification password"
                            onChange={e => this.setState({ userVerificationCode: e.target.value })}
                            required
                            type='password'
                            value={this.state.userVerificationCode}
                        />
                        {this.showButtonValidate('Validation', this.submitEmail, !this.state.sendEmail)}
                    </Form.Group>
                </Form>

            </div>
        )
    }
}
