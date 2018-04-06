import React from 'react';
import { Label, Segment, Form, Radio} from 'semantic-ui-react'

const Allergy = ({
    //method
    setField, chooseOther,
    //attribute
    allergy, privilege, otherprivilege, otherallergy
}) => (
        <div>
            <Segment>
                <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>ประวัติการแพ้ยา อาหาร และสารอื่นๆ (History of Food Or Drug Allergy)</h4></Label>
                <br></br><br></br>
                <Segment color='teal'>
                    <h3 >คุณมีประวัติการแพ้หรือไม่</h3 >
                    <br></br>
                    <Form.Group inline>
                        <Form.Radio 
                            label='ไม่เคยมีประวัติแพ้ ( No )' 
                            value='ไม่มี' 
                            checked={allergy.value === 'ไม่มี'} 
                            onChange={(e, { value }) => setField('allergy', value)} 
                        />
                        <Form.Radio
                            label='มีประวัติแพ้, โปรดระบุ (Yes, Pleasespecify)'
                            value='other'
                            checked={allergy.value === 'other'}
                            onChange={(e, { value }) => setField('allergy', value)}
                        />
                        <Form.Input 
                            label='' 
                            placeholder='โปรดระบุสิ่งที่แพ้' 
                            width={4} 
                            disabled={allergy.disabled}
                            onChange={e => setField('otherallergy', e.target.value)} 
                            value={otherallergy}
                        />
                        <br></br>
                    </Form.Group>
                </Segment>
                <Segment color='teal'>
                    <h3>สิทธิในการรักษา</h3>
                    <br></br>
                    <Form.Group inline>
                        <Form.Radio 
                            value='ข้าราชการ' 
                            label='ข้าราชการ' 
                            checked={privilege.value === 'ข้าราชการ'} 
                            width={4} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Radio 
                            value='ครอบครัวข้าราชการ' 
                            label='ครอบครัวข้าราชการ' 
                            checked={privilege.value === 'ครอบครัวข้าราชการ'} 
                            width={4} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Radio 
                            value='รัฐวิสาหิจ' 
                            label='รัฐวิสาหิจ'
                            checked={privilege.value === 'รัฐวิสาหิจ'} 
                            width={2} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Radio 
                            value='ครอบครัวรัฐวิสาหกิจ' 
                            label='ครอบครัวรัฐวิสาหกิจ' 
                            width={4} 
                            checked={privilege.value === 'ครอบครัวรัฐวิสาหกิจ'} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Radio 
                            value='บุคคลทั่วไป' 
                            label='บุคคลทั่วไป' 
                            width={4} 
                            checked={privilege.value === 'บุคคลทั่วไป'} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Radio 
                            value='other' 
                            label='อื่นๆ'
                            width={2} 
                            checked={privilege.value === 'other'}  
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Input 
                            label=''
                            placeholder='โปรดระบุสิทธิ์การรักษาอื่นๆ' 
                            width={4} 
                            disabled={privilege.disabled} 
                            onChange={e => setField('otherprivilege', e.target.value)}
                            value={otherprivilege}
                        />
                        <br></br>
                    </Form.Group>
                </Segment>
            </Segment>
            <br></br>
        </div>
    )

export default Allergy
