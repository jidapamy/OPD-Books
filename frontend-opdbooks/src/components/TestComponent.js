import React, { Component } from 'react';
import { Label, Segment, Form, Radio } from 'semantic-ui-react'
import ErrorMessage from './ErrorMessage'

export default class TestComponent extends Component {

    render() {
        return (
            <div>
                <Segment style={{ borderRadius: '2rem' }}>
                    <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>ประวัติการแพ้ยา อาหาร และสารอื่นๆ (History of Food Or Drug Allergy)</h4></Label>
                    <br /><br />
                    <Segment >
                        <h3 >คุณมีประวัติการแพ้หรือไม่<span style={{ color: 'red' }}> * </span></h3 >
                        <br></br>
                        <Form.Group inline>
                            <Form.Radio
                                label='ไม่เคยมีประวัติแพ้ ( No )'
                                value='not have'
                            />
                            <Form.Radio
                                label='มีประวัติแพ้, โปรดระบุ (Yes, Please specify)'
                                value='other'
                            />
                            <Form.Input
                                label=''
                                placeholder='โปรดระบุสิ่งที่แพ้'
                                width={4}
                            />
                            <br></br>
                        </Form.Group>
                    </Segment>
                    <Segment>
                        <h3>สิทธิในการรักษา<span style={{ color: 'red' }}>*</span></h3>
                        <br></br>
                        <Form.Group inline>
                            <Form.Radio
                                value='ข้าราชการ'
                                label='ข้าราชการ'
                            />
                            <Form.Radio
                                value='ครอบครัวข้าราชการ'
                                label='ครอบครัวข้าราชการ'
                            />
                            <Form.Radio
                                value='รัฐวิสาหิจ'
                                label='รัฐวิสาหิจ'
                            />
                        </Form.Group>

                        <Form.Group inline>
                            <Form.Radio
                                value='ครอบครัวรัฐวิสาหกิจ'
                                label='ครอบครัวรัฐวิสาหกิจ'
                                width={4}
                            />
                            <Form.Radio
                                value='บุคคลทั่วไป'
                                label='บุคคลทั่วไป'
                                width={4}
                            />
                            <Form.Radio
                                label='อื่นๆ'
                                value='other'
                            />
                            <Form.Input
                                label=''
                                placeholder='โปรดระบุสิทธิ์การรักษาอื่นๆ'
                                width={4}
                            />
                            <br></br>
                        </Form.Group>
                    </Segment>
                </Segment>
                <br></br>
            </div>
        )
    }
}
