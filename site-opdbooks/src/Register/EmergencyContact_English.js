import React from 'react';
import { Label, Segment, Checkbox, Form, Select } from 'semantic-ui-react'
// import { provinces, amphurs, districts } from './Register'
import { typesOfHousing, nameTypeThUP15Data } from './Data/FormData'


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
                    options={nameTypeThUP15Data} 
                    placeholder='Select Title' 
                    width={3} 
                    onChange={(e, { value }) => setField('emerTitle', value)}
                    />
                    <Form.Input
                        label='Title (Other)'
                        placeholder='Title Other'
                        width={3}
                    />
                    <Form.Input
                     label='Firstname' 
                     placeholder='Firstname' 
                     width={5} 
                     onChange={e => setField('emerFirstname', e.target.value)} 
                     value={props.emerFirstname}
                     />
                    <Form.Input 
                    label='Lastname' 
                    placeholder='Lastname'
                    width={5} onChange={e => setField('emerLastname', e.target.value)}
                    value={props.emerLastname}
                    />
            </Form.Group>
            <Form.Group>
                    <Form.Input 
                    label='Relationship Related' 
                    placeholder='Relationship Related' width={6} 
                    onChange={e => setField('emerRelationship', e.target.value)} 
                    value={props.emerRelationship}
                    />
                    <Form.Input 
                    label='Home Phone Number' 
                    placeholder='Home Phone Number' width={6} 
                    onChange={e => setField('emerHomePhonenumber', e.target.value)} 
                    value={props.emerHomePhonenumber}
                    />
                    <Form.Input 
                    label='Mobile Phone' 
                    placeholder='Mobile Phone' 
                    width={6} 
                    onChange={e => setField('emerMobileNumber', e.target.value)} 
                    value={props.emerMobileNumber}
                    />
            </Form.Group>
            <Form.Group>
                    <Form.Field 
                    control={Select} 
                    label='Types of Housing' 
                    options={typesOfHousing} placeholder='Select Types of Housing' 
                    width={6} value={props.emerTypeofHouse} 
                    onChange={(e, { value }) => setField('emerTypeofHouse', value)}
                    />
                    <Form.Input 
                    label='Address' 
                    placeholder='Address' 
                    width={6} 
                    onChange={e => setField('emerAddress', e.target.value)} 
                    value={props.emerAddress} 
                    />
                    <Form.Field 
                    control={Select} 
                    label='Province' 
                    options={props.provinces} 
                    placeholder='Select Province' 
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
                    options={props.amphurs} placeholder='Select District' 
                    width={6} onClick={() => preparedData('d', 'Emer')} 
                    value={props.emerDistrict} 
                    onChange={(e, value) => props.changeAmphur('emerDistrict', value)} 
                    />
                    <Form.Field 
                    control={Select} 
                    label='Sub-District' 
                    options={props.districts} 
                    placeholder='Select Sub-District' 
                    width={6} 
                    value={props.emerSubDistrict} 
                    onChange={(e, value) => props.changeDistrict('emerSubDistrict', value)} 
                    />
                <Form.Input 
                label='Postal Code' 
                placeholder='Select Postal Code' 
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
