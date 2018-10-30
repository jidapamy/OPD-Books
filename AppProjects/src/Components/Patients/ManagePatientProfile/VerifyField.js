import React, { Component } from 'react';
import { Label, Segment, Form, Header, Divider, Input, Icon, Button } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'
import { setErrorMsg, setErrorMsgSplice } from '../../../Services/Utils';
import { patientField, pattern } from "../../../Static/Data/Field"
import { checkEmail } from "../../../Services/ManagePatientMethod";
import ReactPhoneInput from 'react-phone-input-2';
import styled from "styled-components";

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

export default class VerifyField extends Component {
    state = {
        email: '',
        verifyCodeEmail: '',

        mobileNumber: '',
        otp: '',
        phone:''
    }

    validateEmail = (value) => {
        if (value.match(pattern.email.pattern)) {
            // /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
            this.props.errorField.email = false
            const result = setErrorMsgSplice('email', this.props.errorText)
            this.props.setField('errorInfo', result)
            return true;
        } else {
            this.props.errorField.email = true
            const result = setErrorMsg('email', pattern.email.label, this.props.errorText)
            this.props.setField('errorInfo', result)
            return false;
        }
    }

    checkEmailDuplicate = async (value) => {
        if (this.validateEmail(value)) {
            // syntax pass
            checkEmail(value).then(res => {
                if (res) {
                    let error = 'This E-mail is already exists in the system'
                    this.props.errorField.email = true;
                    const result = setErrorMsg('email', error, this.props.errorText)
                    this.props.setField('errorInfo', result)
                } else {
                    this.props.setFieldAndValidate('email', value)
                }
            })
        }
    }

    sendVerifyEmail = () => {
        console.log("On click")
    }

    checkVerifyEmail = () => {
        console.log('checkVerifyEmail')
    }

    handleOnChange = (value) => {
        console.log(value)
        this.setState({
            mobileNumber: value
        });
    }
    render() {
        return (
            <div>
                {/* <p style={{ color: '#277e8e', fontSize: '12px' }}> * {groupInfoPatientField.descriptionParent.label} </p> */}
                <Form>
                    
                    <LabelField>{patientField.email.label}</LabelField>
                    <Form.Group widths={2}>
                        <Form.Field required>
                            <Form.Input
                                placeholder={patientField.email.label} vb
                                onChange={e => this.setState({ email: e.target.value })}
                                // onBlur={e => { this.checkEmailDuplicate(e.target.value) }}
                                required
                                type='email'
                                error={this.props.errorField ? this.props.errorField.email : false}
                                value={this.props.patient.email}
                            />
                        </Form.Field>
                        <Form.Field
                        width={4}
                            style={{ width: '100%', backgroundColor: '#42C1D8', color: '#FFF' }}
                            control={Button}>&nbsp;Verifycation &nbsp;
                            <Icon name="sent" style={{ color: '#FFF', paddingLeft: '9px', fontSize: '15px' }} />
                        </Form.Field>
                        <Form.Input
                            // label='Verify Code for Email'
                            placeholder='Verify Code'
                            onChange={e => this.setState({ verifyCodeEmail: e.target.value })}
                            required
                            type='email'
                            value={this.state.verifyCodeEmail}
                        />
                        <Form.Field
                            width={4}
                            style={{ width: '100%', backgroundColor: '#42C1D8', color: '#FFF' }}
                            control={Button}>&nbsp;Validation&nbsp;
                            <Icon name="sent" style={{ color: '#FFF', paddingLeft: '9px', fontSize: '15px' }} />
                        </Form.Field>

                    </Form.Group>
                </Form>
                <Form>
                    
                    <LabelField>{patientField.mobileNumber.label}</LabelField>
                    <Form.Group widths={2}>
                        <Form.Field required>
                            <ReactPhoneInput
                                inputStyle={{ paddingLeft: 50 }}
                                icon={<Icon style={{ backgroundColor: '#42C1D8', color: '#FFFFFF' }} name='send' onClick={() => this.requestOTP()} />}
                                defaultCountry={'th'} onChange={(e) => this.setState({ mobileNumber: e })}
                                value={this.state.mobileNumber}

                            />
                        </Form.Field>
                        <Form.Field
                            width={4}
                            style={{ width: '100%', backgroundColor: '#42C1D8', color: '#FFF' }}
                            control={Button}>&nbsp; Request OTP &nbsp;
                            <Icon name="sent" style={{ color: '#FFF', paddingLeft: '9px', fontSize: '15px' }} />
                        </Form.Field>
                        <Form.Input
                            placeholder='OTP Code'
                            onChange={e => this.setState({ otp: e.target.value })}
                            type='email'
                            value={this.state.otp}
                        />
                        <Form.Field
                            width={4}
                            style={{ width: '100%', backgroundColor: '#42C1D8', color: '#FFF' }}
                            control={Button}>&nbsp; Validation &nbsp;
                            <Icon name="sent" style={{ color: '#FFF', paddingLeft: '9px', fontSize: '15px' }} />
                        </Form.Field>
                  
                    </Form.Group>
                </Form>










                
            </div>
        )
    }
}
