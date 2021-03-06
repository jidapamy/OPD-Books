import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { setErrorMsg, setErrorMsgSplice } from './../../../Services/Utils';
import { pattern } from "../../../Static/Data/Field"

export default class Password extends Component {

    state = {
        password:null,
        confirmpassword:null
    }
    passwordField = [{
        label: 'Password',
        placeholder: 'Password',
        attribute: 'password',
        error:false
    },
    {
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        attribute: 'confirmpassword',
        error: false
    }]

    state = {
        password: null,
        confirmpassword: null,
    }

    checkPassword = () => {
        this.props.setPatientDetail('password', '')
        const error = { status: false, message: '' }
        if (this.state.password !== null && this.state.confirmpassword !== null) {
            if (!this.state.password.match(pattern.password.pattern)) { 
                error.status = true;
                error.message = pattern.password.label
            } else {
                if (this.state.password === this.state.confirmpassword) {
                    error.status = false;
                } else {
                    error.status = true;
                    error.message = 'Your password and confirm password does not match.'
                }
            }

            var result;
            if (error.status){
                this.props.errorField.password = true
                result = setErrorMsg('password', error.message, this.props.errorText)
            } else {
                this.props.errorField.password = false
                result = setErrorMsgSplice('password', this.props.errorText)
                this.props.setPatientDetail('password', this.state.password)
            }
            this.props.setField(this.props.errorText, result)
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
                    this.setState({[text.attribute]:e.target.value})
                }}
                error={this.props.errorField.password}
                required
                type='password'
            />
        ))
    }
}