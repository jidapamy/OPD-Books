import React from 'react';
import { Label, Segment, Form, Select } from 'semantic-ui-react'
import { typesOfHousingData } from './../../Static/data/FormDatas'

const HomeAddress = (props) => {
    const setField = props.setField
    return (
        <div>
            <Segment>
                <Label as='a' color='teal' ribbon ><h4 style={{ fontFamily: 'Kanit' }}>Home Address</h4></Label>
                <br></br><br></br>
                <Form.Group>
                    <Form.Field 
                        control={Select} 
                        label='Types of Housing' 
                        options={typesOfHousingData} 
                        placeholder='Types of Housing' 
                        width={6} 
                        onChange={(e, { value }) => setField('typeofHouse', value)} 
                        required 
                    />
                    <Form.Input 
                        label='Address' 
                        placeholder='Address' 
                        width={6} 
                        onChange={e => setField('address', e.target.value)} 
                        required 
                    />
                    <Form.Input 
                        label='Province' 
                        placeholder='Province' 
                        width={6} 
                        onChange={e => setField('province', e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input 
                        label='District' 
                        placeholder='District' 
                        width={6} 
                        onChange={e => setField('district', e.target.value)} 
                        required 
                    />
                    <Form.Input 
                        label='Sub-District' 
                        placeholder='Sub-District' 
                        width={6} 
                        onChange={e => setField('subDistrict', e.target.value)} 
                        required 
                    />
                    <Form.Input 
                        label='Postal Code' 
                        placeholder='Postal Code' 
                        width={6} 
                        onChange={e => setField('zipcode', e.target.value)} 
                        required 
                    />
                </Form.Group>
            </Segment>
            <br></br>
        </div>
    )
}

export default HomeAddress
