import React, { Component } from 'react';
import { Form, Dropdown } from 'semantic-ui-react'
import { typesOfHousingData } from '../../../Static/Data/FormData'
import { patientField } from "../../../Static/Data/Field"

const provincesData = require('../../../Static/Data/Provinces')
const amphursData = require('../../../Static/Data/Amphurs')
const districtsData = require('../../../Static/Data/Districts')

export default class HomeAddress extends Component {
    state = {
        typeofHouse: '',
        address: '',
        province: '',
        district: '',
        subDistrict: '',
        zipcode: '',
        provinces: [],
        amphurs: [],
        districts: [],
    }

    emerAddress = {
        emerAddress: '',
        emerDistrict: '',
        emerSubDistrict: '',
        emerProvince: '',
        emerTypeofHouse: '',
        emerZipcode: '',
    }

    changeProvince = (value) => {
        const province = value.options.filter(option => option.value === value.value)[0]
        const amphurs = amphursData.default[province.key]
        this.setState({
            district: '',
            subDistrict: '',
            zipcode: '',
            amphurs: amphurs,
            province: province.value
        })
        this.props.setFieldAndValidate(this.props.field === 'home' ? 'province' : 'emerProvince', province.value)
        if (this.props.field !== 'home') {
            this.props.setFieldEmerAddress('emerProvince', province.value)
        }
    }

    changeAmphur = (value) => {
        const amphur = value.options.filter(option => option.value === value.value)[0]
        const districts = districtsData.default[amphur.key]
        this.setState({
            subDistrict: '',
            zipcode: '',
            districts: districts,
            district: amphur.value
        })
        this.props.setFieldAndValidate(this.props.field === 'home' ? 'district' : 'emerDistrict', amphur.value)
        if (this.props.field !== 'home') {
            this.props.setFieldEmerAddress('emerDistrict', amphur.value)
        }
    }

    changeDistrict = (value) => {
        const district = value.options.filter(option => option.value === value.value)[0]
        this.setState({
            subDistrict: district.value,
            zipcode: district.zipcode
        })
        this.props.setFieldAndValidate(this.props.field === 'home' ? 'subDistrict' : 'emerSubDistrict', district.value)
        this.props.setFieldAndValidate(this.props.field === 'home' ? 'zipcode' : 'emerZipcode', district.zipcode)
        if (this.props.field !== 'home') {
            this.props.setFieldEmerAddress('emerSubDistrict', district.value)
            this.props.setFieldEmerAddress('emerZipcode', district.zipcode)
        }
    }

    componentWillMount() {
        this.setState({ 
            provinces: provincesData.default,
        })
    }

    setField=(field,value)=>{
        this.props.setPatientDetail(field, value)
        this.setState({ [field]: value })
        if(this.props.field !== 'home'){
            this.props.setFieldEmerAddress(field, value)
        }
    }

    render() {
        const typeofHouse = this.props.patient.typeofHouse === '' ? this.state.typeofHouse : this.props.patient.typeofHouse
        const address = this.props.patient.address === '' ? this.state.address : this.props.patient.address
        const province = this.props.patient.province === '' ? this.state.province : this.props.patient.province
        const district = this.props.patient.district === '' ? this.state.district : this.props.patient.district
        const subDistrict = this.props.patient.subDistrict === '' ? this.state.subDistrict : this.props.patient.subDistrict
        const zipcode = this.props.patient.zipcode === '' ? this.state.zipcode : this.props.patient.zipcode
        
        return (
            <div>
                <Form.Group >
                    <Form.Field
                        control={Dropdown}
                        search
                        selection
                        allowAdditions
                        onAddItem={(e, { value }) => typesOfHousingData.push({ key: value, text: value, value: value })}
                        additionLabel='other : '
                        label={patientField.typeofHouse.label}
                        options={typesOfHousingData}
                        placeholder='- Select -'
                        width={6}
                        onChange={(e, { value }) => {
                            this.props.setFieldAndValidate(this.props.field === 'home' ? 'typeofHouse' : 'emerTypeofHouse',value)
                            this.setField(this.props.field === 'home' ? 'typeofHouse' : 'emerTypeofHouse', value)
                        }}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerTypeofHouse != undefined ? this.props.emerTypeofHouse : typeofHouse}
                        error={this.props.field === 'home' ? this.props.errorField.typeofHouse : this.props.errorField.emerTypeofHouse}
                    />
                    <Form.Input
                        label={patientField.address.label}
                        placeholder='House no/ Street address'
                        width={6}
                        onChange={e => {
                            this.props.setFieldAndValidate(this.props.field === 'home' ? 'address' : 'emerAddress', e.target.value)
                            this.setField(this.props.field === 'home' ? 'address' : 'emerAddress', e.target.value)
                        }}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerAddress != undefined ? this.props.emerAddress : address}
                        error={this.props.field === 'home' ? this.props.errorField.address : this.props.errorField.emerAddress}
                    />
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        options={this.state.provinces}
                        label={patientField.province.label}
                        placeholder='- Select -'
                        width={6}
                        onChange={(e, value) => this.changeProvince(value)}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerProvince != undefined ? this.props.emerProvince : province}
                        text={this.props.emerProvince != undefined ? this.props.emerProvince : province}
                        error={this.props.field === 'home' ? this.props.errorField.province : this.props.errorField.emerProvince}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        options={this.state.amphurs}
                        label={patientField.district.label}
                        placeholder='- Select -'
                        width={6}
                        onChange={(e, value) => this.changeAmphur(value)}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerDistrict != undefined ? this.props.emerDistrict : district}
                        text={this.props.emerDistrict != undefined ? this.props.emerDistrict : district}
                        error={this.props.field === 'home' ? this.props.errorField.district : this.props.errorField.emerDistrict}
                    />
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        label={patientField.subDistrict.label}
                        options={this.state.districts}
                        placeholder='- Select -'
                        width={6}
                        onChange={(e, value) => this.changeDistrict(value)}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerSubDistrict != undefined ? this.props.emerSubDistrict : subDistrict}
                        text={this.props.emerSubDistrict != undefined ? this.props.emerSubDistrict : subDistrict}
                        error={this.props.field === 'home' ? this.props.errorField.subDistrict : this.props.errorField.emerSubDistrict}
                    />
                    <Form.Input
                        label={patientField.zipcode.label}
                        placeholder={patientField.zipcode.label}
                        width={6}
                        onChange={e => {
                            this.props.setFieldAndValidate(this.props.field === 'home' ? 'zipcode' : 'emerZipcode', e.target.value)
                            this.setState({ zipcode: e.target.value })
                        }}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerZipcode != undefined ? this.props.emerZipcode : zipcode}
                        error={this.props.field === 'home' ? this.props.errorField.zipcode : this.props.errorField.emerZipcode}
                    />
                </Form.Group>
               
            </div>
        )
    }
}