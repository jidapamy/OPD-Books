import React, { Component } from 'react';
import { Label, Segment, Checkbox, Form, Select, Button, Dropdown } from 'semantic-ui-react'
import { titleNameParentData } from './../static/data/FormDatas'

import HomeAddress from './HomeAddress'
import PhoneNumber from './PhoneNumber'
import ErrorMessage from './ErrorMessage'


export default class EmergencyContact extends Component {
    state = {
        statusSameAddress: false,
        // requiredAllfield: false,
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
        console.log('Detail Patient', this.props.patient)
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
            // เลือกให้ฉุกเฉินเหมือนที่อยู่ปัจจุบัน
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
            console.log('ไม่เลือก', this.emerOldAddress)
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

    render() {
        return (
            <div>
                <Segment style={{ borderRadius: '2rem' }}>
                    <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>กรณีฉุกเฉินติดต่อ (Contact First And Last Name In Case Of Emergency)</h4></Label>
                    <br /><br />
                    <ErrorMessage
                        errorText={this.props.errorText}
                        cardType={this.props.cardType}
                    />
                    <Form.Field
                        label='Clear'
                        onClick={() => this.clearField()}
                    />
                    <br />
                    <Form.Group>
                        <Form.Field
                            control={Checkbox}
                            label='ที่อยู่เดียวกับที่อยู่ปัจจุบัน'
                            onChange={() => this.changeStatusSameAddress()}
                            checked={this.state.statusSameAddress}
                        />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Field
                            control={Dropdown}
                            search
                            selection
                            allowAdditions
                            onAddItem={(e, { value }) => titleNameParentData.push({ key: value, text: value, value: value })}
                            additionLabel='other : '
                            label='คำนำหน้า'
                            options={titleNameParentData}
                            placeholder='เลือกคำนำหน้า'
                            width={6}
                            onChange={async (e, { value }) => {
                                this.setField('emerTitle', value)
                            }}
                            required={this.props.requiredAllEmerField}
                            value={this.state.emerTitle}
                            error={this.props.errorField.emerTitle}
                        />
                        <Form.Input
                            label='ชื่อจริง'
                            placeholder='ชื่อ'
                            width={6}
                            onChange={async (e) => {
                                this.setField('emerFirstname', e.target.value)
                            }}
                            required={this.props.requiredAllEmerField}
                            value={this.state.emerFirstname}
                            error={this.props.errorField.emerFirstname}
                        />
                        <Form.Input
                            label='นามสกุล'
                            placeholder='นามสกุล'
                            width={6}
                            onChange={async (e) => {
                                this.setField('emerLastname', e.target.value)
                            }}
                            required={this.props.requiredAllEmerField}
                            value={this.state.emerLastname}
                            error={this.props.errorField.emerLastname}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='เกี่ยวข้องเป็น (Relationship)'
                            placeholder='ความสัมพันธ์'
                            width={6}
                            onChange={async (e) => {
                                this.setField('emerRelationship', e.target.value)
                            }}
                            required={this.props.requiredAllEmerField}
                            value={this.state.emerRelationship}
                            error={this.props.errorField.emerRelationship}
                            
                        />
                        < PhoneNumber
                            setPatientDetail={this.props.setPatientDetail}
                            errorText={this.props.errorText}
                            setField={this.props.setField}
                            cardType={this.props.cardType}
                            errorField={this.props.errorField}
                            field='emer'
                            required={this.props.requiredAllEmerField}
                            setFieldAndValidate={this.props.setFieldAndValidate}
                            patient={this.props.patient}
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
                </Segment>
                <br></br>
            </div>
        )
    }
}
