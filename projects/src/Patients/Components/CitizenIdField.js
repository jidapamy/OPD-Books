import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import { setErrorMsg, setErrorMsgSplice } from './../../Service/Validate';
import { checkIdcard } from "./../../Service/ManagePatientMethod";

export default class CitizenIdField extends Component {
    state = {
        citizenId: '',
    }

    checkIdcard = () => {
        if (this.validateSyntaxIdcard()) {
            checkIdcard(this.state.citizenId).then(res => {
                if(res){
                    let error = '';
                    if (this.props.cardType === 'idcard') {
                        error = 'เลขบัตรประชาชนนี้มีใช้แล้ว'
                    } else {
                        error = 'The passport number is duplicated'
                    }
                    this.props.errorField.citizenId = true;
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
            this.props.errorField.citizenId = false; 
            this.props.setField('errorInfo', result)
            return true;
        }else{
            if (this.props.cardType === 'idcard') {
                error = 'รหัสประชาชนต้องมี 13 หลักและเป็นตัวเลขเท่านั้น';
            }else{
                error = 'Passport number pattern missing exactly 9 characters.'
            }
        }
        this.props.errorField.citizenId = true; 
        const result = setErrorMsg('citizenId', error, this.props.errorText)
        this.props.setField('errorInfo', result)
        return false;
    }

    render() {
        return (
            <Form.Input
                loading={false}
                fluid
                label='เลขบัตรประชาชน (ID CARD No./Passport No.)'
                placeholder='เลขบัตรประชาชน/Passport No.'
                width={6}
                onBlur={e => this.checkIdcard(e)}
                onChange={e => this.setState({ citizenId: e.target.value})}
                error={this.props.errorField.citizenId}
                autoFocus
                required
            />
        )
    }
}