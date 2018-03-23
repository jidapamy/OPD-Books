import React, { Component } from 'react';
import styled from 'styled-components';
import { Header, Icon, Image } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Segment, Button, Grid, Checkbox, Form, Input, Radio, Select, TextArea, Container } from 'semantic-ui-react'

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
        <br></br>
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon name='users' circular />
                <Header.Content>
                    ใบลงทะเบียนผู้ป่วยใหม่
                </Header.Content>
                <Header.Content>
                    NEW PATIENT RESGISTRATION FORM
                </Header.Content>
            </Header>
            <br></br>
        </div>
        <Segment raised>
        <Form >
            
            <Form.Group widths='equal' >
                <Form.Input fluid id='registerdate' label='วันที่ทำประวัติ (Register Date)' placeholder='' width={4} readonly />
                <Form.Field control={Select} label='ประเภทบัตร (Card type)' options={cardType} placeholder='Select Card Type' width={4} required/>
                <Form.Input fluid id='cardid' label='เลขบัตรประชาชน  (ID CARD No./Passport No.)' placeholder='' width={8} required/>
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={4} required/>
                <Form.Input label='ชื่อจริง' placeholder='ชื่อ' width={6} required/>
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required/>
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='Title' options={nameTypeEng} placeholder='Select Title' width={4} required/>
                <Form.Input label='First name' placeholder='First name' width={6} required/>
                <Form.Input label='Last Name' placeholder='Last Name' width={6} required/>
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='กรุ๊ปเลือด (Blood Group)' options={bloodgroup} placeholder='Select Blood Group' width={4} required/>
                <Form.Field control={Select} label='สัญชาติ (Nationality) ' options={nameTypeEng} placeholder='Select Nationality' width={4} required/>
                <Form.Field control={Select} label='ศาสนา (Religion)' options={nameTypeEng} placeholder='Select Religion' width={4} required/>
                <Form.Field control={Select} label='สถานภาพ (Status)' options={nameTypeEng} placeholder='Select Status' width={4} required/>
            </Form.Group>
            <Form.Group>
                <Form.Input label='อาชีพ (Occupation) ' placeholder='อาชีพทำงาน' width={6} />
                <Form.Input label='โทรศัพท์บ้าน (Home Number)' placeholder='โทรศัพท์บ้าน' width={6} required/>
                <Form.Input label='โทรศัพท์ที่ทำงาน (ID CARD No./Passport No.)' placeholder='โทรศัพท์ที่ทำงาน' width={6} />
            </Form.Group>
        </Form>
        </Segment>
    </Container>
        
)

export default FormExampleSubcomponentId
