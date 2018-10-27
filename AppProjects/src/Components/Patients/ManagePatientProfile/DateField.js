import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react'
import moment from 'moment';
import { patientField } from "../../../Static/Data/Field"
import DatePicker from 'react-datepicker';
import { calculateAge } from "../../.../../../Services/Utils" 

export default class DateField extends Component {
    state = {
        dob: null,
        age: ''
    }

    DateInput = () => {
        if (this.state.dob !== null || this.state.dob != undefined) {
            return <DatePicker
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
        }
        return <DatePicker
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
        />
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

    // calculateAge = () => {
    //     console.log(this.state.dob)
    //     let dob = '' + this.state.dob
    //     let year = ((+(moment().format('YYYY'))) - (+dob.substring(6)));
    //     let month = (+(moment().format('MM'))) - (+dob.substring(3, 5));
    //     let tmp = year + " years"
    //     if (year === 0) {
    //         month = month
    //         tmp = year + " years " + month + " months"
    //     }
    //     console.log("age", tmp)
    //     this.props.setFieldAndValidate('age', tmp)
    //     if (year < 15) {
    //         this.props.setField('requiredAllParentField', true)
    //     } else {
    //         this.props.setField('requiredAllParentField', false)
    //     }
    // }

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