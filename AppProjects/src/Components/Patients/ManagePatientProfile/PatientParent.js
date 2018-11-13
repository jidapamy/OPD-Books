import React, { Component} from 'react';
import { Label,Segment, Form, Header, Divider } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'
import { patientField, groupInfoPatientField } from "../../../Static/Data/Field"

export default class PatientParent extends Component { 
    checkRequired = (field) => {
        if (this.props.patient[field]) {
            return true
        }
        return false
    }

    statusFalse = () => {
        this.props.errorField.fatherFirstname = false
        this.props.errorField.fatherLastname = false
        this.props.errorField.motherFirstname = false
        this.props.errorField.motherLastname = false
    }

    render(){
        return (
            <div>
                <p style={{ color: '#277e8e', fontSize: '12px' }}> * {groupInfoPatientField.descriptionParent.label} </p>
                    <Form.Group widths="equal">
                        <Form.Input
                            label={patientField.fatherFirstname.label}
                            placeholder={patientField.fatherFirstname.label}
                            onChange={e => {
                                this.statusFalse()
                                this.props.setFieldAndValidate("fatherFirstname", e.target.value)
                            }}
                            error={this.props.errorField.fatherFirstname}
                            value={this.props.patient.fatherFirstname}
                            required={this.checkRequired('fatherFirstname') || this.checkRequired('fatherLastname')}
                        />
                        <Form.Input
                            label={patientField.fatherLastname.label}
                            placeholder={patientField.fatherLastname.label}
                            onChange={e => {
                                this.statusFalse()
                                this.props.setFieldAndValidate("fatherLastname", e.target.value)
                            }}
                            error={this.props.errorField.fatherLastname}
                            value={this.props.patient.fatherLastname}
                            required={this.checkRequired('fatherFirstname') || this.checkRequired('fatherFirstname')}
                        />
                    </Form.Group>
                <Form.Group widths="equal">
                        <Form.Input
                            label={patientField.motherFirstname.label}
                            placeholder={patientField.motherFirstname.label}
                            onChange={e => {
                                this.statusFalse()
                                this.props.setFieldAndValidate("motherFirstname", e.target.value)
                            }}
                            error={this.props.errorField.motherFirstname}
                            value={this.props.patient.motherFirstname}
                        required={this.checkRequired('motherFirstname') || this.checkRequired('motherLastname')}
                        />
                        <Form.Input
                            label={patientField.motherLastname.label}
                            placeholder={patientField.motherLastname.label}
                            onChange={e => {
                                this.statusFalse()
                                this.props.setFieldAndValidate("motherLastname", e.target.value)
                            }}
                            error={this.props.errorField.motherLastname}
                            value={this.props.patient.motherLastname}
                            required={this.checkRequired('motherFirstname') || this.checkRequired('motherLastname')}
                        />
                    </Form.Group>
            </div>
        )
    }
    }
