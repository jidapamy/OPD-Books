import React, { Component } from 'react';
import { Segment, Form, Select, Dropdown } from 'semantic-ui-react'
import moment from 'moment';
import Date from './Date';
import { setErrorMsg, setErrorMsgSplice } from './Validate';

export default class DateField extends Component {
    state = {
        dob: null,
        age: ''
    }

    setDateOfBirth = async (value) => {
        console.log(value)
        await this.setState({ dob: value.format('DD/MM/YYYY') })
        this.calculateAge();
        // this.props.setPatientDetail('dob', value.format('DD/MM/YYYY'))
        this.props.setFieldAndValidate('dob', value.format('DD/MM/YYYY'))
        // const result = setErrorMsgSplice('dob', this.props.errorText)
        // this.props.setField('errorText', result.arr)
    }

    calculateAge = () => {
        let dob = '' + this.state.dob
        let year = ((+(moment().format('YYYY'))) - (+dob.substring(6)));
        let month = (+(moment().format('MM'))) - (+dob.substring(3, 5));
        let tmp = year + " ปี"
        if (year === 0) {
            month = month
            tmp = year + " ปี " + month + " เดือน"
        }
        this.props.setField('age',tmp)
        if(year < 15){
            this.props.setField('requiredAllParentField', true)
        }else{
            this.props.setField('requiredAllParentField', false)
        }
    }

    render() {
        return (
            <Form.Field
                control={() => Date({ setDateOfBirth: this.setDateOfBirth, dob: this.state.dob })}
                label='วัน/เดือน/ปีเกิด (Dob)'
                width={3}
                required
                error={this.props.errorField.dob}
            />
        )
    }
}