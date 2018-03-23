import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Button, Checkbox, Form, Radio, Input, Select, TextArea, Grid, Container } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]
const cardType = [
    { key: 'idcard', text: 'ID Card No.', value: 'idcardno' },
    { key: 'passport', text: 'Passport No.', value: 'passportno' },
]
const nameTypeTh = [
    { key: 'เด็กชาย', text: 'เด็กชาย', value: 'idcardno' },
    { key: 'เด็กหญิง', text: 'เด็กหญิง', value: 'passportno' },
    { key: 'นาย', text: 'นาย', value: 'idcardno' },
    { key: 'นาง', text: 'นาง', value: 'idcardno' },
    { key: 'นางสาว', text: 'นางสาว', value: 'idcardno' },
]
const nameTypeEng = [
    { key: 'Mr.', text: 'ID Card No.', value: 'idcardno' },
    { key: 'Mrs.', text: 'Passport No.', value: 'passportno' },
    { key: 'Miss.', text: 'ID Card No.', value: 'idcardno' },
]
const bloodgroup = [
    { key: 'O', text: 'O', value: 'O' },
    { key: 'A', text: 'A', value: 'A' },
    { key: 'B', text: 'B', value: 'B' },
    { key: 'AB', text: 'AB', value: 'AB' },
]


// const FormSelect = styled(Form.Field)`
//   margin-top:10px;
//   color: white;
// `;`
    //

const FormExampleSubcomponentId = () => (
    
    <Container>
       
        <br></br><br></br>
        <Form >
            <Segment>
                <h4>ที่อยู่ปัจจุบัน (โปรดระบุอย่างละเอียด) (Home Address)</h4>
                <br></br> 
            <Form.Group>
                <Form.Field control={Select} label='ประเภทที่พักอาศัย (Types of Housing)' options={nameTypeTh} placeholder='เลือกประเภทที่พักอาศัย' width={4} />
                <Form.Input label='ที่อยู่(Address) ' placeholder='บ้านเลขที่/หมู่/ถนน' width={6} required/>
                <Form.Field control={Select} label='แขวง/ตำบล (Sub-District)' options={nameTypeTh} placeholder='แขวง/ตำบล' width={4} required/>
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='เขต/อำเภอ (District)' options={nameTypeTh} placeholder='เลือกเขต/อำเภอ' width={4} required/>
                <Form.Field control={Select} label='จังหวัด (Province)' options={nameTypeTh} placeholder='เลือกจังหวัด' width={4} required/>
                <Form.Input label='รหัสไปรษณีย์ (Postal Code)' placeholder='รหัสไปรษณีย์' width={6} required/>
            </Form.Group>
            </Segment>


            <br></br> 


            <Segment>
            <br></br> 

            <h4>กรณีฉุกเฉินติดต่อ (Contact First And Last Name In Case Of Energency)</h4>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุ ข้อมูล บิดา มารดา หรือ ผู้ปกครอง ในกรณีที่คนไข้อายุต่ำกว่า 15 ปี</p>
            </Message> */}
            <Form.Group>
                <Form.Field control={Checkbox} label='ที่อยู่เดียวกับที่อยูปัจจุบัน' />
            </Form.Group>
            <br></br> 
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={6} required/>
                <Form.Input label='ชื่อจริง' placeholder='ชื่อ' width={6} required/>
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required/>
            </Form.Group>
            <Form.Group>
                <Form.Input label='เกี่ยวข้องเป็น (Relationship) ' placeholder='ความสัมพันธ์' width={6} required/>
                <Form.Input label='โทรศัพท์บ้าน (Home Phone Number)  ' placeholder='เบอร์โทรศัพท์บ้าน' width={6} required/>
                <Form.Input label='โทรศัพท์มือถือ (Mobile Phone)' placeholder='เบอร์โทรศัพท์มือถือ' width={6} required/>
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='ประเภทที่พักอาศัย (Types of Housing)' options={nameTypeTh} placeholder='เลือกประเภทที่พักอาศัย' width={6} />
                <Form.Input label='ที่อยู่(Address) ' placeholder='บ้านเลขที่/หมู่/ถนน' width={6} />
                <Form.Field control={Select} label='แขวง/ตำบล (Sub-District)' options={nameTypeTh} placeholder='แขวง/ตำบล' width={6} required/>
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='เขต/อำเภอ (District)' options={nameTypeTh} placeholder='เลือกเขต/อำเภอ' width={6} required/>
                <Form.Field control={Select} label='จังหวัด (Province)' options={nameTypeTh} placeholder='เลือกจังหวัด' width={6} required/>
                <Form.Input label='รหัสไปรษณีย์ (Postal Code)' placeholder='รหัสไปรษณีย์' width={6} required/>
            </Form.Group>
            </Segment>


             <br></br> 
            

            <Segment>
            <h4>กรณีผู้เยาว์ในความปกครอง (อายุไม่ถึง 15 ปี บริบูรณ์) กรุณากรอกข้อมูล</h4>
            <br></br> 
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุ ข้อมูล บิดา มารดา หรือ ผู้ปกครอง ในกรณีที่คนไข้อายุต่ำกว่า 15 ปี</p>
            </Message> */}
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={6} required/>
                <Form.Input label='ชื่อจริงบิดา' placeholder='ชื่อ' width={6} required/>
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required/>
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={6} required/>
                <Form.Input label='ชื่อจริงมารดา' placeholder='ชื่อ' width={6} required/>
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required/>
            </Form.Group>
            </Segment>


            <br></br>


            <Segment>
            <h4>ประวัติการแพ้ยา อาหาร และสารอื่นๆ (History of Food Or Drug Allergy)</h4>
            <br></br>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุสิ่งที่แพ้ ในกรณีที่แพ้ โปรดอย่าข้ามขั้นตอนนี้</p>
            </Message> */}
            <Form.Group  inline>
                <label >คุณมีประวัติการแพ้หรือไม่ : </label >
                <Form.Field label='ไม่เคยมีประวัติแพ้ ( No )' control='input' type='radio' name='allergy' required/>
                <Form.Field label='มีประวัติแพ้, โปรดระบุ (Yes, Pleasespecify)' control='input' type='radio' name='allergy' required/>
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
            <Form.Group inline>
                <Form.Field control={Checkbox} label='ข้าพเจ้าขอรับรองว่าข้อมูลบุคคลทั้งหมดตามที่แจ้งแก่เจ้าหน้าที่ของคลินิกนี้ถูกต้อง และตรงกับความเป็นจริงทุกประการ หากมีข้อความใดไม่ถูกต้องหรือไม่ตรงกับความจริง และอาจจะทำให้เกิดความเสียหายแก่ตัวข้าพเจ้าหรือบุคคลอื่นใด ข้าพเจ้ายินยอมรับผิดชอบในความเสียหายที่เกิดขึ้นทุกประการ และอนุญาตให้เผยแพร่ข้อมูลข้องข้าพเจ้าในระบบในเครือของคลินิก' />
            </Form.Group>
            <Grid>
                <Grid.Column width={8}>
                    <Button color='green'>CONFIRM</Button>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button color='google plus'>CANCEL</Button>
                </Grid.Column>
            </Grid>
            <br></br><br></br>
        </Form>
    </Container>
)

export default FormExampleSubcomponentId


