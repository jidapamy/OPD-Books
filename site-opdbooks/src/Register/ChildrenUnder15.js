import React from 'react';
import { Segment, Form, Select } from 'semantic-ui-react'
import { nameTypeTh } from './Data/FormData'

const ChildrenUnder15 = () => (
    <div>
        <Segment>
            <h4>กรณีผู้เยาว์ในความปกครอง (อายุไม่ถึง 15 ปี บริบูรณ์) กรุณากรอกข้อมูล</h4>
            <br></br>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุ ข้อมูล บิดา มารดา หรือ ผู้ปกครอง ในกรณีที่คนไข้อายุต่ำกว่า 15 ปี</p>
            </Message> */}
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={6} required />
                <Form.Input label='ชื่อจริงบิดา' placeholder='ชื่อ' width={6} required />
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required />
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={6} required />
                <Form.Input label='ชื่อจริงมารดา' placeholder='ชื่อ' width={6} required />
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default ChildrenUnder15
