import React, { Component } from 'react';
import { Segment, Form, Select, Dropdown, Label, Message } from 'semantic-ui-react'
import CitizenIdField from './CitizenIdField';
import DateField from './DateField';
import PhoneNumber from './PhoneNumber'
import Password from './Password'
import ErrorMessage from './ErrorMessage'
import { setErrorMsg, setErrorMsgSplice } from './../service/Validate';
import { defaultAccount, contract, web3 } from './../lib/web3';

import {
    titleNameChildData,genderData, cardTypeData, titleNameParentData, bloodgroupData,
    nationalityData, religionData, statusData, countryData
} from './../static/data/FormDatas.js'


export default class InfoPateint extends Component {

    state = {
        errorText: []
    }

    showCountry = () => {
        if (this.props.cardType !== 'idcard') {
            return <Form.Field
                control={Dropdown}
                search selection
                wrapSelection={false}
                options={countryData}
                placeholder='เลือกประเทศ'
                label='ประเทศ (Country)'
                width={6}
                onChange={(e, { value }) => this.props.setFieldAndValidate('country', value)}
                required
            />
        } else {
            this.props.setPatientDetail('country', 'ไทย (Thai)')
            this.props.setPatientDetail('religion', 'พุทธ (Buddhism)')
            this.props.setPatientDetail('nationality', 'ไทย (Thai)')
            return <Form.Input
                label='ประเทศ (Country)'
                value={this.props.patient.country}
                width={6}
                readOnly
                required
            />
        }
    }

