import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { setErrorMsg, setErrorMsgSplice } from './../service/Validate';

export default class Password extends Component {

    passwordField = [{
        label: 'รหัสผ่าน (Password)',
        placeholder: 'รหัสผ่าน (Password)',
        attribute: 'password',
        error:false
    },
    {
        label: 'ยืนยันรหัสผ่าน (ConfirmPassword)',
        placeholder: 'ยืนยันรหัสผ่าน (ConfirmPassword)',
        attribute: 'confirmpassword',
        error: false
    }]

    checkPassword = () => {
        this.props.setPatientDetail('password', '')
        const error = { status: false, message: '' }
        console.log('password', this.state.password)
        console.log('confirmpassword', this.state.confirmpassword)
        if (this.state.password !== null && this.state.confirmpassword !== null) {
            if (!this.state.password.match(/^(?=.*[A-Za-z$@$!%*#?&])+(?=.*[0-9_\W]){8,}.+$/)) { 
                error.status = true;
                error.message = this.props.cardType === 'idcard' ? 'รหัสผ่านต้องประกอบด้วยอักขระอย่างน้อย 8 ตัว' : 'Password must contain at least 8 characters.'
            } else {
                if (this.state.password === this.state.confirmpassword) {
                    error.status = false;
                } else {
                    error.status = true;
                    error.message = this.props.cardType === 'idcard' ? 'รหัสผ่านและยืนยันรหัสของคุณไม่ตรงกัน' : 'Your password and confirm password does not match.'
                }
            }

            console.log('this.props.errorText', this.props.errorText)
            var result;
            if (error.status){
                this.props.errorField.password = true
                result = setErrorMsg('password', error.message, this.props.errorText)
            } else {
                this.props.errorField.password = false
                result = setErrorMsgSplice('password', this.props.errorText)
                this.props.setPatientDetail('password', this.state.password)
            }
            this.props.setField('errorInfo', result.arr)
        }
    }

    render() {
        return this.passwordField.map((text, index) => (
            <Form.Input
                key={index}
                label={text.label}
                placeholder={text.placeholder}
                width={6}
                onBlur={() => this.checkPassword()}
                onChange={e => {
                    this.props.setFieldAndValidate('password',e.target.value)
                }}
                error={this.props.errorField.password}
                required
                type='password'
            />
        ))
    }
}