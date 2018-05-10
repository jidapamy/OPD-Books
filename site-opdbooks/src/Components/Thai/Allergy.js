import React from 'react';
import { Label, Segment, Form, Radio} from 'semantic-ui-react'

const Allergy = (props) => {
    return (
        <div>
            <Segment>
                <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>ประวัติการแพ้ยา อาหาร และสารอื่นๆ (History of Food Or Drug Allergy)</h4></Label>
                <br></br><br></br>
                <Segment color='teal'>
                    <h3 >คุณมีประวัติการแพ้หรือไม่<span style={{color:'red'}}>*</span></h3 >
                    <br></br>
                    <Form.Group inline>
                        <Form.Radio 
                            label='ไม่เคยมีประวัติแพ้ ( No )' 
                            value='ไม่มี' 
                            checked={props.allergy.value === 'ไม่มี'} 
                            onChange={(e, { value }) => props.chooseOther('allergy', value)} 
                        />
                        <Form.Radio
                            label='มีประวัติแพ้, โปรดระบุ (Yes, Pleasespecify)'
                            value='other'
                            checked={props.allergy.value === 'other'}
                            onChange={(e, { value }) => props.chooseOther('allergy', value)}
                        />
                        <Form.Input 
                            label='' 
                            placeholder='โปรดระบุสิ่งที่แพ้' 
                            width={4} 
                            disabled={props.allergy.disabled}
                            onChange={e => props.setField('otherallergy', e.target.value)} 
                            value={props.otherallergy}
                        />
                        <br></br>
                    </Form.Group>
                </Segment>
                <Segment color='teal'>
                    <h3>สิทธิในการรักษา<span style={{ color: 'red' }}>*</span></h3>
                    <br></br>
                    <Form.Group inline>
                        <Form.Radio 
                            value='ข้าราชการ' 
                            label='ข้าราชการ' 
                            checked={props.privilege.value === 'ข้าราชการ'} 
                            width={4} 
                            onChange={(e, { value }) => props.chooseOther('privilege', value)}
                        />
                        <Form.Radio 
                            value='ครอบครัวข้าราชการ' 
                            label='ครอบครัวข้าราชการ' 
                            checked={props.privilege.value === 'ครอบครัวข้าราชการ'} 
                            width={4} 
                            onChange={(e, { value }) => props.chooseOther('privilege', value)}
                        />
                        <Form.Radio 
                            value='รัฐวิสาหิจ' 
                            label='รัฐวิสาหิจ'
                            checked={props.privilege.value === 'รัฐวิสาหิจ'} 
                            width={2} 
                            onChange={(e, { value }) => props.chooseOther('privilege', value)}
                        />
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Radio 
                            value='ครอบครัวรัฐวิสาหกิจ' 
                            label='ครอบครัวรัฐวิสาหกิจ' 
                            width={4} 
                            checked={props.privilege.value === 'ครอบครัวรัฐวิสาหกิจ'} 
                            onChange={(e, { value }) => props.chooseOther('privilege', value)}
                        />
                        <Form.Radio 
                            value='บุคคลทั่วไป' 
                            label='บุคคลทั่วไป' 
                            width={4} 
                            checked={props.privilege.value === 'บุคคลทั่วไป'} 
                            onChange={(e, { value }) => props.chooseOther('privilege', value)}
                        />
                        <Form.Radio 
                            value='other' 
                            label='อื่นๆ'
                            width={2} 
                            checked={props.privilege.value === 'other'}  
                            onChange={(e, { value }) => props.chooseOther('privilege', value)}
                        />
                        <Form.Input 
                            label=''
                            placeholder='โปรดระบุสิทธิ์การรักษาอื่นๆ' 
                            width={4} 
                            disabled={props.privilege.disabled} 
                            onChange={e => props.setField('otherprivilege', e.target.value)}
                            value={props.otherprivilege}
                        />
                        <br></br>
                    </Form.Group>
                </Segment>
            </Segment>
            <br></br>
        </div>
    )}

export default Allergy