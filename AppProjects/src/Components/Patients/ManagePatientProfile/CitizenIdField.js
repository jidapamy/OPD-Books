import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { setErrorMsg, setErrorMsgSplice } from './../../../Services/Utils';
import { checkIdcard } from "../../../Services/ManagePatientMethod";
import { patientField } from "../../../Static/Data/Field"

export default class CitizenIdField extends Component {
    state = {
        citizenId: '',
    }

    checkIdcard = () => {
        if (this.validateSyntaxIdcard()) {
            checkIdcard(this.state.citizenId).then(res => {
                if(res){
                    let error = 'This citizen Id/passport number is duplicated'
                    if (this.props.errorField ) {
                        this.props.errorField.citizenId = true;
                    }
                    const result = setErrorMsg('citizenId', error, this.props.errorText)
                    this.props.setField('errorInfo', result)
                } else {
                    this.props.setFieldAndValidate('citizenId', this.state.citizenId)
                }
            })
        }
    }

    validateSyntaxIdcard = () => {
        let error = '';
        if (this.props.cardType === 'idcard' && this.state.citizenId.length === 13 && this.state.citizenId.match(/^[0-9]+$/) ||
            this.props.cardType === 'passport' && this.state.citizenId.length === 9 && this.state.citizenId.match(/^[a-zA-Z]{2}[0-9]{7}$/)) {
            const result = setErrorMsgSplice('citizenId' , this.props.errorText)
            if (this.props.errorField) {
                this.props.errorField.citizenId = false; 
            }
            this.props.setField('errorInfo', result)
            return true;
        }else{
            if (this.props.cardType === 'idcard') {
                error = 'Citizen Id pattern missing exactly 13 characters.';
            } else {
                error = 'Passport number pattern missing exactly 9 characters.'
            }
        }
        if (this.props.errorField) {
            this.props.errorField.citizenId = true;
        }
        const result = setErrorMsg('citizenId', error, this.props.errorText)
        this.props.setField('errorInfo', result)
        return false;
    }

    render() {
        return (
            <Form.Input
                loading={false}
                fluid
                label={patientField.citizenId.label}
                placeholder={patientField.citizenId.label}
                onBlur={e => this.checkIdcard(e)}
                onChange={e => this.setState({ citizenId: e.target.value})}
                error={this.props.errorField ? this.props.errorField.citizenId : false}
                autoFocus
                required
            />
        )
    }
}