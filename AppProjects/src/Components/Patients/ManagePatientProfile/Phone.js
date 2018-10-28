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
            this.props.setField(this.props.field === 'emer' ? 'errorEmer' : 'errorInfo', result)
        } else {
            this.props.errorField[field] = true
            result = setErrorMsg(field, error.message, this.props.errorText)
            this.props.setField(this.props.field === 'emer' ? 'errorEmer' : 'errorInfo', result)
        }
        this.props.setField(this.props.field === 'emer' ? 'errorEmer' : 'errorInfo', result)
    }


    render() {
        const errorName = this.props.field !== 'emer' ? this.props.errorField[patientField.mobileNumber.variable] : this.props.errorField[patientField.emerMobileNumber.variable]
        let required = false
        // emer > mobile required depend on this.props.required
        // patient > mobile requird
        if(this.props.type == 'mobile' && this.props.field !== 'emer'){
            required = true
        } else if (this.props.type == 'mobile' && this.props.field == 'emer'){
            required = this.props.required
        }
       
        return <Form.Input
            label={this.props.type === 'mobile' ? patientField.mobileNumber.label : patientField.homePhonenumber.label}
            placeholder={this.props.type === 'mobile' ? patientField.mobileNumber.label : patientField.homePhonenumber.label}
            required={required}
            onBlur={e => this.validateSyntaxPhoneNumber(this.props.field !== 'emer' ? patientField.mobileNumber.variable : patientField.emerMobileNumber.variable, e.target.value)}
            onChange={e => this.props.setFieldAndValidate(this.props.field !== 'emer' ? patientField.mobileNumber.variable : patientField.emerMobileNumber.variable, e.target.value)}
            error={errorName}
            value={this.props.field !== 'emer' ? this.props.patient[patientField.mobileNumber.variable] : this.props.patient[patientField.emerMobileNumber.variable]}
        />
    }
}
