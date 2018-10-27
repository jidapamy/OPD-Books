import React, { Component} from 'react';
import { Label,Segment, Form, Header, Divider } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'
import { patientField, groupInfoPatientField } from "../../../Static/Data/Field"

export default class PatientParent extends Component { 
    render(){
        return (
            <div>
                <p style={{ color: '#277e8e', fontSize: '12px' }}> * {groupInfoPatientField.descriptionParent.label} </p>
                    <Form.Group widths="equal">
                        <Form.Input
                            label={patientField.fatherFirstname.label}
                            placeholder={patientField.fatherFirstname.label}
                            onChange={e => this.props.setFieldAndValidate("fatherFirstname", e.target.value)}
                            error={this.props.errorField.fatherFirstname}
                            value={this.props.patient.fatherFirstname}
                        />
                        <Form.Input
                            label={patientField.fatherLastname.label}
                            placeholder={patientField.fatherLastname.label}
                            onChange={e => this.props.setFieldAndValidate("fatherLastname", e.target.value)}
                            error={this.props.errorField.fatherLastname}
                            value={this.props.patient.fatherLastname}
                        />
                    </Form.Group>
                <Form.Group widths="equal">
                        <Form.Input
                            label={patientField.motherFirstname.label}
                            placeholder={patientField.motherFirstname.label}
                            onChange={e => this.props.setFieldAndValidate("motherFirstname", e.target.value)}
                            error={this.props.errorField.motherFirstname}
                            value={this.props.patient.motherFirstname}
                        />
                        <Form.Input
                            label={patientField.motherLastname.label}
                            placeholder={patientField.motherLastname.label}
                            onChange={e => this.props.setFieldAndValidate("motherLastname", e.target.value)}
                            error={this.props.errorField.motherLastname}
                            value={this.props.patient.motherLastname}
                        />
                    </Form.Group>
            </div>
        )
    }
    }