    validateEmail = (value) => {
        if (value.match(/^[A-Za-z0-9$@$!%*#?&]+@+[A-Za-z0-9$@$!%*#?&]/)){
            // ^[A-Za-z0-9$@$!%*#?&]+@+[A-Za-z0-9$@$!%*#?&]+.[A-Za-z]{2,64}
            this.props.errorField.email = false
            const result = setErrorMsgSplice('email', this.props.errorText)
            this.props.setField('errorInfo', result)
            return true;
        }else{
            this.props.errorField.email = true
            const result = setErrorMsg('email', this.props.cardType === 'idcard' ? `โปรดใส่ '@' และป้อนส่วนที่ต่อท้าย '@' ในที่อยู่อีเมลล์, '${value}' ไม่สมบูรณ์` : `Please include an '@' and enter the part following '@' in the email address. '${value}' is incomplete. `, this.props.errorText)
            this.props.setField('errorInfo', result)
            return false;
        }
    }

    checkEmailDuplicate = (value) =>{
        if (this.validateEmail(value)){
            // syntax pass
            const email = contract.checkDuplicateEmail(web3.fromAscii(value))
            console.log('email', email)
            if (email) {
                console.log('email ใช้แล้ว')
                let error = ''
                if (this.props.cardType === 'idcard') {
                    error = 'E-mail นี้มีอยู่ในระบบแล้ว'
                } else {
                    error = 'This E-mail is already exists in the system'
                }
                this.props.errorField.email = true;
                const result = setErrorMsg('email', error, this.props.errorText)
                this.props.setField('errorInfo', result)
            } else {
                this.props.setFieldAndValidate('email', value)
            }
        }
    }

    render() {
        return (
            <div>
                <Segment.Group style={{  borderRadius:'2rem'}}>
                    <Segment style={{  borderRadius: '2rem' }} >
                        <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>ประวัติส่วนตัว (Personal Information)</h4></Label>
                        <br /><br />
                        <ErrorMessage
                            errorText={this.props.errorText}
                            cardType={this.props.cardType}
                        />
                        <Form.Group widths='equal' >
                            <Form.Input fluid
                                id='registerdate'
                                style={{ border: '0 px' }}
                                label='วันที่ทำประวัติ (Register Date)'
                                placeholder=''
                                readOnly
                                value={this.props.currentDate}
                            />
                        </Form.Group>
                        <Form.Group widths='equal' >
                            <Form.Field
                                control={Select}
                                label='ประเภทบัตร (Card type)'
                                options={cardTypeData}
                                placeholder='เลือกประเภทบัตร'
                                width={4}
                                onChange={(e, { value }) => this.props.setField('cardType', value)}
                                value={this.props.cardType}
                                required
                            />
                            <CitizenIdField
                                cardType={this.props.cardType}
                                patient={this.props.patient}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                                errorText={this.props.errorText}
                                setField={this.props.setField}
                                errorField={this.props.errorField}
                            />
                            <DateField
                                patient={this.props.patient}
                                setField={this.props.setField}
                                setPatientDetail={this.props.setPatientDetail}
                                errorText={this.props.errorText}
                                errorField={this.props.errorField}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                            <Form.Input
                                label='อายุ'
                                placeholder='อายุ'
                                width={3}
                                value={this.props.age}
                                readOnly
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                                label='อีเมลล์ (Email)'
                                placeholder='อีเมลล์ (Email)'
                                width={6}
                                onChange={e => this.props.setFieldAndValidate('email', e.target.value)}
                                onBlur={e => {
                                    this.checkEmailDuplicate(e.target.value)
                                }}
                                required
                                type='email'
                                error={this.props.errorField.email}
                            />
                            <Password
                                cardType={this.props.cardType}
                                setPatientDetail={this.props.setPatientDetail}
                                errorText={this.props.errorText}
                                setField={this.props.setField}
                                setFieldAndValidate={this.props.setFieldAndValidate}
                                errorField={this.props.errorField}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Field
                                control={Dropdown}
                                search
                                selection
                                allowAdditions
                                onAddItem={(e, { value }) => {
                                    this.props.requiredAllParentField ? 
                                    titleNameChildData.push({ key: value, text: value, value: value }) :
                                    titleNameParentData.push({ key: value, text: value, value: value })
                                }}
                                additionLabel='other : '
                                label='คำนำหน้า (Title)'
                                options={
                                    this.props.requiredAllParentField ? titleNameChildData : titleNameParentData
                                }
                                placeholder='เลือก (Select)'
                                width={6}
                                onChange={(e, { value }) => this.props.setFieldAndValidate('nameTitle', value)}
                                required
                                error={this.props.errorField.nameTitle}
                            />
                            <Form.Input
                                label='ชื่อจริง (Firstname)'
                                placeholder='ชื่อจริง (Firstname)'
                                width={6}
                                onChange={e => this.props.setFieldAndValidate('firstname', e.target.value)}
                                required
                                error={this.props.errorField.firstname}
                            />
                            <Form.Input
                                label='นามสกุล (Lastname)'
                                placeholder='นามสกุล (Lastname)'
                                width={6}
                                onChange={e => this.props.setFieldAndValidate('lastname', e.target.value)}
                                required
                                error={this.props.errorField.lastname}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Input
                                label='โรคประจำตัว (Congenital Disease)'
                                placeholder='โรคประจำตัว'
                                width={6}
                                required
                                error={this.props.errorField.congenitalDisease}
                                onChange={e => this.props.setFieldAndValidate('congenitalDisease', e.target.value)}
                            />
                            <Form.Field
                                control={Select}
                                label='เพศ (Gender)'
                                options={genderData}
                                placeholder='เลือกเพศ'
                                width={6}
                                onChange={(e, { value }) => this.props.setFieldAndValidate('gender', value)}
                                required
                                error={this.props.errorField.gender}
                            />
                            <Form.Field
                                control={Select}
                                label='กรุ๊ปเลือด (BloodGroup)'
                                options={bloodgroupData}
                                placeholder='เลือกกรุ๊ปเลือด'
                                width={6}
                                onChange={(e, { value }) => this.props.setFieldAndValidate('bloodgroup', value)}
                                required
                                error={this.props.errorField.bloodgroup}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Field
                                control={Dropdown}
                                search
                                selection
                                allowAdditions
                                onAddItem={(e, { value }) => religionData.push({ key: value, text: value, value: value })}
                                additionLabel='other : '
                                label='ศาสนา (Religion)'
                                options={religionData}
                                placeholder='เลือกศาสนา'
                                width={6}
                                onChange={(e, { value }) => this.props.setFieldAndValidate('religion', value)}
                                required
                                error={this.props.errorField.religion}
                            />
                            <Form.Field
                                control={Dropdown}
                                search
                                selection
                                allowAdditions
                                onAddItem={(e, { value }) => nationalityData.push({ key: value, text: value, value: value })}
                                additionLabel='other : '
                                control={Select}
                                label='สัญชาติ (Nationality)'
                                options={nationalityData}
                                placeholder='เลือกสัญชาติ'
                                width={6}
                                onChange={(e, { value }) => this.props.setFieldAndValidate('nationality', value)}
                                required
                                error={this.props.errorField.nationality}
                            />
                            {this.showCountry()}
                        </Form.Group>
                        <Form.Group>
                            <Form.Field
                                control={Select}
                                label='สถานภาพ (Status)'
                                options={statusData}
                                placeholder='สถานะ'
                                width={4}
                                onChange={(e, { value }) => this.props.setFieldAndValidate('status', value)}
                                required
                                error={this.props.errorField.status}
                            />
                            <Form.Input
                                label='อาชีพ (occupartion)'
                                placeholder='อาชีพทำงาน'
                                width={4}
                                onChange={e => this.props.setFieldAndValidate('occupartion', e.target.value)}
                            />
                            < PhoneNumber
                                setPatientDetail={this.props.setPatientDetail}
                                errorText={this.props.errorText}
                                errorField={this.props.errorField}
                                setField={this.props.setField}
                                cardType={this.props.cardType}
                                field='info'
                                setFieldAndValidate={this.props.setFieldAndValidate}
                            />
                        </Form.Group>
                    </Segment>
                </Segment.Group>
                <br></br>
            </div>
        )
    }

}
