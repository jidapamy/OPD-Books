import React from 'react';
import { Label, Segment, Checkbox, Form, Select, Button, Dropdown } from 'semantic-ui-react'
// import { typesOfHousingData, titleNameParentData } from './../../Static/data/FormDatas'


const EmergencyContact = (props) => {
    const setField = props.setField
    const preparedData = props.preparedData
    const setRequiredField = props.setRequiredField
    return (
        <div>
            <Segment>
                <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>กรณีฉุกเฉินติดต่อ (Contact First And Last Name In Case Of Emergency)</h4></Label>
                <br></br><br></br>
                <Form.Field onClick={props.clearField} label='Clear Field' control='button'>
                    Clear
            </Form.Field>
                <br /> 
                <Form.Group>
                    <Form.Field
                        control={Checkbox}
                        label='ที่อยู่เดียวกับที่อยู่ปัจจุบัน'
                        checked={props.statusSameAddress}
                        onChange={async () => {
                            await props.chooseSameAddress()
                            setRequiredField();
                        }} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Field
                        control={Dropdown}
                        search
                        selection
                        allowAdditions
                        onAddItem={(e, { value }) => {
                            const arr = props.titleNameParentData
                            setField('titleNameParentData', [{ text: value, value }, ...props.titleNameParentData])
                        }}
                        additionLabel='other : '
                        label='คำนำหน้า'
                        options={props.titleNameParentData}
                        placeholder='เลือกคำนำหน้า'
                        width={6}
                        onChange={async (e, { value }) => {
                            await setField('emerTitle', value) 
                            setRequiredField();
                        }}
                        value={props.emerTitle} 
                        required={props.requiredEmerTitle}
                    />
                    <Form.Input
                        label='ชื่อจริง'
                        placeholder='ชื่อ'
                        width={6}
                        onChange={async (e) => {
                            await setField('emerFirstname', e.target.value)
                            setRequiredField();
                        }}
                        value={props.emerFirstname} 
                        required={props.requiredEmerFirstname}
                    />
                    <Form.Input
                        label='นามสกุล'
                        placeholder='นามสกุล'
                        width={6}
                        onChange={async (e) => {
                            await setField('emerLastname', e.target.value)
                            setRequiredField();
                        }}
                        value={props.emerLastname} 
                        required={props.requiredEmerLastname}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        label='เกี่ยวข้องเป็น (Relationship)'
                        placeholder='ความสัมพันธ์'
                        width={6}
                        onChange={async (e) => {
                            await setField('emerRelationship', e.target.value)
                            setRequiredField();
                        }}
                        value={props.emerRelationship}
                        required={props.requiredEmerRelationship}
                    />
                    <Form.Input
                        label='โทรศัพท์บ้าน (Home Phone Number)'
                        placeholder='ex. 021111111'
                        width={6}
                        onChange={async (e) => {
                            await setField('emerHomePhonenumber', e.target.value)
                            setRequiredField();
                        }}
                        onBlur={e => props.validateSyntaxPhoneNumber('emerHomePhonenumber', e.target.value)}
                        value={props.emerHomePhonenumber} 
                        error={props.erroremerHomePhonenumber}
                    />
                    <Form.Input
                        label='โทรศัพท์มือถือ (Mobile Phone)'
                        placeholder='ex. 0811111111'
                        width={6}
                        onChange={async (e) => {
                            await setField('emerMobileNumber', e.target.value)
                            setRequiredField();
                        }}
                        onBlur={e => props.validateSyntaxPhoneNumber('emerMobileNumber', e.target.value)}
                        value={props.emerMobileNumber} 
                        required={props.requiredEmerMobileNumber}
                        error={props.erroremerMobileNumber}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Dropdown}
                        search
                        selection
                        allowAdditions
                        onAddItem={(e, { value }) => {
                            const arr = props.typesOfHousingData
                            setField('typesOfHousingData', [{ text: value, value }, ...props.typesOfHousingData])
                        }}
                        additionLabel='other : '
                        label='ประเภทที่พักอาศัย (Types of Housing)'
                        options={props.typesOfHousingData}
                        placeholder='เลือกประเภทที่พักอาศัย'
                        width={6}
                        value={props.emerTypeofHouse}
                        onChange={async (e, { value }) => {
                            setField('emerTypeofHouse', value)
                            props.changeStatusSameAddress()
                            setRequiredField();
                        }} 
                        value={props.emerTypeofHouse} 
                        required={props.requiredEmerTypeofHouse}
                    />
                    <Form.Input
                        label='ที่อยู่(Address)'
                        placeholder='บ้านเลขที่/หมู่/ถนน'
                        width={6}
                        onChange={async(e) => {
                            setField('emerAddress', e.target.value)
                            props.changeStatusSameAddress()
                            setRequiredField();
                        }}
                        value={props.emerAddress} 
                        required={props.requiredEmerAddress}
                    />
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        label='จังหวัด (Province)'
                        options={props.provinces}
                        placeholder='เลือกจังหวัด'
                        width={6}
                        value={props.emerProvince}
                        onChange={(e, value) => props.changeProvince('emerProvince', value)}
                        required={props.requiredEmerProvince}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        label='เขต/อำเภอ (District)'
                        options={props.amphurs}
                        placeholder='เลือกเขต/อำเภอ'
                        width={6}
                        value={props.emerDistrict}
                        onChange={(e, value) => props.changeAmphur('emerDistrict', value)}
                        required={props.requiredEmerDistrict}
                    />
                    <Form.Field
                        control={Dropdown}
                        search selection
                        wrapSelection={false}
                        label='แขวง/ตำบล (Sub-District)'
                        options={props.districts}
                        placeholder='แขวง/ตำบล'
                        width={6}
                        value={props.emerSubDistrict}
                        onChange={(e, value) => props.changeDistrict('emerSubDistrict', value)}
                        required={props.requiredEmerSubDistrict}
                    />
                    <Form.Input
                        label='รหัสไปรษณีย์ (Postal Code)'
                        placeholder='รหัสไปรษณีย์'
                        width={6}
                        onChange={async (e) => {
                            await setField('emerZipcode', e.target.value)
                            setRequiredField();
                        }}
                        value={props.emerZipcode}
                        required={props.requiredEmerZipcode}
                    />
                </Form.Group>
            </Segment>
            <br></br>
        </div>
    )
}

export default EmergencyContact
