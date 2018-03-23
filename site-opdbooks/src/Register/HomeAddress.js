import React, { Component } from 'react';
import { Segment, Form, Select } from 'semantic-ui-react'
import Provinces from './Data/Province'
import Amphurs from './Data/Amphur'
import Districts from './Data/District'
import { typesOfHousing } from './Data/FormData'

const HomeAddress = () => (
    <div>
        <Segment>
            <h4>ที่อยู่ปัจจุบัน (โปรดระบุอย่างละเอียด) (Home Address)</h4>
            <br></br>
            <Form.Group>
                <Form.Field control={Select} label='ประเภทที่พักอาศัย (Types of Housing)' options={typesOfHousing} placeholder='เลือกประเภทที่พักอาศัย' width={4} />
                <Form.Input label='ที่อยู่(Address) ' placeholder='บ้านเลขที่/หมู่/ถนน' width={6} required />
                <Form.Field control={Select} label='แขวง/ตำบล (Sub-District)' options={Districts} placeholder='แขวง/ตำบล' width={4} onChange={this.changeProvince} required />
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='เขต/อำเภอ (District)' options={Amphurs} placeholder='เลือกเขต/อำเภอ' width={4} onChange={this.changeAmphur} required />
                <Form.Field control={Select} label='จังหวัด (Province)' options={Provinces} placeholder='เลือกจังหวัด' width={4} onChange={this.changeProvince} required />
                <Form.Input label='รหัสไปรษณีย์ (Postal Code)' placeholder='รหัสไปรษณีย์' width={6} required />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default HomeAddress
