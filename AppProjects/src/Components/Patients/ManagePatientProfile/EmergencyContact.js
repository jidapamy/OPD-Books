import React, { Component } from 'react';
import { Label, Segment, Checkbox, Form, Dropdown, Divider, Header, Button, Icon } from 'semantic-ui-react'
import { titleNameParentData } from '../../../Static/Data/FormData'
import { patientField } from "../../../Static/Data/Field"

import HomeAddress from './HomeAddress'
import Phone from './Phone'
import ErrorMessage from './ErrorMessage'


export default class EmergencyContact extends Component {
    state = {
        statusSameAddress: false,
        emerTitle: '',
        emerFirstname: '',
        emerLastname: '',
        emerRelationship: '',
        emerHomePhonenumber: '',
        emerMobileNumber: '',
        emerTypeofHouse: '',
        emerAddress: '',
        emerProvince: '',
        emerDistrict: '',
        emerSubDistrict: '',
        emerZipcode: '',
    }

    emerOldAddress = {}

    fieldEmerContract = [
        'emerAddress', 'emerDistrict', 'emerFirstname', 'emerHomePhonenumber',
        'emerLastname', 'emerMobileNumber', 'emerProvince', 'emerRelationship',
        'emerSubDistrict', 'emerTitle', 'emerTypeofHouse', 'emerZipcode'
    ]

    setFieldEmerAddress = (field, value) => {
        this.setState({ [field]: value })
        if (this.props.patient.emerAddress !== this.props.patient.address ||
            this.props.patient.emerDistrict !== this.props.patient.district ||
            this.props.patient.emerSubDistrict !== this.props.patient.subDistrict ||
            this.props.patient.emerProvince !== this.props.patient.province ||
            this.props.patient.emerTypeofHouse !== this.props.patient.typeofHouse ||
            this.props.patient.emerZipcode !== this.props.patient.emerZipcode) {
            this.setState({ statusSameAddress: false })
        }
    }

    changeStatusSameAddress = () => {
        const status = !this.state.statusSameAddress;
        const addressHome = {
            emerAddress: this.props.patient.address,
            emerDistrict: this.props.patient.district,
            emerSubDistrict: this.props.patient.subDistrict,
            emerProvince: this.props.patient.province,
            emerTypeofHouse: this.props.patient.typeofHouse,
            emerZipcode: this.props.patient.zipcode,
        }
        if (status) {
            console.log("check same!")
            this.emerOldAddress = {
                emerAddress: this.state.emerAddress,
                emerDistrict: this.state.emerDistrict,
                emerProvince: this.state.emerProvince,
                emerSubDistrict: this.state.emerSubDistrict,
                emerTypeofHouse: this.state.emerTypeofHouse,
                emerZipcode: this.state.emerZipcode,
            }
            this.props.setField('requiredAllEmerField', true)
            this.setState({
                statusSameAddress: status,
            })
            this.setState(addressHome)
        } else {
            // ไม่เลือก
            this.setState({
                statusSameAddress: status,
            })
            this.setState(this.emerOldAddress)
        }
        this.fieldEmerContract.map(field => {
            this.props.setPatientDetail(field, status ? addressHome[field] : this.emerOldAddress[field]);
        })
    }

    clearField = () => {
        this.fieldEmerContract.map(field => {
            this.props.setPatientDetail(field, '');
        })
        this.props.setField('requiredAllEmerField', false)
        this.props.setField('errorEmer',[])
        this.setState({
            statusSameAddress: false,
            emerTitle: '',
            emerFirstname: '',
            emerLastname: '',
            emerRelationship: '',
            emerHomePhonenumber: '',
            emerMobileNumber: '',
            emerTypeofHouse: '',
            emerAddress: '',
            emerProvince: '',
            emerDistrict: '',
            emerSubDistrict: '',
            emerZipcode: '',
        })
    }

    setField = (field, value) => {
        this.props.setFieldAndValidate(field, value)
        this.props.setPatientDetail(field, value)
        this.setState({ [field] : value})
        this.setRequiredField()
    }

    setRequiredField = () => {
        if (this.props.patient.emerTitle === '' && this.props.patient.emerFirstname === '' && this.props.patient.emerLastname === '' &&
            this.props.patient.emerRelationship === '' && this.props.patient.emerHomePhonenumber === '' && this.props.patient.emerMobileNumber === '' &&
            this.state.emerTypeofHouse === '' && this.state.emerAddress === '' && this.state.emerProvince === '' &&
            this.state.emerDistrict === '' && this.state.emerSubDistrict === '' && this.state.emerZipcode === ''
        ) {
            this.props.setField('requiredAllEmerField', false)
        } else { this.props.setField('requiredAllEmerField', true)}
    }

