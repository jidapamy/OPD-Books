import React from 'react';
import { Label,Segment, Form } from 'semantic-ui-react'

const ChildrenUnder15_English = (props) => {
    const setField = props.setField
    return (
    <div>
        <Segment>
                <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>In case under 15 years old. Please, fill out this form.</h4></Label>
            <br></br><br></br>
            <Form.Group>
                    <Form.Input 
                        label='Father&#39;s firstname' 
                        placeholder='Father&#39;s firstname' 
                        width={8} 
                        onChange={e => setField('fatherFirstname', e.target.value)} 
                        value={props.fatherFirstname} 
                    />
                    <Form.Input 
                        label='Father&#39;s lastname' 
                        placeholder='Father&#39;s lastname' 
                        width={8} 
                        onChange={e => setField('fatherLastname', e.target.value)} 
                        value={props.fatherLastname} 
                    />
            </Form.Group>
            <Form.Group>
                    <Form.Input 
                        label='Mother&#39;s firstname' 
                        placeholder='Mother&#39;s firstname' 
                        width={8} 
                        onChange={e => setField('motherFirstname', e.target.value)} 
                        value={props.motherFirstname} />
                    <Form.Input 
                        label='Mother&#39;s lastname' 
                        placeholder='Mother&#39;s lastname' 
                        width={8} 
                        onChange={e => setField('motherLastname', e.target.value)} 
                        value={props.motherLastname} />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)}

export default ChildrenUnder15_English
