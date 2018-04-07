import React from 'react';
import { nameTypeData, bloodgroupData, cardTypeData, genderData, nationalityData, religionData, statusData, countryData } from './Data/FormData'
import { Segment, Form, Select,} from 'semantic-ui-react'
import Date from './Date'
import HeaderForm from './HeaderForm';

const InfoPateint_English = (props) => {
    const setField = props.setField
    const dob = props.dob
    const setDateOfBirth = props.setDateOfBirth 
    const calculateAge = props.calculateAge

    return (
    <div>
        <Segment.Group>
            <Segment>
                <Form.Group widths='equal' >
                    <Form.Input fluid
                        id='registerdate'
                        style={{ border: '0 px' }}
                        label='Register Date'
                        placeholder=''
                        width={4}
                        readOnly
                        value={props.registerDate} 
                     />
                </Form.Group>
                <HeaderForm/>
            </Segment>
            <Segment>
                <Form.Group widths='equal' >
                    <Form.Field
                        control={Select}
                        label='Card type'
                        options={cardTypeData}
                        placeholder='Card type'
                        width={4}
                        onChange={(e, { value }) => setField('cardType', value)}
                        value={props.cardType}
                        required
                    />
                    <Form.Input
                        loading={false}
                        fluid
                        label='ID CARD No./Passport No.'
                        placeholder='ID CARD No./Passport No.'
                        width={6}
                        onBlur={e => props.checkIdcard(e)}
                        onChange={e => setField('idCard', e.target.value)}
                        value={props.idCard}
                        error={props.errorIdCard.status}
                        autoFocus
                        required
                    />
                    <Form.Field
                        control={() => Date({ setDateOfBirth, calculateAge, dob })}
                        label='DD/MM/YYYY (Dob)'
                        width={3}
                        required
                    />
                    <Form.Input
                        label='Age'
                        placeholder='Age'
                        width={3}
                        value={props.age}
                        readOnly
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Field
                        control={Select}
                        label='Title'
                        options={nameTypeData}
                        placeholder='Select Title'
                        width={3}
                        onChange={(e, { value }) => setField('nameTitle', value)}
                        value={props.nameTitle.value}
                        required
                    />
                    <Form.Input
                        label='Title (Other)'
                        placeholder='select other title'
                        width={3}
                    />
                    <Form.Input
                        label='Firstname'
                        placeholder='Firstname'
                        width={5}
                        onChange={e => setField('firstname', e.target.value)}
                        value={props.firstname}
                        required
                    />
                    <Form.Input
                        label='Lastname'
                        placeholder='Lastname'
                        width={5}
                        onChange={e => setField('lastname', e.target.value)}
                        value={props.lastname}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Input
                        label='Congenital Disease'
                        placeholder='Congenital Disease'
                        width={4}
                        required
                        onChange={e => setField('congenitalDisease', e.target.value)}
                        value={props.congenitalDisease}
                    />
                    <Form.Field
                        control={Select}
                        label='Gender'
                        options={genderData}
                        placeholder='Select Gender'
                        width={4}
                        onChange={(e, { value }) => setField('gender', value)}
                        value={props.gender}
                        required
                    />
                    <Form.Field
                        control={Select}
                        label='BloodGroup'
                        options={bloodgroupData}
                        placeholder='Select BloodGroup'
                        width={4}
                        onChange={(e, { value }) => setField('bloodgroup', value)}
                        value={props.bloodgroup}
                        required
                    />
                    <Form.Field
                        control={Select}
                        label='Country'
                        options={countryData}
                        placeholder='Select Country'
                        width={4}
                        onChange={(e, { value }) => setField('country', value)}
                        value={props.country}
                        required />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Select}
                        label='Religion'
                        options={religionData}
                        placeholder='Religion'
                        width={4}
                        onChange={(e, { value }) => setField('religion', value)}
                        value={props.religion.value}
                        required
                    />
                    <Form.Input
                        label='Religion Other'
                        placeholder='Religion Other'
                        width={4}
                        disabled={props.religion.disabled}
                        onChange={e => setField('otherreligion', e.target.value)}
                        value={props.otherreligion} />
                    <Form.Field
                        control={Select}
                        label='Nationality'
                        options={nationalityData}
                        placeholder='Nationality'
                        width={4}
                        onChange={(e, { value }) => setField('nationality', value)}
                        value={props.nationality.value}
                        required />
                    <Form.Input
                        label='Nationality Other'
                        placeholder='Nationality Other'
                        width={4}
                        disabled={props.nationality.disabled}
                        onChange={e => setField('othernationality', e.target.value)}
                        value={props.othernationality} />
                </Form.Group>
                <Form.Group>
                    <Form.Field
                        control={Select}
                        label='Status'
                        options={statusData}
                        placeholder='Status'
                        width={4}
                        onChange={(e, { value }) => setField('status', value)}
                        value={props.status}
                        required
                    />
                    <Form.Input
                        label='Occupartion'
                        placeholder='Occupartion'
                        width={4}
                        onChange={e => setField('occupartion', e.target.value)}
                        value={props.occupartion}
                    />
                    <Form.Input
                        label='Home Phonenumber'
                        placeholder='Home Phonenumber'
                        width={4}
                        onChange={e => setField('homePhonenumber', e.target.value)}
                        value={props.homePhonenumber}
                    />
                    <Form.Input
                        label='Mobile Number'
                        placeholder='Mobile Number'
                        width={4}
                        onChange={e => setField('mobileNumber', e.target.value)}
                        value={props.mobileNumber}
                        required />
                </Form.Group>
            </Segment>
        </Segment.Group>
        <br></br>
    </div>
    )}


export default InfoPateint_English
