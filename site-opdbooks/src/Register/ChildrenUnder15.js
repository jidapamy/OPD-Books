import React from 'react';
import { Label,Segment, Form } from 'semantic-ui-react'

const ChildrenUnder15 = ({
    //method
    setField,
    //attribute
    fatherFirstname, fatherLastname, motherFirstname,motherLastname
}) => (
    <div>
        <Segment>
                <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>กรณีผู้เยาว์ในความปกครอง (อายุไม่ถึง 15 ปี บริบูรณ์) กรุณากรอกข้อมูล (In case under 15 years old)</h4></Label>
            <br></br><br></br>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุ ข้อมูล บิดา มารดา หรือ ผู้ปกครอง ในกรณีที่คนไข้อายุต่ำกว่า 15 ปี</p>
            </Message> */}
            <Form.Group>
                    <Form.Input label='ชื่อจริงบิดา (Father&#39;s firstname)' placeholder='ชื่อ' width={8} onChange={e => setField('fatherFirstname', e.target.value)} value={fatherFirstname} />
                    <Form.Input label='นามสกุล (Father&#39;s lastname)' placeholder='นามสกุล' width={8} onChange={e => setField('fatherLastname', e.target.value)} value={fatherLastname} />
            </Form.Group>
            <Form.Group>
                    <Form.Input label='ชื่อจริงมารดา (Mother&#39;s firstname)' placeholder='ชื่อ' width={8} onChange={e => setField('motherFirstname', e.target.value)} value={motherFirstname} />
                    <Form.Input label='นามสกุล (Mother&#39;s lastname)' placeholder='นามสกุล' width={8} onChange={e => setField('motherLastname', e.target.value)} value={motherLastname} />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default ChildrenUnder15
