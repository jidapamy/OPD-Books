import React, { Component } from 'react';
import { Label, Segment, Form, Header, Divider,Input,Icon } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ReactPhoneInput from 'react-phone-input';
import { patientField, groupInfoPatientField } from "../../../Static/Data/Field"


export default class ContracRegis extends Component {
    state = {
        phone: ''
    }
    handeOnChange = (value) => {
        this.setState({
            phone: value
    })
}
    render() {
        return (
            <div>
                {/* <p style={{ color: '#277e8e', fontSize: '12px' }}> * {groupInfoPatientField.descriptionParent.label} </p> */}
                <Form>
                <Form.Group widths={2}>
                    <Form.Input 
                        placeholder='Email' 
                        name='email'  
                        onChange={this.handleChange} />
                    <Form.Input 
                        icon={ <Icon style={{ backgroundColor:'#277e8e',color:'#FFFFFF'}} 
                        name='send'   
                        circular link />} 
                        placeholder='Code Verify' 
                        name='codeverify' 
                        onChange={this.handleChange} />
                </Form.Group>
                <Form.Group widths={2}>
                        <ReactPhoneInput defaultCountry={'us'} onChange={handleOnChange)/>
                    <Form.Input 
                        icon={ <Icon style={{ backgroundColor:'#277e8e',color:'#FFFFFF'}} 
                        name='send'   
                        circular link />} 
                        placeholder='Code Verify' 
                        name='codeverify' 
                        onChange={this.handleChange} />
                </Form.Group>
                </Form>
            </div>
        )
    }
}
