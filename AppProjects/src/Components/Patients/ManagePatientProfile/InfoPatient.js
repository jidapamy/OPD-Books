import React, { Component } from 'react';
import { Segment, Form, Select, Dropdown, Header, Divider } from 'semantic-ui-react'
import CitizenIdField from './CitizenIdField';
import DateField from './DateField';
import PhoneNumber from './PhoneNumber'
import Password from './Password'
import ErrorMessage from './ErrorMessage'
import { setErrorMsg, setErrorMsgSplice } from '../../../Services/Utils';
import {
    titleNameChildData, genderData, cardTypeData, titleNameParentData, bloodgroupData,
    nationalityData, religionData, statusData, countryData
} from '../../../Static/Data/FormData'
import { checkEmail } from "../../../Services/ManagePatientMethod";
import { patientField, pattern } from "../../../Static/Data/Field"
import Phone from './Phone'


export default class InfoPateint extends Component {
    state = { errorText: [] }

    validateEmail = (value) => {
        if (value.match(pattern.email.pattern)) {
            // /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
            this.props.errorField.email = false
            const result = setErrorMsgSplice('email', this.props.errorText)
            this.props.setField('errorInfo', result)
            return true;
        } else {
            this.props.errorField.email = true
            const result = setErrorMsg('email', pattern.email.label , this.props.errorText)
            this.props.setField('errorInfo', result)
            return false;
        }
    }

    checkEmailDuplicate = async (value) => {
        if (this.validateEmail(value)) {
            // syntax pass
            checkEmail(value).then(res => {
                if (res) {
                    let error = 'This E-mail is already exists in the system'
                    this.props.errorField.email = true;
                    const result = setErrorMsg('email', error, this.props.errorText)
                    this.props.setField('errorInfo', result)
                } else {
                    this.props.setFieldAndValidate('email', value)
                }
            })
        }
    }

