import React  from 'react';
import { Segment, Form, Select } from 'semantic-ui-react'
import { provinces, amphurs, districts } from './Register'
import { typesOfHousing } from './Data/FormData'

const HomeAddress = ({
    //method
    setField, changeProvince, changeAmphur, changeDistrict,
    //attribute
    typeofHouse, address, province, district, zipcode
}) => (
    <div>
        <Segment>
            <h4>ที่อยู่ปัจจุบัน (โปรดระบุอย่างละเอียด) (Home Address)</h4>
            <br></br>
            <Form.Group>
                <Form.Field control={Select} label='ประเภทที่พักอาศัย (Types of Housing)' options={typesOfHousing} placeholder='เลือกประเภทที่พักอาศัย' width={4} onChange={e => setField('typeofHouse', e.target.value)} value={typeofHouse} />
                <Form.Input label='ที่อยู่(Address)' placeholder='บ้านเลขที่/หมู่/ถนน' width={6} required onChange={e => setField('address', e.target.value)} value={address}/>
                <Form.Field control={Select} label='แขวง/ตำบล (Sub-District)' options={districts} placeholder='แขวง/ตำบล' width={4} onChange={(e, value) => changeDistrict('subDistrict', value)} required />
            </Form.Group>
            <Form.Group>
                    <Form.Field control={Select} label='เขต/อำเภอ (District)' options={amphurs} placeholder='เลือกเขต/อำเภอ' width={4} onChange={(e, value) => changeAmphur('district', value)} required />
                <Form.Field control={Select} label='จังหวัด (Province)' options={provinces} placeholder='เลือกจังหวัด' width={4} onChange={(e, value) => changeProvince('province', value)} required />
                <Form.Input label='รหัสไปรษณีย์ (Postal Code)' placeholder='รหัสไปรษณีย์' width={6} required value={zipcode} />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default HomeAddress
