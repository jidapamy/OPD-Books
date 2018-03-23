import React, { Component } from 'react';
import { Label,Header, Message, Segment, Form, Select } from 'semantic-ui-react'

const Allergy = () => (
    <div>
        <Segment>
            <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>ประวัติการแพ้ยา อาหาร และสารอื่นๆ (History of Food Or Drug Allergy)</h4></Label>
            <br></br>  <br></br>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุสิ่งที่แพ้ ในกรณีที่แพ้ โปรดอย่าข้ามขั้นตอนนี้</p>
            </Message> */}
            <Segment color='teal'>
                <h3 >คุณมีประวัติการแพ้หรือไม่</h3 >
                <br></br>
            <Form.Group inline>
                <Form.Field label='ไม่เคยมีประวัติแพ้ ( No )' control='input' type='radio' name='allergy' required width={3}/>
                <Form.Field label='มีประวัติแพ้, โปรดระบุ (Yes, Pleasespecify)' control='input' type='radio' name='allergy' required />
                <Form.Input label='' placeholder='โปรดระบุสิ่งที่แพ้' width={4} />
                <br></br>
            </Form.Group>
            </Segment>
            <Segment color='teal'>
            <h3>สิทธิในการรักษา</h3>
            <br></br>
            <Form.Group inline>
                <Form.Field label='ข้าราชการ' control='input' type='radio' name='privilege'width={4} />
                <Form.Field label='ครอบครัวข้าราชการ' control='input' type='radio' name='privilege' width={4}/>
                <Form.Field label='รัฐวิสาหิจ' control='input' type='radio' name='privilege' width={4}/>
            </Form.Group>
            
             <Form.Group inline>
                <Form.Field label='ครอบครัวรัฐวิสาหกิจ' control='input' type='radio' name='privilege' width={4}/>
                <Form.Field label='บุคคลทั่วไป' control='input' type='radio' name='privilege' width={4}/>
                <Form.Field label='อื่นๆ' control='input' type='radio' name='privilege' />
                <Form.Input label='' placeholder='โปรดระบุสิทธิ์การรักษาอื่นๆ' width={4} />
                <br></br>
            </Form.Group>
            </Segment>
        </Segment>
        <br></br>
    </div>
)

export default Allergy
