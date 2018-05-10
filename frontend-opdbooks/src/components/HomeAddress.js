import React, { Component } from 'react';
import { Label, Segment, Form, Select, Dropdown } from 'semantic-ui-react'
import { typesOfHousingData } from './../static/data/FormDatas'
const provincesData = require('./../static/data/Provinces')
const amphursData = require('./../static/data/Amphurs')
const districtsData = require('./../static/data/Districts')

// const setField = props.setField
// const preparedData = props.preparedData

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
        return (
            <div>
                <Form.Group>
                    <Form.Field
                        control={Dropdown}
                        search
                        selection
                        allowAdditions
                        onAddItem={(e, { value }) => typesOfHousingData.push({ key: value, text: value, value: value })}
                        additionLabel='other : '
                        label='ประเภทที่พักอาศัย (Types of Housing)'
                        options={typesOfHousingData}
                        placeholder='เลือกประเภทที่พักอาศัย'
                        width={6}
                        onChange={(e, { value }) => {
                            this.props.setFieldAndValidate(this.props.field === 'home' ? 'typeofHouse' : 'emerTypeofHouse',value)
                            this.setField(this.props.field === 'home' ? 'typeofHouse' : 'emerTypeofHouse', value)
                        }}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerTypeofHouse != undefined ? this.props.emerTypeofHouse : this.state.typeofHouse}
                        error={this.props.field === 'home' ? this.props.errorField.typeofHouse : this.props.errorField.emerTypeofHouse}
                    />
                    <Form.Input
                        label='ที่อยู่(Address) '
                        placeholder='บ้านเลขที่/หมู่/ถนน'
                        width={6}
                        onChange={e => {
                            this.props.setFieldAndValidate(this.props.field === 'home' ? 'address' : 'emerAddress', e.target.value)
                            this.setField(this.props.field === 'home' ? 'address' : 'emerAddress', e.target.value)
                        }}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerAddress != undefined ? this.props.emerAddress : this.state.address}
                        error={this.props.field === 'home' ? this.props.errorField.address : this.props.errorField.emerAddress}
                    />
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        options={this.state.provinces}
                        label='จังหวัด (Province)'
                        placeholder='เลือกจังหวัด'
                        width={6}
                        onChange={(e, value) => this.changeProvince(value)}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerProvince != undefined ? this.props.emerProvince : this.state.province}
                        text={this.props.emerProvince != undefined ? this.props.emerProvince : this.state.province}
                        error={this.props.field === 'home' ? this.props.errorField.province : this.props.errorField.emerProvince}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        options={this.state.amphurs}
                        label='เขต/อำเภอ (District)'
                        placeholder='เลือกเขต/อำเภอ'
                        width={6}
                        onChange={(e, value) => this.changeAmphur(value)}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerDistrict != undefined ? this.props.emerDistrict : this.state.district}
                        text={this.props.emerDistrict != undefined ? this.props.emerDistrict : this.state.district}
                        error={this.props.field === 'home' ? this.props.errorField.district : this.props.errorField.emerDistrict}
                    />
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        label='แขวง/ตำบล (Sub-District)'
                        options={this.state.districts}
                        placeholder='แขวง/ตำบล'
                        width={6}
                        onChange={(e, value) => this.changeDistrict(value)}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerSubDistrict != undefined ? this.props.emerSubDistrict : this.state.subDistrict}
                        text={this.props.emerSubDistrict != undefined ? this.props.emerSubDistrict : this.state.subDistrict}
                        error={this.props.field === 'home' ? this.props.errorField.subDistrict : this.props.errorField.emerSubDistrict}
                    />
                    <Form.Input
                        label='รหัสไปรษณีย์ (Postal Code)'
                        placeholder='รหัสไปรษณีย์'
                        width={6}
                        onChange={e => {
                            this.props.setFieldAndValidate(this.props.field === 'home' ? 'zipcode' : 'emerZipcode', e.target.value)
                            this.setState({ zipcode: e.target.value })
                        }}
                        required={this.props.field === 'home' || this.props.required}
                        value={this.props.emerZipcode != undefined ? this.props.emerZipcode : this.state.zipcode}
                        error={this.props.field === 'home' ? this.props.errorField.zipcode : this.props.errorField.emerZipcode}
                    />
                </Form.Group>
            </div>
        )
    }
}