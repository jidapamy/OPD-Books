import React, { Component } from 'react';
import { Header, Message, Segment, Form, Select } from 'semantic-ui-react'

const Allergy = () => (
    <div>
        <Segment>
            <h4>ประวัติการแพ้ยา อาหาร และสารอื่นๆ (History of Food Or Drug Allergy)</h4>
            <br></br>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุสิ่งที่แพ้ ในกรณีที่แพ้ โปรดอย่าข้ามขั้นตอนนี้</p>
            </Message> */}
            <Form.Group inline>
                <label >คุณมีประวัติการแพ้หรือไม่ : </label >
                <Form.Field label='ไม่เคยมีประวัติแพ้ ( No )' control='input' type='radio' name='allergy' required />
                <Form.Field label='มีประวัติแพ้, โปรดระบุ (Yes, Pleasespecify)' control='input' type='radio' name='allergy' required />
                <Form.Input label='' placeholder='โปรดระบุสิ่งที่แพ้' width={6} />
                <br></br>
            </Form.Group>
            <Form.Group inline>
                <label>สิทธิในการรักษา : </label>
                <Form.Field label='ข้าราชการ' control='input' type='radio' name='privilege' />
                <Form.Field label='ครอบครัวข้าราชการ' control='input' type='radio' name='privilege' />
                <Form.Field label='รัฐวิสาหิจ' control='input' type='radio' name='privilege' />
                <Form.Field label='ครอบครัวรัฐวิสาหกิจ' control='input' type='radio' name='privilege' />
                <Form.Field label='บุคคลทั่วไป' control='input' type='radio' name='privilege' />
                <Form.Field label='อื่นๆ' control='input' type='radio' name='privilege' />
                <Form.Input label='' placeholder='โปรดระบุสิทธิ์การรักษาอื่นๆ' width={6} />
                <br></br>
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default Allergy
