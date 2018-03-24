import React from 'react';
import { Label, Segment, Checkbox, Form, Select } from 'semantic-ui-react'
// import { provinces, amphurs, districts } from './Register'
import { typesOfHousing, nameTypeThUP15 } from './Data/FormData'


const EmergencyContact = ({
    //method
    setField, changeProvince, changeAmphur, changeDistrict, preparedData, checkSameAddress,
    //attribute
    emerTitle, emerFirstname, emerLastname, emerRelationship, emerHomePhonenumber, 
    emerMobileNumber, emerTypeofHouse, emerAddress, emerProvince,
    emerDistrict, emerSubDistrict, emerZipcode, statusSameAddress,
    //data
    districts, provinces, amphurs
}) => (
    <div>
        <Segment>
            <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>กรณีฉุกเฉินติดต่อ (Contact First And Last Name In Case Of Emergency)</h4></Label>
            <br></br><br></br>
            {/* <Message color='yellow'>
                <Message.Header>โปรดระบุสิ่งที่แพ้</Message.Header>
                <p>โปรดระบุ ข้อมูล บิดา มารดา หรือ ผู้ปกครอง ในกรณีที่คนไข้อายุต่ำกว่า 15 ปี</p>
            </Message> */}
            <Form.Group>
                    <Form.Field control={Checkbox} label='ที่อยู่เดียวกับที่อยู่ปัจจุบัน' checked={statusSameAddress} onChange={() => checkSameAddress()} />
            </Form.Group>
            <br></br>
            <Form.Group>
                    <Form.Field control={Select} label='คำนำหน้า' options={nameTypeThUP15} placeholder='เลือกคำนำหน้า' width={6} onChange={(e, { value }) => setField('emerTitle', value)}/>
                    <Form.Input label='ชื่อจริง' placeholder='ชื่อ' width={6} onChange={e => setField('emerFirstname', e.target.value)} value={emerFirstname}/>
                    <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} onChange={e => setField('emerLastname', e.target.value)} value={emerLastname}/>
            </Form.Group>
            <Form.Group>
                    <Form.Input label='เกี่ยวข้องเป็น (Relationship)' placeholder='ความสัมพันธ์' width={6} onChange={e => setField('emerRelationship', e.target.value)} value={emerRelationship}/>
                    <Form.Input label='โทรศัพท์บ้าน (Home Phone Number)' placeholder='เบอร์โทรศัพท์บ้าน' width={6} onChange={e => setField('emerHomePhonenumber', e.target.value)} value={emerHomePhonenumber}/>
                    <Form.Input label='โทรศัพท์มือถือ (Mobile Phone)' placeholder='เบอร์โทรศัพท์มือถือ' width={6} onChange={e => setField('emerMobileNumber', e.target.value)} value={emerMobileNumber}/>
            </Form.Group>
            <Form.Group>
                    <Form.Field control={Select} label='ประเภทที่พักอาศัย (Types of Housing)' options={typesOfHousing} placeholder='เลือกประเภทที่พักอาศัย' width={6} value={emerTypeofHouse} onChange={(e, { value }) => setField('emerTypeofHouse', value)}/>
                    <Form.Input label='ที่อยู่(Address) ' placeholder='บ้านเลขที่/หมู่/ถนน' width={6} onChange={e => setField('emerAddress', e.target.value)} value={emerAddress} />
                    <Form.Field control={Select} label='จังหวัด (Province)' options={provinces} placeholder='เลือกจังหวัด' width={6} onClick={() => preparedData('a', 'Emer')} value={emerProvince} onChange={(e, value) => changeProvince('emerProvince', value)} />
            </Form.Group>
            <Form.Group>
                    <Form.Field control={Select} label='เขต/อำเภอ (District)' options={amphurs} placeholder='เลือกเขต/อำเภอ' width={6} onClick={() => preparedData('d', 'Emer')} value={emerDistrict} onChange={(e, value) => changeAmphur('emerDistrict', value)} />
                    <Form.Field control={Select} label='แขวง/ตำบล (Sub-District)' options={districts} placeholder='แขวง/ตำบล' width={6} value={emerSubDistrict} onChange={(e, value) => changeDistrict('emerSubDistrict', value)} />
                <Form.Input label='รหัสไปรษณีย์ (Postal Code)' placeholder='รหัสไปรษณีย์' width={6} onChange={e => setField('emerZipcode', e.target.value)} value={emerZipcode} />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default EmergencyContact
