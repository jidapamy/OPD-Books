import React, { Component} from 'react';
import { Label,Segment, Form } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'

export default class PatientParent extends Component { 
    render(){
        return (
            <div>
                <Segment>
                    <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>กรณีผู้เยาว์ในความปกครอง (อายุไม่ถึง 15 ปี บริบูรณ์) กรุณากรอกข้อมูล (In case under 15 years old) <span style={{ color: 'red' }}>{this.props.requiredAllParentField ? '*' : ''}</span></h4></Label>
                    <br/><br/>
                    <ErrorMessage
                        errorText={this.props.errorText}
                        cardType={this.props.cardType}
                    />
                    <Form.Group>
                        <Form.Input
                            label='ชื่อจริงบิดา (Father&#39;s firstname)'
                            placeholder='ชื่อ'
                            width={8}
                            onChange={e => this.props.setFieldAndValidate('fatherFirstname', e.target.value)}
                            error={this.props.errorField.fatherFirstname}
                        />
                        <Form.Input
                            label='นามสกุล (Father&#39;s lastname)'
                            placeholder='นามสกุล'
                            width={8}
                            onChange={e => this.props.setFieldAndValidate('fatherLastname', e.target.value)}
                            error={this.props.errorField.fatherLastname}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='ชื่อจริงมารดา (Mother&#39;s firstname)'
                            placeholder='ชื่อ'
                            width={8}
                            onChange={e => this.props.setFieldAndValidate('motherFirstname', e.target.value)}
                            error={this.props.errorField.motherFirstname}
                        />
                        <Form.Input
                            label='นามสกุล (Mother&#39;s lastname)'
                            placeholder='นามสกุล'
                            width={8}
                            onChange={e => this.props.setFieldAndValidate('motherLastname', e.target.value)}
                            error={this.props.errorField.motherLastname}
                        />
                    </Form.Group>
                </Segment>
                <br></br>
            </div>
        )
    }
    }