    showCheckbox = () => {
        if(!this.props.editStatus){
            return (
                    <Form.Group widths="equal">
                        <Form.Field
                            control={Checkbox}
                            label='Similar to the present address'
                            onChange={() => this.changeStatusSameAddress()}
                            checked={this.state.statusSameAddress}
                        />
                        <Form.Field>
                            <Form>
                            <Button floated='right'
                                style={{ backgroundColor: '#FFF', color: '#31A5BA', border: '1px solid' }}
                                width={3}
                                 onClick={() => this.clearField()}
                            >
                                Clear &nbsp;&nbsp;<Icon name="undo" style={{ color: '#31A5BA', paddingLeft: '9px', fontSize: '15px' }} />
                            </Button>
                            </Form>
                        </Form.Field>

                    </Form.Group>
            )
        }
    }

    componentWillMount = () => {
        if(this.props.patient){
            this.setState(this.props.patient)
        }
    }

    render() {
        return (
            <div>
                    {this.showCheckbox()}
                <Form.Group widths="equal">
                        <Form.Field
                            control={Dropdown}
                            search
                            selection
                            allowAdditions
                            onAddItem={(e, { value }) => titleNameParentData.push({ key: value, text: value, value: value })}
                            additionLabel='other : '
                            label={patientField.emerTitle.label}
                            options={titleNameParentData}
                            placeholder='- Select -'
                            onChange={async (e, { value }) => {
                                this.setField('emerTitle', value)
                            }}
                            required={this.props.requiredAllEmerField}
                            value={this.state.emerTitle}
                            error={this.props.errorField.emerTitle}
                        />
                        <Form.Input
                            label={patientField.emerFirstname.label}
                            placeholder={patientField.emerFirstname.label}
                            onChange={async (e) => {
                                this.setField('emerFirstname', e.target.value)
                            }}
                            required={this.props.requiredAllEmerField}
                            value={this.state.emerFirstname}
                            error={this.props.errorField.emerFirstname}
                        />
                        <Form.Input
                            label={patientField.emerLastname.label}
                            placeholder={patientField.emerLastname.label}
                            onChange={async (e) => {
                                this.setField('emerLastname', e.target.value)
                            }}
                            required={this.props.requiredAllEmerField}
                            value={this.state.emerLastname}
                            error={this.props.errorField.emerLastname}
                        />
                    </Form.Group>
                    <Form.Group widths="equal">
                        <Form.Input
                            label={patientField.emerRelationship.label}
                            placeholder={patientField.emerRelationship.label}
                            onChange={async (e) => {
                                this.setField('emerRelationship', e.target.value)
                            }}
                            required={this.props.requiredAllEmerField}
                            value={this.state.emerRelationship}
                            error={this.props.errorField.emerRelationship}
                            
                        />
                        <Phone
                            setPatientDetail={this.props.setPatientDetail}
                            errorText={this.props.errorText}
                            errorField={this.props.errorField}
                            setField={this.props.setField}
                            cardType={this.props.cardType}
                            field='emer'
                            type='home'
                            setFieldAndValidate={this.props.setFieldAndValidate}
                            patient={this.props.patient}
                            required={this.props.requiredAllEmerField}
                        />
                        <Phone
                            setPatientDetail={this.props.setPatientDetail}
                            errorText={this.props.errorText}
                            errorField={this.props.errorField}
                            setField={this.props.setField}
                            cardType={this.props.cardType}
                            field='emer'
                            type='mobile'
                            setFieldAndValidate={this.props.setFieldAndValidate}
                            patient={this.props.patient}
                            required={this.props.requiredAllEmerField}
                        />
                    </Form.Group>
                    < HomeAddress
                        field='emer'
                        required={this.props.requiredAllEmerField}
                        setPatientDetail={this.props.setPatientDetail}
                        setFieldEmerAddress={this.setFieldEmerAddress}
                        emerAddress={this.state.emerAddress}
                        emerDistrict={this.state.emerDistrict}
                        emerSubDistrict={this.state.emerSubDistrict}
                        emerProvince={this.state.emerProvince}
                        emerTypeofHouse={this.state.emerTypeofHouse}
                        emerZipcode={this.state.emerZipcode}
                        errorField={this.props.errorField}
                        setFieldAndValidate={this.props.setFieldAndValidate}
                        patient={this.props.patient}
                    />
            </div>
        )
    }
}
