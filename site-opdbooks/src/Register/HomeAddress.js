import React  from 'react';
import { Label, Segment, Form, Select  } from 'semantic-ui-react'
import { typesOfHousing } from './Data/FormData'

const HomeAddress = ({
    //method
    setField, changeProvince, changeAmphur, changeDistrict, preparedData,
    //attribute
    typeofHouse, address, province, district, zipcode,
    //data
    districts,provinces,amphurs
}) => (
    <div>
        <Segment>
            <Label as='a' color='teal' ribbon ><h4 style={{ fontFamily: 'Kanit'}}>ที่อยู่ปัจจุบัน (โปรดระบุอย่างละเอียด) (Home Address)</h4></Label>
            <br></br><br></br>
            <Form.Group>
                    <Form.Field control={Select} label='ประเภทที่พักอาศัย (Types of Housing)' options={typesOfHousing} placeholder='เลือกประเภทที่พักอาศัย' width={6} onChange={(e, { value }) => setField('typeofHouse', value)} required/>
                    <Form.Input label='ที่อยู่(Address) ' placeholder='บ้านเลขที่/หมู่/ถนน' width={6} onChange={e => setField('address', e.target.value)} value={address} required/>
                    <Form.Field control={Select} label='จังหวัด (Province)' options={provinces} placeholder='เลือกจังหวัด' width={6} onClick={() => preparedData('a', 'Home')} onChange={(e, value) => changeProvince('province', value)} required />
            </Form.Group>
            <Form.Group>
                    <Form.Field control={Select} label='เขต/อำเภอ (District)' options={amphurs} placeholder='เลือกเขต/อำเภอ' width={6} onClick={() => preparedData('d','Home')} onChange={(e, value) => changeAmphur('district', value)} required />
                    <Form.Field control={Select} label='แขวง/ตำบล (Sub-District)' options={districts} placeholder='แขวง/ตำบล' width={6} onChange={(e, value) => changeDistrict('subDistrict', value)} required />
                    <Form.Input label='รหัสไปรษณีย์ (Postal Code)' placeholder='รหัสไปรษณีย์' width={6} onChange={e => setField('zipcode', e.target.value)} value={zipcode} required />   
            </Form.Group>
        </Segment>

        <br></br>
    </div>
)

export default HomeAddress