    showTag = () => {
        if (!this.props.editStatus) {
            return (
                <div >
                    <Form.Group widths='equal' >
                        <Form.Input fluid
                            style={{ border: '0 px' }}
                            label={patientField.registerDate.label}
                            placeholder=''
                            readOnly
                            value={this.props.patient.registerDate}
                        />
                    </Form.Group>
                    <Form.Group widths='equal' >
                        <Form.Field
                            control={Select}
                            label='Card type'
                            options={cardTypeData}
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
                            label={patientField.age.label}
                            placeholder={patientField.age.label}
                            value={this.props.patient.age}
                            readOnly
                            required
                        />
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Input
                            label={patientField.email.label}
                            placeholder={patientField.email.label} vb
                            width={6}
                            onChange={e => this.props.setFieldAndValidate('email', e.target.value)}
                            onBlur={e => {
                                this.checkEmailDuplicate(e.target.value)
                            }}
                            required
                            type='email'
                            error={this.props.errorField ? this.props.errorField.email : false}
                            value={this.props.patient.email}
                        />
                        <Password
                            setPatientDetail={this.props.setPatientDetail}
                            errorText={this.props.errorText}
                            setField={this.props.setField}
                            setFieldAndValidate={this.props.setFieldAndValidate}
                            errorField={this.props.errorField}
                        />
                    </Form.Group> */}
                </div>
            )
        }
    }

    showTag2 = () => {
        if(!this.props.editStatus){
            return (
                <div>
                    <Form.Group widths="equal">
                        <Form.Input
                            label={patientField.congenitalDisease.label}
                            placeholder={patientField.congenitalDisease.label}
                            required
                            error={this.props.errorField ? this.props.errorField.congenitalDisease : false}
                            onChange={e => this.props.setFieldAndValidate('congenitalDisease', e.target.value)}
                            value={this.props.patient.congenitalDisease}
                        />
                        <Form.Field
                            control={Select}
                            label={patientField.gender.label}
                            options={genderData}
                            placeholder='- Select -'
                            onChange={(e, { value }) => this.props.setFieldAndValidate('gender', value)}
                            required
                            error={this.props.errorField ? this.props.errorField.gender : false}
                            value={this.props.patient.gender}
                        />
                        <Form.Field
                            control={Select}
                            label={patientField.bloodgroup.label}
                            options={bloodgroupData}
                            placeholder='- Select -'
                            onChange={(e, { value }) => this.props.setFieldAndValidate('bloodgroup', value)}
                            required
                            error={this.props.errorField ? this.props.errorField.bloodgroup : false}
                            value={this.props.patient.bloodgroup}
                        />
                    </Form.Group>
                </div>
            )
        }
    }

    showTag3 = () => {
        if(!this.props.editStatus){
            return <Form.Group widths="equal">
                <Form.Field
                    control={Select}
                    label={patientField.status.label}
                    options={statusData}
                    placeholder='- Select -'
                    onChange={(e, { value }) => this.props.setFieldAndValidate('status', value)}
                    required
                    error={this.props.errorField ? this.props.errorField.status : false}
                    value={this.props.patient.status}
                />
                <Form.Input
                    label={patientField.occupartion.label}
                    placeholder={patientField.occupartion.label}
                    onChange={e => this.props.setFieldAndValidate('occupartion', e.target.value)}
                    value={this.props.patient.occupartion}
                />
                <Phone
                    setPatientDetail={this.props.setPatientDetail}
                    errorText={this.props.errorText}
                    errorField={this.props.errorField}
                    setField={this.props.setField}
                    cardType={this.props.cardType}
                    field='info'
                    type='home'
                    setFieldAndValidate={this.props.setFieldAndValidate}
                    patient={this.props.patient}
                />
                {/* <Phone
                    setPatientDetail={this.props.setPatientDetail}
                    errorText={this.props.errorText}
                    errorField={this.props.errorField}
                    setField={this.props.setField}
                    cardType={this.props.cardType}
                    field='info'
                    type='mobile'
                    setFieldAndValidate={this.props.setFieldAndValidate}
                    patient={this.props.patient}
                /> */}
                {/* < PhoneNumber
                    setPatientDetail={this.props.setPatientDetail}
                    errorText={this.props.errorText}
                    errorField={this.props.errorField}
                    setField={this.props.setField}
                    cardType={this.props.cardType}
                    field='info'
                    setFieldAndValidate={this.props.setFieldAndValidate}
                    patient={this.props.patient}
                /> */}
            </Form.Group>
        }
        return <Form.Group widths="equal">
            <Form.Field
                control={Select}
                label={patientField.status.label}
                options={statusData}
                placeholder='- Select -'
                onChange={(e, { value }) => this.props.setFieldAndValidate('status', value)}
                required
                error={this.props.errorField ? this.props.errorField.status : false}
                value={this.props.patient.status}
            />
            <Form.Input
                label={patientField.occupartion.label}
                placeholder={patientField.occupartion.label}
                onChange={e => this.props.setFieldAndValidate('occupartion', e.target.value)}
                value={this.props.patient.occupartion}
            />
            <Phone
                setPatientDetail={this.props.setPatientDetail}
                errorText={this.props.errorText}
                errorField={this.props.errorField}
                setField={this.props.setField}
                cardType={this.props.cardType}
                field='info'
                type='home'
                setFieldAndValidate={this.props.setFieldAndValidate}
                patient={this.props.patient}
            />
            {/* < PhoneNumber
                setPatientDetail={this.props.setPatientDetail}
                errorText={this.props.errorText}
                errorField={this.props.errorField}
                setField={this.props.setField}
                cardType={this.props.cardType}
                field='info'
                setFieldAndValidate={this.props.setFieldAndValidate}
                patient={this.props.patient}
            /> */}
        </Form.Group>
    }
    render() {
        return (
            <div>
                {this.showTag()}

                <Form.Group widths="equal">
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
                        label={patientField.nametitle.label}
                        options={
                            this.props.requiredAllParentField ? titleNameChildData : titleNameParentData
                        }
                        placeholder='- Select -'
                        onChange={(e, { value }) => this.props.setFieldAndValidate('nametitle', value)}
                        required
                        error={this.props.errorField ? this.props.errorField.nametitle : false}
                        value={this.props.patient.nametitle}
                    />
                    <Form.Input
                        label={patientField.firstname.label}
                        placeholder={patientField.firstname.label}
                        onChange={e => this.props.setFieldAndValidate('firstname', e.target.value)}
                        required
                        error={this.props.errorField ? this.props.errorField.firstname : false}
                        value={this.props.patient.firstname}
                    />
                    <Form.Input
                        label={patientField.lastname.label}
                        placeholder={patientField.lastname.label}
                        onChange={e => this.props.setFieldAndValidate('lastname', e.target.value)}
                        required
                        error={this.props.errorField ? this.props.errorField.lastname : false}
                        value={this.props.patient.lastname}
                    />
                </Form.Group>

                {this.showTag2()}
                <Form.Group widths="equal">
                    <Form.Field
                        control={Dropdown}
                        search
                        selection
                        allowAdditions
                        onAddItem={(e, { value }) => religionData.push({ key: value, text: value, value: value })}
                        additionLabel='other : '
                        label={patientField.religion.label}
                        options={religionData}
                        placeholder='- Select -'
                        onChange={(e, { value }) => this.props.setFieldAndValidate('religion', value)}
                        required
                        error={this.props.errorField ? this.props.errorField.religion : false}
                        value={this.props.patient.religion}
                    />
                    <Form.Field
                        control={Dropdown}
                        search
                        selection
                        allowAdditions
                        onAddItem={(e, { value }) => nationalityData.push({ key: value, text: value, value: value })}
                        additionLabel='other : '
                        control={Select}
                        label={patientField.nationality.label}
                        options={nationalityData}
                        placeholder='- Select -'
                        onChange={(e, { value }) => this.props.setFieldAndValidate('nationality', value)}
                        required
                        error={this.props.errorField ? this.props.errorField.nationality : false}
                        value={this.props.patient.nationality}
                    />
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        options={countryData}
                        placeholder='- Select -'
                        label={patientField.country.label}
                        value={this.props.patient.country}
                        onChange={(e, { value }) => this.props.setFieldAndValidate('country', value)}
                        required
                    />
                </Form.Group>
                {this.showTag3()}
               
            </div>
        )
    }

}
