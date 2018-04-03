import React  from 'react';
import { Label, Segment, Form, Select  } from 'semantic-ui-react'
import { typesOfHousing } from './Data/FormData'

const HomeAddressOfForeign = ({
    //method
    setField, changeProvince, changeAmphur, changeDistrict, preparedData,
    //attribute
    typeofHouse, address, province, district , subDistrict , zipcode,
    //data
    districts,provinces,amphurs
}) => (
    <div>
        <Segment>
            <Label as='a' color='teal' ribbon ><h4 style={{ fontFamily: 'Kanit'}}>Home Address</h4></Label>
            <br></br><br></br>
            <Form.Group>
                    <Form.Field control={Select} label='Types of Housing' options={typesOfHousing} placeholder='Types of Housing' width={6} onChange={(e, { value }) => setField('typeofHouse', value)} required/>
                    <Form.Input label='Address' placeholder='Address' width={6} onChange={e => setField('address', e.target.value)} value={address} required/>
                    <Form.Input label='Province' placeholder='Province' width={6} onChange={e => setField('province', e.target.value)} value={province} required/>
            </Form.Group>
            <Form.Group>
                    <Form.Input label='District' placeholder='District' width={6} onChange={e => setField('district', e.target.value)} value={district} required/>
                    <Form.Input label='Sub-District' placeholder='Sub-District' width={6} onChange={e => setField('subDistrict', e.target.value)} value={subDistrict} required/>
                    <Form.Input label='Postal Code' placeholder='Postal Code' width={6} onChange={e => setField('zipcode', e.target.value)} value={zipcode} required />   
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default HomeAddressOfForeign
