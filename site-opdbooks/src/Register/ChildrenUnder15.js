import React, { Component } from 'react';
import { Label,Segment, Form, Select } from 'semantic-ui-react'
import { nameTypeTh, nameTypeThUP15 } from './Data/FormData'

const ChildrenUnder15 = () => (
    <div>
        <Segment>
            <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>กรณีผู้เยาว์ในความปกครอง (อายุไม่ถึง 15 ปี บริบูรณ์) กรุณากรอกข้อมูล</h4></Label>
            <br></br><br></br>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุ ข้อมูล บิดา มารดา หรือ ผู้ปกครอง ในกรณีที่คนไข้อายุต่ำกว่า 15 ปี</p>
            </Message> */}
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeThUP15} placeholder='เลือกคำนำหน้า' width={6} required />
                <Form.Input label='ชื่อจริงบิดา' placeholder='ชื่อ' width={6} required />
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required />
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeThUP15} placeholder='เลือกคำนำหน้า' width={6} required />
                <Form.Input label='ชื่อจริงมารดา' placeholder='ชื่อ' width={6} required />
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default ChildrenUnder15
