import React from 'react';
import {
    genderData, cardTypeData, titleNameData, titleNameParentData, bloodgroupData, typesOfHousingData,
    nationalityData, religionData, statusData, countryData
} from './../../Static/data/FormDatas'
import { Segment, Form, Select, } from 'semantic-ui-react'
import Date from './../Date'
// import HeaderForm from './HeaderForm';

const InfoPateint = (props) => {
    const setField = props.setField
    const dob = props.dob
    const setDateOfBirth = props.setDateOfBirth
    const calculateAge = props.calculateAge
    const Country = () => {
        if (props.cardType !== 'idcard') {
            return <Form.Field
                control={Select}
                label='ประเทศ (Country)'
                options={countryData}
                placeholder='เลือกประเทศ'
                width={4}
                onChange={(e, { value }) => setField('country', value)}
                value={props.country}
                required />
        }else{
            return <Form.Input
                label='ประเทศ (Country)'
                width={4}
                value={props.country}
                readOnly
                required
            />
        }
    }
    
    return (
        <div>
            <Segment.Group>
                <Segment>
                    <Form.Group widths='equal' >
                        <Form.Input fluid
                            id='registerdate'
                            style={{ border: '0 px' }}
                            label='วันที่ทำประวัติ (Register Date)'
                            placeholder=''
                            width={4}
                            readOnly
                            value={props.registerDate}
                        />
                    </Form.Group>
                    {/* <HeaderForm /> */}
                </Segment>
                <Segment>
                    <Form.Group widths='equal' >
                        <Form.Field
                            control={Select}
                            label='ประเภทบัตร (Card type)'
                            options={cardTypeData}
                            placeholder='เลือกประเภทบัตร'
                            width={4}
                            onChange={(e, { value }) => props.changeCardType(value)}
                            value={props.cardType}
                            required
                        />
                        <Form.Input
                            loading={false}
                            fluid
                            label='เลขบัตรประชาชน (ID CARD No./Passport No.)'
                            placeholder='เลขบัตรประชาชน/Passport No.'
                            width={6}
                            onBlur={e => props.checkIdcard(e)}
                            onChange={e => setField('idCard', e.target.value)}
                            value={props.idCard}
                            error={props.erroridcard}
                            autoFocus
                            required
                        />
                        <Form.Field
                            control={() => Date({ setDateOfBirth, dob })}
                            label='วัน/เดือน/ปีเกิด (Dob)'
                            width={3}
                            required
                        />
                        <Form.Input
                            label='อายุ'
                            placeholder='อายุ'
                            width={3}
                            value={props.age}
                            readOnly
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Field
                            control={Select}
                            label='คำนำหน้า (Title)'
                            options={titleNameData}
                            placeholder='เลือก (Select)'
                            width={4}
                            onChange={(e, { value }) => props.setGender(value)}
                            value={props.nameTitle.value}
                            required
                        />
                        <Form.Input
                            label='ชื่อจริง (Firstname)'
                            placeholder='ชื่อจริง (Firstname)'
                            width={6}
                            onChange={e => setField('firstname', e.target.value)}
                            value={props.firstname}
                            required
                        />
                        <Form.Input
                            label='นามสกุล (Lastname)'
                            placeholder='นามสกุล (Lastname)'
                            width={6}
                            onChange={e => setField('lastname', e.target.value)}
                            value={props.lastname}
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
                            value={props.congenitalDisease}
                        />
                        <Form.Field
                            control={Select}
                            label='เพศ (Gender)'
                            options={genderData}
                            placeholder='เลือกเพศ'
                            width={4}
                            onChange={(e, { value }) => setField('gender', value)}
                            value={props.gender}
                            required
                        />
                        <Form.Field
                            control={Select}
                            label='กรุ๊ปเลือด (BloodGroup)'
                            options={bloodgroupData}
                            placeholder='เลือกกรุ๊ปเลือด'
                            width={4}
                            onChange={(e, { value }) => setField('bloodgroup', value)}
                            value={props.bloodgroup}
                            required
                        />
                        {Country()}
                    </Form.Group>
                    <Form.Group>
                        <Form.Field
                            control={Select}
                            label='ศาสนา (Religion)'
                            options={religionData}
                            placeholder='เลือกศาสนา'
                            width={4}
                            onChange={(e, { value }) => props.chooseOther('religion', value)}
                            value={props.religion.value}
                            required
                        />
                        <Form.Input
                            label='ศาสนาอื่นๆ (Religion other)'
                            placeholder='ศาสนาอื่นๆ'
                            width={4}
                            disabled={props.religion.disabled}
                            onChange={e => setField('otherreligion', e.target.value)}
                            value={props.otherreligion} />
                        <Form.Field
                            control={Select}
                            label='สัญชาติ (Nationality)'
                            options={nationalityData}
                            placeholder='เลือกสัญชาติ'
                            width={4}
                            onChange={(e, { value }) => props.chooseOther('nationality', value)}
                            value={props.nationality.value}
                            required />
                        <Form.Input
                            label='สัญชาติอื่นๆ (Nationality other)'
                            placeholder='สัญชาติอื่นๆ'
                            width={4}
                            disabled={props.nationality.disabled}
                            onChange={e => setField('othernationality', e.target.value)}
                            value={props.othernationality} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field
                            control={Select}
                            label='สถานภาพ (Status)'
                            options={statusData}
                            placeholder='สถานะ'
                            width={4}
                            onChange={(e, { value }) => setField('status', value)}
                            value={props.status}
                            required
                        />
                        <Form.Input
                            label='อาชีพ (occupartion)'
                            placeholder='อาชีพทำงาน'
                            width={4}
                            onChange={e => setField('occupartion', e.target.value)}
                            value={props.occupartion}
                        />
                        <Form.Input
                            label='โทรศัพท์บ้าน (Home Phonenumber)'
                            placeholder='ex. 021111111'
                            width={4}
                            onChange={e => setField('homePhonenumber', e.target.value)}
                            onBlur={e => props.validateSyntaxPhoneNumber('homePhonenumber', e.target.value)}
                            error={props.errorhomePhonenumber}
                            value={props.homePhonenumber}
                        />
                        <Form.Input
                            label='โทรศัพท์มือถือ (Mobile Number)'
                            placeholder='ex. 0811111111'
                            width={4}
                            onChange={e => setField('mobileNumber', e.target.value)}
                            onBlur={e => props.validateSyntaxPhoneNumber('mobileNumber', e.target.value)}
                            error={props.errormobileNumber}
                            value={props.mobileNumber}
                            required />
                    </Form.Group>
                </Segment>
            </Segment.Group>
            <br></br>
        </div>
    )
}


export default InfoPateint
