import React from 'react';
import { Label, Segment, Form, Select } from 'semantic-ui-react'
import { typesOfHousingData } from './../../Static/data/FormDatas'

const HomeAddress = (props) => {
    const setField = props.setField
    const preparedData = props.preparedData
    return (
    <div>
        <Segment>
            <Label as='a' color='teal' ribbon ><h4 style={{ fontFamily: 'Kanit' }}>ที่อยู่ปัจจุบัน (โปรดระบุอย่างละเอียด) (Home Address)</h4></Label>
            <br></br><br></br>
            <Form.Group>
                <Form.Field
                    control={Select} 
                    label='ประเภทที่พักอาศัย (Types of Housing)' 
                    options={typesOfHousingData} 
                    placeholder='เลือกประเภทที่พักอาศัย' 
                    width={6} 
                    onChange={(e, { value }) => setField('typeofHouse', value)} 
                    required 
                />
                <Form.Input 
                    label='ที่อยู่(Address) ' 
                    placeholder='บ้านเลขที่/หมู่/ถนน' 
                    width={6} 
                    onChange={e => setField('address', e.target.value)} 
                    required 
                />
                <Form.Field 
                    control={Select} 
                    label='จังหวัด (Province)' 
                    options={props.provinces} 
                    placeholder='เลือกจังหวัด' 
                    width={6} 
                    value={props.province}
                    onChange={(e, value) => props.changeProvince('province', value)} 
                    required 
                />
            </Form.Group>
            <Form.Group>
                <Form.Field 
                    control={Select}
                    label='เขต/อำเภอ (District)' 
                    options={props.amphurs} 
                    placeholder='เลือกเขต/อำเภอ' 
                    width={6} 
                    value={props.district}
                    onChange={(e, value) => props.changeAmphur('district', value)} 
                    required 
                />
                <Form.Field 
                    control={Select} 
                    label='แขวง/ตำบล (Sub-District)' 
                    options={props.districts} 
                    placeholder='แขวง/ตำบล' 
                    width={6} 
                    value={props.subDistrict}
                    onChange={(e, value) => props.changeDistrict('subDistrict', value)} 
                    required 
                />
                <Form.Input 
                    label='รหัสไปรษณีย์ (Postal Code)' 
                    placeholder='รหัสไปรษณีย์' 
                    width={6} 
                    onChange={e => setField('zipcode', e.target.value)} 
                    value={props.zipcode} 
                    required 
                />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)}

export default HomeAddress
