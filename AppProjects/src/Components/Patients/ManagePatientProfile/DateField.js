import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react'
import moment from 'moment';
import { patientField } from "../../../Static/Data/Field"
import DatePicker from 'react-datepicker';
import { calculateAge } from "../../.../../../Services/Utils" 
import styled from 'styled-components'

import "react-datepicker/dist/react-datepicker.css";


const FixDatePickerTimer = styled.span`
  & .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    padding-left: unset;
    padding-right: unset;
    width: 100px;
  }
  & .react-datepicker__input-container {
    width:100%;
  }
  & .react-datepicker-wrapper {
    width:100%;
  }
`;

export default class DateField extends Component {
    state = {
        dob: null,
        age: ''
    }

    DateInput = () => {
        if (this.state.dob !== null || this.state.dob != undefined) {
            return <FixDatePickerTimer><DatePicker
                placeholderText="ex. 01/01/1990"
                selected={moment(this.state.dob, 'DD/MM/YYYY')}
                onChange={e => this.setDate(e)}
                dateFormatCalendar={"MMM YYYY"}
                minDate={moment().subtract(145, "year")}
                maxDate={moment().add(0, "year")}
                showYearDropdown
                showMonthDropdown
                required
                value={this.state.dob}
            />
                </FixDatePickerTimer>
        }
        return <FixDatePickerTimer><DatePicker
            dateFormat={"DD/MM/YYYY"}
            placeholderText="ex. 01/01/1990"
            selected={this.state.dob}
            onChange={e => this.setDate(e)}
            dateFormatCalendar={"MMM YYYY"}
            minDate={moment().subtract(145, "year")}
            maxDate={moment().add(0, "year")}
            showYearDropdown
            showMonthDropdown
            required
            value={this.state.dob}
        /></FixDatePickerTimer>
    }

    setDate = (value) => {
        console.log(value)
        let dob = value.format('DD/MM/YYYY')
        console.log(dob)
        let year = ((+(moment().format('YYYY'))) - (+dob.substring(6)));
        console.log(year)
        if (year < 15) {
            this.props.setField('requiredAllParentField', true)
        } else {
            this.props.setField('requiredAllParentField', false)
        }
        this.setState({ dob: dob })
        let age = calculateAge(dob);
        this.props.setFieldAndValidate('age', age)
        this.props.setFieldAndValidate('dob', dob)
    }

    componentWillMount = () => {
        if (this.props.patient) {
            if (this.props.patient.dob) {
                this.setState({ dob: this.props.patient.dob })
            }
        }
    }

    render() {
        return (
            <Form.Field
                control={this.DateInput}
                label={patientField.dob.label}
                required
                error={this.props.errorField ? this.props.errorField.dob : false}
                placeholderText="ex. 01/01/1990"
            />
        )
    }
}