import React from 'react';
import { Label, Segment, Form, Select } from 'semantic-ui-react'
import { typesOfHousing } from './Data/FormData'

const HomeAddress_English = (props) => {
    const setField = props.setField
    const preparedData = props.preparedData
    return (
    <div>
        <Segment>
            <Label as='a' color='teal' ribbon ><h4 style={{ fontFamily: 'Kanit' }}>Home Address. Please, fill up this form.</h4></Label>
            <br></br><br></br>
            <Form.Group>
                <Form.Field
                    control={Select} 
                    label='Types of Housing' 
                    options={typesOfHousing} 
                    placeholder='select Types of Housing' 
                    width={6} 
                    onChange={(e, { value }) => setField('typeofHouse', value)} 
                    required 
                />
                <Form.Input 
                    label='Address' 
                    placeholder='house address/street address' 
                    width={6} 
                    onChange={e => setField('address', e.target.value)} 
                    required 
                />
                <Form.Field 
                    control={Select} 
                    label='Province' 
                    options={props.provinces} 
                    placeholder='select province' 
                    width={6} 
                    onClick={() => preparedData('a', 'Home')} 
                    onChange={(e, value) => props.changeProvince('province', value)} 
                    required 
                />
            </Form.Group>
            <Form.Group>
                <Form.Field 
                    control={Select}
                    label='District' 
                    options={props.amphurs} 
                    placeholder='select District' 
                    width={6} 
                    onClick={() => preparedData('d', 'Home')} 
                    onChange={(e, value) => props.changeAmphur('district', value)} 
                    required 
                />
                <Form.Field 
                    control={Select} 
                    label='Sub-District' 
                    options={props.districts} 
                    placeholder='select Sub-District' 
                    width={6} 
                    onChange={(e, value) => props.changeDistrict('subDistrict', value)} 
                    required 
                />
                <Form.Input 
                    label='Postal Code' 
                    placeholder='select Postal Code' 
                    width={6} 
                    onChange={e => setField('zipcode', e.target.value)} 
                    value={props.zipcode} 
                    required 
                />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)}

export default HomeAddress_English
