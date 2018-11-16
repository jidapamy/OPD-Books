import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { setErrorMsg, setErrorMsgSplice } from '../../../Services/Utils';
import { patientField, pattern } from "../../../Static/Data/Field"

export default class Phone extends Component {
    // patient mobile , home
    // emer moblie , home

    state = { 
        pattern : null,
        message : ''
    }

    componentWillMount = () => {
        // เชค mobile , home
        this.setState({ 
            pattern: this.props.type === 'mobile' ? pattern.mobileNumber.pattern : pattern.homePhonenumber.pattern,
            message: this.props.type === 'mobile' ? pattern.mobileNumber.label : pattern.homePhonenumber.label
        })
    }



    validateSyntaxPhoneNumber = (field,value) => {
        const error = { status: false, message: '' }
        if (value.length > 0) {
            if(value.match(this.state.pattern)){
                error.status = false;
            }else{
                error.status = true;
                error.message = this.state.message;
            }
        } else if (value.length === 0) {
            error.status = false;
        }

        let result = null;
        if (!error.status) {
            this.props.errorField[field] = false
            result = setErrorMsgSplice(field, this.props.errorText)
            this.props.setField(this.props.errorText, result)
        } else {
            this.props.errorField[field] = true
            result = setErrorMsg(field, error.message, this.props.errorText)
            this.props.setField(this.props.errorText, result)
        }
        this.props.setField(this.props.errorText, result)
    }


    render() {
        let required = false
        // emer > mobile required depend on this.props.required
        // patient > mobile requird
        let variable = ''
        if (this.props.type == 'mobile'){
            if (this.props.field == 'emer'){
                // emer mobile
                variable = patientField.emerMobileNumber.variable
                required = this.props.required
            }else{
                // patient mobile
                variable = patientField.mobileNumber.variable
                required = true
            }
        }else{
            // home
            if (this.props.field == 'emer') {
                // emer home
                variable = patientField.emerHomePhonenumber.variable
            } else {
                // patient home
                variable = patientField.homePhonenumber.variable
            }
        }
        return <Form.Input
            label={this.props.type === 'mobile' ? patientField.mobileNumber.label : patientField.homePhonenumber.label}
            placeholder={this.props.type === 'mobile' ? patientField.mobileNumber.label : patientField.homePhonenumber.label}
            required={required}
            onBlur={e => this.validateSyntaxPhoneNumber(variable, e.target.value)}
            onChange={e => this.props.setFieldAndValidate(variable, e.target.value)}
            error={this.props.errorField[variable]}
            value={this.props.patient[variable]}
        />
    }
}
