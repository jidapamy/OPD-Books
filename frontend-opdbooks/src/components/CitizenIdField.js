import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import axios from './../lib/axois';
import { setErrorMsg, setErrorMsgSplice } from './../service/Validate';

export default class CitizenIdField extends Component {
    state = {
        citizenId: '',
        erroridcard: false,
    }

    checkIdcard = async (e) => {
        if (this.validateSyntaxIdcard()) {
            const patient = await axios.get(`/checkIDCard/${this.state.citizenId}`)
            console.log(patient)
            if (!patient.data) {
                console.log('ใช้แล้ว')
                const error = { status: true, message: '' };
                if (this.props.cardType === 'idcard') {
                    error.message = 'เลขบัตรประชาชนนี้มีใช้แล้ว'
                } else {
                    error.message = 'The passport number is duplicated'
                }
                this.setState({ erroridcard: error.status })
                const result = setErrorMsg('erroridcard', error.message, this.props.errorText)
                this.props.setField('errorInfo', result)
            }else{
                this.props.setPatientDetail('citizenId',this.state.citizenId)
            }
        }
    }

    validateSyntaxIdcard = () => {
        const error = { status: false, message: '' }
        if (this.props.cardType === 'idcard' && this.state.citizenId.length === 13 && this.state.citizenId.match(/^[0-9]+$/) ||
            this.props.cardType === 'passport' && this.state.citizenId.length === 9 && this.state.citizenId.match(/^[a-zA-Z]{2}[0-9]{7}$/)) {
            const result = setErrorMsgSplice('citizenId' , this.props.errorText)
            this.setState({ erroridcard: error.status })
            this.props.setField('errorInfo', result)
            return true;
        }else{
            if (this.props.cardType === 'idcard') {
                error.message = 'รหัสประชาชนต้องมี 13 หลักและเป็นตัวเลขเท่านั้น';
            }else{
                error.message = 'Passport number pattern missing exactly 9 characters.'
            }
            error.status = true;
        }
        const result = setErrorMsg('citizenId', error.message, this.props.errorText)
        this.setState({ erroridcard: error.status })
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
                error={this.state.erroridcard}
                autoFocus
                required
            />
        )
    }
}