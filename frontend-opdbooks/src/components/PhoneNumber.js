import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react'
import { setErrorMsg, setErrorMsgSplice } from '././../service/ValidateValidate';

export default class PhoneNumber extends Component {

    phoneText = [{
        label: 'โทรศัพท์บ้าน (Home Phonenumber)',
        placeholder: 'ex. 021111111',
        attribute: 'homePhonenumber',
        attributeEmer: 'emerHomePhonenumber',
        error: false,
        required: false
    },
    {
        label: 'โทรศัพท์มือถือ (Mobile Number)',
        placeholder: 'ex. 0811111111',
        attribute: 'mobileNumber',
        attributeEmer: 'emerMobileNumber',
        error: false,
        required: true
    }]

    validateSyntaxPhoneNumber = (field, value) => {
        const error = { status: false, message: '' }
        const type = this.props.field === 'emer' ? ' (กรณีฉุกเฉิน) ' : ''
        if (value.length > 0) {
            if (field === 'mobileNumber' || field === 'emerMobileNumber') {
                if ((value.match(/^[0][0-9]{2}?[-]?[0-9]{3}?[-]?[0-9]{4}$/)) && this.props.cardType === 'idcard') {
                    error.status = false;
                } else {
                    error.status = true;
                    error.message = 'เบอร์โทรศัพท์มือถือ' + type + ' ต้องขึ้นต้นด้วยเลข 0 และเป็นตัวเลข 10 หลักเท่านั้น!';
                }
            }else{
                if ((value.match(/^[0][0-9]?[-]?[0-9]{3}?[-]?[0-9]{4}$/)) && this.props.cardType === 'idcard') {
                    error.status = false;
                } else {
                    error.status = true;
                    error.message = 'เบอร์โทรศัพท์บ้าน' + type + ' ต้องขึ้นต้นด้วยเลข 0 และเป็นตัวเลข 9 หลักเท่านั้น!';
                }
            }
        } else if (value.length === 0){
            error.status = false;
        }

        var result = null;
        if(!error.status){
            this.props.errorField[field] = false
            result = setErrorMsgSplice(field, this.props.errorText)
            this.props.setPatientDetail(field,value)
        }else{
            this.props.errorField[field] = true
            result = setErrorMsg(field, error.message, this.props.errorText)
        }
        this.props.setField(this.props.field === 'emer' ? 'errorEmer' : 'errorInfo', result.arr)
    }

    render() {
        return this.phoneText.map((text, index) => {
            const errorName = this.props.field !== 'emer' ? this.props.errorField[text.attribute] : this.props.errorField[text.attributeEmer]
            let required = false
            if (this.props.field !== 'emer'){ required = text.required }
            else { required = text.attribute === 'mobileNumber' ? this.props.required : false }
            return (
                <Form.Input
                    key={index}
                    label={text.label}
                    placeholder={text.placeholder}
                    width={this.props.field !== 'emer' ? 4 : 6}
                    required={required}
                    onBlur={e => this.validateSyntaxPhoneNumber(this.props.field !== 'emer' ? text.attribute : text.attributeEmer, e.target.value)}
                    error={errorName}
                />
            )
        }
        )

    }
}
