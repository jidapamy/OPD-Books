import React from 'react';
import { Label, Segment, Checkbox, Form, Select, Button } from 'semantic-ui-react'
import { typesOfHousingData, titleNameParentData } from './../../Static/data/FormDatas'


const EmergencyContact = (props) => {
    const setField = props.setField
    const preparedData = props.preparedData
    const emergencyField = props.emergencyField
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
                            await props.checkSameAddress()
                            emergencyField();
                        }} />
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Field
                        control={Select}
                        label='คำนำหน้า'
                        options={titleNameParentData}
                        placeholder='เลือกคำนำหน้า'
                        width={6}
                        onChange={async (e, { value }) => {
                            await setField('emerTitle', value)
                            emergencyField();
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
                            emergencyField();
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
                            emergencyField();
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
                            emergencyField();
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
                            emergencyField();
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
                            emergencyField();
                        }}
                        onBlur={e => props.validateSyntaxPhoneNumber('emerMobileNumber', e.target.value)}
                        value={props.emerMobileNumber} 
                        required={props.requiredEmerMobileNumber}
                        error={props.erroremerMobileNumber}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Select}
                        label='ประเภทที่พักอาศัย (Types of Housing)'
                        options={typesOfHousingData}
                        placeholder='เลือกประเภทที่พักอาศัย'
                        width={6}
                        value={props.emerTypeofHouse}
                        onChange={async (e, { value }) => {
                            setField('emerTypeofHouse', value)
                            props.checkStatusSameAddress()
                            emergencyField();
                        }} 
                        required={props.requiredEmerTypeofHouse}
                    />
                    <Form.Input
                        label='ที่อยู่(Address)'
                        placeholder='บ้านเลขที่/หมู่/ถนน'
                        width={6}
                        onChange={async(e) => {
                            setField('emerAddress', e.target.value)
                            props.checkStatusSameAddress()
                            emergencyField();
                        }}
                        value={props.emerAddress} 
                        required={props.requiredEmerAddress}
                    />
                    <Form.Field
                        control={Select}
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
                        control={Select}
                        label='เขต/อำเภอ (District)'
                        options={props.amphurs}
                        placeholder='เลือกเขต/อำเภอ'
                        width={6}
                        value={props.emerDistrict}
                        onChange={(e, value) => props.changeAmphur('emerDistrict', value)}
                        required={props.requiredEmerDistrict}
                    />
                    <Form.Field
                        control={Select}
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
                            emergencyField();
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
