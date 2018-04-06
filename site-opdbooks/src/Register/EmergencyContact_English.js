import React from 'react';
import { Label, Segment, Checkbox, Form, Select } from 'semantic-ui-react'
// import { provinces, amphurs, districts } from './Register'
import { typesOfHousing, nameTypeThUP15 } from './Data/FormData'


const EmergencyContact_English = (props) => {
    const setField = props.setField
    const preparedData = props.preparedData
    return (
        <div>
            <Segment>
                <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>In case of emergency contact.</h4></Label>
                <br></br><br></br>
                
            <Form.Group>
                    <Form.Field 
                    control={Select} 
                    label='Title' 
                    options={nameTypeThUP15} 
                    placeholder='เลือกคำนำหน้า' 
                    width={3} 
                    onChange={(e, { value }) => setField('emerTitle', value)}
                    />
                    <Form.Input
                        label='Title (Other)'
                        placeholder='คำนำหน้าอื่นๆ'
                        width={3}
                    />
                    <Form.Input
                     label='Firstname' 
                     placeholder='ชื่อ' 
                     width={5} 
                     onChange={e => setField('emerFirstname', e.target.value)} 
                     value={props.emerFirstname}
                     />
                    <Form.Input 
                    label='Lastname' 
                    placeholder='นามสกุล'
                    width={5} onChange={e => setField('emerLastname', e.target.value)}
                    value={props.emerLastname}
                    />
            </Form.Group>
            <Form.Group>
                    <Form.Input 
                    label='Relationship Related' 
                    placeholder='ความสัมพันธ์' width={6} 
                    onChange={e => setField('emerRelationship', e.target.value)} 
                    value={props.emerRelationship}
                    />
                    <Form.Input 
                    label='Home Phone Number' 
                    placeholder='เบอร์โทรศัพท์บ้าน' width={6} 
                    onChange={e => setField('emerHomePhonenumber', e.target.value)} 
                    value={props.emerHomePhonenumber}
                    />
                    <Form.Input 
                    label='Mobile Phone' 
                    placeholder='เบอร์โทรศัพท์มือถือ' 
                    width={6} 
                    onChange={e => setField('emerMobileNumber', e.target.value)} 
                    value={props.emerMobileNumber}
                    />
            </Form.Group>
            <Form.Group>
                    <Form.Field 
                    control={Select} 
                    label='Types of Housing' 
                    options={typesOfHousing} placeholder='เลือกประเภทที่พักอาศัย' 
                    width={6} value={props.emerTypeofHouse} 
                    onChange={(e, { value }) => setField('emerTypeofHouse', value)}
                    />
                    <Form.Input 
                    label='Address' 
                    placeholder='บ้านเลขที่/หมู่/ถนน' 
                    width={6} 
                    onChange={e => setField('emerAddress', e.target.value)} 
                    value={props.emerAddress} 
                    />
                    <Form.Field 
                    control={Select} 
                    label='Province' 
                    options={props.provinces} 
                    placeholder='เลือกจังหวัด' 
                    width={6} 
                    onClick={() => preparedData('a', 'Emer')} 
                    value={props.emerProvince} 
                    onChange={(e, value) => props.changeProvince('emerProvince', value)} 
                    />
            </Form.Group>
            <Form.Group>
                    <Form.Field 
                    control={Select} 
                    label='District' 
                    options={props.amphurs} placeholder='เลือกเขต/อำเภอ' 
                    width={6} onClick={() => preparedData('d', 'Emer')} 
                    value={props.emerDistrict} 
                    onChange={(e, value) => props.changeAmphur('emerDistrict', value)} 
                    />
                    <Form.Field 
                    control={Select} 
                    label='Sub-District' 
                    options={props.districts} 
                    placeholder='แขวง/ตำบล' 
                    width={6} 
                    value={props.emerSubDistrict} 
                    onChange={(e, value) => props.changeDistrict('emerSubDistrict', value)} 
                    />
                <Form.Input 
                label='Postal Code' 
                placeholder='รหัสไปรษณีย์' 
                width={6} 
                onChange={e => setField('emerZipcode', e.target.value)} 
                value={props.emerZipcode} 
                />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)
}

export default EmergencyContact_English
