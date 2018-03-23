import React, { Component } from 'react';
import { Label, Message, Segment, Checkbox, Form, Select } from 'semantic-ui-react'
import Provinces from './Data/Province'
import Amphurs from './Data/Amphur'
import Districts from './Data/District'
import { typesOfHousing, nameTypeTh } from './Data/FormData'


const EmergencyContact = () => (
    <div>
        <Segment>
            <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>กรณีฉุกเฉินติดต่อ (Contact First And Last Name In Case Of Energency)</h4></Label>
            <br></br><br></br>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุ ข้อมูล บิดา มารดา หรือ ผู้ปกครอง ในกรณีที่คนไข้อายุต่ำกว่า 15 ปี</p>
            </Message> */}
            <Form.Group>
                <Form.Field control={Checkbox} label='ที่อยู่เดียวกับที่อยู่ปัจจุบัน' />
            </Form.Group>
            <br></br>
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={6} required />
                <Form.Input label='ชื่อจริง' placeholder='ชื่อ' width={6} required />
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required />
            </Form.Group>
            <Form.Group>
                <Form.Input label='เกี่ยวข้องเป็น (Relationship) ' placeholder='ความสัมพันธ์' width={6} required />
                <Form.Input label='โทรศัพท์บ้าน (Home Phone Number)  ' placeholder='เบอร์โทรศัพท์บ้าน' width={6} required />
                <Form.Input label='โทรศัพท์มือถือ (Mobile Phone)' placeholder='เบอร์โทรศัพท์มือถือ' width={6} required />
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='ประเภทที่พักอาศัย (Types of Housing)' options={typesOfHousing} placeholder='เลือกประเภทที่พักอาศัย' width={6} />
                <Form.Input label='ที่อยู่(Address) ' placeholder='บ้านเลขที่/หมู่/ถนน' width={6} required />
                <Form.Field control={Select} label='จังหวัด (Province)' options={Provinces} placeholder='เลือกจังหวัด' width={6} onChange={this.changeProvince} required />
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='เขต/อำเภอ (District)' options={Amphurs} placeholder='เลือกเขต/อำเภอ' width={6} onChange={this.changeAmphur} required />
                <Form.Field control={Select} label='แขวง/ตำบล (Sub-District)' options={Districts} placeholder='แขวง/ตำบล' width={6} onChange={this.changeProvince} required />
                <Form.Input label='รหัสไปรษณีย์ (Postal Code)' placeholder='รหัสไปรษณีย์' width={6} required />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default EmergencyContact
