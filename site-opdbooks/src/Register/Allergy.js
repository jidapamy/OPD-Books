import React from 'react';
import { Label, Segment, Form } from 'semantic-ui-react'

const Allergy = ({
    //method
    setField, chooseOther,
    //attribute
    allergy, privilege, otherPrivilege
}) => (
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
                        <Form.Field value='ไม่มี' label='ไม่เคยมีประวัติแพ้ ( No )' control='input' type='radio' name='allergy' width={3} onChange={e => setField('allergy', e.target.value)} />
                        <Form.Field value='มี' label='มีประวัติแพ้, โปรดระบุ (Yes, Pleasespecify)' control='input' type='radio' name='allergy' onChange={e => setField('allergy', e.target.value)} />
                        <Form.Input label='' placeholder='โปรดระบุสิ่งที่แพ้' width={4} onChange={e => setField('allergy', e.target.value)} />
                        <br></br>
                    </Form.Group>
                </Segment>
                <Segment color='teal'>
                    <h3>สิทธิในการรักษา</h3>
                    <br></br>
                    <Form.Group inline>
                        <Form.Field value='ข้าราชการ' label='ข้าราชการ' control='input' type='radio' name='privilege' width={4} onChange={e => setField('privilege', e.target.value)}/>
                        <Form.Field value='ครอบครัวข้าราชการ' label='ครอบครัวข้าราชการ' control='input' type='radio' name='privilege' width={4} onChange={e => setField('privilege', e.target.value)}/>
                        <Form.Field value='รัฐวิสาหิจ' label='รัฐวิสาหิจ' control='input' type='radio' name='privilege' width={4} onChange={e => setField('privilege', e.target.value)}/>
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Field value='ครอบครัวรัฐวิสาหกิจ' label='ครอบครัวรัฐวิสาหกิจ' control='input' type='radio' name='privilege' width={4} onChange={e => setField('privilege', e.target.value)}/>
                        <Form.Field value='บุคคลทั่วไป' label='บุคคลทั่วไป' control='input' type='radio' name='privilege' width={4} onChange={e => setField('privilege', e.target.value)}/>
                        <Form.Field value='อื่นๆ' label='อื่นๆ' control='input' type='radio' name='privilege' onChange={e => setField('privilege', e.target.value)} />
                        <Form.Input label='' placeholder='โปรดระบุสิทธิ์การรักษาอื่นๆ' width={4} disabled={otherPrivilege} onChange={e => setField('privilege', e.target.value)}/>
                        <br></br>
                    </Form.Group>
                </Segment>
            </Segment>
            <br></br>
        </div>
    )

export default Allergy
