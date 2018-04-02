import React from 'react';
import styled from 'styled-components'
import { nameType, bloodgroupData, cardTypeData, genderData, nameTypeEng, nationalityData, religionData, statusData ,countryData} from './Data/FormData'
import { Segment, Header, Image, Form, Select, Grid,Container} from 'semantic-ui-react'
import Date from './Date'
import DatePicker from 'react-datepicker';
import './style.css';
import HeaderForm from './HeaderForm';

const GridColumn = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoPateint = ({
    //method
    setField, calculateAge, setDateOfBirth, checkIdcard,
    //attribute
    registerDate, cardType, idCard,
    nameTitle, firstname, lastname, 
    gender, dob, age, bloodgroup, nationality, religion, status,
    occupartion, homePhonenumber, mobileNumber, startDate, country, congenitalDisease,
    // picture

    // validate
    errorIdCard,
}) => {
    return <div>
        <Segment.Group>
            <Segment>
            <Form.Group widths='equal' >
                <Form.Input fluid id='registerdate' style={{border:'0 px'}}  label='วันที่ทำประวัติ (Register Date)' placeholder='' width={4} readOnly value={registerDate} />
            </Form.Group>
            <HeaderForm/>
            </Segment>
            <Segment>
            <Form.Group widths='equal' >
                <Form.Field 
                    control={Select} 
                    label='ประเภทบัตร (Card type)' 
                    options={cardTypeData} 
                    placeholder='เลือกประเภทบัตร' 
                    width={4} 
                    onChange={(e, { value }) => setField('cardType', value)} 
                    value={cardType}
                    required
                />
                <Form.Input 
                    loading ={false}
                    fluid 
                    label='เลขบัตรประชาชน (ID CARD No./Passport No.)' 
                    placeholder='เลขบัตรประชาชน/Passport No.' 
                    width={6} 
                    onBlur={e=>checkIdcard(e)}
                    onChange={e => setField('idCard', e.target.value)} 
                    value={idCard} 
                    error={errorIdCard.status}
                    autoFocus
                    required 
                />
                <Form.Field 
                    control={() => Date({ setDateOfBirth, calculateAge, dob })} 
                    label='วัน/เดือน/ปีเกิด (Dob)' 
                    width={3} 
                    required
                />
                <Form.Input 
                    label='อายุ' 
                    placeholder='อายุ' 
                    width={3} 
                    value={age} 
                    readOnly 
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Field 
                    control={Select} 
                    label='คำนำหน้า (Title)' 
                    options={nameType} 
                    placeholder='เลือก (Select)' 
                    width={4} 
                    onChange={(e, { value }) => setField('nameTitle', value)}
                    value={nameTitle}
                    required  
                />
                <Form.Input 
                    label='ชื่อจริง (Firstname)' 
                    placeholder='ชื่อจริง (Firstname)'
                    width={6} 
                    onChange={e => setField('firstname', e.target.value)} 
                    value={firstname} 
                    required
                />
                <Form.Input 
                    label='นามสกุล (Lastname)' 
                    placeholder='นามสกุล (Lastname)' 
                    width={6} 
                    onChange={e => setField('lastname', e.target.value)} 
                    value={lastname}
                    required
                />
            </Form.Group>

            <Form.Group>
                <Form.Input 
                    label='โรคประจำตัว (Congenital Disease)' 
                    placeholder='โรคประจำตัว' 
                    width={4} 
                    required
                    onChange={e => setField('congenitalDisease', e.target.value)}
                    value={congenitalDisease}
                />
                <Form.Field 
                    control={Select} 
                    label='เพศ (Gender)' 
                    options={genderData} 
                    placeholder='เลือกเพศ' 
                    width={4} 
                    onChange={(e, { value }) => setField('gender', value)}
                    value={gender}
                    required 
                />
                <Form.Field 
                    control={Select} 
                    label='กรุ๊ปเลือด (BloodGroup)' 
                    options={bloodgroupData} 
                    placeholder='เลือกกรุ๊ปเลือด' 
                    width={4}  
                    onChange={(e, { value }) => setField('bloodgroup', value)}
                    value={bloodgroup}
                    required
                />
                <Form.Field 
                    control={Select} 
                    label='ประเทศ (Country)' 
                    options={countryData} 
                    placeholder='เลือกประเทศ' 
                    width={4} 
                    onChange={(e, { value }) => setField('country', value)}
                    value={country}
                    required  />
            </Form.Group>
            <Form.Group>
                <Form.Field 
                    control={Select} 
                    label='ศาสนา (Religion)' 
                    options={religionData} 
                    placeholder='เลือกศาสนา' 
                    width={4} 
                    onChange={(e, { value }) => setField('religion', value)} 
                    value={religion}
                    required 
                />
                <Form.Input 
                    label='ศาสนาอื่นๆ (Religion other)' 
                    placeholder='ศาสนาอื่นๆ' 
                    width={4}  
                    disabled
                />
                <Form.Field 
                    control={Select} 
                    label='สัญชาติ (Nationality)' 
                    options={nationalityData} 
                    placeholder='เลือกสัญชาติ' 
                    width={4} 
                    onChange={(e, { value }) => setField('nationality', value)}
                    value={nationality}
                    required  />
                <Form.Input 
                    label='สัญชาติอื่นๆ (Nationality other)' 
                    placeholder='สัญชาติอื่นๆ'
                    width={4} 
                    disabled/>
            </Form.Group>
            <Form.Group>
                <Form.Field 
                    control={Select} 
                    label='สถานภาพ (Status)' 
                    options={statusData} 
                    placeholder='สถานะ' 
                    width={4} 
                    onChange={(e, { value }) => setField('status', value)} 
                    value={status}
                    required 
                />
                <Form.Input 
                    label='อาชีพ (occupartion)' 
                    placeholder='อาชีพทำงาน' 
                    width={4} 
                    onChange={e => setField('occupartion', e.target.value)} 
                    value={occupartion} 
                />
                <Form.Input 
                    label='โทรศัพท์บ้าน (Home Phonenumber)' 
                    placeholder='โทรศัพท์บ้าน'
                    width={4} 
                    onChange={e => setField('homePhonenumber', e.target.value)} 
                    value={homePhonenumber} 
                />
                <Form.Input 
                    label='โทรศัพท์มือถือ (Mobile Number)' 
                    placeholder='โทรศัพท์ที่ทำงาน' 
                    width={4} 
                    onChange={e => setField('mobileNumber', e.target.value)} 
                    value={mobileNumber} 
                    required />
            </Form.Group>
             

            </Segment>
        </Segment.Group>
        <br></br>
    </div>
}
    

export default InfoPateint
