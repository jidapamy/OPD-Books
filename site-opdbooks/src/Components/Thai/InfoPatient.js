import React from 'react';
import { Segment, Form, Select, Dropdown } from 'semantic-ui-react'
import Date from './../Date'

const InfoPateint = (props) => {
    const setField = props.setField
    const dob = props.dob
    const setDateOfBirth = props.setDateOfBirth
    const calculateAge = props.calculateAge
    const Country = () => {
        if (props.cardType !== 'idcard') {
            return <Form.Field
                control={Dropdown}
                search selection
                wrapSelection={false}
                options={props.countryData}
                placeholder='เลือกประเทศ'
                label='ประเทศ (Country)'
                width={6}
                onChange={(e, { value }) => setField('country', value)}
                value={props.country}
                required
            />
        }else{
            return <Form.Input
                label='ประเทศ (Country)'
                width={6}
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
                            options={props.cardTypeData}
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
                            control={Dropdown}
                            search
                            selection
                            allowAdditions
                            onAddItem={(e, { value }) => {
                                const arr = props.titleNameData
                                setField('titleNameData', [{ text: value, value }, ...props.titleNameData])
                            }}
                            additionLabel='other : '
                            label='คำนำหน้า (Title)'
                            options={props.titleNameData}
                            placeholder='เลือก (Select)'
                            width={4}
                            onChange={(e, { value }) => setField('nameTitle',value)}//
                            value={props.nameTitle}//ลบvalue
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
                            options={props.genderData}
                            placeholder='เลือกเพศ'
                            width={6}
                            onChange={(e, { value }) => setField('gender', value)}
                            value={props.gender}
                            required
                        />
                        <Form.Field
                            control={Select}
                            label='กรุ๊ปเลือด (BloodGroup)'
                            options={props.bloodgroupData}
                            placeholder='เลือกกรุ๊ปเลือด'
                            width={6}
                            onChange={(e, { value }) => setField('bloodgroup', value)}
                            value={props.bloodgroup}
                            required
                        />
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Field
                            control={Dropdown}
                            search
                            selection
                            allowAdditions
                            onAddItem={(e, { value }) => {
                                const arr = props.religionData
                                setField('religionData', [{ text: value, value }, ...props.religionData])
                            }}
                            additionLabel='other : '
                            label='ศาสนา (Religion)'
                            options={props.religionData}
                            placeholder='เลือกศาสนา'
                            width={4}
                            onChange={(e, { value }) => setField('religion', value)}
                            value={props.religion}
                            required
                        />
                        <Form.Field
                            control={Dropdown}
                            search
                            selection
                            allowAdditions
                            onAddItem={(e, { value }) => {
                                const arr = props.nationalityData
                                setField('nationalityData', [{ text: value, value }, ...props.nationalityData])
                            }}
                            additionLabel='other : '
                            control={Select}
                            label='สัญชาติ (Nationality)'
                            options={props.nationalityData}
                            placeholder='เลือกสัญชาติ'
                            width={6}
                            onChange={(e, { value }) => setField('nationality', value)}
                            value={props.nationality}
                            required />
                        {Country()}
                    </Form.Group>
                    <Form.Group>
                        <Form.Field
                            control={Select}
                            label='สถานภาพ (Status)'
                            options={props.statusData}
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
