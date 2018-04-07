import React from 'react';
import { Label,Segment, Form } from 'semantic-ui-react'

const PatientParent = (props) => {
    const setField = props.setField
    return (
    <div>
        <Segment>
                <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>กรณีผู้เยาว์ในความปกครอง (อายุไม่ถึง 15 ปี บริบูรณ์) กรุณากรอกข้อมูล (In case under 15 years old)</h4></Label>
            <br></br><br></br>
            <Form.Group>
                    <Form.Input 
                        label='ชื่อจริงบิดา (Father&#39;s firstname)' 
                        placeholder='ชื่อ' 
                        width={8} 
                        onChange={e => setField('fatherFirstname', e.target.value)} 
                        value={props.fatherFirstname.value} 
                        required={props.requiredFatherFirstname}
                    />
                    <Form.Input 
                        label='นามสกุล (Father&#39;s lastname)' 
                        placeholder='นามสกุล' 
                        width={8} 
                        onChange={e => setField('fatherLastname', e.target.value)} 
                        value={props.fatherLastname.value} 
                        required={props.requiredFatherLastname}
                    />
            </Form.Group>
            <Form.Group>
                    <Form.Input 
                        label='ชื่อจริงมารดา (Mother&#39;s firstname)' 
                        placeholder='ชื่อ' 
                        width={8} 
                        onChange={e => setField('motherFirstname', e.target.value)} 
                        value={props.motherFirstname.value} 
                        required={props.requiredMotherFirstname}
                    />
                    <Form.Input 
                        label='นามสกุล (Mother&#39;s lastname)' 
                        placeholder='นามสกุล' 
                        width={8} 
                        onChange={e => setField('motherLastname', e.target.value)} 
                        value={props.motherLastname.value} 
                        required={props.requiredMotherLastname}
                    />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)}

export default PatientParent
